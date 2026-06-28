(function () {
  const state = {
    products: [],
    categories: [],
    editingId: null
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  document.addEventListener("DOMContentLoaded", initAdmin);

  async function initAdmin() {
    state.products = await window.ZevoData.loadProducts();
    state.categories = await window.ZevoData.loadCategories();
    wireImageFallback();
    wireAdmin();
    renderAll();
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

  function wireAdmin() {
    $$(".admin-tab").forEach((tab) => {
      tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    });

    $("#productForm")?.addEventListener("submit", saveProduct);
    $("#productReset")?.addEventListener("click", resetProductForm);
    $("#pImage")?.addEventListener("input", updatePreview);
    $("#exportProducts")?.addEventListener("click", exportProducts);
    $("#importProducts")?.addEventListener("click", importProducts);
    $("#resetProducts")?.addEventListener("click", resetProducts);
    $("#resetCategories")?.addEventListener("click", resetCategories);
    $("#clearDemoOrders")?.addEventListener("click", clearOrders);
  }

  function renderAll() {
    fillCategorySelect();
    renderDashboard();
    renderProducts();
    renderCategories();
    renderOrders();
    updatePreview();
  }

  function switchTab(tabName) {
    $$(".admin-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabName));
    $$(".admin-panel").forEach((panel) => panel.classList.toggle("active", panel.id === `tab-${tabName}`));
  }

  function fillCategorySelect() {
    const select = $("#pCategory");
    if (!select) return;
    select.innerHTML = state.categories.map((category) => `<option value="${category.id}">${escapeHtml(category.name)}</option>`).join("");
  }

  function renderDashboard() {
    const counts = window.ZevoCart.counts();
    const orders = window.ZevoCart.getOrders();
    $("#statProducts").textContent = state.products.length;
    $("#statCategories").textContent = state.categories.length;
    $("#statOrders").textContent = orders.length;
    $("#statCart").textContent = counts.cart;
    $("#statWishlist").textContent = counts.wishlist;
    $("#dashboardOrders").innerHTML = orders.slice(0, 4).map(orderMini).join("") || `<div class="empty-state compact">Поки немає demo-заявок.</div>`;
  }

  function renderProducts() {
    const wrap = $("#adminProductsList");
    if (!wrap) return;
    wrap.innerHTML = state.products.map((product) => `
      <article class="admin-product">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
        <div>
          <strong>${escapeHtml(product.name)}</strong>
          <span>${window.ZevoData.price(product.price)} · ${escapeHtml(product.cat)} · ${window.ZevoData.badgeLabel(product.badge) || "без бейджа"}</span>
        </div>
        <div class="admin-row-actions">
          <button type="button" data-edit="${product.id}">Edit</button>
          <button type="button" class="danger" data-delete="${product.id}">Delete</button>
        </div>
      </article>
    `).join("");

    $$("[data-edit]", wrap).forEach((button) => button.addEventListener("click", () => editProduct(Number(button.dataset.edit))));
    $$("[data-delete]", wrap).forEach((button) => button.addEventListener("click", () => deleteProduct(Number(button.dataset.delete))));
  }

  function renderCategories() {
    const wrap = $("#adminCategoriesList");
    if (!wrap) return;
    wrap.innerHTML = state.categories.map((category) => `
      <article class="admin-category">
        <img src="${category.image}" alt="${escapeHtml(category.name)}" loading="lazy">
        <div>
          <strong>${category.icon || ""} ${escapeHtml(category.name)}</strong>
          <span>${escapeHtml(category.id)} · ${category.active === false ? "hidden" : "active"}</span>
        </div>
        <button type="button" data-toggle-category="${category.id}">${category.active === false ? "Показати" : "Сховати"}</button>
      </article>
    `).join("");
    $$("[data-toggle-category]", wrap).forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.toggleCategory;
        state.categories = state.categories.map((category) => category.id === id ? { ...category, active: category.active === false } : category);
        window.ZevoData.saveCategories(state.categories);
        renderCategories();
        renderDashboard();
      });
    });
  }

  function renderOrders() {
    const wrap = $("#adminOrdersList");
    if (!wrap) return;
    const orders = window.ZevoCart.getOrders();
    wrap.innerHTML = orders.map((order) => `
      <article class="admin-order">
        <div class="admin-order-head">
          <div>
            <strong>${escapeHtml(order.id)}</strong>
            <span>${new Date(order.createdAt).toLocaleString("uk-UA")} · ${escapeHtml(order.status || "new")}</span>
          </div>
          <button type="button" data-process-order="${order.id}">Processed</button>
        </div>
        <p>${escapeHtml(order.client?.name || "")} · ${escapeHtml(order.client?.phone || "")} · ${escapeHtml(order.client?.city || "")}</p>
        <ul>${(order.items || []).map((item) => `<li>${escapeHtml(item.name)} × ${item.qty}</li>`).join("")}</ul>
        <b>${window.ZevoData.price(order.total || 0)}</b>
      </article>
    `).join("") || `<div class="empty-state compact">Demo-заявок ще немає. Створіть замовлення через checkout.</div>`;

    $$("[data-process-order]", wrap).forEach((button) => {
      button.addEventListener("click", () => {
        window.ZevoCart.markOrder(button.dataset.processOrder);
        renderOrders();
        renderDashboard();
      });
    });
  }

  function saveProduct(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const sections = $$(".section-check", form).filter((input) => input.checked).map((input) => input.value);
    const product = window.ZevoData.normalizeProduct({
      id: state.editingId || Number($("#pId").value) || Date.now(),
      name: $("#pName").value,
      cat: $("#pCategory").value,
      price: $("#pPrice").value,
      oldPrice: $("#pOldPrice").value,
      discount: $("#pDiscount").value,
      badge: $("#pBadge").value,
      rating: $("#pRating").value,
      reviews: $("#pReviews").value,
      stock: $("#pStock").value,
      image: $("#pImage").value,
      sections,
      promo: $("#pPromo").value,
      description: $("#pDescription").value
    });

    if (!product.name || !product.image) {
      $("#adminStatus").textContent = "Заповніть назву і image URL.";
      return;
    }

    if (state.editingId) {
      state.products = state.products.map((item) => Number(item.id) === Number(state.editingId) ? product : item);
      $("#adminStatus").textContent = "Товар оновлено у localStorage.";
    } else {
      state.products.unshift(product);
      $("#adminStatus").textContent = "Товар додано у localStorage.";
    }

    window.ZevoData.saveProducts(state.products);
    resetProductForm();
    renderAll();
  }

  function editProduct(id) {
    const product = state.products.find((item) => Number(item.id) === id);
    if (!product) return;
    state.editingId = id;
    $("#pId").value = product.id;
    $("#pName").value = product.name;
    $("#pCategory").value = product.cat;
    $("#pPrice").value = product.price;
    $("#pOldPrice").value = product.oldPrice || "";
    $("#pDiscount").value = product.discount || "";
    $("#pBadge").value = product.badge || "";
    $("#pRating").value = product.rating || "";
    $("#pReviews").value = product.reviews || "";
    $("#pStock").value = product.stock || "";
    $("#pImage").value = product.image || "";
    $("#pPromo").value = product.promo || "";
    $("#pDescription").value = product.description || "";
    $$(".section-check").forEach((input) => { input.checked = product.sections.includes(input.value); });
    $("#productSubmit").textContent = "Зберегти зміни";
    $("#adminStatus").textContent = `Редагування: ${product.name}`;
    updatePreview();
    switchTab("products");
    $("#productForm").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function deleteProduct(id) {
    state.products = state.products.filter((item) => Number(item.id) !== id);
    window.ZevoData.saveProducts(state.products);
    renderAll();
    $("#adminStatus").textContent = "Товар видалено з demo localStorage.";
  }

  function resetProductForm() {
    state.editingId = null;
    $("#productForm")?.reset();
    $$(".section-check").forEach((input) => { input.checked = ["best"].includes(input.value); });
    $("#productSubmit").textContent = "+ Додати товар";
    $("#adminStatus").textContent = "Admin-local / JSON editor. Не є захищеною backend-адмінкою.";
    updatePreview();
  }

  function updatePreview() {
    const img = $("#imagePreview");
    if (!img) return;
    img.src = $("#pImage")?.value || "assets/img/ui/product-placeholder.svg";
  }

  function exportProducts() {
    const payload = JSON.stringify(state.products, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "products-export.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  function importProducts() {
    const value = $("#importText").value.trim();
    if (!value) {
      $("#importStatus").textContent = "Вставте JSON масив товарів.";
      return;
    }
    try {
      const imported = JSON.parse(value);
      if (!Array.isArray(imported)) throw new Error("JSON має бути масивом");
      state.products = imported.map(window.ZevoData.normalizeProduct);
      window.ZevoData.saveProducts(state.products);
      renderAll();
      $("#importStatus").textContent = `Імпортовано товарів: ${state.products.length}.`;
    } catch (error) {
      $("#importStatus").textContent = `Помилка імпорту: ${error.message}`;
    }
  }

  async function resetProducts() {
    window.ZevoData.resetProducts();
    state.products = await window.ZevoData.loadProducts();
    renderAll();
    $("#importStatus").textContent = "Товари повернуті до assets/data/products.json.";
  }

  async function resetCategories() {
    window.ZevoData.resetCategories();
    state.categories = await window.ZevoData.loadCategories();
    renderAll();
    $("#importStatus").textContent = "Категорії повернуті до assets/data/categories.json.";
  }

  function clearOrders() {
    window.ZevoCart.saveOrders([]);
    renderAll();
  }

  function orderMini(order) {
    return `<div class="order-mini"><span>${escapeHtml(order.id)}</span><b>${window.ZevoData.price(order.total || 0)}</b></div>`;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
