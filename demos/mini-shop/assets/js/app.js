(function () {
  const state = {
    products: [],
    categories: [],
    selectedCategory: "all",
    search: "",
    timer: null
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    state.products = await window.ZevoData.loadProducts();
    state.categories = await window.ZevoData.loadCategories();
    wireGlobalEvents();
    wireImageFallback();
    updateBadges();

    if (document.body.dataset.page === "product") {
      renderProductPage();
    } else {
      renderHome();
    }
  }

  function wireGlobalEvents() {
    $("#year")?.replaceChildren(document.createTextNode(new Date().getFullYear()));

    $("#globalSearch")?.addEventListener("input", (event) => {
      state.search = event.target.value.trim().toLowerCase();
      if (document.body.dataset.page !== "product") {
        renderCatalog();
        scrollToId("catalog");
      }
    });

    document.addEventListener("click", (event) => {
      const action = event.target.closest("[data-action]");
      if (!action) return;

      const id = Number(action.dataset.id || 0);
      const type = action.dataset.action;

      if (type === "add-cart") {
        event.preventDefault();
        window.ZevoCart.add(id);
        updateBadges();
        renderCartDrawer();
        toast("Товар додано до кошика");
      }

      if (type === "wishlist") {
        event.preventDefault();
        window.ZevoCart.toggleWishlist(id);
        updateBadges();
        renderHomeSoft();
        toast(window.ZevoCart.isWish(id) ? "Додано до списку бажань" : "Прибрано зі списку бажань");
      }

      if (type === "compare") {
        event.preventDefault();
        toast("Порівняння позначено як visual demo");
      }

      if (type === "open-cart") {
        event.preventDefault();
        openCart();
      }

      if (type === "close-cart") {
        event.preventDefault();
        closeCart();
      }

      if (type === "checkout") {
        event.preventDefault();
        openCheckout();
      }

      if (type === "close-checkout") {
        event.preventDefault();
        closeCheckout();
      }

      if (type === "cart-plus") {
        event.preventDefault();
        const item = window.ZevoCart.getCart().find((entry) => Number(entry.id) === id);
        window.ZevoCart.setQty(id, Number(item?.qty || 1) + 1);
        updateBadges();
        renderCartDrawer();
      }

      if (type === "cart-minus") {
        event.preventDefault();
        const item = window.ZevoCart.getCart().find((entry) => Number(entry.id) === id);
        if (Number(item?.qty || 1) <= 1) window.ZevoCart.remove(id);
        else window.ZevoCart.setQty(id, Number(item.qty) - 1);
        updateBadges();
        renderCartDrawer();
      }

      if (type === "cart-remove") {
        event.preventDefault();
        window.ZevoCart.remove(id);
        updateBadges();
        renderCartDrawer();
      }

      if (type === "clear-cart") {
        event.preventDefault();
        window.ZevoCart.clear();
        updateBadges();
        renderCartDrawer();
      }

      if (type === "filter-category") {
        event.preventDefault();
        state.selectedCategory = action.dataset.category || "all";
        state.search = "";
        if ($("#globalSearch")) $("#globalSearch").value = "";
        renderCatalog();
        scrollToId("catalog");
      }

      if (type === "scroll") {
        event.preventDefault();
        scrollToId(action.dataset.target);
      }
    });

    $("#checkoutForm")?.addEventListener("submit", submitCheckout);

    let logoTaps = 0;
    $("#brandLogo")?.addEventListener("click", () => {
      logoTaps += 1;
      if (logoTaps >= 5) {
        logoTaps = 0;
        window.location.href = "admin-local/";
      }
      window.setTimeout(() => { logoTaps = 0; }, 1500);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeCart();
        closeCheckout();
      }
    });
  }

  function wireImageFallback() {
    document.addEventListener("error", (event) => {
      const img = event.target;
      if (!(img instanceof HTMLImageElement)) return;
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = "true";
      img.src = "assets/img/ui/product-placeholder.svg";
    }, true);
  }

  function renderHome() {
    renderHeroProducts();
    renderCategories();
    renderDayDeal();
    renderRails();
    renderCatalog();
    renderCartDrawer();
    startDayTimer();
  }

  function renderHomeSoft() {
    if (document.body.dataset.page === "product") {
      renderProductPage();
      return;
    }
    renderDayDeal();
    renderRails();
    renderCatalog();
  }

  function renderHeroProducts() {
    const wrap = $("#heroMiniProducts");
    if (!wrap) return;
    const products = state.products.filter((item) => item.sections.includes("top")).slice(0, 3);
    wrap.innerHTML = products.map((product) => `
      <a class="hero-mini" href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="eager" decoding="async">
        <span>${escapeHtml(product.name)}</span>
        <strong>${formatProductPrice(product)}</strong>
      </a>
    `).join("");
  }

  function renderCategories() {
    const wrap = $("#categoryGrid");
    if (!wrap) return;
    const active = state.categories.filter((category) => category.active !== false);
    wrap.innerHTML = active.map((category) => `
      <button class="category-card" type="button" data-action="filter-category" data-category="${category.id}">
        <img src="${category.image}" alt="${escapeHtml(category.name)}" loading="lazy" decoding="async">
        <strong>${escapeHtml(category.shortName || category.name)}</strong>
      </button>
    `).join("");
  }

  function renderDayDeal() {
    const wrap = $("#dayDeal");
    if (!wrap) return;
    const product = state.products.find((item) => item.sections.includes("day")) || state.products[0];
    if (!product) return;
    wrap.innerHTML = `
      <div class="deal-media">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="eager" decoding="async">
      </div>
      <div class="deal-info">
        <div class="eyebrow">Товар дня</div>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description || product.promo || "")}</p>
        <div class="deal-price">
          <strong>${formatProductPrice(product)}</strong>
          ${product.oldPrice ? `<span>${window.ZevoData.price(product.oldPrice)}</span>` : ""}
        </div>
        <div class="timer" aria-label="До кінця demo-акції">
          <span><b id="timerHours">--</b> год</span>
          <span><b id="timerMinutes">--</b> хв</span>
          <span><b id="timerSeconds">--</b> сек</span>
        </div>
        <div class="deal-actions">
          <a class="btn btn-primary" href="product.html?id=${product.id}">Детальніше</a>
          <button class="btn btn-cart" type="button" data-action="add-cart" data-id="${product.id}">У кошик</button>
        </div>
      </div>
    `;
  }

  function renderRails() {
    renderRail("bestRail", filterBySection("best"));
    renderRail("topRail", filterBySection("top"));
    renderRail("nowRail", filterBySection("now"));
    renderRail("newRail", filterBySection("new"));
    renderRail("homeRail", state.products.filter((item) => item.cat === "home").slice(0, 10));
    renderRail("phonesRail", state.products.filter((item) => item.cat === "phones").slice(0, 10));
  }

  function filterBySection(section) {
    return state.products.filter((item) => item.sections.includes(section)).slice(0, 12);
  }

  function renderRail(id, products) {
    const wrap = $("#" + id);
    if (!wrap) return;
    wrap.innerHTML = products.length
      ? products.map((product) => card(product, "rail")).join("")
      : `<div class="empty-inline">Товари скоро будуть додані в каталог.</div>`;
  }

  function renderCatalog() {
    const wrap = $("#catalogGrid");
    const title = $("#catalogTitle");
    if (!wrap) return;

    let products = [...state.products];
    if (state.selectedCategory !== "all") {
      products = products.filter((item) => item.cat === state.selectedCategory);
    }
    if (state.search) {
      products = products.filter((item) => {
        const haystack = `${item.name} ${item.cat} ${item.promo} ${item.description}`.toLowerCase();
        return haystack.includes(state.search);
      });
    }

    const category = state.categories.find((item) => item.id === state.selectedCategory);
    if (title) {
      title.textContent = state.search
        ? `Пошук: ${state.search}`
        : category ? category.name : "Каталог";
    }

    wrap.innerHTML = products.length
      ? products.map((product) => card(product, "grid")).join("")
      : `<div class="empty-state">Товарів не знайдено. Змініть фільтр або оновіть каталог.</div>`;
  }

  function card(product, mode = "grid") {
    const inCart = window.ZevoCart.isInCart(product.id);
    const inWish = window.ZevoCart.isWish(product.id);
    const badge = window.ZevoData.badgeLabel(product.badge);
    return `
      <article class="product-card product-card-${mode}">
        <a class="product-link" href="product.html?id=${product.id}" aria-label="${escapeHtml(product.name)}">
          <div class="product-image">
            <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async">
            <div class="product-labels">
              ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ""}
              ${badge ? `<span class="status status-${product.badge}">${badge}</span>` : ""}
            </div>
          </div>
          <h3>${escapeHtml(product.name)}</h3>
        </a>
        <div class="product-rating">
          <span>★ ${Number(product.rating || 0).toFixed(1)}</span>
          <small>${Number(product.reviews || 0)} відгуків</small>
        </div>
        <div class="product-price">
          <strong>${formatProductPrice(product)}</strong>
          ${product.oldPrice ? `<span>${window.ZevoData.price(product.oldPrice)}</span>` : ""}
        </div>
        <p class="product-promo">${escapeHtml(product.promo || product.stock || "Demo товар")}</p>
        <div class="product-actions">
          <button class="icon-btn ${inWish ? "active" : ""}" type="button" data-action="wishlist" data-id="${product.id}" aria-label="До списку бажань">♡</button>
          <button class="icon-btn" type="button" data-action="compare" data-id="${product.id}" aria-label="Порівняти">⇄</button>
          <button class="cart-mini ${inCart ? "in-cart" : ""}" type="button" data-action="add-cart" data-id="${product.id}">
            ${inCart ? "✓" : "🛒"}
          </button>
        </div>
      </article>
    `;
  }

  function renderProductPage() {
    const wrap = $("#productDetail");
    if (!wrap) return;
    const id = Number(new URLSearchParams(window.location.search).get("id"));
    const product = state.products.find((item) => Number(item.id) === id) || state.products[0];
    if (!product) {
      wrap.innerHTML = `<div class="empty-state">Товар не знайдено.</div>`;
      return;
    }
    const category = state.categories.find((item) => item.id === product.cat);
    const badge = window.ZevoData.badgeLabel(product.badge);
    wrap.innerHTML = `
      <section class="product-detail-shell">
        <a class="back-link" href="index.html#catalog">← До каталогу</a>
        <div class="product-detail">
          <div class="detail-media">
            <img src="${product.image}" alt="${escapeHtml(product.name)}" decoding="async">
            <div class="product-labels">
              ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ""}
              ${badge ? `<span class="status status-${product.badge}">${badge}</span>` : ""}
            </div>
          </div>
          <div class="detail-info">
            <p class="eyebrow">${escapeHtml(category?.name || "ZEVO Shop")}</p>
            <h1>${escapeHtml(product.name)}</h1>
            <div class="product-rating detail-rating"><span>★ ${Number(product.rating || 0).toFixed(1)}</span><small>${Number(product.reviews || 0)} demo-відгуків</small></div>
            <p>${escapeHtml(product.description || product.promo || "")}</p>
            <div class="detail-stock">${escapeHtml(product.stock || "Demo stock")}</div>
            <div class="deal-price detail-price">
              <strong>${formatProductPrice(product)}</strong>
              ${product.oldPrice ? `<span>${window.ZevoData.price(product.oldPrice)}</span>` : ""}
            </div>
            <div class="detail-actions">
              <button class="btn btn-cart" type="button" data-action="add-cart" data-id="${product.id}">Додати у кошик</button>
              <button class="btn btn-ghost" type="button" data-action="wishlist" data-id="${product.id}">${window.ZevoCart.isWish(product.id) ? "У бажаному" : "До бажаного"}</button>
            </div>
            <div class="demo-note">Demo: оплата онлайн, реальний склад і доставка не підключені.</div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Схожі товари</p>
            <h2>Ще з цієї категорії</h2>
          </div>
        </div>
        <div class="product-row">${state.products.filter((item) => item.cat === product.cat && item.id !== product.id).slice(0, 8).map((item) => card(item, "rail")).join("")}</div>
      </section>
    `;
    renderCartDrawer();
  }

  function renderCartDrawer() {
    const wrap = $("#cartContent");
    if (!wrap) return;
    const lines = window.ZevoCart.lineItems(state.products);
    const total = window.ZevoCart.total(state.products);
    if (!lines.length) {
      wrap.innerHTML = `
        <div class="empty-cart">
          <strong>Кошик порожній</strong>
          <p>Додайте товари з каталогу. Demo-заявка не списує гроші і не відправляється без backend.</p>
        </div>
      `;
      $("#cartFooter")?.classList.add("is-hidden");
      return;
    }
    $("#cartFooter")?.classList.remove("is-hidden");
    wrap.innerHTML = lines.map(({ product, qty, lineTotal }) => `
      <div class="cart-line">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async">
        <div>
          <strong>${escapeHtml(product.name)}</strong>
          <span>${window.ZevoData.price(lineTotal)}</span>
          <div class="qty">
            <button type="button" data-action="cart-minus" data-id="${product.id}">−</button>
            <b>${qty}</b>
            <button type="button" data-action="cart-plus" data-id="${product.id}">+</button>
            <button class="remove" type="button" data-action="cart-remove" data-id="${product.id}">Видалити</button>
          </div>
        </div>
      </div>
    `).join("");
    $("#cartTotal").textContent = window.ZevoData.price(total);
  }

  function openCart() {
    clearToasts();
    renderCartDrawer();
    $("#cartDrawer")?.classList.add("open");
    $("#cartDrawer")?.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeCart() {
    $("#cartDrawer")?.classList.remove("open");
    $("#cartDrawer")?.setAttribute("aria-hidden", "true");
    if (!$("#checkoutModal")?.classList.contains("open")) document.body.classList.remove("modal-open");
  }

  function openCheckout() {
    const lines = window.ZevoCart.lineItems(state.products);
    if (!lines.length) {
      toast("Спочатку додайте товар у кошик");
      return;
    }
    clearToasts();
    $("#cartDrawer")?.classList.remove("open");
    $("#cartDrawer")?.setAttribute("aria-hidden", "true");
    const orderSummary = buildOrderSummary(lines);
    const orderItems = buildOrderItems(lines);
    $("#checkoutSummary").innerHTML = lines.map(({ product, qty, lineTotal }) => `
      <div><span>${escapeHtml(product.name)} × ${qty}</span><strong>${window.ZevoData.price(lineTotal)}</strong></div>
    `).join("") + `<div class="summary-total"><span>Разом</span><strong>${window.ZevoData.price(window.ZevoCart.total(state.products))}</strong></div>`;
    $("#orderSummaryField").value = orderSummary;
    $("#orderItemsJsonField").value = JSON.stringify(orderItems);
    $("#orderTotalField").value = window.ZevoData.price(window.ZevoCart.total(state.products));
    $("#checkoutModal")?.classList.add("open");
    $("#checkoutModal")?.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeCheckout() {
    $("#checkoutModal")?.classList.remove("open");
    $("#checkoutModal")?.setAttribute("aria-hidden", "true");
    if (!$("#cartDrawer")?.classList.contains("open")) document.body.classList.remove("modal-open");
  }

  async function submitCheckout(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.phone || !data.city) {
      $("#formStatus").textContent = "Заповніть ім'я, телефон і місто.";
      return;
    }
    const lines = window.ZevoCart.lineItems(state.products);
    const orderItems = buildOrderItems(lines);
    const orderTotal = window.ZevoCart.total(state.products);
    $("#orderSummaryField").value = buildOrderSummary(lines);
    $("#orderItemsJsonField").value = JSON.stringify(orderItems);
    $("#orderTotalField").value = window.ZevoData.price(orderTotal);
    const orderPayload = {
      client: data,
      delivery: data.delivery || "Не вибрано",
      comment: data.comment || "",
      items: orderItems,
      total: orderTotal
    };
    let sent = false;
    try {
      sent = await sendCheckoutEmail(form);
    } catch (error) {
      $("#formStatus").textContent = `Не вдалося відправити заявку через email endpoint: ${error.message}. Перевірте endpoint або залиште demo-safe режим.`;
      return;
    }
    const order = window.ZevoCart.addOrder(orderPayload);
    window.ZevoCart.clear();
    updateBadges();
    renderCartDrawer();
    form.reset();
    $("#formStatus").innerHTML = sent
      ? `Заявка <b>${order.id}</b> відправлена. Власник магазину зв'яжеться з вами.`
      : `Demo-заявку <b>${order.id}</b> збережено локально. Endpoint для email ще не вказано, тому зовнішня відправка не виконувалась.`;
    toast(sent ? "Заявку відправлено" : "Demo-заявку створено локально");
  }

  function buildOrderItems(lines) {
    return lines.map(({ product, qty, lineTotal }) => ({
      id: product.id,
      name: product.name,
      qty,
      price: product.price,
      lineTotal
    }));
  }

  function buildOrderSummary(lines) {
    const rows = lines.map(({ product, qty, lineTotal }) => `${product.name} x ${qty} = ${window.ZevoData.price(lineTotal)}`);
    rows.push(`Total: ${window.ZevoData.price(window.ZevoCart.total(state.products))}`);
    return rows.join("\n");
  }

  async function sendCheckoutEmail(form) {
    const endpoint = form.dataset.emailEndpoint?.trim();
    if (!endpoint || endpoint.includes("PASTE_")) return false;
    $("#formStatus").textContent = "Відправляємо заявку...";
    const response = await fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });
    if (!response.ok) throw new Error(`Email endpoint HTTP ${response.status}`);
    return true;
  }

  function updateBadges() {
    const counts = window.ZevoCart.counts();
    $$(".cartCount").forEach((node) => {
      node.textContent = counts.cart;
      node.hidden = counts.cart === 0;
    });
    $$(".wishCount").forEach((node) => {
      node.textContent = counts.wishlist;
      node.hidden = counts.wishlist === 0;
    });
  }

  function startDayTimer() {
    if (state.timer) window.clearInterval(state.timer);
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      const diff = Math.max(0, end - now);
      const hours = Math.floor(diff / 36e5);
      const minutes = Math.floor(diff / 6e4) % 60;
      const seconds = Math.floor(diff / 1000) % 60;
      if ($("#timerHours")) $("#timerHours").textContent = String(hours).padStart(2, "0");
      if ($("#timerMinutes")) $("#timerMinutes").textContent = String(minutes).padStart(2, "0");
      if ($("#timerSeconds")) $("#timerSeconds").textContent = String(seconds).padStart(2, "0");
    };
    tick();
    state.timer = window.setInterval(tick, 1000);
  }

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toast(message) {
    const root = $("#toastRoot");
    if (!root) return;
    const node = document.createElement("div");
    node.className = "toast";
    node.textContent = message;
    root.appendChild(node);
    window.setTimeout(() => node.classList.add("show"), 20);
    window.setTimeout(() => {
      node.classList.remove("show");
      window.setTimeout(() => node.remove(), 220);
    }, 2400);
  }

  function clearToasts() {
    $$(".toast").forEach((node) => node.remove());
  }

  function formatProductPrice(product) {
    return Number(product.price || 0) > 0 ? window.ZevoData.price(product.price) : "Demo";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  window.ZevoApp = {
    refresh: renderHomeSoft,
    openCart,
    closeCart
  };
})();
