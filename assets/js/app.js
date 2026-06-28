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
    price: "PLUS 20 000 Kč / ≈800 €",
    timeline: "5-10 дней",
    cta: "Обсудить сайт"
  },
  {
    id: "mvp",
    title: "MVP / Mini Platform",
    text: "Мини-платформа с ролями, формами, базой данных, чатом, админкой или интеграциями.",
    price: "PRO от 30 000 Kč / от ≈1 200 €",
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
    text: "Исправление сломанных экранов, форм, адаптива, логики, публикации или ошибок на сайте.",
    price: "точечно от 1 250 Kč",
    timeline: "по задаче",
    cta: "Починить проблему"
  },
  {
    id: "launch-support",
    title: "Подготовка к запуску",
    text: "Форма заявки, кнопки связи, домен, публикация и финальная проверка перед показом клиентам.",
    price: "входит по пакету",
    timeline: "по задаче",
    cta: "Обсудить запуск"
  }
];

const siteCategories = window.siteCategories || [];

const projects = [
  {
    id: "mini-shop",
    group: "template",
    title: "Интернет-магазин / mini e-shop",
    label: "Новый TOP-шаблон",
    category: "Static catalog-shop",
    image: "assets/img/mini-shop/preview.svg",
    gallery: ["assets/img/mini-shop/preview.svg"],
    demoUrl: "demos/mini-shop/index.html",
    price: "20 000 Kč без акции",
    fixedPrice: true,
    timeline: "5-10 дней",
    short: "Каталог товаров, категории, корзина, избранное, checkout-заявка на email, мобильная версия и простая admin-local/JSON editor.",
    forWhom: "Для малого магазина, локального продавца, шоурума или бизнеса, которому нужен стартовый mini e-shop без backend, онлайн-оплаты и складского учёта.",
    features: ["Каталог товаров", "Категории", "Корзина", "Wishlist", "Email-заявка", "Admin-local JSON editor"],
    includes: ["Адаптация под бренд", "До 20-30 стартовых товаров", "До 6-8 категорий", "Checkout-заявка на email", "Legal pages placeholders", "Инструкция README"]
  },
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
    id: "tedition-eu",
    group: "template",
    title: "Tedition EU — русский demo-сайт",
    label: "Новый проект",
    category: "Business services / documents / projects",
    image: "demos/tedition-eu/assets/img/hero-poster.jpg",
    gallery: ["demos/tedition-eu/assets/img/hero-poster.jpg", "demos/tedition-eu/assets/img/meeting.webp", "demos/tedition-eu/assets/img/solar-project.webp"],
    demoUrl: "demos/tedition-eu/index.html",
    highlight: "client-project",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "3-7 дней",
    short: "Русская demo-версия корпоративного сайта Tedition EU: работа, документы, S.R.O / ИП / A1, фактуры, DPH и проектная поддержка в Чехии.",
    forWhom: "Для сервисных компаний, кадровых проектов, бизнес-поддержки и направлений, где нужно серьёзно объяснить услуги и собирать заявки.",
    features: ["Corporate hero video", "Facebook CTA", "Форма заявки", "Popup при скролле", "Мобильная версия"],
    includes: ["Адаптация под бренд", "Замена текстов/фото/контактов", "Facebook контакт", "Форма заявки", "Подготовка к публикации"]
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
    forWhom: "Для организатора туров, гида, туристической компании, экскурсионного проекта или локальных поездок выходного дня.",
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
    includes: ["Коммерческая структура", "Адаптив", "Базовая форма", "Подготовка к публикации"]
  },
  {
    id: "delivery",
    group: "template",
    title: "Delivery / Fleet Website Demo",
    label: "Готовый demo",
    category: "Local service",
    image: "assets/images/delivery-fleet/courier-handoff.jpg",
    gallery: ["assets/images/delivery-fleet/courier-handoff.jpg", "assets/images/delivery-fleet/parcel-boxes.jpg", "assets/images/delivery-fleet/locker-flow.jpg"],
    demoUrl: "demos/delivery-fleet/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "2-6 дней",
    short: "Сайт для доставки, курьеров и флотилии: зоны, тарифы, заявка клиента, набор курьеров и быстрые контакты.",
    forWhom: "Для курьерской службы, доставки еды, локального сервиса, флотилии или проекта, которому нужно быстро собирать заявки от клиентов и курьеров.",
    features: ["Видео hero", "Зоны и тарифы", "Форма заявки", "Курьерский блок", "Mobile bottom nav"],
    includes: ["Адаптация под бренд", "Замена зон и тарифов", "Форма заявки на почту", "Кнопки Telegram/Facebook", "Подготовка к публикации"]
  },
  {
    id: "beauty-salon",
    group: "template",
    title: "Beauty / Salon Website Demo",
    label: "Готовый demo",
    category: "Beauty / salon",
    image: "assets/images/beauty-salon/hero-salon.jpg",
    gallery: ["assets/images/beauty-salon/hero-salon.jpg", "assets/images/beauty-salon/hair-service.jpg", "assets/images/beauty-salon/nail-service.jpg"],
    demoUrl: "demos/beauty-salon/index.html",
    price: "START 10 000 Kč / ≈400 €",
    timeline: "3-6 дней",
    short: "Сайт для салона, мастера или beauty-студии: услуги, цены, галерея, запись, контакты и мобильные CTA.",
    forWhom: "Для парикмахера, nail-мастера, brow/lash-студии, косметолога, массажного кабинета или маленького салона, где важны фото работ и быстрая запись.",
    features: ["Видео hero", "Услуги и цены", "Галерея работ", "Форма записи", "Mobile bottom nav"],
    includes: ["Адаптация под бренд", "Замена услуг и цен", "Форма заявки на почту", "Кнопки Telegram/Facebook", "Подготовка к публикации"]
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
    price: "MVP / PRO от 30 000 Kč / от ≈1 200 €",
    timeline: "индивидуально",
    short: "Живой продукт: роли, чат, пользователи, заявки и реальные UX-уроки для мини-платформ.",
    forWhom: "Для проектов, где нужен не просто лендинг, а продуктовая логика: роли, пользователи, заявки, чат или кабинет.",
    features: ["Роли", "Чат", "Пользователи", "PWA", "Кабинет"],
    includes: ["Scope", "Архитектура", "MVP-логика", "Проверка рисков", "План развития"]
  }
];

const projectIds = new Set(projects.map((project) => project.id));
const categoryProjectSkips = new Set(["bakery-cafe", "tedition-eu", "restaurant-cafe", "renovation", "tours-guides", "delivery-fleet", "beauty-salon"]);
siteCategories.forEach((category) => {
  if (!category.demoUrl || projectIds.has(category.id) || categoryProjectSkips.has(category.id)) return;
  projects.push({
    id: category.id,
    group: "template",
    title: category.title,
    label: category.status,
    category: category.badge,
    image: category.image,
    gallery: [category.image],
    demoUrl: category.demoUrl,
    price: category.price,
    timeline: category.timeline,
    short: category.description,
    forWhom: category.fixedPrice ? "Для малого магазина, локального продавца, шоурума или бизнеса, которому нужен стартовый catalog-shop без backend, оплат и складского учёта." : `Для направления: ${category.title}. Demo-шаблон можно адаптировать под реальный бизнес, заменить фото, услуги, цены, контакты и форму заявки.`,
    features: category.features,
    includes: category.includes || ["Адаптация под бренд", "Замена текстов/фото/контактов", "Форма заявки на почту", "Кнопки Telegram/Facebook", "Подготовка к публикации"]
  });
  projectIds.add(category.id);
});

const pricingPlans = [
  {
    key: "Start",
    title: "START",
    subtitle: "Быстрый запуск",
    price: "10 000 Kč / ≈400 €",
    salePrice: "5 000 Kč / ≈200 €",
    timeline: "2-5 дней",
    goodFor: "Готовый demo-шаблон: меняем тексты, фото, контакты, форму заявки и готовим быстрый запуск.",
    extras: ["+ домен ~150-300 Kč / год", "+ хостинг 0 Kč для обычного лендинга"],
    includes: ["адаптация demo-шаблона", "замена текстов/фото/контактов", "форма заявки", "мобильная версия", "подготовка к публикации"],
    cta: "Купить Start по акции"
  },
  {
    key: "Plus",
    title: "PLUS",
    subtitle: "Оптимальный вариант",
    price: "20 000 Kč / ≈800 €",
    salePrice: "10 000 Kč / ≈400 €",
    timeline: "4-8 дней",
    goodFor: "Когда нужно больше доработки: дополнительные блоки, второй язык, thank-you страница, базовая аналитика и аккуратная адаптация под бизнес.",
    extras: ["+ домен ~150-300 Kč / год", "+ хостинг 0 Kč для обычного лендинга"],
    includes: ["расширенная структура", "дополнительные секции", "второй язык по задаче", "thank-you page", "базовая аналитика"],
    cta: "Купить Plus по акции",
    recommended: true
  },
  {
    key: "Pro",
    title: "PRO",
    subtitle: "Под рекламу и рост",
    price: "от 30 000 Kč / от ≈1 200 €",
    salePrice: "от 15 000 Kč / от ≈600 €",
    timeline: "индивидуально",
    goodFor: "Для сайта под рекламу и рост: аналитика кликов, UTM, SEO-основа, дополнительные секции и расширенная подготовка. Точный объём фиксируется перед стартом.",
    extras: ["+ домен ~150-300 Kč / год", "+ платные сервисы по задаче"],
    includes: ["расширенная структура", "UTM/аналитика кликов", "SEO-основа", "дополнительные секции", "подготовка к рекламе"],
    cta: "Обсудить Pro по акции",
    premium: true
  }
];

const faqItems = [
  ["Сколько стоит сайт?", "Простой сайт по demo-шаблону начинается с пакета START 10 000 Kč / ≈400 €. Во время акции START стоит 5 000 Kč / ≈200 €, PLUS 10 000 Kč / ≈400 € вместо 20 000 Kč / ≈800 €, PRO от 15 000 Kč / от ≈600 € вместо от 30 000 Kč / от ≈1 200 €."],
  ["Сколько времени занимает?", "Быстрый landing можно собрать за 2-5 дней. Бизнес-сайт обычно 5-10 дней. MVP оценивается отдельно."],
  ["Можно использовать шаблон как основу?", "Да. Это хороший способ быстрее стартовать, сразу увидеть стиль и снизить неопределённость."],
  ["Что нужно от клиента?", "Описание услуги, контакты, примеры сайтов, фото/логотип если есть, желаемые сроки и примерный бюджет."],
  ["Можно доработать потом?", "Да. Можно сначала запустить базовую версию, потом добавлять секции, формы, аналитику или интеграции."],
  ["Вы помогаете с публикацией?", "Да, сайт можно подготовить к выбранному способу публикации. Запуск делается только после отдельного подтверждения."]
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
const FACEBOOK_URL = "https://www.facebook.com/share/1D8igDrmuT/";
const PRELOADER_KEY = "nikolaj_preloader_seen";
const CONTACT_POPUP_CLOSED_KEY = "nikolaj_contact_popup_closed";
const SALE50_ENABLED = true;
const SALE50_DURATION_HOURS = 3;
const SALE50_STORAGE_KEY = "nikolaj_sale50_started_at";
const SALE50_PROMO_CODE = "SALE50_3H";
const saleConfig = {
  enabled: SALE50_ENABLED,
  code: SALE50_PROMO_CODE,
  label: "Скидка 50% / 3 часа",
  discountPercent: 50,
  startedAtKey: SALE50_STORAGE_KEY,
  stickyClosedKey: "nikolaj_sale50_sticky_closed",
  durationMs: SALE50_DURATION_HOURS * 60 * 60 * 1000
};
let ctaClosed = sessionStorage.getItem(saleConfig.stickyClosedKey) === "1";
let lastSaleActive = null;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function getSaleState() {
  const now = Date.now();
  const stored = Number(localStorage.getItem(saleConfig.startedAtKey));
  const startedAt = Number.isFinite(stored) && stored > 0 ? stored : now;
  if (!stored) localStorage.setItem(saleConfig.startedAtKey, String(startedAt));
  const expiresAt = startedAt + saleConfig.durationMs;
  const remainingMs = Math.max(0, expiresAt - now);
  return {
    startedAt,
    expiresAt,
    remainingMs,
    expired: remainingMs <= 0
  };
}

function formatSaleTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(total / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function isSaleActive(state = getSaleState()) {
  return saleConfig.enabled && !state.expired;
}

function planButtonLabel(plan, saleActive = isSaleActive()) {
  if (saleActive) return plan.cta;
  return plan.key === "Pro" ? "Обсудить Pro" : `Выбрать ${plan.title}`;
}

function planDisplayPrice(plan, saleActive = isSaleActive()) {
  return saleActive ? plan.salePrice : plan.price;
}

function normalLeadLabel(source = "") {
  if (source.includes("format_help")) return "Подобрать формат сайта";
  if (source.includes("pricing") || source.includes("package")) return "Оставить заявку";
  if (source.includes("sticky")) return "Заявка";
  if (source.includes("hero") || source.includes("showcase")) return "Заказать сайт";
  return "Оставить заявку";
}

function applySaleMode(saleActive) {
  document.documentElement.classList.toggle("sale-expired", !saleActive);
  document.documentElement.classList.toggle("sale-active", saleActive);

  document.querySelectorAll("[data-package]").forEach((button) => {
    const plan = pricingPlans.find((item) => item.key === button.dataset.package);
    if (!plan) return;
    button.dataset.packagePrice = planDisplayPrice(plan, saleActive);
    button.dataset.regularPrice = saleActive ? plan.price : "";
    button.textContent = planButtonLabel(plan, saleActive);
    const card = button.closest("article");
    const price = card?.querySelector("strong");
    if (price) {
      price.innerHTML = saleActive
        ? `<span class="price-sale-current">${plan.salePrice}</span><span class="price-sale-old">обычно ${plan.price}</span>`
        : `<span class="price-sale-current">${plan.price}</span>`;
    }
  });

  const quickNote = document.querySelector(".quick-price-note");
  if (quickNote) {
    quickNote.innerHTML = saleActive
      ? `<strong>Минимальный запуск по акции:</strong> START 5 000 Kč / ≈200 € + домен примерно 150-300 Kč в год. Для обычного лендинга хостинг может быть 0 Kč. Таймер: <b data-sale-countdown>03:00:00</b>.`
      : `<strong>Минимальный запуск:</strong> START 10 000 Kč / ≈400 € + домен примерно 150-300 Kč в год. Для обычного лендинга хостинг может быть 0 Kč.`;
  }

  if (floatingCta) {
    const title = floatingCta.querySelector("strong");
    const text = floatingCta.querySelector("span");
    if (title) title.innerHTML = saleActive ? `Скидка 50% ещё: <b data-sale-countdown>03:00:00</b>` : "Готовы обсудить сайт?";
    if (text) text.textContent = saleActive ? "Сайт по акции от 5 000 Kč." : "Пакеты START / PLUS / PRO от 10 000 Kč.";
  }

  document.querySelectorAll("[data-open-lead][data-sale-source]:not([data-package])").forEach((button) => {
    if (!button.dataset.saleLabel) button.dataset.saleLabel = button.textContent.trim();
    button.textContent = saleActive ? button.dataset.saleLabel : normalLeadLabel(button.dataset.saleSource || "");
  });

  const heroSaleText = document.querySelector(".showcase-top strong");
  if (heroSaleText) heroSaleText.textContent = saleActive ? "по акции от 5 000 Kč / ≈200 €" : "от 10 000 Kč / ≈400 €";

  const featuredMeta = document.querySelector(".featured-demo-card .project-meta span");
  if (featuredMeta) featuredMeta.textContent = saleActive ? "SALE START 5 000 Kč / ≈200 €" : "START 10 000 Kč / ≈400 €";

  const quickEyebrow = document.querySelector(".quick-pricing-section .eyebrow");
  if (quickEyebrow) quickEyebrow.textContent = saleActive ? "Акция -50% на первые заказы" : "Цены";
  const quickTitle = document.querySelector("#quickPricingTitle");
  if (quickTitle) quickTitle.textContent = saleActive ? "3 пакета сайта со скидкой 50%" : "3 пакета сайта";
  const quickPricingText = document.querySelector(".quick-pricing-section .section-head p");
  if (quickPricingText) {
    quickPricingText.textContent = saleActive
      ? "Базовая цена считается в Kč. По акции START начинается от 5 000 Kč / ≈200 €, если проект подходит под готовый demo-шаблон."
      : "Базовая цена считается в Kč. START начинается от 10 000 Kč / ≈400 €, если проект подходит под готовый demo-шаблон.";
  }

  const pricingIntro = document.querySelector(".pricing-intro");
  const pricingEyebrow = pricingIntro?.querySelector(".eyebrow");
  const pricingTitle = pricingIntro?.querySelector("h2");
  if (pricingEyebrow) pricingEyebrow.textContent = saleActive ? "Цены по акции" : "Цены";
  if (pricingTitle) pricingTitle.textContent = saleActive ? "3 пакета сайта со скидкой 50%" : "3 пакета сайта";
  const hostingLaunch = document.querySelector(".hosting-note div span");
  if (hostingLaunch) {
    hostingLaunch.textContent = saleActive
      ? "START по акции 5 000 Kč / ≈200 € + домен примерно 150-300 Kč / год + бесплатный хостинг."
      : "START 10 000 Kč / ≈400 € + домен примерно 150-300 Kč / год + бесплатный хостинг.";
  }

  document.querySelectorAll(".trust-row span").forEach((span) => {
    if (/акци/i.test(span.textContent)) span.hidden = !saleActive;
  });

  renderCategories(document.querySelector("[data-category-filter].active")?.dataset.categoryFilter || "all");
  renderProjects(document.querySelector("[data-filter].active")?.dataset.filter || "all");
}

function updateSaleCountdowns() {
  const state = getSaleState();
  const saleActive = isSaleActive(state);
  const label = saleActive ? formatSaleTime(state.remainingMs) : "";
  document.querySelectorAll("[data-sale-countdown]").forEach((item) => {
    item.textContent = label;
  });
  if (lastSaleActive !== saleActive) {
    lastSaleActive = saleActive;
    applySaleMode(saleActive);
  }
}

function planSalePrice(plan) {
  return plan ? planDisplayPrice(plan) : "";
}

function saleMetadata(sourceCta = "sale_cta") {
  const state = getSaleState();
  return {
    promoCode: saleConfig.code,
    promoLabel: saleConfig.label,
    discountPercent: saleConfig.discountPercent,
    sourceCta,
    saleStartedAt: new Date(state.startedAt).toISOString(),
    saleExpiresAt: new Date(state.expiresAt).toISOString(),
    saleRemaining: state.expired ? "expired" : formatSaleTime(state.remainingMs)
  };
}

function withSalePayload(payload = {}, sourceCta = "sale_cta") {
  const data = typeof payload === "string" ? { title: payload } : { ...(payload || {}) };
  if (!isSaleActive() || data.fixedPrice || data.noSale) return data;
  return {
    ...data,
    sale: true,
    ...saleMetadata(sourceCta)
  };
}

function openSaleLead(payload, sourceCta) {
  openModal("lead", withSalePayload(payload, sourceCta));
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
    category: buildCategoryModal
  };
  modalContent.innerHTML = builders[type](payload);
  const isDemoPreview = type === "preview" && payload?.demoUrl && !payload.demoUrl.startsWith("http");
  appModal.classList.toggle("demo-open", Boolean(isDemoPreview));
  appModal.classList.add("open");
  appModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  bindModalActions();
  updateSaleCountdowns();
}

function normalizeLeadPayload(payload) {
  if (!payload) return { selected: "", selectedPackage: "", packagePrice: "", regularPrice: "", sale: false, requestType: "", messageSource: "", messagePrefill: "" };
  if (typeof payload === "string") return { selected: payload, selectedPackage: "", packagePrice: "", regularPrice: "", sale: false, requestType: "", messageSource: "", messagePrefill: "" };
  if (payload.kind === "package") {
    return {
      selected: payload.template || "",
      selectedPackage: payload.package || "",
      packagePrice: payload.price || "",
      regularPrice: payload.regularPrice || "",
      sale: Boolean(payload.sale && isSaleActive()),
      promoCode: payload.promoCode || "",
      promoLabel: payload.promoLabel || "",
      discountPercent: payload.discountPercent || "",
      sourceCta: payload.sourceCta || "",
      saleStartedAt: payload.saleStartedAt || "",
      saleExpiresAt: payload.saleExpiresAt || "",
      saleRemaining: payload.saleRemaining || "",
      requestType: payload.requestType || "",
      messageSource: payload.messageSource || "",
      messagePrefill: payload.messagePrefill || ""
    };
  }
  const plan = pricingPlans.find((item) => item.key === payload.selectedPackage || item.title === payload.selectedPackage);
  return {
    selected: payload.title || "",
    selectedPackage: payload.selectedPackage || "",
    packagePrice: payload.packagePrice || (payload.sale ? planSalePrice(plan) : ""),
    regularPrice: payload.regularPrice || plan?.price || "",
    sale: Boolean(payload.sale && isSaleActive()),
    promoCode: payload.promoCode || "",
    promoLabel: payload.promoLabel || "",
    discountPercent: payload.discountPercent || "",
    sourceCta: payload.sourceCta || "",
    saleStartedAt: payload.saleStartedAt || "",
    saleExpiresAt: payload.saleExpiresAt || "",
    saleRemaining: payload.saleRemaining || "",
    requestType: payload.requestType || "",
    messageSource: payload.messageSource || "",
    messagePrefill: payload.messagePrefill || ""
  };
}

function leadPackagePayload(plan, template = "", sale = false, sourceCta = "package_button") {
  const saleActive = sale && isSaleActive();
  const payload = {
    kind: "package",
    template,
    package: plan.key,
    price: planDisplayPrice(plan, saleActive),
    regularPrice: saleActive ? plan.price : ""
  };
  if (saleActive) Object.assign(payload, withSalePayload({}, sourceCta));
  return {
    ...payload,
    kind: "package",
    template,
    package: plan.key
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
  const saleActive = isSaleActive();
  const fixedProject = Boolean(project.fixedPrice);

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
          ${fixedProject ? `<span>${project.price}</span>` : (saleActive ? `<span>по акции от 5 000 Kč / ≈200 €</span><span>обычно от 10 000 Kč / ≈400 €</span>` : `<span>${project.price || "от 10 000 Kč / ≈400 €"}</span>`)}
          <span>${project.timeline}</span>
        </div>
        <button class="btn primary" type="button" data-lead-project="${project.id}" data-sale-source="project_detail_sale">${saleActive && !fixedProject ? "Хочу такой сайт по акции" : "Хочу такой сайт"}</button>
      </div>
    </div>`;
}

function buildPricingModal() {
  const saleActive = isSaleActive();
  return `
    <div class="modal-header">
      <p class="eyebrow">${saleActive ? "Цены по акции -50%" : "Цены"}</p>
      <h2 id="modalTitle">START / PLUS / PRO</h2>
      <p>${saleActive ? `Один таймер действует на все пакеты: <strong data-sale-countdown>03:00:00</strong>. ` : ""}Для обычного сайта-витрины или лендинга хостинг можно сделать бесплатно.</p>
    </div>
    <div class="pricing-modal-grid">
      ${pricingPlans.map((plan) => `
        <article class="${plan.recommended ? "is-recommended" : ""} ${plan.premium ? "is-premium" : ""}">
          ${plan.recommended ? "<span class=\"plan-badge\">Популярно / оптимально</span>" : ""}
          ${saleActive ? `<span class="sale-card-badge">-50% сегодня</span>` : ""}
          <h3>${plan.title}</h3>
          <p class="plan-subtitle">${plan.subtitle}</p>
          <div class="sale-price-block">
            ${saleActive ? `<del>${plan.price}</del><strong>${plan.salePrice}</strong>` : `<strong>${plan.price}</strong>`}
          </div>
          <p>${plan.goodFor}</p>
          <span>${plan.timeline}</span>
          <div class="plan-extras">${plan.extras.map((line) => `<small>${line}</small>`).join("")}</div>
          <ul>${featureList(plan.includes)}</ul>
          <button class="btn primary" type="button" data-lead-package="${plan.key}" data-sale-source="pricing_${plan.key.toLowerCase()}_sale50">${planButtonLabel(plan, saleActive)}</button>
        </article>`).join("")}
    </div>
    <div class="pricing-note">
      <h3>${saleActive ? "Минимальный запуск по акции" : "Минимальный запуск"}</h3>
      <p>${saleActive ? "START 5 000 Kč / ≈200 €" : "START 10 000 Kč / ≈400 €"} + домен примерно 150-300 Kč / год + бесплатный хостинг.</p>
      <p>То есть для простого сайта-витрины ежемесячный хостинг может быть 0 Kč.</p>
      <small>Не входит в цену: домен, платные формы, платный хостинг, рекламный бюджет, логотип, профессиональные фото, переводы и сложные функции оплачиваются отдельно.</small>
    </div>`;
}

function buildLeadModal(projectOrPlan = "") {
  const leadData = normalizeLeadPayload(projectOrPlan);
  const saleActive = isSaleActive();
  const selected = leadData.selected;
  const selectedPackage = leadData.selectedPackage;
  const selectedPlan = pricingPlans.find((plan) => plan.key === selectedPackage);
  const packagePrice = leadData.packagePrice || (selectedPlan ? planDisplayPrice(selectedPlan, saleActive) : "");
  const regularPrice = leadData.regularPrice || (selectedPlan ? selectedPlan.price : "");
  const isSale = saleActive && (leadData.sale || Boolean(leadData.promoCode));
  const promoCode = leadData.promoCode || (isSale ? saleConfig.code : "");
  const promoLabel = leadData.promoLabel || (isSale ? saleConfig.label : "");
  const discountPercent = leadData.discountPercent || (isSale ? saleConfig.discountPercent : "");
  const promoStatus = isSale ? "ACTIVE" : "";
  const requestType = leadData.requestType || "";
  const messageSource = leadData.messageSource || "";
  const saleNote = isSale
    ? `<div class="sale-form-notice">
        <strong>Вы выбрали заявку по акции 50%</strong>
        <span>Промокод: ${promoCode}</span>
        ${selected ? `<span>Шаблон: ${selected}</span>` : ""}
        ${selectedPackage ? `<span>Пакет: ${selectedPackage}</span>` : ""}
        ${packagePrice ? `<span>Цена по акции: ${packagePrice}</span>` : ""}
        ${regularPrice ? `<span>Обычная цена: ${regularPrice}</span>` : ""}
        <span>До конца предложения: <b data-sale-countdown>03:00:00</b></span>
      </div>`
    : "";
  const messageValue = leadData.messagePrefill || (isSale
    ? `Хочу похожий сайт по акции 50%. Demo/шаблон: ${selected || "нужно подобрать"}. Пакет: ${selectedPackage || "нужно обсудить"}.`
    : "");
  return `
    <div class="modal-header">
      <p class="eyebrow">Заявка</p>
      <h2 id="modalTitle">Опишите задачу</h2>
      <p>Заявка отправится на email Николая. Быстрее всего можно написать напрямую в Facebook / Messenger, Telegram остаётся как второй канал.</p>
    </div>
    ${requestType === "consultant_popup" ? `<div class="sale-form-notice">
      <strong>Вы пришли из помощника подбора</strong>
      <span>Напишите, для какого бизнеса нужен сайт — я предложу подходящий demo-вариант и примерную цену.</span>
    </div>` : ""}
    ${saleNote}
    <form class="lead-form" id="leadForm" action="https://forminit.com/f/kshbr37bfe4" method="POST">
      <input type="hidden" name="selected_template" value="${selected}">
      <input type="hidden" name="selected_package" value="${selectedPackage}">
      <input type="hidden" name="package_price" value="${packagePrice}">
      <input type="hidden" name="regular_price" value="${regularPrice}">
      <input type="hidden" name="discount_price" value="${isSale ? packagePrice : ""}">
      <input type="hidden" name="promo_code" value="${promoCode}">
      <input type="hidden" name="promo_label" value="${promoLabel}">
      <input type="hidden" name="discount_percent" value="${discountPercent}">
      <input type="hidden" name="promo_status" value="${promoStatus}">
      <input type="hidden" name="source_cta" value="${leadData.sourceCta || ""}">
      <input type="hidden" name="request_type" value="${requestType}">
      <input type="hidden" name="message_source" value="${messageSource}">
      <input type="hidden" name="sale_started_at" value="${leadData.saleStartedAt || ""}">
      <input type="hidden" name="sale_expires_at" value="${leadData.saleExpiresAt || ""}">
      <input type="hidden" name="sale_remaining" value="${leadData.saleRemaining || ""}">
      <input type="hidden" name="fi-sender-fullName" value="">
      <input type="hidden" name="fi-sender-email" value="">
      <input type="hidden" name="fi-text-phone" value="">
      <input type="hidden" name="fi-text-telegramWhatsapp" value="">
      <input type="hidden" name="fi-text-businessType" value="">
      <input type="hidden" name="fi-text-selectedTemplate" value="${selected}">
      <input type="hidden" name="fi-text-selectedPackage" value="${selectedPackage}">
      <input type="hidden" name="fi-text-packagePrice" value="${packagePrice}">
      <input type="hidden" name="fi-text-regularPrice" value="${regularPrice}">
      <input type="hidden" name="fi-text-discountPrice" value="${isSale ? packagePrice : ""}">
      <input type="hidden" name="fi-text-promoCode" value="${promoCode}">
      <input type="hidden" name="fi-text-promoLabel" value="${promoLabel}">
      <input type="hidden" name="fi-text-discountPercent" value="${discountPercent}">
      <input type="hidden" name="fi-text-promoStatus" value="${promoStatus}">
      <input type="hidden" name="fi-text-sourceCta" value="${leadData.sourceCta || ""}">
      <input type="hidden" name="fi-text-requestType" value="${requestType}">
      <input type="hidden" name="fi-text-messageSource" value="${messageSource}">
      <input type="hidden" name="fi-text-saleStartedAt" value="${leadData.saleStartedAt || ""}">
      <input type="hidden" name="fi-text-saleExpiresAt" value="${leadData.saleExpiresAt || ""}">
      <input type="hidden" name="fi-text-saleRemaining" value="${leadData.saleRemaining || ""}">
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
          <option>Подготовка сайта к запуску</option>
        </select></label>
      </div>
      <div class="field-row">
        <label>Бюджет<select name="budget">
          <option>Нужно обсудить</option>
          <option>до 10 000 Kč</option>
          <option ${selectedPackage === "Start" ? "selected" : ""}>${saleActive ? "START по акции 5 000 Kč / ≈200 €" : "START 10 000 Kč / ≈400 €"}</option>
          <option ${selectedPackage === "Plus" ? "selected" : ""}>${saleActive ? "PLUS по акции 10 000 Kč / ≈400 €" : "PLUS 20 000 Kč / ≈800 €"}</option>
          <option ${selectedPackage === "Pro" ? "selected" : ""}>${saleActive ? "PRO по акции от 15 000 Kč / от ≈600 €" : "PRO от 30 000 Kč / от ≈1 200 €"}</option>
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
          ${pricingPlans.map((plan) => `<option value="${plan.key}" ${selectedPackage === plan.key ? "selected" : ""}>${plan.title} — ${saleActive ? `акция ${plan.salePrice} / обычно ${plan.price}` : plan.price} — ${plan.subtitle}</option>`).join("")}
        </select></label>
        <label>Цена пакета<input name="package_price_visible" value="${packagePrice}" placeholder="Автоматически после выбора" readonly></label>
      </div>
      <label>Что нужно сделать?<textarea name="message" rows="5" required placeholder="Опишите услугу, сроки, материалы, что уже есть">${messageValue}</textarea></label>
      <button class="btn dark full" type="submit">Отправить заявку</button>
      <div class="messenger-row">
        <a href="https://www.facebook.com/share/1D8igDrmuT/" target="_blank" rel="noopener">Facebook</a>
        <a href="https://t.me/pracehub" target="_blank" rel="noopener">Telegram @pracehub</a>
        <a href="mailto:nikyrchenko71@gmail.com">Email</a>
      </div>
    </form>`;
}

function buildCategoryModal(category) {
  const saleActive = isSaleActive();
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
          <span>${categoryPriceLabel(category, saleActive)}</span>
          ${saleActive && !category.fixedPrice ? `<span>обычно от 10 000 Kč / ≈400 €</span>` : ""}
          <span>${category.timeline}</span>
          <span>${category.badge}</span>
        </div>
        <h3>Что можно включить</h3>
        <ul>${featureList(category.features)}</ul>
        <div class="modal-actions-row">
          ${category.demoUrl ? `<a class="btn dark" href="${category.demoUrl}">Посмотреть шаблон</a>` : ""}
          <button class="btn primary" type="button" data-lead-category="${category.id}" data-sale-source="category_detail_sale">${saleActive && !category.fixedPrice ? "Заказать со скидкой -50%" : "Заказать похожий"}</button>
        </div>
      </div>
    </div>`;
}

function bindModalActions() {
  modalContent.querySelectorAll("[data-lead-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = projects.find((item) => item.id === button.dataset.leadProject) || {};
      openSaleLead({
        ...project,
        selectedPackage: project.fixedPrice ? "Mini e-shop START" : project.selectedPackage,
        packagePrice: project.fixedPrice ? project.price : project.packagePrice,
        regularPrice: project.fixedPrice ? project.price : project.regularPrice
      }, button.dataset.saleSource || "project_modal_sale");
    });
  });
  modalContent.querySelectorAll("[data-lead-plan]").forEach((button) => {
    button.addEventListener("click", () => openSaleLead(button.dataset.leadPlan, button.dataset.saleSource || "plan_modal_sale"));
  });
  modalContent.querySelectorAll("[data-lead-package]").forEach((button) => {
    const plan = pricingPlans.find((item) => item.key === button.dataset.leadPackage);
    button.addEventListener("click", () => openModal("lead", leadPackagePayload(plan, "", true, button.dataset.saleSource || "pricing_modal_sale")));
  });
  modalContent.querySelectorAll("[data-details-project]").forEach((button) => {
    button.addEventListener("click", () => openModal("details", projects.find((item) => item.id === button.dataset.detailsProject)));
  });
  modalContent.querySelectorAll("[data-lead-category]").forEach((button) => {
    const startPlan = pricingPlans.find((item) => item.key === "Start");
    button.addEventListener("click", () => {
      const category = siteCategories.find((item) => item.id === button.dataset.leadCategory) || {};
      openSaleLead({
        ...category,
        selectedPackage: "Start",
        packagePrice: category.fixedPrice ? category.price : planDisplayPrice(startPlan),
        regularPrice: category.fixedPrice ? category.price : (isSaleActive() ? startPlan.price : "")
      }, button.dataset.saleSource || "category_modal_sale");
    });
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
      packagePriceInput.value = plan ? planDisplayPrice(plan, isSaleActive()) : "";
    });
  }
  if (leadForm) leadForm.addEventListener("submit", () => {
    const state = getSaleState();
    const saleActive = isSaleActive(state);
    const visibleTemplate = leadForm.querySelector("[name='selected_template_visible']");
    const hiddenTemplate = leadForm.querySelector("[name='selected_template']");
    if (visibleTemplate && hiddenTemplate) hiddenTemplate.value = visibleTemplate.value;
    const visiblePackage = leadForm.querySelector("[name='selected_package_visible']");
    const hiddenPackage = leadForm.querySelector("[name='selected_package']");
    const visiblePackagePrice = leadForm.querySelector("[name='package_price_visible']");
    const hiddenPackagePrice = leadForm.querySelector("[name='package_price']");
    if (visiblePackage && hiddenPackage) hiddenPackage.value = visiblePackage.value;
    const selectedPlan = pricingPlans.find((plan) => plan.key === visiblePackage?.value);
    if (visiblePackagePrice && selectedPlan) visiblePackagePrice.value = planDisplayPrice(selectedPlan, saleActive);
    if (visiblePackagePrice && hiddenPackagePrice) hiddenPackagePrice.value = visiblePackagePrice.value;
    const hiddenRegularPrice = leadForm.querySelector("[name='regular_price']");
    const hiddenDiscountPrice = leadForm.querySelector("[name='discount_price']");
    const hiddenSaleRemaining = leadForm.querySelector("[name='sale_remaining']");
    const hiddenSaleStarted = leadForm.querySelector("[name='sale_started_at']");
    const hiddenSaleExpires = leadForm.querySelector("[name='sale_expires_at']");
    const hiddenPromo = leadForm.querySelector("[name='promo_code']");
    const hiddenPromoLabel = leadForm.querySelector("[name='promo_label']");
    const hiddenDiscountPercent = leadForm.querySelector("[name='discount_percent']");
    const hiddenPromoStatus = leadForm.querySelector("[name='promo_status']");
    if (selectedPlan && hiddenRegularPrice) hiddenRegularPrice.value = selectedPlan.price;
    if (hiddenDiscountPrice) hiddenDiscountPrice.value = saleActive ? (visiblePackagePrice?.value || "") : "";
    if (hiddenPromo) hiddenPromo.value = saleActive ? saleConfig.code : "";
    if (hiddenPromoLabel) hiddenPromoLabel.value = saleActive ? saleConfig.label : "";
    if (hiddenDiscountPercent) hiddenDiscountPercent.value = saleActive ? saleConfig.discountPercent : "";
    if (hiddenPromoStatus) hiddenPromoStatus.value = saleActive ? "ACTIVE" : (state.expired ? "EXPIRED" : "");
    if (hiddenSaleStarted) hiddenSaleStarted.value = saleActive ? new Date(state.startedAt).toISOString() : "";
    if (hiddenSaleExpires) hiddenSaleExpires.value = saleActive ? new Date(state.expiresAt).toISOString() : "";
    if (hiddenSaleRemaining) hiddenSaleRemaining.value = saleActive ? formatSaleTime(state.remainingMs) : "";
    const messageField = leadForm.querySelector("[name='message']");
    const hiddenSource = leadForm.querySelector("[name='source_cta']");
    const summaryLines = saleActive
      ? [
        "SALE 50%",
        `Пакет: ${hiddenPackage?.value || "не выбран"}`,
        `Обычная цена: ${hiddenRegularPrice?.value || "не указана"}`,
        `Цена по акции: ${hiddenDiscountPrice?.value || hiddenPackagePrice?.value || "не указана"}`,
        `Промокод: ${saleConfig.code}`,
        `Источник кнопки: ${hiddenSource?.value || "lead_form"}`,
        `Осталось времени по таймеру: ${hiddenSaleRemaining?.value || "не указано"}`
      ]
      : [
        "Заявка без активной акции",
        `Пакет: ${hiddenPackage?.value || "не выбран"}`,
        `Цена пакета: ${hiddenPackagePrice?.value || hiddenRegularPrice?.value || "не указана"}`,
        `Источник кнопки: ${hiddenSource?.value || "lead_form"}`
      ];
    if (messageField && !messageField.value.includes("SALE 50%") && !messageField.value.includes("Заявка без активной акции")) {
      messageField.value = `${messageField.value.trim()}\n\n${summaryLines.join("\n")}`.trim();
    }
    const syncPairs = [
      ["name", "fi-sender-fullName"],
      ["email", "fi-sender-email"],
      ["phone", "fi-text-phone"],
      ["telegram_whatsapp", "fi-text-telegramWhatsapp"],
      ["business_type", "fi-text-businessType"],
      ["selected_template", "fi-text-selectedTemplate"],
      ["selected_package", "fi-text-selectedPackage"],
      ["package_price", "fi-text-packagePrice"],
      ["regular_price", "fi-text-regularPrice"],
      ["discount_price", "fi-text-discountPrice"],
      ["promo_code", "fi-text-promoCode"],
      ["promo_label", "fi-text-promoLabel"],
      ["discount_percent", "fi-text-discountPercent"],
      ["promo_status", "fi-text-promoStatus"],
      ["source_cta", "fi-text-sourceCta"],
      ["request_type", "fi-text-requestType"],
      ["message_source", "fi-text-messageSource"],
      ["sale_started_at", "fi-text-saleStartedAt"],
      ["sale_expires_at", "fi-text-saleExpiresAt"],
      ["sale_remaining", "fi-text-saleRemaining"],
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
    if (saleActive) {
      sessionStorage.setItem("nikolaj_last_sale_lead", JSON.stringify({
        promo_code: hiddenPromo?.value || "",
        promo_status: "ACTIVE",
        selected_package: hiddenPackage?.value || "",
        selected_template: hiddenTemplate?.value || "",
        discount_price: hiddenDiscountPrice?.value || "",
        regular_price: hiddenRegularPrice?.value || ""
      }));
    } else {
      sessionStorage.removeItem("nikolaj_last_sale_lead");
    }
    showToast("Отправляю заявку на email.");
  });
}

function packagePayloadFromButton(button) {
  const saleActive = isSaleActive();
  const startPlan = pricingPlans.find((item) => item.key === "Start");
  const isFixedNoSale = button?.dataset?.noSale === "true";
  if (!button?.dataset?.package) {
    return button?.dataset?.saleSource && !isFixedNoSale ? withSalePayload({
      selectedPackage: "Start",
      packagePrice: planDisplayPrice(startPlan, saleActive),
      regularPrice: saleActive ? startPlan.price : ""
    }, button.dataset.saleSource) : "";
  }
  const plan = pricingPlans.find((item) => item.key === button.dataset.package);
  const isSale = !isFixedNoSale && saleActive && Boolean(button.dataset.saleSource || button.dataset.regularPrice);
  return {
    kind: "package",
    template: button.dataset.template || "",
    package: button.dataset.package,
    price: plan ? planDisplayPrice(plan, saleActive) : button.dataset.packagePrice || "",
    regularPrice: isSale ? (button.dataset.regularPrice || plan?.price || "") : "",
    fixedPrice: isFixedNoSale,
    noSale: isFixedNoSale,
    ...(isSale ? saleMetadata(button.dataset.saleSource || "package_button_sale") : {})
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

function categoryPriceLabel(category, saleActive = isSaleActive()) {
  if (category.fixedPrice) return category.price;
  return saleActive ? "по акции от 5 000 Kč / ≈200 €" : (category.price || "от 10 000 Kč / ≈400 €");
}

function renderCategories(filter = "all") {
  if (!categoryGrid) return;
  const saleActive = isSaleActive();
  const startPlan = pricingPlans.find((item) => item.key === "Start");
  const list = filter === "all" ? siteCategories : siteCategories.filter((category) => category.filter === filter);
  categoryGrid.innerHTML = list.map((category) => `
    <article class="category-card ${category.highlight ? `category-card--${category.highlight}` : ""}">
      ${renderCategoryVisual(category)}
      <div class="category-body">
        <div class="category-labels">
          <span>${category.badge}</span>
          <span>${category.status}</span>
          ${saleActive && !category.fixedPrice ? `<span class="sale-card-badge">-50% сегодня</span>` : ""}
        </div>
        <h3>${category.title}</h3>
        <p>${category.description}</p>
        <div class="project-meta">
          <span>${categoryPriceLabel(category, saleActive)}</span>
          <span>${category.timeline}</span>
        </div>
        <ul>${featureList(category.features.slice(0, 4))}</ul>
        <div class="category-actions">
          ${category.demoUrl ? `<a class="btn dark" href="${category.demoUrl}">Посмотреть шаблон</a>` : ""}
          <button class="btn primary" type="button" data-order-category="${category.id}">${saleActive && !category.fixedPrice ? "Заказать со скидкой -50%" : "Заказать похожий"}</button>
          <button class="btn secondary" type="button" data-category-details="${category.id}">Подробнее</button>
        </div>
      </div>
    </article>
  `).join("");
  categoryGrid.querySelectorAll("[data-order-category]").forEach((button) => {
    button.addEventListener("click", () => {
      const category = siteCategories.find((item) => item.id === button.dataset.orderCategory) || {};
      openSaleLead({
        ...category,
        selectedPackage: "Start",
        packagePrice: category.fixedPrice ? category.price : planDisplayPrice(startPlan, isSaleActive()),
        regularPrice: category.fixedPrice ? category.price : (isSaleActive() ? startPlan.price : "")
      }, "category_card_sale_button");
    });
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
      const planKey = service.id === "business-site" ? "Plus" : service.id === "mvp" ? "Pro" : "Start";
      const plan = pricingPlans.find((item) => item.key === planKey);
      const saleActive = isSaleActive();
      openSaleLead({
        title: service.title,
        selectedPackage: planKey,
        packagePrice: planDisplayPrice(plan, saleActive),
        regularPrice: saleActive ? plan.price : ""
      }, "service_card_sale_button");
    });
  });
}

function renderProjects(filter = "all") {
  const saleActive = isSaleActive();
  const startPlan = pricingPlans.find((item) => item.key === "Start");
  const list = filter === "all" ? projects : projects.filter((project) => project.group === filter);
  projectGrid.innerHTML = list.map((project) => `
    <article class="project-card ${project.highlight ? `project-card--${project.highlight}` : ""}" data-card="${project.id}">
      <img src="${project.image}" alt="${project.title} preview">
      <div class="project-body">
        <span class="project-label">${project.label}</span>
        ${saleActive && !project.fixedPrice ? `<span class="sale-card-badge">-50% сегодня · от 5 000 Kč</span>` : ""}
        <h3>${project.title}</h3>
        <p>${project.short}</p>
        <div class="project-meta">
          <span>${project.fixedPrice ? project.price : (saleActive ? "по акции от 5 000 Kč / ≈200 €" : "от 10 000 Kč / ≈400 €")}</span>
          <span>${project.timeline}</span>
        </div>
        <ul>${featureList(project.features.slice(0, 3))}</ul>
        <div class="project-actions">
          ${project.group === "template" && project.demoUrl
            ? `<a href="${project.demoUrl}" data-demo-link="${project.id}">Посмотреть шаблон</a>`
            : `<button type="button" data-preview="${project.id}">Посмотреть проект</button>`}
          <button type="button" data-details="${project.id}">Подробнее</button>
          <button type="button" data-order="${project.id}">${saleActive && !project.fixedPrice ? "Заказать со скидкой -50%" : "Заказать похожий"}</button>
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
    button.addEventListener("click", () => {
      const project = projects.find((item) => item.id === button.dataset.order) || {};
      openSaleLead({
        ...project,
        selectedPackage: "Start",
        packagePrice: project.fixedPrice ? project.price : planDisplayPrice(startPlan, isSaleActive()),
        regularPrice: project.fixedPrice ? project.price : (isSaleActive() ? startPlan.price : "")
      }, "project_card_sale_button");
    });
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

document.querySelectorAll("[data-close-modal]").forEach((item) => item.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeModal();
  }
});

function setupPreloader() {
  const preloader = document.querySelector("#sitePreloader");
  if (!preloader) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seen = sessionStorage.getItem(PRELOADER_KEY) === "1";
  const hide = () => {
    preloader.classList.add("is-hidden");
    document.documentElement.classList.remove("preloader-active");
    window.setTimeout(() => preloader.remove(), 520);
  };
  document.querySelectorAll(".hero-video, .hero-copy-video, .site-wallpaper-video").forEach((video) => {
    try { video.load(); } catch (error) {}
  });
  if (seen || reducedMotion) {
    hide();
    return;
  }
  sessionStorage.setItem(PRELOADER_KEY, "1");
  document.documentElement.classList.add("preloader-active");
  window.setTimeout(hide, 1650);
  window.setTimeout(hide, 2200);
}

document.querySelectorAll(".hero-video, .hero-copy-video, .site-wallpaper-video").forEach((video) => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    video.classList.add("is-disabled");
    video.pause();
    return;
  }
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");

  const startVideo = () => {
    if (video.dataset.started === "1") return;
    video.dataset.started = "1";
    const reveal = () => {
      video.classList.add("is-ready");
    };
    if (video.readyState >= 2) reveal();
    video.addEventListener("loadeddata", reveal, { once: true });
    video.addEventListener("canplay", reveal, { once: true });
    video.addEventListener("playing", reveal, { once: true });
    try { video.load(); } catch (error) {}
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

function openContactPopupLead(kind = "demo_match") {
  const startPlan = pricingPlans.find((item) => item.key === "Start");
  const saleActive = isSaleActive();
  const isDemoMatch = kind === "demo_match";
  openModal("lead", withSalePayload({
    title: isDemoMatch ? "Бесплатный подбор demo под бизнес" : "Заявка на сайт",
    selectedPackage: "Start",
    packagePrice: planDisplayPrice(startPlan, saleActive),
    regularPrice: saleActive ? startPlan.price : "",
    sourceCta: isDemoMatch ? "scroll50_popup_demo_match" : "scroll50_popup_form",
    requestType: isDemoMatch ? "free_demo_consultation" : "consultant_popup",
    messageSource: "mobile_contact_widget",
    messagePrefill: isDemoMatch
      ? "Хочу бесплатную консультацию и подбор demo-шаблона под мой бизнес. Подскажите подходящий вариант и примерную цену."
      : "Хочу оставить заявку на сайт. Подскажите подходящий пакет, сроки и примерную цену."
  }, isDemoMatch ? "scroll50_popup_demo_match" : "scroll50_popup_form"));
}

function showContactPopup(source = "scroll50_popup") {
  if (sessionStorage.getItem(CONTACT_POPUP_CLOSED_KEY) === "1" || document.querySelector(".lead-capture-popup") || appModal.classList.contains("open")) return false;
  const popup = document.createElement("aside");
  popup.className = "lead-capture-popup";
  popup.setAttribute("aria-live", "polite");
  popup.innerHTML = `
    <div class="lead-capture-top">
      <button class="lead-capture-toggle" type="button" aria-label="Свернуть виджет" aria-expanded="true">−</button>
      <div class="lead-capture-title">
        <strong>Связаться с нами</strong>
        <span>Бесплатно подберу demo под ваш бизнес</span>
      </div>
      <button class="lead-capture-close" type="button" aria-label="Закрыть">×</button>
    </div>
    <div class="lead-capture-body">
      <p>Напишите в Facebook или оставьте заявку — подберу подходящий demo-шаблон и скажу примерную цену.</p>
      <small>Консультация бесплатная. Можно начать с готового шаблона и адаптировать под ваш бизнес.</small>
      <div class="lead-capture-actions">
        <a class="btn facebook" href="${FACEBOOK_URL}" target="_blank" rel="noopener" data-source-cta="${source}_facebook">Написать в Facebook</a>
        <button class="btn primary" type="button" data-contact-demo>Подобрать demo бесплатно</button>
        <button class="btn dark" type="button" data-contact-apply>Оставить заявку</button>
        <button class="btn soft" type="button" data-contact-collapse>Свернуть</button>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  document.body.classList.add("contact-popup-visible");
  requestAnimationFrame(() => popup.classList.add("visible"));
  const toggleButton = popup.querySelector(".lead-capture-toggle");
  const collapse = () => {
    popup.classList.add("is-collapsed");
    toggleButton.textContent = "+";
    toggleButton.setAttribute("aria-label", "Развернуть виджет");
    toggleButton.setAttribute("aria-expanded", "false");
  };
  const expand = () => {
    popup.classList.remove("is-collapsed");
    toggleButton.textContent = "−";
    toggleButton.setAttribute("aria-label", "Свернуть виджет");
    toggleButton.setAttribute("aria-expanded", "true");
  };
  const close = () => {
    sessionStorage.setItem(CONTACT_POPUP_CLOSED_KEY, "1");
    document.body.classList.remove("contact-popup-visible");
    popup.classList.remove("visible");
    window.setTimeout(() => popup.remove(), 260);
  };
  const removeWithoutClosingSession = () => {
    document.body.classList.remove("contact-popup-visible");
    popup.classList.remove("visible");
    window.setTimeout(() => popup.remove(), 260);
  };
  toggleButton.addEventListener("click", () => {
    if (popup.classList.contains("is-collapsed")) expand();
    else collapse();
  });
  popup.querySelector(".lead-capture-close").addEventListener("click", close);
  popup.querySelector("[data-contact-collapse]").addEventListener("click", collapse);
  popup.querySelector("[data-contact-demo]").addEventListener("click", () => {
    removeWithoutClosingSession();
    openContactPopupLead("demo_match");
  });
  popup.querySelector("[data-contact-apply]").addEventListener("click", () => {
    removeWithoutClosingSession();
    openContactPopupLead("lead_request");
  });
  return true;
}

let contactPopupTriggered = false;
function maybeShowContactPopup() {
  if (contactPopupTriggered || sessionStorage.getItem(CONTACT_POPUP_CLOSED_KEY) === "1") return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  if (progress >= 0.5) {
    contactPopupTriggered = showContactPopup("scroll50_popup");
  }
}

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
  const hero = document.querySelector(".hero");
  const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
  const videoStage = document.querySelector(".hero-video-stage");
  const videoHeight = videoStage ? videoStage.offsetHeight : 0;
  document.documentElement.classList.toggle("side-ribbons-visible", window.scrollY > Math.max(videoHeight - 80, 260));
  if (!ctaClosed) {
    const shouldShow = window.scrollY > Math.max(heroHeight + 80, 1400);
    floatingCta.classList.toggle("visible", shouldShow);
  }
}, { passive: true });

window.addEventListener("scroll", maybeShowContactPopup, { passive: true });
window.setTimeout(() => {
  maybeShowContactPopup();
}, 35000);

closeFloatingCta.addEventListener("click", () => {
  ctaClosed = true;
  sessionStorage.setItem(saleConfig.stickyClosedKey, "1");
  floatingCta.classList.remove("visible");
});

setupPreloader();
renderServices();
renderCategories();
renderProjects();
renderFaq();
updateSaleCountdowns();
window.setInterval(updateSaleCountdowns, 1000);
openLeadFromUrl();
