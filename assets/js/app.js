const services = [
  {
    id: "start-landing",
    title: "Start Landing",
    text: "Одностраничный продающий сайт для услуги, мастера, локального бизнеса или проверки идеи.",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "2-5 дней",
    cta: "Заказать лендинг"
  },
  {
    id: "business-site",
    title: "Business Website",
    text: "Сайт с услугами, работами, контактами, формой заявки и понятной структурой доверия.",
    price: "PLUS 15 000 Kč / ≈600 €",
    timeline: "5-10 дней",
    cta: "Обсудить сайт"
  },
  {
    id: "mvp",
    title: "MVP / Mini Platform",
    text: "Мини-платформа с ролями, формами, базой данных, чатом, админкой или интеграциями.",
    price: "PRO от 20 000 Kč / от ≈800 €",
    timeline: "индивидуально",
    cta: "Спланировать MVP"
  },
  {
    id: "audit",
    title: "Project Rescue / Audit",
    text: "Аудит, исправление багов, наведение порядка и честный список того, что реально готово.",
    price: "аудит от 2 500 Kč",
    timeline: "1-4 дня",
    cta: "Заказать аудит"
  },
  {
    id: "bugs",
    title: "Bug fixing",
    text: "Исправление сломанных экранов, форм, адаптива, логики, деплоя или Firebase-проблем.",
    price: "точечно от 1 250 Kč",
    timeline: "по задаче",
    cta: "Починить проблему"
  },
  {
    id: "argus-workflow",
    title: "AI-assisted Workflow",
    text: "Работа через этапы, отчёты и контроль. AI ускоряет подготовку, человек утверждает решения.",
    price: "индивидуально",
    timeline: "по задаче",
    cta: "Как это работает",
    action: "argus"
  }
];

const siteCategories = window.siteCategories || [];

const projects = [
  {
    id: "bakery-cafe",
    group: "template",
    title: "Bakery / Cafe Website Demo",
    label: "New demo",
    category: "Bakery / cafe",
    image: "assets/images/bakery-cafe/hero-bakery.jpg",
    gallery: ["assets/images/bakery-cafe/hero-bakery.jpg", "assets/images/bakery-cafe/bakery-counter.jpg", "assets/images/bakery-cafe/interior.jpg"],
    demoUrl: "demos/bakery-cafe/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "3-7 дней",
    short: "Сайт для пекарни, кафе или кофейни: видео на первом экране, меню, фото продукции, кофе, карта, контакты и заявки.",
    forWhom: "Для пекарни, кофейни, кондитерской, brunch-place или маленького кафе, где важно показать продукцию, часы работы, карту и быстрый контакт.",
    features: ["Видео hero", "Меню с ценами", "Кофейный блок", "Галерея", "Mobile bottom nav"],
    includes: ["Адаптация под бренд", "Замена меню и фото", "Форма заявки", "Кнопки Telegram/Facebook/звонок", "Подготовка к публикации"]
  },
  {
    id: "restaurant-cafe",
    group: "template",
    title: "Restaurant / Cafe Website",
    label: "New demo",
    category: "Restaurant / cafe",
    image: "assets/images/restaurant-cafe/hero-food.jpg",
    gallery: ["assets/images/restaurant-cafe/hero-food.jpg", "assets/images/restaurant-cafe/interior.jpg", "assets/images/restaurant-cafe/dish-pasta.jpg"],
    demoUrl: "demos/restaurant-cafe/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "3-7 дней",
    short: "Премиальный demo-сайт ресторана: меню, бронь, фото блюд, контакты, карта и мобильные CTA.",
    forWhom: "Для кафе, ресторана, бистро, винного бара, brunch-place или доставки еды, где важно быстро показать меню, атмосферу и принять заявку.",
    features: ["Hero с атмосферой", "HTML-меню с ценами", "Форма брони", "Галерея", "Mobile bottom nav"],
    includes: ["Адаптация под бренд", "Замена меню и фото", "Форма бронирования", "Кнопки Telegram/Facebook/звонок", "Подготовка к публикации"]
  },
  {
    id: "rempro",
    group: "template",
    title: "RemPro Renovation Landing",
    label: "Готовый demo",
    category: "Construction / renovation",
    image: "assets/img/rempro/desktop-home.png",
    gallery: ["assets/img/rempro/desktop-home.png", "assets/img/rempro/mobile-hero.png", "assets/img/rempro/mobile-full.png"],
    demoUrl: "demos/rempro/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "4-7 дней",
    short: "Лендинг строительной/ремонтной фирмы: услуги, смета, этапы, портфолио и заявка.",
    forWhom: "Для строительной бригады, ремонта квартир, отделки, реконструкции, ванной под ключ или локальной ремонтной компании.",
    features: ["Премиальный первый экран", "Услуги и этапы работ", "Портфолио объектов", "Форма заявки на смету", "Мобильная версия"],
    includes: ["Адаптация под бренд", "Замена фото и текстов", "Форма заявки через email", "Подготовка к публикации", "Базовая SEO-структура"]
  },
  {
    id: "czechtrip",
    group: "template",
    title: "CzechTrip Tours Landing",
    label: "Готовый demo",
    category: "Travel / tours",
    image: "assets/img/czechtrip/preview.svg",
    gallery: ["assets/img/czechtrip/preview.svg"],
    demoUrl: "demos/czechtrip/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "4-6 дней",
    short: "Лендинг для туров и поездок из Праги: маршруты, программа, доверие и заявка в мессенджер.",
    forWhom: "Для организатора туров, гида, travel-агентства, экскурсионного проекта или локальных поездок выходного дня.",
    features: ["Премиальный travel-стиль", "Карточки маршрутов", "Программа поездки", "Заявка в мессенджер", "Мобильная версия"],
    includes: ["Адаптация под бренд", "Замена маршрутов и текстов", "Форма заявки через email", "Подготовка к публикации", "Базовая SEO-структура"]
  },
  {
    id: "construction",
    group: "template",
    title: "Construction / Renovation Concept",
    label: "Demo concept",
    category: "Construction",
    image: "assets/img/construction-landing-dark.png",
    gallery: ["assets/img/construction-landing-dark.png", "assets/img/construction-landing-light.png"],
    demoUrl: "",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "3-6 дней",
    short: "Концепт сайта для строительной компании: услуги, доверие, работы и контакт.",
    forWhom: "Для локальных строительных услуг, ремонта, фасадов, кровли или комплексных работ.",
    features: ["Каталог услуг", "Блок доверия", "Заявка", "Портфолио работ"],
    includes: ["Коммерческая структура", "Адаптив", "Базовая форма", "Подготовка к GitHub Pages"]
  },
  {
    id: "delivery",
    group: "template",
    title: "Delivery / Local Service",
    label: "Demo concept",
    category: "Local service",
    image: "assets/images/categories/delivery-fleet.jpg",
    demoUrl: "",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "2-5 дней",
    short: "Простой сайт для локальной доставки или выездной услуги с понятной воронкой.",
    forWhom: "Для курьерских услуг, локального сервиса, мастера на выезд или маленькой службы доставки.",
    features: ["Короткий оффер", "Зоны работы", "Тарифы", "Быстрый контакт"],
    includes: ["Адаптив", "CTA", "Контакты", "Базовая SEO-разметка"]
  },
  {
    id: "pracehub",
    group: "real",
    title: "PráceHub.cz",
    label: "Live product",
    category: "Mini platform",
    image: "assets/img/pracehub-mobile-home.png",
    gallery: ["assets/img/pracehub-mobile-home.png", "assets/img/pracehub-login.png", "assets/img/pracehub-prague-brand.png"],
    demoUrl: "https://pracehub.cz",
    price: "MVP / PRO от 20 000 Kč / от ≈800 €",
    timeline: "индивидуально",
    short: "Живой продукт: роли, чат, Firebase, PWA, Storage, Functions, пользователи и реальные UX-уроки.",
    forWhom: "Для проектов, где нужен не просто лендинг, а продуктовая логика: роли, пользователи, заявки, чат или кабинет.",
    features: ["Роли", "Чат", "Firebase", "PWA", "Storage / Functions"],
    includes: ["Scope", "Архитектура", "MVP-логика", "Проверка рисков", "План развития"]
  },
  {
    id: "argus",
    group: "workflow",
    title: "ARGUS Control Room",
    label: "Internal workflow",
    category: "AI-assisted workflow",
    image: "assets/img/argus-control-mobile.png",
    demoUrl: "",
    price: "индивидуально",
    timeline: "по процессу",
    short: "Внутренний локальный контур для контроля AI-assisted разработки, отчётов, файлов и решений.",
    forWhom: "Для объяснения, как я организую работу: AI помогает, но важные действия проходят через человеческое решение.",
    features: ["Отчёты", "Протоколы", "Контроль файлов", "Ручные approvals"],
    includes: ["Понятный workflow", "Этапность", "Отчётность", "Осторожность с чувствительными действиями"]
  }
];

const pricingPlans = [
  {
    key: "Start",
    title: "START",
    subtitle: "Быстрый запуск",
    price: "10 000 Kč / ≈400 €",
    timeline: "2-5 дней",
    goodFor: "Готовый demo-шаблон: меняем тексты, фото, контакты, форму заявки и готовим быстрый запуск.",
    extras: ["+ домен ~150-300 Kč / год", "+ хостинг 0 Kč для обычного лендинга"],
    includes: ["адаптация demo-шаблона", "замена текстов/фото/контактов", "форма заявки", "мобильная версия", "подготовка к публикации"],
    cta: "Выбрать Start"
  },
  {
    key: "Plus",
    title: "PLUS",
    subtitle: "Оптимальный вариант",
    price: "15 000 Kč / ≈600 €",
    timeline: "4-8 дней",
    goodFor: "Когда нужно больше доработки: дополнительные блоки, второй язык, thank-you страница и базовая аналитика.",
    extras: ["+ домен ~150-300 Kč / год", "+ хостинг 0 Kč для обычного лендинга"],
    includes: ["расширенная структура", "дополнительные секции", "второй язык по задаче", "thank-you page", "базовая аналитика"],
    cta: "Выбрать Plus",
    recommended: true
  },
  {
    key: "Pro",
    title: "PRO",
    subtitle: "Под рекламу и рост",
    price: "от 20 000 Kč / от ≈800 €",
    timeline: "индивидуально",
    goodFor: "Для сайта под рекламу и рост: аналитика кликов, UTM, SEO-основа, дополнительные секции и подготовка к продвижению.",
    extras: ["+ домен ~150-300 Kč / год", "+ платные сервисы по задаче"],
    includes: ["расширенная структура", "UTM/аналитика кликов", "SEO-основа", "дополнительные секции", "подготовка к рекламе"],
    cta: "Обсудить Pro",
    premium: true
  }
];

const faqItems = [
  ["Сколько стоит сайт?", "Простой сайт по demo-шаблону начинается с пакета START 10 000 Kč / ≈400 €. PLUS стоит 15 000 Kč / ≈600 €, PRO начинается от 20 000 Kč / от ≈800 €."],
  ["Сколько времени занимает?", "Быстрый landing можно собрать за 2-5 дней. Бизнес-сайт обычно 5-10 дней. MVP оценивается отдельно."],
  ["Можно использовать шаблон как основу?", "Да. Это хороший способ быстрее стартовать, сразу увидеть стиль и снизить неопределённость."],
  ["Что нужно от клиента?", "Описание услуги, контакты, примеры сайтов, фото/логотип если есть, желаемые сроки и примерный бюджет."],
  ["Можно доработать потом?", "Да. Можно сначала запустить базовую версию, потом добавлять секции, формы, аналитику или интеграции."],
  ["Вы помогаете с публикацией?", "Да, сайт можно подготовить для GitHub Pages или Firebase Hosting. Деплой делается только после отдельного подтверждения."]
];

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobileMenu");
const servicesGrid = document.querySelector("#servicesGrid");
const categoryGrid = document.querySelector("#categoryGrid");
const projectGrid = document.querySelector("#projectGrid");
const faqList = document.querySelector("#faqList");
const appModal = document.querySelector("#appModal");
const modalContent = document.querySelector("#modalContent");
const floatingCta = document.querySelector("#floatingCta");
const closeFloatingCta = document.querySelector("#closeFloatingCta");
const toast = document.querySelector("#toast");
let ctaClosed = false;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.addEventListener("click", (event) => {
  if (event.target.closest("a,button")) closeMenu();
});

function openModal(type, payload) {
  const builders = {
    preview: buildPreviewModal,
    details: buildDetailsModal,
    pricing: buildPricingModal,
    lead: buildLeadModal,
    argus: buildArgusModal,
    category: buildCategoryModal
  };
  modalContent.innerHTML = builders[type](payload);
  const isDemoPreview = type === "preview" && payload?.demoUrl && !payload.demoUrl.startsWith("http");
  appModal.classList.toggle("demo-open", Boolean(isDemoPreview));
  appModal.classList.add("open");
  appModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  bindModalActions();
}

function normalizeLeadPayload(payload) {
  if (!payload) return { selected: "", selectedPackage: "", packagePrice: "" };
  if (typeof payload === "string") return { selected: payload, selectedPackage: "", packagePrice: "" };
  if (payload.kind === "package") {
    return {
      selected: payload.template || "",
      selectedPackage: payload.package || "",
      packagePrice: payload.price || ""
    };
  }
  return {
    selected: payload.title || "",
    selectedPackage: payload.selectedPackage || "",
    packagePrice: payload.packagePrice || ""
  };
}

function leadPackagePayload(plan, template = "") {
  return {
    kind: "package",
    template,
    package: plan.key,
    price: plan.price
  };
}

function closeModal() {
  appModal.classList.remove("open");
  appModal.classList.remove("demo-open");
  appModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modalContent.innerHTML = "";
}

function featureList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function buildPreviewModal(project) {
  const isLocalDemo = project.demoUrl && !project.demoUrl.startsWith("http");
  if (isLocalDemo) {
    return `
      <div class="demo-modal">
        <div class="demo-toolbar">
          <div>
            <p class="eyebrow">${project.label}</p>
            <h2 id="modalTitle">${project.title}</h2>
            <div class="demo-toolbar-meta">
              <span>${project.price}</span>
              <span>${project.timeline}</span>
              <span>${project.category}</span>
            </div>
          </div>
          <div class="demo-toolbar-actions">
            <a class="btn ghost" href="${project.demoUrl}" target="_blank" rel="noopener">Открыть в новой вкладке</a>
            <button class="btn primary" type="button" data-lead-project="${project.id}">Заказать похожий</button>
            <button class="btn dark" type="button" data-details-project="${project.id}">Подробнее</button>
          </div>
        </div>
        <iframe class="demo-frame fullscreen" src="${project.demoUrl}" title="${project.title} demo"></iframe>
      </div>`;
  }

  const preview = project.demoUrl && !project.demoUrl.startsWith("http")
    ? `<iframe class="demo-frame" src="${project.demoUrl}" title="${project.title} demo"></iframe>`
    : `<img class="modal-hero-image" src="${project.image}" alt="${project.title} preview">`;
  const openDemo = project.demoUrl
    ? `<a class="btn dark" href="${project.demoUrl}" target="_blank" rel="noopener">Открыть демо</a>`
    : "";

  return `
    <div class="modal-header">
      <p class="eyebrow">${project.label}</p>
      <h2 id="modalTitle">${project.title}</h2>
      <p>${project.short}</p>
    </div>
    ${preview}
    <div class="modal-meta">
      <span>${project.price}</span>
      <span>${project.timeline}</span>
      <span>${project.category}</span>
    </div>
    <div class="modal-actions-row">
      ${openDemo}
      <button class="btn primary" type="button" data-lead-project="${project.id}">Заказать похожий</button>
      <button class="btn ghost" type="button" data-details-project="${project.id}">Подробнее</button>
    </div>`;
}

function buildDetailsModal(project) {
  const gallery = (project.gallery || [project.image])
    .map((src) => `<img src="${src}" alt="${project.title} screenshot">`)
    .join("");

  return `
    <div class="modal-header">
      <p class="eyebrow">${project.category}</p>
      <h2 id="modalTitle">${project.title}</h2>
      <p>${project.forWhom}</p>
    </div>
    <div class="detail-layout">
      <div class="detail-gallery">${gallery}</div>
      <div class="detail-copy">
        <h3>Что входит</h3>
        <ul>${featureList(project.includes)}</ul>
        <h3>Ключевые фишки</h3>
        <ul>${featureList(project.features)}</ul>
        <div class="modal-meta stacked">
          <span>${project.price}</span>
          <span>${project.timeline}</span>
        </div>
        <button class="btn primary" type="button" data-lead-project="${project.id}">Хочу такой сайт</button>
      </div>
    </div>`;
}

function buildPricingModal() {
  return `
    <div class="modal-header">
      <p class="eyebrow">Цены</p>
      <h2 id="modalTitle">Простые пакеты для запуска сайта</h2>
      <p>Для обычного сайта-витрины или лендинга хостинг можно сделать бесплатно. Обычно клиент оплачивает только домен примерно 150-300 Kč в год.</p>
    </div>
    <div class="pricing-modal-grid">
      ${pricingPlans.map((plan) => `
        <article class="${plan.recommended ? "is-recommended" : ""} ${plan.premium ? "is-premium" : ""}">
          ${plan.recommended ? "<span class=\"plan-badge\">Популярно / оптимально</span>" : ""}
          <h3>${plan.title}</h3>
          <p class="plan-subtitle">${plan.subtitle}</p>
          <strong>${plan.price}</strong>
          <p>${plan.goodFor}</p>
          <span>${plan.timeline}</span>
          <div class="plan-extras">${plan.extras.map((line) => `<small>${line}</small>`).join("")}</div>
          <ul>${featureList(plan.includes)}</ul>
          <button class="btn primary" type="button" data-lead-package="${plan.key}">${plan.cta}</button>
        </article>`).join("")}
    </div>
    <div class="pricing-note">
      <h3>Минимальный запуск</h3>
      <p>START 10 000 Kč / ≈400 € + домен примерно 150-300 Kč / год + бесплатный хостинг.</p>
      <p>То есть для простого сайта-витрины ежемесячный хостинг может быть 0 Kč.</p>
      <small>Не входит в цену: домен, платные формы, платный хостинг, рекламный бюджет, логотип, профессиональные фото, переводы и сложные функции оплачиваются отдельно.</small>
    </div>`;
}

function buildLeadModal(projectOrPlan = "") {
  const leadData = normalizeLeadPayload(projectOrPlan);
  const selected = leadData.selected;
  const selectedPackage = leadData.selectedPackage;
  const packagePrice = leadData.packagePrice;
  return `
    <div class="modal-header">
      <p class="eyebrow">Заявка</p>
      <h2 id="modalTitle">Опишите задачу</h2>
      <p>Заявка отправится через Forminit на email Николая. Можно также написать напрямую в Telegram @pracehub или Facebook.</p>
    </div>
    <form class="lead-form" id="leadForm" action="https://forminit.com/f/kshbr37bfe4" method="POST">
      <input type="hidden" name="selected_template" value="${selected}">
      <input type="hidden" name="selected_package" value="${selectedPackage}">
      <input type="hidden" name="package_price" value="${packagePrice}">
      <input type="hidden" name="fi-sender-fullName" value="">
      <input type="hidden" name="fi-sender-email" value="">
      <input type="hidden" name="fi-text-phone" value="">
      <input type="hidden" name="fi-text-telegram_whatsapp" value="">
      <input type="hidden" name="fi-text-business_type" value="">
      <input type="hidden" name="fi-text-selected_template" value="${selected}">
      <input type="hidden" name="fi-text-selected_package" value="${selectedPackage}">
      <input type="hidden" name="fi-text-package_price" value="${packagePrice}">
      <input type="hidden" name="fi-text-message" value="">
      <input type="hidden" name="fi-select-project_type" value="">
      <input type="hidden" name="fi-select-budget" value="">
      <input type="hidden" name="fi-select-timeline" value="">
      <div class="field-row">
        <label>Имя<input name="name" autocomplete="name" required></label>
        <label>Телефон<input name="phone" autocomplete="tel" required></label>
      </div>
      <label>Email<input name="email" type="email" autocomplete="email" required></label>
      <label>Telegram / WhatsApp<input name="telegram_whatsapp" autocomplete="off" required></label>
      <div class="field-row">
        <label>Тип бизнеса / проекта<input name="business_type" autocomplete="organization" placeholder="Например: ремонт, кафе, туры, сервис" required></label>
        <label>Тип задачи<select name="project_type" required>
          <option value="">Выберите</option>
          <option ${selected.includes("Landing") || selected.includes("RemPro") ? "selected" : ""}>Landing page</option>
          <option ${selected.includes("Business") ? "selected" : ""}>Business website</option>
          <option ${selected.includes("MVP") ? "selected" : ""}>MVP / Mini Platform</option>
          <option ${selected.includes("Audit") ? "selected" : ""}>Audit / Rescue</option>
          <option>Bug fixing</option>
          <option>AI-assisted workflow</option>
        </select></label>
      </div>
      <div class="field-row">
        <label>Бюджет<select name="budget">
          <option>Нужно обсудить</option>
          <option>до 10 000 Kč</option>
          <option>START 10 000 Kč / ≈400 €</option>
          <option>PLUS 15 000 Kč / ≈600 €</option>
          <option>PRO от 20 000 Kč / от ≈800 €</option>
        </select></label>
        <label>Срок<select name="timeline">
          <option>Нужно обсудить</option>
          <option>Срочно</option>
          <option>1-2 недели</option>
          <option>2-4 недели</option>
          <option>Гибко</option>
        </select></label>
      </div>
      <label>Выбранный шаблон<input name="selected_template_visible" placeholder="Ссылка или название шаблона" value="${selected}"></label>
      <div class="field-row">
        <label>Пакет / уровень запуска<select name="selected_package_visible" required>
          <option value="">Нужно обсудить</option>
          ${pricingPlans.map((plan) => `<option value="${plan.key}" ${selectedPackage === plan.key ? "selected" : ""}>${plan.title} - ${plan.price} — ${plan.subtitle}</option>`).join("")}
        </select></label>
        <label>Цена пакета<input name="package_price_visible" value="${packagePrice}" placeholder="Автоматически после выбора" readonly></label>
      </div>
      <label>Что нужно сделать?<textarea name="message" rows="5" required placeholder="Опишите услугу, сроки, материалы, что уже есть"></textarea></label>
      <button class="btn dark full" type="submit">Отправить заявку</button>
      <div class="messenger-row">
        <a href="https://t.me/pracehub" target="_blank" rel="noopener">Telegram @pracehub</a>
        <a href="https://www.facebook.com/share/18hdnUyhLG/" target="_blank" rel="noopener">Facebook</a>
        <a href="mailto:nikyrchenko71@gmail.com">Email</a>
      </div>
    </form>`;
}

function buildArgusModal() {
  return `
    <div class="modal-header">
      <p class="eyebrow">ARGUS approach</p>
      <h2 id="modalTitle">AI помогает, но решения остаются под контролем</h2>
      <p>ARGUS - мой внутренний рабочий процесс, который помогает не терять структуру при AI-assisted разработке.</p>
    </div>
    <div class="argus-modal">
      <img src="assets/img/argus-control-mobile.png" alt="ARGUS Control Room preview">
      <div>
        <h3>Что это даёт клиенту</h3>
        <ul>
          <li>задачи и решения фиксируются понятнее;</li>
          <li>важные действия не делаются хаотично;</li>
          <li>AI ускоряет черновики, анализ и варианты;</li>
          <li>человек утверждает важные шаги;</li>
          <li>ARGUS не является публичным скачиваемым продуктом.</li>
        </ul>
        <button class="btn primary" type="button" data-open-lead>Обсудить проект</button>
      </div>
    </div>`;
}

function buildCategoryModal(category) {
  return `
    <div class="modal-header">
      <p class="eyebrow">${category.status}</p>
      <h2 id="modalTitle">${category.title}</h2>
      <p>${category.description}</p>
    </div>
    <div class="category-detail">
      ${renderCategoryVisual(category, false)}
      <div>
        <div class="modal-meta stacked">
          <span>${category.price}</span>
          <span>${category.timeline}</span>
          <span>${category.badge}</span>
        </div>
        <h3>Что можно включить</h3>
        <ul>${featureList(category.features)}</ul>
        <div class="modal-actions-row">
          ${category.demoUrl ? `<a class="btn dark" href="${category.demoUrl}">Посмотреть шаблон</a>` : ""}
          <button class="btn primary" type="button" data-lead-category="${category.id}">Заказать похожий</button>
        </div>
      </div>
    </div>`;
}

function bindModalActions() {
  modalContent.querySelectorAll("[data-lead-project]").forEach((button) => {
    button.addEventListener("click", () => openModal("lead", projects.find((item) => item.id === button.dataset.leadProject)));
  });
  modalContent.querySelectorAll("[data-lead-plan]").forEach((button) => {
    button.addEventListener("click", () => openModal("lead", button.dataset.leadPlan));
  });
  modalContent.querySelectorAll("[data-lead-package]").forEach((button) => {
    const plan = pricingPlans.find((item) => item.key === button.dataset.leadPackage);
    button.addEventListener("click", () => openModal("lead", leadPackagePayload(plan)));
  });
  modalContent.querySelectorAll("[data-details-project]").forEach((button) => {
    button.addEventListener("click", () => openModal("details", projects.find((item) => item.id === button.dataset.detailsProject)));
  });
  modalContent.querySelectorAll("[data-lead-category]").forEach((button) => {
    button.addEventListener("click", () => openModal("lead", siteCategories.find((item) => item.id === button.dataset.leadCategory)));
  });
  modalContent.querySelectorAll("[data-open-lead]").forEach((button) => {
    button.addEventListener("click", () => openModal("lead", packagePayloadFromButton(button)));
  });
  const leadForm = modalContent.querySelector("#leadForm");
  const packageSelect = modalContent.querySelector("[name='selected_package_visible']");
  const packagePriceInput = modalContent.querySelector("[name='package_price_visible']");
  if (packageSelect && packagePriceInput) {
    packageSelect.addEventListener("change", () => {
      const plan = pricingPlans.find((item) => item.key === packageSelect.value);
      packagePriceInput.value = plan ? plan.price : "";
    });
  }
  if (leadForm) leadForm.addEventListener("submit", () => {
    const visibleTemplate = leadForm.querySelector("[name='selected_template_visible']");
    const hiddenTemplate = leadForm.querySelector("[name='selected_template']");
    if (visibleTemplate && hiddenTemplate) hiddenTemplate.value = visibleTemplate.value;
    const visiblePackage = leadForm.querySelector("[name='selected_package_visible']");
    const hiddenPackage = leadForm.querySelector("[name='selected_package']");
    const visiblePackagePrice = leadForm.querySelector("[name='package_price_visible']");
    const hiddenPackagePrice = leadForm.querySelector("[name='package_price']");
    if (visiblePackage && hiddenPackage) hiddenPackage.value = visiblePackage.value;
    const selectedPlan = pricingPlans.find((plan) => plan.key === visiblePackage?.value);
    if (visiblePackagePrice && selectedPlan && !visiblePackagePrice.value) visiblePackagePrice.value = selectedPlan.price;
    if (visiblePackagePrice && hiddenPackagePrice) hiddenPackagePrice.value = visiblePackagePrice.value;
    const syncPairs = [
      ["name", "fi-sender-fullName"],
      ["email", "fi-sender-email"],
      ["phone", "fi-text-phone"],
      ["telegram_whatsapp", "fi-text-telegram_whatsapp"],
      ["business_type", "fi-text-business_type"],
      ["selected_template", "fi-text-selected_template"],
      ["selected_package", "fi-text-selected_package"],
      ["package_price", "fi-text-package_price"],
      ["message", "fi-text-message"],
      ["project_type", "fi-select-project_type"],
      ["budget", "fi-select-budget"],
      ["timeline", "fi-select-timeline"]
    ];
    syncPairs.forEach(([fromName, toName]) => {
      const from = leadForm.querySelector(`[name='${fromName}']`);
      const to = leadForm.querySelector(`[name='${toName}']`);
      if (from && to) to.value = from.value;
    });
    showToast("Отправляю заявку через Forminit.");
  });
}

function packagePayloadFromButton(button) {
  if (!button?.dataset?.package) return "";
  return {
    kind: "package",
    template: button.dataset.template || "",
    package: button.dataset.package,
    price: button.dataset.packagePrice || ""
  };
}

function openLeadFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("lead") !== "1") return;
  const packageKey = params.get("package") || "";
  const template = params.get("template") || "";
  const plan = pricingPlans.find((item) => item.key.toLowerCase() === packageKey.toLowerCase());
  window.setTimeout(() => {
    openModal("lead", {
      kind: "package",
      template,
      package: plan?.key || packageKey,
      price: plan?.price || ""
    });
    const cleanUrl = `${window.location.pathname}${window.location.hash || ""}`;
    window.history.replaceState(null, "", cleanUrl);
  }, 120);
}

function renderCategoryVisual(category, lazy = true) {
  if (category.image) {
    return `<img class="category-image" src="${category.image}" alt="${category.title}" ${lazy ? "loading=\"lazy\"" : ""}>`;
  }
  return `
    <div class="category-visual tone-${category.imageTone || "default"}" aria-hidden="true">
      <span>${category.visual || "Site"}</span>
      <i></i><i></i><i></i>
    </div>`;
}

function renderCategories(filter = "all") {
  if (!categoryGrid) return;
  const list = filter === "all" ? siteCategories : siteCategories.filter((category) => category.filter === filter);
  categoryGrid.innerHTML = list.map((category) => `
    <article class="category-card">
      ${renderCategoryVisual(category)}
      <div class="category-body">
        <div class="category-labels">
          <span>${category.badge}</span>
          <span>${category.status}</span>
        </div>
        <h3>${category.title}</h3>
        <p>${category.description}</p>
        <div class="project-meta">
          <span>${category.price}</span>
          <span>${category.timeline}</span>
        </div>
        <ul>${featureList(category.features.slice(0, 4))}</ul>
        <div class="category-actions">
          ${category.demoUrl ? `<a class="btn dark" href="${category.demoUrl}">Посмотреть шаблон</a>` : ""}
          <button class="btn primary" type="button" data-order-category="${category.id}">Заказать похожий</button>
          <button class="btn secondary" type="button" data-category-details="${category.id}">Подробнее</button>
        </div>
      </div>
    </article>
  `).join("");
  categoryGrid.querySelectorAll("[data-order-category]").forEach((button) => {
    button.addEventListener("click", () => openModal("lead", siteCategories.find((item) => item.id === button.dataset.orderCategory)));
  });
  categoryGrid.querySelectorAll("[data-category-details]").forEach((button) => {
    button.addEventListener("click", () => openModal("category", siteCategories.find((item) => item.id === button.dataset.categoryDetails)));
  });
}

function renderServices() {
  servicesGrid.innerHTML = services.map((service) => `
    <article class="service-card">
      <span>${service.timeline}</span>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
      <strong>${service.price}</strong>
      <button type="button" data-service="${service.id}">${service.cta}</button>
    </article>
  `).join("");
  servicesGrid.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => {
      const service = services.find((item) => item.id === button.dataset.service);
      if (service.action === "argus") openModal("argus");
      else openModal("lead", service.title);
    });
  });
}

function renderProjects(filter = "all") {
  const list = filter === "all" ? projects : projects.filter((project) => project.group === filter);
  projectGrid.innerHTML = list.map((project) => `
    <article class="project-card" data-card="${project.id}">
      <img src="${project.image}" alt="${project.title} preview">
      <div class="project-body">
        <span class="project-label">${project.label}</span>
        <h3>${project.title}</h3>
        <p>${project.short}</p>
        <div class="project-meta">
          <span>${project.price}</span>
          <span>${project.timeline}</span>
        </div>
        <ul>${featureList(project.features.slice(0, 3))}</ul>
        <div class="project-actions">
          ${project.group === "template" && project.demoUrl
            ? `<a href="${project.demoUrl}" data-demo-link="${project.id}">Посмотреть шаблон</a>`
            : `<button type="button" data-preview="${project.id}">Посмотреть проект</button>`}
          <button type="button" data-details="${project.id}">Подробнее</button>
          <button type="button" data-order="${project.id}">Заказать похожий</button>
        </div>
      </div>
    </article>
  `).join("");

  projectGrid.querySelectorAll("[data-preview]").forEach((button) => {
    button.addEventListener("click", () => openModal("preview", projects.find((item) => item.id === button.dataset.preview)));
  });
  projectGrid.querySelectorAll("[data-details]").forEach((button) => {
    button.addEventListener("click", () => openModal("details", projects.find((item) => item.id === button.dataset.details)));
  });
  projectGrid.querySelectorAll("[data-order]").forEach((button) => {
    button.addEventListener("click", () => openModal("lead", projects.find((item) => item.id === button.dataset.order)));
  });
  projectGrid.querySelectorAll("[data-card]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("button,a")) return;
      const project = projects.find((item) => item.id === card.dataset.card);
      if (project.group === "template" && project.demoUrl) {
        window.location.href = project.demoUrl;
      } else {
        openModal("preview", project);
      }
    });
  });
}

function renderFaq() {
  faqList.innerHTML = faqItems.map(([question, answer]) => `
    <details>
      <summary>${question}</summary>
      <p>${answer}</p>
    </details>
  `).join("");
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

document.querySelectorAll("[data-category-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-category-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCategories(button.dataset.categoryFilter);
  });
});

document.querySelectorAll("[data-open-pricing]").forEach((button) => {
  button.addEventListener("click", () => openModal("pricing"));
});

document.querySelectorAll("[data-open-lead]").forEach((button) => {
  button.addEventListener("click", () => openModal("lead", packagePayloadFromButton(button)));
});

document.querySelectorAll("[data-open-argus]").forEach((button) => {
  button.addEventListener("click", () => openModal("argus"));
});

document.querySelectorAll("[data-close-modal]").forEach((item) => item.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeModal();
  }
});

document.querySelectorAll(".hero-video").forEach((video) => {
  const userAgent = navigator.userAgent || "";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const inAppBrowser = /FBAN|FBAV|FB_IAB|Instagram|Messenger/i.test(userAgent);
  if (reducedMotion || inAppBrowser) {
    video.classList.add("is-disabled");
    video.pause();
    return;
  }

  const startVideo = () => {
    if (video.readyState >= 3) {
      video.classList.add("is-ready");
    } else {
      video.addEventListener("canplay", () => {
        video.classList.add("is-ready");
      }, { once: true });
    }
    video.play().catch(() => {
      video.classList.remove("is-ready");
    });
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(startVideo, { timeout: 1800 });
  } else {
    window.setTimeout(startVideo, 900);
  }
});

document.querySelectorAll(".ambient-video").forEach((video) => {
  const src = video.dataset.src;
  const userAgent = navigator.userAgent || "";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const inAppBrowser = /FBAN|FBAV|FB_IAB|Instagram|Messenger/i.test(userAgent);
  if (!src || reducedMotion || inAppBrowser || !("IntersectionObserver" in window)) {
    video.classList.add("is-disabled");
    return;
  }

  let loaded = false;
  const loadVideo = () => {
    if (loaded) return;
    loaded = true;
    const source = document.createElement("source");
    source.src = src;
    source.type = "video/mp4";
    video.appendChild(source);
    video.addEventListener("canplay", () => {
      video.classList.add("is-ready");
      video.play().catch(() => {});
    }, { once: true });
    video.load();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadVideo();
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { rootMargin: "420px 0px", threshold: 0.08 });

  observer.observe(video);
});

window.addEventListener("scroll", () => {
  if (ctaClosed) return;
  const hero = document.querySelector(".hero");
  const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
  const shouldShow = window.scrollY > Math.max(heroHeight + 80, 1400);
  floatingCta.classList.toggle("visible", shouldShow);
}, { passive: true });

closeFloatingCta.addEventListener("click", () => {
  ctaClosed = true;
  floatingCta.classList.remove("visible");
});

renderServices();
renderCategories();
renderProjects();
renderFaq();
openLeadFromUrl();
