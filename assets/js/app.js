const services = [
  {
    id: "start-landing",
    title: "Start Landing",
    text: "Одностраничный продающий сайт для услуги, мастера, локального бизнеса или проверки идеи.",
    price: "от 200-350 €",
    timeline: "2-5 дней",
    cta: "Заказать лендинг"
  },
  {
    id: "business-site",
    title: "Business Website",
    text: "Сайт с услугами, работами, контактами, формой заявки и понятной структурой доверия.",
    price: "от 400-750 €",
    timeline: "5-10 дней",
    cta: "Обсудить сайт"
  },
  {
    id: "mvp",
    title: "MVP / Mini Platform",
    text: "Мини-платформа с ролями, формами, базой данных, чатом, админкой или интеграциями.",
    price: "от 600 €",
    timeline: "индивидуально",
    cta: "Спланировать MVP"
  },
  {
    id: "audit",
    title: "Project Rescue / Audit",
    text: "Аудит, исправление багов, наведение порядка и честный список того, что реально готово.",
    price: "от 100-400 €",
    timeline: "1-4 дня",
    cta: "Заказать аудит"
  },
  {
    id: "bugs",
    title: "Bug fixing",
    text: "Исправление сломанных экранов, форм, адаптива, логики, деплоя или Firebase-проблем.",
    price: "от 50 €",
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
    id: "rempro",
    group: "template",
    title: "RemPro Renovation Landing",
    label: "Готовый demo",
    category: "Construction / renovation",
    image: "assets/img/rempro/desktop-home.png",
    gallery: ["assets/img/rempro/desktop-home.png", "assets/img/rempro/mobile-hero.png", "assets/img/rempro/mobile-full.png"],
    demoUrl: "demos/rempro/index.html",
    price: "от 350 €",
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
    price: "от 320 €",
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
    price: "от 300 €",
    timeline: "3-6 дней",
    short: "Концепт сайта для строительной компании: услуги, доверие, работы и контакт.",
    forWhom: "Для локальных строительных услуг, ремонта, фасадов, кровли или комплексных работ.",
    features: ["Каталог услуг", "Блок доверия", "Заявка", "Портфолио работ"],
    includes: ["Коммерческая структура", "Адаптив", "Базовая форма", "Подготовка к GitHub Pages"]
  },
  {
    id: "cafe",
    group: "template",
    title: "Cafe / Restaurant Landing",
    label: "Demo concept",
    category: "Restaurant",
    image: "assets/images/categories/restaurant-cafe.jpg",
    demoUrl: "",
    price: "от 250 €",
    timeline: "3-5 дней",
    short: "Лендинг для кафе или ресторана: меню, бронирование, атмосфера и быстрый контакт.",
    forWhom: "Для кафе, маленького ресторана, кофейни, бара или доставки еды.",
    features: ["Меню", "Бронирование", "Отзывы", "Контакты"],
    includes: ["Первый экран", "Меню/услуги", "Форма заявки", "Мобильная версия"]
  },
  {
    id: "delivery",
    group: "template",
    title: "Delivery / Local Service",
    label: "Demo concept",
    category: "Local service",
    image: "assets/images/categories/delivery-fleet.jpg",
    demoUrl: "",
    price: "от 220 €",
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
    price: "MVP от 600 €",
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
    title: "Start Landing",
    price: "от 200-350 €",
    timeline: "2-5 дней",
    goodFor: "услуга, мастер, локальный бизнес, быстрый запуск",
    includes: ["1 продающий путь", "до 6 секций", "форма заявки", "мобильная версия", "подготовка к публикации"]
  },
  {
    title: "Business Website",
    price: "от 400-750 €",
    timeline: "5-10 дней",
    goodFor: "компания, услуги, портфолио, доверие",
    includes: ["расширенная структура", "услуги/работы/контакты", "SEO-база", "формы", "публикация по согласованию"]
  },
  {
    title: "MVP / Mini Platform",
    price: "от 600 €",
    timeline: "индивидуально",
    goodFor: "проект с логикой, ролями, данными или кабинетами",
    includes: ["scope", "прототип", "роли/формы/данные", "интеграции по задаче", "план развития"]
  },
  {
    title: "Audit / Rescue",
    price: "от 100-400 €",
    timeline: "1-4 дня",
    goodFor: "проект завис, сломан или непонятно что готово",
    includes: ["аудит состояния", "список проблем", "приоритеты", "план исправлений", "оценка рисков"]
  }
];

const faqItems = [
  ["Сколько стоит сайт?", "Простой landing обычно начинается от 200-350 €. Точная цена зависит от структуры, материалов, количества секций и логики."],
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
      <h2 id="modalTitle">Тарифы и ориентиры</h2>
      <p>Точная цена фиксируется после короткого аудита задачи, но клиент сразу видит вилку.</p>
    </div>
    <div class="pricing-modal-grid">
      ${pricingPlans.map((plan) => `
        <article>
          <h3>${plan.title}</h3>
          <strong>${plan.price}</strong>
          <p>${plan.goodFor}</p>
          <span>${plan.timeline}</span>
          <ul>${featureList(plan.includes)}</ul>
          <button class="btn primary" type="button" data-lead-plan="${plan.title}">Заказать</button>
        </article>`).join("")}
    </div>`;
}

function buildLeadModal(projectOrPlan = "") {
  const selected = typeof projectOrPlan === "string" ? projectOrPlan : projectOrPlan?.title || "";
  return `
    <div class="modal-header">
      <p class="eyebrow">Заявка</p>
      <h2 id="modalTitle">Опишите задачу</h2>
      <p>Заявка отправится через Forminit на email Николая. Можно также написать напрямую в Telegram @pracehub или Facebook.</p>
    </div>
    <form class="lead-form" id="leadForm" action="https://forminit.com/f/kshbr37bfe4" method="POST">
      <input type="hidden" name="selected_template" value="${selected}">
      <input type="hidden" name="fi-sender-fullName" value="">
      <input type="hidden" name="fi-sender-email" value="">
      <input type="hidden" name="fi-text-phone" value="">
      <input type="hidden" name="fi-text-telegram_whatsapp" value="">
      <input type="hidden" name="fi-text-business_type" value="">
      <input type="hidden" name="fi-text-selected_template" value="${selected}">
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
          <option>до 200 €</option>
          <option>200-350 €</option>
          <option>400-750 €</option>
          <option>600+ €</option>
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
  modalContent.querySelectorAll("[data-details-project]").forEach((button) => {
    button.addEventListener("click", () => openModal("details", projects.find((item) => item.id === button.dataset.detailsProject)));
  });
  modalContent.querySelectorAll("[data-lead-category]").forEach((button) => {
    button.addEventListener("click", () => openModal("lead", siteCategories.find((item) => item.id === button.dataset.leadCategory)));
  });
  modalContent.querySelectorAll("[data-open-lead]").forEach((button) => {
    button.addEventListener("click", () => openModal("lead"));
  });
  const leadForm = modalContent.querySelector("#leadForm");
  if (leadForm) leadForm.addEventListener("submit", () => {
    const visibleTemplate = leadForm.querySelector("[name='selected_template_visible']");
    const hiddenTemplate = leadForm.querySelector("[name='selected_template']");
    if (visibleTemplate && hiddenTemplate) hiddenTemplate.value = visibleTemplate.value;
    const syncPairs = [
      ["name", "fi-sender-fullName"],
      ["email", "fi-sender-email"],
      ["phone", "fi-text-phone"],
      ["telegram_whatsapp", "fi-text-telegram_whatsapp"],
      ["business_type", "fi-text-business_type"],
      ["selected_template", "fi-text-selected_template"],
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
  button.addEventListener("click", () => openModal("lead"));
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
