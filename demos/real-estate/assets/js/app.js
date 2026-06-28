(function () {
  const header = document.querySelector(".site-header");
  const menu = document.getElementById("mobileMenu");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menuClose = document.querySelector("[data-menu-close]");
  const stickyCta = document.getElementById("stickyCta");
  const form = document.getElementById("leadForm");
  const formStatus = document.getElementById("formStatus");
  const listingModal = document.getElementById("listingModal");
  const modalTitle = document.getElementById("modalListingTitle");
  const modalFacts = document.getElementById("modalListingFacts");
  const modalPrice = document.getElementById("modalListingPrice");
  const consultModal = document.getElementById("consultModal");
  const contactModal = document.getElementById("contactModal");
  const consultForm = document.getElementById("consultForm");
  const consultStatus = document.getElementById("consultStatus");
  const infoModal = document.getElementById("infoModal");
  const infoKicker = document.getElementById("infoKicker");
  const infoTitle = document.getElementById("infoTitle");
  const infoText = document.getElementById("infoText");
  const infoPoints = document.getElementById("infoPoints");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const infoContent = {
    services: {
      kicker: "Services",
      title: "Услуги риелтора",
      text: "Короткая структура услуг для клиента: продажа, покупка, аренда и консультации без лишней путаницы.",
      points: ["Продажа объекта с презентацией", "Подбор недвижимости под запрос", "Аренда и коммуникация со сторонами", "Консультация перед решением"]
    },
    listings: {
      kicker: "Listings",
      title: "Объекты и показы",
      text: "Карточки объектов открываются как отдельные premium-окна с ключевой информацией и заявкой на просмотр.",
      points: ["Фото и главные параметры", "Цена, район, площадь, планировка", "Кнопка записи на просмотр", "Demo-объекты заменяются реальными"]
    },
    sellers: {
      kicker: "For owners",
      title: "Собственникам",
      text: "Сценарий для владельца, который хочет продать или сдать недвижимость спокойно и с понятным планом.",
      points: ["Оценка объекта", "Подготовка фото и описания", "Показы и переговоры", "Сопровождение до передачи"]
    },
    buyers: {
      kicker: "For buyers",
      title: "Покупателям",
      text: "Помощь тем, кто ищет квартиру или дом: меньше хаоса, больше фильтрации и понятных следующих шагов.",
      points: ["Уточнение бюджета и районов", "Фильтрация вариантов", "Организация просмотров", "Поддержка в переговорах"]
    },
    about: {
      kicker: "Profile",
      title: "О риелторе",
      text: "Персональный блок для реального специалиста: фото, опыт, районы работы, языки и стиль сопровождения.",
      points: ["Заменить на реальное имя и фото", "Добавить специализацию", "Указать языки и районы", "Добавить подтверждения опыта"]
    },
    contacts: {
      kicker: "Contacts",
      title: "Контакты",
      text: "В demo контакты обезличены. Для клиента сюда вставляются телефон, email и реальные соцсети.",
      points: ["[TELEFON KLIENTA]", "[EMAIL KLIENTA]", "[WHATSAPP] / [TELEGRAM]", "[FACEBOOK] / [INSTAGRAM]"]
    }
  };

  function setHeaderState() {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function setStickyState() {
    if (!stickyCta || stickyCta.classList.contains("is-hidden")) return;
    const lead = document.getElementById("lead");
    const nearLead = lead ? lead.getBoundingClientRect().top < window.innerHeight * 0.76 : false;
    const blockedSectionIds = ["services", "presentation", "listings", "lead"];
    const overBlockedSection = blockedSectionIds.some((id) => {
      const section = document.getElementById(id);
      const rect = section?.getBoundingClientRect();
      return rect ? rect.top < window.innerHeight * 0.84 && rect.bottom > window.innerHeight * 0.22 : false;
    });
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const afterQuarter = window.scrollY / scrollable > 0.25;
    const shouldShow = window.innerWidth <= 720 && afterQuarter && !nearLead && !overBlockedSection && !document.body.classList.contains("modal-open");
    stickyCta.classList.toggle("visible", shouldShow);
  }

  function openMenu() {
    menu?.classList.add("open");
    menu?.setAttribute("aria-hidden", "false");
    menuToggle?.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    menu?.classList.remove("open");
    menu?.setAttribute("aria-hidden", "true");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function openListingModal(button) {
    const listing = button.dataset.openListing || "Demo listing";
    modalTitle.textContent = listing;
    modalFacts.textContent = button.dataset.listingFacts || "Praha · demo object";
    modalPrice.textContent = button.dataset.listingPrice || "Cena na dotaz";
    listingModal?.classList.add("open");
    listingModal?.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setStickyState();
  }

  function closeListingModal() {
    listingModal?.classList.remove("open");
    listingModal?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    setStickyState();
  }

  function openActionModal(modal) {
    closeMenu();
    closeListingModal();
    if (modal !== infoModal) closeInfoModal(false);
    modal?.classList.add("open");
    modal?.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setStickyState();
  }

  function closeActionModals() {
    [consultModal, contactModal, infoModal].forEach((modal) => {
      modal?.classList.remove("open");
      modal?.setAttribute("aria-hidden", "true");
    });
    document.body.classList.remove("modal-open");
    setStickyState();
  }

  function closeInfoModal(updateBody = true) {
    infoModal?.classList.remove("open");
    infoModal?.setAttribute("aria-hidden", "true");
    if (updateBody) {
      document.body.classList.remove("modal-open");
      setStickyState();
    }
  }

  function openInfoModal(type) {
    const content = infoContent[type] || infoContent.services;
    closeMenu();
    closeListingModal();
    closeActionModals();
    infoKicker.textContent = content.kicker;
    infoTitle.textContent = content.title;
    infoText.textContent = content.text;
    infoPoints.innerHTML = content.points.map((point) => `<span>${point}</span>`).join("");
    infoModal?.classList.add("open");
    infoModal?.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setStickyState();
  }

  function buildMailto(formElement) {
    const data = new FormData(formElement);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();
    const context = String(data.get("context") || "Заявка с сайта").trim();
    const email = (formElement.dataset.email || "").trim();
    if (!email) return "";
    const body = [
      `Имя: ${name}`,
      `Телефон: ${contact}`,
      `Контекст: ${context}`,
      "",
      "Чем могу помочь:",
      message
    ].join("\n");
    return `mailto:${email}?subject=${encodeURIComponent("Заявка с сайта риелтора")}&body=${encodeURIComponent(body)}`;
  }

  function handleLeadSubmit(formElement, statusElement) {
    const data = new FormData(formElement);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !contact || !message) {
      statusElement.textContent = "Заполните имя, телефон и короткое описание.";
      return;
    }

    const endpoint = formElement.dataset.endpoint || "";
    if (!endpoint) {
      const mailto = buildMailto(formElement);
      if (!mailto) {
        statusElement.textContent = "Заявка заполнена. Для отправки нужно вставить email клиента или подключить endpoint.";
        return;
      }
      statusElement.innerHTML = `Заявка подготовлена. <a href="${mailto}">Отправить на email</a> или используйте быстрые кнопки связи.`;
      return;
    }

    statusElement.textContent = "Endpoint задан. В production здесь будет отправка формы.";
  }

  menuToggle?.addEventListener("click", openMenu);
  menuClose?.addEventListener("click", closeMenu);
  menu?.addEventListener("click", (event) => {
    if (event.target === menu) closeMenu();
  });

  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.querySelectorAll("[data-open-listing]").forEach((button) => {
    button.addEventListener("click", () => {
      const listing = button.dataset.openListing || "demo listing";
      const message = `Интересует объект: ${listing}`;
      const textarea = form?.querySelector("textarea[name='message']");
      if (textarea && !textarea.value.includes(listing)) textarea.value = message;
      openListingModal(button);
    });
  });

  document.querySelectorAll("[data-open-consult]").forEach((button) => {
    button.addEventListener("click", () => {
      const context = button.dataset.context || "Бесплатная консультация";
      const contextInput = consultForm?.querySelector("input[name='context']");
      if (contextInput) contextInput.value = context;
      const textarea = consultForm?.querySelector("textarea[name='message']");
      if (textarea && context && !textarea.value) textarea.placeholder = `Например: ${context.toLowerCase()}...`;
      openActionModal(consultModal);
    });
  });

  document.querySelectorAll("[data-open-contact]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openActionModal(contactModal);
    });
  });

  document.querySelectorAll("[data-open-info]").forEach((button) => {
    button.addEventListener("click", () => openInfoModal(button.dataset.openInfo));
  });

  document.querySelectorAll("[data-close-action]").forEach((button) => {
    button.addEventListener("click", closeActionModals);
  });

  [consultModal, contactModal].forEach((modal) => {
    modal?.addEventListener("click", (event) => {
      if (event.target === modal) closeActionModals();
    });
  });

  document.querySelector("[data-close-listing]")?.addEventListener("click", closeListingModal);
  listingModal?.addEventListener("click", (event) => {
    if (event.target === listingModal) closeListingModal();
  });
  document.querySelector("[data-modal-lead]")?.addEventListener("click", () => {
    closeListingModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeListingModal();
      closeActionModals();
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    handleLeadSubmit(form, formStatus);
  });

  consultForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    handleLeadSubmit(consultForm, consultStatus);
  });

  document.querySelector("[data-close-sticky]")?.addEventListener("click", () => {
    stickyCta?.classList.add("is-hidden");
    stickyCta?.classList.remove("visible");
    sessionStorage.setItem("real_estate_demo_sticky_closed", "1");
  });

  if (sessionStorage.getItem("real_estate_demo_sticky_closed") === "1") {
    stickyCta?.classList.add("is-hidden");
  }

  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = "assets/images/hero-prague.jpg";
      image.alt = image.alt || "Demo real estate fallback image";
    }, { once: true });
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
  } else {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
  }

  function setHeroOffset() {
    if (reduceMotion || window.innerWidth <= 720) return;
    const offset = Math.min(window.scrollY * 0.12, 42);
    document.querySelector(".hero")?.style.setProperty("--hero-offset", `${offset}px`);
  }

  window.addEventListener("scroll", () => {
    setHeaderState();
    setStickyState();
    setHeroOffset();
  }, { passive: true });
  window.addEventListener("resize", () => {
    setStickyState();
    setHeroOffset();
  }, { passive: true });
  setHeaderState();
  setStickyState();
  setHeroOffset();
})();
