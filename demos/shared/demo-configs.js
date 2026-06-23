(function () {
  function demo(data) {
    const mediaSlug = data.mediaSlug || data.slug;
    const galleryImages = data.galleryImages || Array.from({ length: 15 }, (_, index) => {
      const number = String(index + 1).padStart(2, "0");
      return `../../assets/images/demo-media/${mediaSlug}/photo-${number}.jpg`;
    });
    const layouts = {
      "clinic-doctor": "clean",
      "law-accounting": "editorial",
      "auto-service": "garage",
      "cleaning": "fresh",
      "real-estate": "estate",
      "product-catalog": "catalog",
      "education": "academy",
      "personal-brand": "editorial",
      "event-photo": "gallery",
      "fitness": "bold",
      "hotel-apartment": "hospitality",
      "recruitment": "action",
      "start-landing": "startup",
      "business-website": "corporate",
      "mvp-platform": "product",
      "project-rescue": "rescue",
      "bug-fixing": "terminal"
    };
    return {
      layout: data.layout || layouts[mediaSlug] || "classic",
      heroImage: data.heroImage || galleryImages[0],
      ambientImage: data.ambientImage || galleryImages[7] || galleryImages[0],
      heroVideo: data.heroVideo || `../../assets/videos/demo-media/${mediaSlug}/hero.mp4`,
      ambientVideo: data.ambientVideo || `../../assets/videos/demo-media/${mediaSlug}/atmosphere.mp4`,
      galleryImages,
      info: [
        { label: "Формат", value: data.infoFormat || data.businessType },
        { label: "Запуск", value: data.timeline || "3-7 дней" },
        { label: "Пакет", value: data.packageHint || "START / PLUS / PRO" },
        { label: "Заявки", value: "форма + мессенджеры" }
      ],
      chips: data.chips || ["Мобильная версия", "Форма заявки", "Цены на странице", "Быстрый контакт"],
      ...data,
      metaTitle: data.metaTitle || `${data.templateName} | Nikolaj Dev`,
      metaDescription: data.metaDescription || data.subtitle
    };
  }

  window.demoConfigs = {
    "clinic-doctor": demo({
      slug: "clinic-doctor",
      brand: "Vita Clinic",
      descriptor: "appointments & trust",
      mark: "VC",
      templateName: "Clinic / Doctor Website Demo",
      businessType: "Clinic / Doctor",
      demoLabel: "DEMO-шаблон врача / клиники",
      heroLabel: "Medical services demo",
      image: "../../assets/images/categories/clinic-doctor.jpg",
      imageAlt: "Doctor and patient consultation",
      accent: "#0f9f9a",
      accent2: "#2563eb",
      dark: "#102027",
      soft: "#e7f7f6",
      bg: "#f6fbfb",
      title: "Сайт для врача или клиники с понятной записью",
      subtitle: "Услуги, специалисты, доверие, цены от, контакты и форма записи — без перегруза и без ложных медицинских обещаний.",
      introKicker: "Медицина / услуги",
      introTitle: "Пациенту нужно быстро понять, куда записаться и почему можно доверять",
      introText: "Для медицинских сайтов важны ясная структура, аккуратная подача услуг, реальные контакты, понятная запись и осторожная формулировка без необоснованных обещаний.",
      valueCards: [
        { title: "Доверие", text: "Блоки специалистов, услуг, FAQ и спокойная визуальная подача.", meta: "без лишних обещаний" },
        { title: "Запись", text: "Форма, телефон, Telegram/Facebook и карта доступны с телефона.", meta: "1-2 клика до контакта" }
      ],
      offerKicker: "Структура",
      offerTitle: "Что можно показать на сайте клиники",
      offerText: "Услуги, направления, команда, часы работы, FAQ, контактные кнопки и форму записи.",
      offers: [
        { title: "Услуги и направления", text: "Карточки процедур, консультаций или направлений с понятными описаниями.", meta: "структура доверия" },
        { title: "Специалисты", text: "Фото, опыт, специализация и безопасный текст без медицинских обещаний.", meta: "для доверия" },
        { title: "Запись на приём", text: "Форма заявки, телефон, мессенджеры и карта для быстрой записи.", meta: "CTA на мобильном" }
      ],
      processTitle: "Сначала структура доверия, потом визуал",
      processText: "Мы собираем список услуг, контакты, фото, тексты и делаем сайт, где пациенту легко выбрать следующий шаг.",
      processCards: [
        { title: "1. Услуги", text: "Собираем направления, цены от и ограничения.", meta: "scope" },
        { title: "2. Контакты", text: "Подключаем заявку, телефон, карту и thank-you flow.", meta: "заявка" }
      ],
      galleryCards: [
        { title: "Услуги", text: "Карточки направлений и процедур." },
        { title: "Доверие", text: "Команда, FAQ, спокойная подача." },
        { title: "Запись", text: "Форма, телефон, карта, мессенджеры." }
      ],
      finalTitle: "Хотите такой сайт для врача или клиники?",
      finalText: "Шаблон можно адаптировать под стоматологию, кабинет врача, терапевта, косметологию, диагностику или небольшую клинику: заменить услуги, фото, контакты, карту и форму записи.",
      messagePlaceholder: "Какая специализация, какие услуги, есть ли фото/адрес, какой пакет интересен?"
    }),

    "law-accounting": demo({
      slug: "law-accounting",
      brand: "Lexora Consult",
      descriptor: "law · accounting · consulting",
      mark: "LC",
      templateName: "Lawyer / Accountant Website Demo",
      businessType: "Law / Accounting / Consulting",
      demoLabel: "DEMO-шаблон юриста / бухгалтера",
      heroLabel: "B2B consulting demo",
      image: "../../assets/images/categories/law-accounting.jpg",
      imageAlt: "Business meeting",
      accent: "#1f4e79",
      accent2: "#c89555",
      dark: "#111827",
      soft: "#eef3f8",
      bg: "#f7f9fc",
      title: "Сайт для юриста, бухгалтера или консультанта",
      subtitle: "Понятные услуги, направления консультаций, доверие, FAQ и заявка на разговор — без лишнего визуального шума.",
      timeline: "3-7 дней",
      chips: ["Консультации", "B2B доверие", "FAQ", "Форма заявки"],
      introKicker: "Профессиональные услуги",
      introTitle: "Клиент должен быстро понять, в какой проблеме вы помогаете",
      introText: "Для юриста или бухгалтера важны не эффекты, а понятный список услуг, сценарии обращений, процесс консультации и контактная форма.",
      valueCards: [
        { title: "Ясные направления", text: "Налоговые вопросы, договоры, консультации, регистрация, сопровождение.", meta: "без хаоса" },
        { title: "Доверительный тон", text: "Спокойный B2B стиль, кейсы без выдуманных цифр и прозрачная заявка.", meta: "для серьёзных клиентов" }
      ],
      offerKicker: "Коммерческий каркас",
      offerTitle: "Секции для консультационного сайта",
      offerText: "Услуги, кому подходит, как проходит консультация, FAQ, документы от клиента и форма заявки.",
      offers: [
        { title: "Услуги", text: "Пакеты консультаций и направления помощи.", meta: "от простой заявки" },
        { title: "Процесс", text: "Что клиент отправляет, как проходит созвон и что получает.", meta: "меньше вопросов" },
        { title: "FAQ", text: "Стоимость, сроки, документы, формат работы и ограничения.", meta: "снимает страх" }
      ],
      processTitle: "Сайт должен продавать через ясность",
      processText: "Сначала формируем услуги и сценарии заявок, потом подбираем визуальный стиль и подключаем форму.",
      processCards: [
        { title: "1. Уточнение услуг", text: "Какие вопросы вы берёте и что не берёте.", meta: "позиционирование" },
        { title: "2. Заявка", text: "Форма собирает контакт и краткое описание задачи.", meta: "email" }
      ],
      galleryCards: [
        { title: "B2B стиль", text: "Спокойная палитра и деловая структура." },
        { title: "FAQ", text: "Ответы на частые вопросы до заявки." },
        { title: "Консультация", text: "Кнопка на разговор в несколько кликов." }
      ],
      finalTitle: "Хотите такой сайт для консультаций?",
      finalText: "Шаблон можно адаптировать под юриста, бухгалтера, налогового консультанта, бизнес-консалтинг или частного специалиста.",
      messagePlaceholder: "Какие услуги, город/язык, формат консультаций и какой пакет интересен?"
    }),

    "auto-service": demo({
      slug: "auto-service",
      brand: "Torque Garage",
      descriptor: "service · detailing · diagnostics",
      mark: "TG",
      templateName: "Auto Service / Detailing Website Demo",
      businessType: "Auto Service / Detailing",
      demoLabel: "DEMO-шаблон автосервиса / детейлинга",
      heroLabel: "Auto service demo",
      image: "../../assets/images/categories/auto-service.jpg",
      imageAlt: "Auto service garage",
      accent: "#f59e0b",
      accent2: "#ef4444",
      dark: "#151515",
      soft: "#fff3dc",
      bg: "#faf8f3",
      title: "Сайт для автосервиса, детейлинга или перевозок",
      subtitle: "Услуги, цены от, фото работ, запись на диагностику, контакты и карта — всё, что нужно владельцу авто с телефона.",
      timeline: "4-8 дней",
      chips: ["Услуги", "Цены от", "Фото работ", "Запись"],
      introKicker: "Авто / сервис",
      introTitle: "Клиент хочет быстро понять: что чините, сколько примерно стоит и куда ехать",
      introText: "Сайт автосервиса должен быть практичным: список услуг, доверие, фото работ, быстрый звонок, карта и форма заявки.",
      valueCards: [
        { title: "Список работ", text: "Диагностика, ремонт, масло, шины, detailing, полировка.", meta: "понятные категории" },
        { title: "Заявка на диагностику", text: "Марка авто, проблема, телефон и удобное время.", meta: "меньше переписки" }
      ],
      offerKicker: "Витрина услуг",
      offerTitle: "Что можно включить",
      offerText: "Услуги, прайс от, примеры работ, гарантийный блок, FAQ, адрес и контактные кнопки.",
      offers: [
        { title: "Ремонт и диагностика", text: "Карточки услуг с ценой от и временем.", meta: "основа сайта" },
        { title: "До / после", text: "Фото работ для детейлинга, кузова, салона или ремонта.", meta: "доверие" },
        { title: "Быстрая запись", text: "Телефон, мессенджер, форма и карта.", meta: "мобильный CTA" }
      ],
      processTitle: "Сначала услуги и карта, потом визуальная подача",
      processText: "Заполняем реальные услуги, цены от, адрес, фото работ и подключаем заявку.",
      processCards: [
        { title: "1. Услуги", text: "Структурируем направления и цены от.", meta: "каталог" },
        { title: "2. Запись", text: "Форма собирает авто, проблему и контакт.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Работы", text: "Фото ремонта или detailing." },
        { title: "Прайс", text: "Цены от без сложных таблиц." },
        { title: "Карта", text: "Как быстро доехать до сервиса." }
      ],
      finalTitle: "Хотите такой сайт для автосервиса?",
      finalText: "Шаблон можно адаптировать под ремонт, детейлинг, шиномонтаж, диагностику, перевозки или локальный авто-сервис.",
      messagePlaceholder: "Какие авто-услуги, город, есть ли фото работ и какой пакет интересен?"
    }),

    "cleaning": demo({
      slug: "cleaning",
      brand: "FreshHome",
      descriptor: "cleaning · home services",
      mark: "FH",
      templateName: "Cleaning / Home Services Website Demo",
      businessType: "Cleaning / Home Services",
      demoLabel: "DEMO-шаблон клининга / бытовых услуг",
      heroLabel: "Cleaning service demo",
      image: "../../assets/images/categories/cleaning.jpg",
      imageAlt: "Cleaning service equipment",
      accent: "#16a34a",
      accent2: "#0ea5e9",
      dark: "#10231a",
      soft: "#eaf9f0",
      bg: "#f8fbf9",
      title: "Сайт для клининга или бытовых услуг с быстрой заявкой",
      subtitle: "Пакеты уборки, зоны работы, цены от, FAQ, мессенджеры и форма заявки — чтобы клиент быстро понял стоимость и оставил контакт.",
      timeline: "2-6 дней",
      chips: ["Пакеты услуг", "Зоны работы", "Цены от", "Быстрый контакт"],
      introKicker: "Локальные услуги",
      introTitle: "Клиенту нужно быстро выбрать пакет и оставить заявку",
      introText: "Для клининга важны простые пакеты, понятные цены от, зоны работы, до/после и быстрые контакты.",
      valueCards: [
        { title: "Пакеты", text: "Генеральная, регулярная, после ремонта, офисы.", meta: "легко выбрать" },
        { title: "Зоны", text: "Город, районы, выезд, срочность и условия.", meta: "меньше уточнений" }
      ],
      offerKicker: "Пакеты",
      offerTitle: "Что продаёт сайт клининга",
      offerText: "Пакеты услуг, цены от, список работ, FAQ, фото результата и форма заявки.",
      offers: [
        { title: "Regular cleaning", text: "Еженедельная или разовая уборка.", meta: "от 1 500 Kč" },
        { title: "Deep cleaning", text: "После ремонта, переезда или большого загрязнения.", meta: "по оценке" },
        { title: "Office cleaning", text: "Офисы, маленькие бизнесы, график и договорённости.", meta: "B2B" }
      ],
      processTitle: "Сначала пакет, потом расчёт",
      processText: "Форма собирает тип помещения, метраж, район, срочность и контакт.",
      processCards: [
        { title: "1. Что убрать", text: "Квартира, дом, офис, после ремонта.", meta: "тип задачи" },
        { title: "2. Как связаться", text: "Телефон, мессенджер и удобное время.", meta: "быстрый ответ" }
      ],
      galleryCards: [
        { title: "Пакеты", text: "Чётко: что входит и что отдельно." },
        { title: "FAQ", text: "Что нужно подготовить до уборки." },
        { title: "Заявка", text: "Метраж, район, срочность, контакт." }
      ],
      finalTitle: "Хотите такой сайт для клининга?",
      finalText: "Шаблон можно адаптировать под уборку квартир, офисов, бытовые услуги, handyman-сервис или локальную выездную команду.",
      messagePlaceholder: "Какие услуги, районы, цены, есть ли фото и какой пакет интересен?"
    }),

    "real-estate": demo({
      slug: "real-estate",
      brand: "Nest Prague",
      descriptor: "real estate · rental",
      mark: "NP",
      templateName: "Real Estate / Rental Website Demo",
      businessType: "Real Estate / Rental",
      demoLabel: "DEMO-шаблон недвижимости / аренды",
      heroLabel: "Real estate demo",
      image: "../../assets/images/categories/real-estate.jpg",
      imageAlt: "Real estate interior",
      accent: "#4f46e5",
      accent2: "#d97706",
      dark: "#15172b",
      soft: "#f0efff",
      bg: "#faf9ff",
      title: "Сайт для недвижимости, аренды или риелтора",
      subtitle: "Карточки объектов, фото, фильтры, заявки на просмотр, контакты и карта — чтобы клиент быстро выбрал объект и оставил заявку.",
      timeline: "4-10 дней",
      chips: ["Карточки объектов", "Заявка на просмотр", "Фильтры", "Карта"],
      introKicker: "Недвижимость",
      introTitle: "Объект должен выглядеть понятно ещё до звонка",
      introText: "Для недвижимости важны фото, характеристики, цена, район, условия, быстрый запрос на просмотр и доверительный контакт.",
      valueCards: [
        { title: "Карточки объектов", text: "Цена, площадь, район, фото, условия и CTA.", meta: "обзорно" },
        { title: "Заявка на просмотр", text: "Клиент выбирает объект и оставляет контакт.", meta: "быстрый lead" }
      ],
      offerKicker: "Каталог",
      offerTitle: "Что можно включить",
      offerText: "Объекты, фильтры, галерея, карта, условия аренды, ипотека/депозит, FAQ и форма.",
      offers: [
        { title: "Rental landing", text: "1-5 объектов с фото и заявкой.", meta: "быстрый старт" },
        { title: "Small catalog", text: "Карточки объектов, категории и фильтры.", meta: "PLUS" },
        { title: "Lead flow", text: "Запрос просмотра, объект, дата, контакт.", meta: "email" }
      ],
      processTitle: "Сначала объект и фото, потом доверие",
      processText: "Собираем объекты, условия, фото, районы и делаем удобный путь к заявке.",
      processCards: [
        { title: "1. Объекты", text: "Фото, метраж, цена, район, условия.", meta: "контент" },
        { title: "2. Просмотр", text: "Форма заявки с выбранным объектом.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Карточки", text: "Фото, цена, район, условия." },
        { title: "Фильтры", text: "Тип, цена, район, площадь." },
        { title: "Просмотр", text: "Заявка на дату и контакт." }
      ],
      finalTitle: "Хотите такой сайт для недвижимости?",
      finalText: "Шаблон можно адаптировать под аренду, продажу, риелтора, апартаменты или маленький каталог объектов.",
      messagePlaceholder: "Какие объекты, сколько карточек, город, есть ли фото и какой пакет интересен?"
    }),

    "product-catalog": demo({
      slug: "product-catalog",
      brand: "Nord Catalog",
      descriptor: "products · showcase · requests",
      mark: "NC",
      templateName: "Product Catalog / Small Shop Website Demo",
      businessType: "Product Catalog / Small Shop",
      demoLabel: "DEMO-шаблон каталога товаров",
      heroLabel: "Product showcase demo",
      image: "../../assets/images/categories/product-catalog.jpg",
      imageAlt: "Product catalog items",
      accent: "#ea580c",
      accent2: "#2563eb",
      dark: "#182033",
      soft: "#fff3e8",
      bg: "#fffaf6",
      title: "Сайт-каталог товаров без сложного магазина",
      subtitle: "Карточки товаров, цены, категории, заявки и контакты — если пока не нужен полноценный e-commerce с оплатой.",
      timeline: "5-12 дней",
      chips: ["Каталог", "Карточки", "Категории", "Заявки"],
      introKicker: "Витрина товаров",
      introTitle: "Иногда нужен не магазин, а понятная витрина с заявкой",
      introText: "Такой сайт подходит для малого бизнеса, который хочет показать товары и принимать запросы без сложной корзины и оплаты.",
      valueCards: [
        { title: "Карточки", text: "Фото, название, цена, описание, кнопка заявки.", meta: "товарная витрина" },
        { title: "Категории", text: "Группы товаров, фильтры и быстрый просмотр.", meta: "понятная навигация" }
      ],
      offerKicker: "Каталог",
      offerTitle: "Что можно включить",
      offerText: "Категории, карточки, галерея, заявки, FAQ, доставка/самовывоз и контактные кнопки.",
      offers: [
        { title: "Small catalog", text: "До нескольких десятков карточек без оплаты онлайн.", meta: "PLUS" },
        { title: "Request flow", text: "Кнопка заявки по товару или категории.", meta: "email" },
        { title: "Future shop", text: "Структура, которую позже можно развить.", meta: "рост" }
      ],
      processTitle: "Сначала витрина, потом сложные функции",
      processText: "Делаем каталог, который уже собирает заявки, а оплату/CRM/склад можно обсуждать отдельным этапом.",
      processCards: [
        { title: "1. Товары", text: "Фото, цены, категории, описания.", meta: "контент" },
        { title: "2. Заявки", text: "Клиент выбирает товар и пишет контакт.", meta: "без корзины" }
      ],
      galleryCards: [
        { title: "Категории", text: "Удобная витрина по разделам." },
        { title: "Карточки", text: "Фото, цена, описание, CTA." },
        { title: "Заявка", text: "Заказ через форму или мессенджер." }
      ],
      finalTitle: "Хотите такой сайт-каталог?",
      finalText: "Шаблон можно адаптировать под товары, материалы, аренду оборудования, small e-commerce showcase или B2B-витрину.",
      messagePlaceholder: "Какие товары, сколько карточек, нужны ли категории и какой пакет интересен?"
    }),

    "education": demo({
      slug: "education",
      brand: "SkillBridge",
      descriptor: "courses · school · lessons",
      mark: "SB",
      templateName: "School / Courses Website Demo",
      businessType: "School / Courses / Education",
      demoLabel: "DEMO-шаблон курсов / школы",
      heroLabel: "Education demo",
      image: "../../assets/images/categories/education.jpg",
      imageAlt: "Students and education",
      accent: "#2563eb",
      accent2: "#7c3aed",
      dark: "#101936",
      soft: "#eef2ff",
      bg: "#f8faff",
      title: "Сайт для курсов, школы или обучения",
      subtitle: "Программы, расписание, преподаватели, цены, FAQ и заявка на обучение — чтобы студент быстро понял формат.",
      timeline: "4-10 дней",
      chips: ["Программы", "Расписание", "Преподаватели", "Заявка"],
      introKicker: "Обучение",
      introTitle: "Курс продаётся через понятную программу и результат",
      introText: "На сайте важно показать, чему человек научится, сколько длится обучение, кто преподаёт и как записаться.",
      valueCards: [
        { title: "Программы", text: "Модули, длительность, формат, цена.", meta: "понятный выбор" },
        { title: "Преподаватели", text: "Опыт, подход и доверие без фейковых обещаний.", meta: "credibility" }
      ],
      offerKicker: "Учебная структура",
      offerTitle: "Что можно включить",
      offerText: "Курсы, расписание, цены, преподаватели, FAQ, блок доверия и форма записи.",
      offers: [
        { title: "Course cards", text: "Карточки программ с ценой и сроком.", meta: "выбор" },
        { title: "Schedule", text: "Даты старта, формат, длительность.", meta: "планирование" },
        { title: "Lead form", text: "Имя, контакт, выбранный курс и вопрос.", meta: "заявка" }
      ],
      processTitle: "Сначала программа, потом визуал",
      processText: "Структурируем курсы, модули, цены и подключаем форму записи.",
      processCards: [
        { title: "1. Курсы", text: "Название, формат, результат, цена.", meta: "контент" },
        { title: "2. Запись", text: "Форма с выбранной программой.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Программы", text: "Чёткие карточки курсов." },
        { title: "Расписание", text: "Даты, формат, длительность." },
        { title: "Заявка", text: "Курс и контакт в письме." }
      ],
      finalTitle: "Хотите такой сайт для курсов?",
      finalText: "Шаблон можно адаптировать под школу, онлайн-курс, репетитора, языковые занятия, тренинги или образовательный проект.",
      messagePlaceholder: "Какие курсы, формат обучения, цены, языки и какой пакет интересен?"
    }),

    "personal-brand": demo({
      slug: "personal-brand",
      brand: "Persona Studio",
      descriptor: "portfolio · services · contact",
      mark: "PS",
      templateName: "Personal Brand / Portfolio Website Demo",
      businessType: "Personal Brand / Portfolio",
      demoLabel: "DEMO-шаблон личного бренда",
      heroLabel: "Personal portfolio demo",
      image: "../../assets/images/categories/personal-brand.jpg",
      imageAlt: "Desk and laptop for personal brand",
      accent: "#db2777",
      accent2: "#7c3aed",
      dark: "#17111f",
      soft: "#fce7f3",
      bg: "#fff7fb",
      title: "Сайт-портфолио для личного бренда или специалиста",
      subtitle: "О себе, услуги, проекты, опыт, контакты и заявка — чтобы человек быстро понял вашу ценность и написал.",
      timeline: "2-7 дней",
      chips: ["О себе", "Услуги", "Проекты", "Контакты"],
      introKicker: "Личный бренд",
      introTitle: "Портфолио должно продавать не только красивой картинкой, а понятной структурой",
      introText: "Сайт помогает показать услуги, проекты, стиль работы, контакты и собрать запросы без хаоса в соцсетях.",
      valueCards: [
        { title: "Позиционирование", text: "Кто вы, кому помогаете, что можно заказать.", meta: "ясный оффер" },
        { title: "Проекты", text: "Работы, кейсы, процесс и контакт.", meta: "доверие" }
      ],
      offerKicker: "Структура",
      offerTitle: "Что включить в личный сайт",
      offerText: "Hero, услуги, проекты, био, процесс, FAQ, контакты и форма заявки.",
      offers: [
        { title: "Services", text: "Карточки услуг и понятные цены от.", meta: "коммерция" },
        { title: "Projects", text: "Портфолио, кейсы или избранные работы.", meta: "доказательство" },
        { title: "Contact flow", text: "Форма, Telegram, Facebook, email.", meta: "заявка" }
      ],
      processTitle: "Сначала оффер, потом визуальный стиль",
      processText: "Определяем, что продаёт специалист, и строим сайт вокруг этого.",
      processCards: [
        { title: "1. Оффер", text: "Что продаём и кому.", meta: "позиция" },
        { title: "2. Работы", text: "Как показать опыт без лишнего текста.", meta: "portfolio" }
      ],
      galleryCards: [
        { title: "Услуги", text: "Понятный список предложений." },
        { title: "Проекты", text: "Работы и кейсы." },
        { title: "Контакт", text: "Форма и быстрые кнопки." }
      ],
      finalTitle: "Хотите такой сайт для личного бренда?",
      finalText: "Шаблон можно адаптировать под специалиста, эксперта, автора, фрилансера, мастера или личную коммерческую страницу.",
      messagePlaceholder: "Что вы продаёте, какие проекты показать, есть ли фото/тексты и какой пакет интересен?"
    }),

    "event-photo": demo({
      slug: "event-photo",
      brand: "Frame Atelier",
      descriptor: "events · photo · booking",
      mark: "FA",
      templateName: "Event / Photographer Website Demo",
      businessType: "Event / Photographer",
      demoLabel: "DEMO-шаблон фотографа / события",
      heroLabel: "Photo & event demo",
      image: "../../assets/images/categories/event-photo.jpg",
      imageAlt: "Event photography",
      accent: "#a16207",
      accent2: "#111827",
      dark: "#1c1712",
      soft: "#fff7ed",
      bg: "#fffaf5",
      title: "Сайт для фотографа, события или бронирования даты",
      subtitle: "Портфолио, пакеты, галерея, даты, условия, контакты и заявка на съёмку или мероприятие.",
      timeline: "3-8 дней",
      chips: ["Галерея", "Пакеты", "Даты", "Заявка"],
      introKicker: "Фото / события",
      introTitle: "Человек выбирает глазами, но заказывает через понятные пакеты",
      introText: "Для фотографа или события важно показать стиль, примеры работ, цены от и быстрый путь к бронированию даты.",
      valueCards: [
        { title: "Галерея", text: "Крупные фото, категории и избранные серии.", meta: "визуальное доверие" },
        { title: "Пакеты", text: "Что входит, сколько часов, результат и цена от.", meta: "понятно до заявки" }
      ],
      offerKicker: "Портфолио",
      offerTitle: "Что можно показать",
      offerText: "Съёмки, пакеты, даты, подготовка, FAQ, блок доверия и форму заявки.",
      offers: [
        { title: "Wedding / event", text: "Пакеты съёмки и запрос даты.", meta: "booking" },
        { title: "Portfolio", text: "Категории работ и визуальная галерея.", meta: "style" },
        { title: "Contact", text: "Telegram, форма, телефон, email.", meta: "быстрый lead" }
      ],
      processTitle: "Сначала стиль и пакеты, потом заявка",
      processText: "Собираем лучшие фото, условия, цены и строим страницу, которая ведёт к бронированию.",
      processCards: [
        { title: "1. Фото", text: "Выбираем серии и стиль.", meta: "визуал" },
        { title: "2. Пакеты", text: "Чётко показываем, что входит.", meta: "цена" }
      ],
      galleryCards: [
        { title: "Галерея", text: "Фото в крупном формате." },
        { title: "Пакеты", text: "Время, результат, цена." },
        { title: "Дата", text: "Форма на бронирование." }
      ],
      finalTitle: "Хотите такой сайт для съёмок или события?",
      finalText: "Шаблон можно адаптировать под фотографа, ведущего, свадебный проект, event-услуги или портфолио с заявками.",
      messagePlaceholder: "Какие услуги, есть ли фото, какие пакеты и какой вариант сайта интересен?"
    }),

    "fitness": demo({
      slug: "fitness",
      brand: "Pulse Coach",
      descriptor: "training · programs · booking",
      mark: "PC",
      templateName: "Fitness / Trainer Website Demo",
      businessType: "Fitness / Trainer",
      demoLabel: "DEMO-шаблон тренера / фитнеса",
      heroLabel: "Fitness trainer demo",
      image: "../../assets/images/categories/fitness.jpg",
      imageAlt: "Fitness trainer",
      accent: "#22c55e",
      accent2: "#0f766e",
      dark: "#0f1f1a",
      soft: "#ecfdf5",
      bg: "#f8fffb",
      title: "Сайт для тренера, фитнеса или спортивной программы",
      subtitle: "Программы, цены, результаты, расписание, контакты и запись на тренировку или консультацию.",
      timeline: "3-7 дней",
      chips: ["Программы", "Запись", "Цены", "Результаты"],
      introKicker: "Фитнес / тренер",
      introTitle: "Клиент должен увидеть формат занятий и сразу записаться",
      introText: "Для тренера важны программы, результаты, цены, формат работы, FAQ и кнопка записи.",
      valueCards: [
        { title: "Программы", text: "Индивидуально, группа, онлайн, питание, консультация.", meta: "выбор" },
        { title: "Запись", text: "Форма с целью клиента, контактами и удобным временем.", meta: "lead" }
      ],
      offerKicker: "Программы",
      offerTitle: "Что можно включить",
      offerText: "Тренировки, пакеты, расписание, результаты, FAQ, контакты и форму заявки.",
      offers: [
        { title: "Personal training", text: "Индивидуальные занятия и цели клиента.", meta: "от 1 000 Kč" },
        { title: "Online coaching", text: "План, контроль, созвоны и отчётность.", meta: "пакет" },
        { title: "Group classes", text: "Расписание, места, цены и запись.", meta: "группа" }
      ],
      processTitle: "Сначала цель клиента, потом программа",
      processText: "Форма собирает цель, уровень, контакт и удобный формат.",
      processCards: [
        { title: "1. Цель", text: "Похудение, сила, здоровье, старт.", meta: "бриф" },
        { title: "2. Запись", text: "Удобный день, формат и контакт.", meta: "booking" }
      ],
      galleryCards: [
        { title: "Программы", text: "Пакеты занятий и цены." },
        { title: "Результаты", text: "Можно добавить реальные кейсы." },
        { title: "Запись", text: "Консультация или тренировка." }
      ],
      finalTitle: "Хотите такой сайт для фитнеса?",
      finalText: "Шаблон можно адаптировать под тренера, спортзал, йогу, реабилитацию, онлайн-коучинг или спортивную студию.",
      messagePlaceholder: "Какие тренировки, формат, цены, есть ли фото и какой пакет интересен?"
    }),

    "hotel-apartment": demo({
      slug: "hotel-apartment",
      brand: "Stayline",
      descriptor: "rooms · booking · location",
      mark: "ST",
      templateName: "Hotel / Apartment Website Demo",
      businessType: "Hotel / Apartment / Guesthouse",
      demoLabel: "DEMO-шаблон отеля / апартаментов",
      heroLabel: "Hospitality demo",
      image: "../../assets/images/categories/hotel-apartment.jpg",
      imageAlt: "Hotel apartment interior",
      accent: "#2563eb",
      accent2: "#c89555",
      dark: "#10243f",
      soft: "#eef5ff",
      bg: "#f8fbff",
      title: "Сайт для отеля, апартаментов или guesthouse",
      subtitle: "Номера, фото, условия, локация, цены от и заявка на бронирование — без тяжёлой карты и лишнего шума.",
      timeline: "5-12 дней",
      chips: ["Номера", "Бронирование", "Галерея", "Карта"],
      introKicker: "Гостеприимство",
      introTitle: "Гость выбирает по фото, условиям и понятной кнопке брони",
      introText: "Для размещения важны фото, локация, условия, цены от, FAQ и быстрый запрос на даты.",
      valueCards: [
        { title: "Номера", text: "Карточки комнат, фото, удобства, цена от.", meta: "выбор" },
        { title: "Бронь", text: "Дата, гости, контакт и комментарий.", meta: "заявка" }
      ],
      offerKicker: "Номера / условия",
      offerTitle: "Что можно включить",
      offerText: "Номера, удобства, галерея, правила, FAQ, карта, форма брони и мессенджеры.",
      offers: [
        { title: "Room cards", text: "Фото, цена, вместимость, удобства.", meta: "каталог" },
        { title: "Booking request", text: "Дата, гости, телефон и email.", meta: "lead" },
        { title: "Location", text: "Район, транспорт, карта и инструкции.", meta: "доверие" }
      ],
      processTitle: "Сначала фото и условия, потом бронь",
      processText: "Собираем реальные фото, правила, цены, адрес и делаем понятную страницу бронирования.",
      processCards: [
        { title: "1. Номера", text: "Фото, цена, удобства, вместимость.", meta: "контент" },
        { title: "2. Бронь", text: "Форма запроса дат и контакта.", meta: "booking" }
      ],
      galleryCards: [
        { title: "Номера", text: "Фото и условия проживания." },
        { title: "Локация", text: "Карта и описание района." },
        { title: "Бронь", text: "Дата, гости, контакт." }
      ],
      finalTitle: "Хотите такой сайт для размещения?",
      finalText: "Шаблон можно адаптировать под отель, апартаменты, guesthouse, аренду комнат или туристическое размещение.",
      messagePlaceholder: "Сколько номеров/объектов, есть ли фото, адрес, условия и какой пакет интересен?"
    }),

    "recruitment": demo({
      slug: "recruitment",
      brand: "HireFleet",
      descriptor: "jobs · courier · hiring",
      mark: "HF",
      templateName: "Recruitment / Jobs Landing Demo",
      businessType: "Recruitment / Jobs / Fleet",
      demoLabel: "DEMO-шаблон набора сотрудников",
      heroLabel: "Recruitment landing demo",
      image: "../../assets/images/categories/recruitment.jpg",
      imageAlt: "Work meeting recruitment",
      accent: "#f97316",
      accent2: "#2563eb",
      dark: "#172033",
      soft: "#fff1e7",
      bg: "#fffaf6",
      title: "Лендинг для набора сотрудников, курьеров или мастеров",
      subtitle: "Условия, требования, зарплата от, график, FAQ и форма заявки кандидата — чтобы быстро собирать отклики.",
      timeline: "3-8 дней",
      chips: ["Условия", "Требования", "FAQ", "Заявка кандидата"],
      introKicker: "Набор",
      introTitle: "Кандидат должен быстро понять условия и оставить контакт",
      introText: "Лендинг набора работает, когда сразу видны деньги, график, требования, процесс и форма.",
      valueCards: [
        { title: "Условия", text: "График, оплата, район, формат работы.", meta: "прозрачно" },
        { title: "Заявка", text: "Имя, телефон, опыт, город, транспорт.", meta: "кандидат" }
      ],
      offerKicker: "Найм",
      offerTitle: "Что можно включить",
      offerText: "Оффер вакансии, условия, требования, FAQ, процесс, форма и мессенджеры.",
      offers: [
        { title: "Courier hiring", text: "Заявки от курьеров и водителей.", meta: "delivery" },
        { title: "Service workers", text: "Мастера, уборка, ремонт, полевые команды.", meta: "local" },
        { title: "Partner form", text: "Форма для партнёров или подрядчиков.", meta: "B2B" }
      ],
      processTitle: "Сначала условия, потом анкета",
      processText: "Форма должна собирать только то, что реально нужно для первого контакта.",
      processCards: [
        { title: "1. Оффер", text: "Оплата, график, требования.", meta: "ясно" },
        { title: "2. Анкета", text: "Контакт, опыт, город, транспорт.", meta: "lead" }
      ],
      galleryCards: [
        { title: "Условия", text: "Оплата, график, район." },
        { title: "FAQ", text: "Документы, опыт, старт." },
        { title: "Анкета", text: "Кандидат оставляет контакт." }
      ],
      finalTitle: "Хотите такой лендинг для набора?",
      finalText: "Шаблон можно адаптировать под курьеров, водителей, мастеров, клининг, доставку, партнёров или локальные вакансии.",
      messagePlaceholder: "Кого набираете, какие условия, город, требования и какой пакет интересен?"
    }),

    "start-landing": demo({
      slug: "start-landing",
      brand: "Start Landing",
      descriptor: "fast launch · local business",
      mark: "SL",
      templateName: "Start Landing Demo",
      businessType: "Start Landing / Local Business",
      demoLabel: "DEMO-шаблон быстрого лендинга",
      heroLabel: "Fast landing demo",
      image: "../../assets/images/categories/start-landing.jpg",
      imageAlt: "Desk with camera and office tools",
      accent: "#06b6d4",
      accent2: "#7c3aed",
      dark: "#111827",
      soft: "#e8fbff",
      bg: "#f8fdff",
      title: "Быстрый лендинг для услуги, идеи или локального бизнеса",
      subtitle: "Один экран с оффером, услуги, цены, доверие, FAQ и форма заявки — чтобы быстро запустить страницу и проверить спрос.",
      timeline: "2-5 дней",
      chips: ["Быстрый запуск", "Форма заявки", "Мобильный", "Домен + hosting"],
      introKicker: "Start",
      introTitle: "Когда нужен сайт быстро, лучше начать с понятной структуры",
      introText: "START подходит, если нужен рабочий лендинг без сложной логики: заменить тексты, фото, контакты и опубликовать.",
      valueCards: [
        { title: "Оффер", text: "Первый экран объясняет, что продаём и для кого.", meta: "быстро понятно" },
        { title: "Заявка", text: "Форма, кнопки связи и thank-you flow.", meta: "lead-ready" }
      ],
      offerKicker: "Базовая структура",
      offerTitle: "Что входит в быстрый landing",
      offerText: "Оффер, услуги, цены, преимущества, FAQ, контакты, форма и мобильная версия.",
      offers: [
        { title: "Hero", text: "Заголовок, подзаголовок и CTA.", meta: "первый экран" },
        { title: "Sales blocks", text: "Услуги, выгоды, цены и процесс.", meta: "структура" },
        { title: "Request form", text: "Форма заявки и мессенджеры.", meta: "контакт" }
      ],
      processTitle: "Быстрый запуск без лишней сложности",
      processText: "Берём demo-структуру, меняем контент, проверяем мобильную версию и готовим публикацию.",
      processCards: [
        { title: "1. Контент", text: "Фото, тексты, контакты, услуга.", meta: "подстановка" },
        { title: "2. Публикация", text: "Выбранный способ публикации после подтверждения.", meta: "готово" }
      ],
      galleryCards: [
        { title: "Оффер", text: "Что продаём и кому." },
        { title: "Цены", text: "Понятный диапазон." },
        { title: "Заявка", text: "Контакт за пару кликов." }
      ],
      finalTitle: "Хотите быстрый лендинг?",
      finalText: "Шаблон можно адаптировать под услугу, мастера, локальный бизнес, рекламу, тест идеи или простую страницу заявок.",
      messagePlaceholder: "Что продаёте, какие контакты, есть ли фото/тексты и какой пакет интересен?"
    }),

    "business-website": demo({
      slug: "business-website",
      brand: "Business Core",
      descriptor: "services · trust · contacts",
      mark: "BC",
      templateName: "Business Website Demo",
      businessType: "Business Website",
      demoLabel: "DEMO-шаблон бизнес-сайта",
      heroLabel: "Business website demo",
      image: "../../assets/images/categories/business-website.jpg",
      imageAlt: "Business team meeting",
      accent: "#2563eb",
      accent2: "#0f172a",
      dark: "#0f172a",
      soft: "#eef4ff",
      bg: "#f8fbff",
      title: "Бизнес-сайт с услугами, доверием и заявками",
      subtitle: "Больше структуры, чем простой лендинг: услуги, работы, процесс, FAQ, контакты, форма и подготовка к публикации.",
      timeline: "5-10 дней",
      chips: ["Услуги", "Работы", "Процесс", "Контакты"],
      introKicker: "Business",
      introTitle: "Когда одной страницы мало, нужен сайт с нормальной структурой",
      introText: "Business Website подходит для компаний и услуг, где нужно объяснить направления, показать работы, процесс и доверие.",
      valueCards: [
        { title: "Структура услуг", text: "Несколько направлений, карточки и сценарии заявок.", meta: "понятно" },
        { title: "Доверие", text: "Работы, процесс, FAQ, контакты и аккуратная подача.", meta: "коммерчески" }
      ],
      offerKicker: "Компания",
      offerTitle: "Что входит в бизнес-сайт",
      offerText: "Услуги, портфолио/работы, процесс, цены от, FAQ, контакты, форма и мобильная версия.",
      offers: [
        { title: "Services", text: "Разделы по услугам и направлениям.", meta: "PLUS" },
        { title: "Works", text: "Фото работ, кейсы или примеры.", meta: "trust" },
        { title: "Contact flow", text: "Форма, телефон, Telegram, Facebook.", meta: "lead" }
      ],
      processTitle: "Сначала коммерческая структура, потом дизайн",
      processText: "Определяем, что компания продаёт, какие блоки нужны и где человек оставляет заявку.",
      processCards: [
        { title: "1. Scope", text: "Услуги, страницы, контент, сроки.", meta: "план" },
        { title: "2. Запуск", text: "Адаптив, форма, публикация после approval.", meta: "готово" }
      ],
      galleryCards: [
        { title: "Услуги", text: "Разделы и карточки." },
        { title: "Работы", text: "Примеры и доверие." },
        { title: "Контакты", text: "Форма и быстрые кнопки." }
      ],
      finalTitle: "Хотите бизнес-сайт для компании?",
      finalText: "Шаблон можно адаптировать под услуги, компанию, B2B, локальный бизнес, студию или профессиональную практику.",
      messagePlaceholder: "Какие услуги, сколько разделов, есть ли фото/тексты и какой пакет интересен?"
    }),

    "mvp-platform": demo({
      slug: "mvp-platform",
      brand: "MVP Flow",
      descriptor: "roles · forms · admin",
      mark: "MF",
      templateName: "MVP / Mini Platform Demo",
      businessType: "MVP / Mini Platform",
      demoLabel: "DEMO-шаблон MVP / mini platform",
      heroLabel: "MVP planning demo",
      image: "../../assets/images/categories/mvp-platform.jpg",
      imageAlt: "Laptop workspace for MVP",
      accent: "#7c3aed",
      accent2: "#06b6d4",
      dark: "#17112b",
      soft: "#f1eaff",
      bg: "#fbf9ff",
      title: "MVP или mini platform: от идеи к рабочему прототипу",
      subtitle: "Формы, роли, база данных, кабинет, админка или интеграции — только после короткого scope и честной оценки.",
      timeline: "индивидуально",
      packageHint: "PRO от 30 000 Kč",
      chips: ["Роли", "Формы", "Админка", "Интеграции"],
      introKicker: "MVP",
      introTitle: "MVP нельзя оценивать как обычный лендинг",
      introText: "Для платформы сначала нужен scope: кто пользуется, какие роли, какие данные, какие сценарии и что является минимальной рабочей версией.",
      valueCards: [
        { title: "Scope", text: "Что входит в первую версию, а что позже.", meta: "контроль бюджета" },
        { title: "Прототип", text: "Формы, роли, админка и сценарии без лишней сложности.", meta: "MVP" }
      ],
      offerKicker: "Продуктовая логика",
      offerTitle: "Что может входить",
      offerText: "Роли, формы, база данных, кабинет, админка, уведомления, интеграции и безопасный план работ.",
      offers: [
        { title: "User roles", text: "Клиент, админ, исполнитель, менеджер.", meta: "по задаче" },
        { title: "Forms + data", text: "Заявки, статусы, таблицы, кабинет.", meta: "MVP core" },
        { title: "Admin tools", text: "Мини-админка для управления данными.", meta: "PRO" }
      ],
      processTitle: "Сначала аудит идеи, потом разработка",
      processText: "Работа идёт через этапы, понятные проверки и подтверждения. Важные решения согласуются до запуска.",
      processCards: [
        { title: "1. Scope", text: "Роли, функции, данные, риски.", meta: "аудит" },
        { title: "2. MVP", text: "Минимальная рабочая версия.", meta: "итерация" }
      ],
      galleryCards: [
        { title: "Роли", text: "Кто что делает в системе." },
        { title: "Данные", text: "Формы, статусы, таблицы." },
        { title: "Админка", text: "Управление без хаоса." }
      ],
      finalTitle: "Хотите обсудить MVP?",
      finalText: "Для MVP цена и сроки зависят от логики. Можно начать с аудита, прототипа и короткого технического плана.",
      messagePlaceholder: "Опишите идею, роли, формы, данные, сроки и примерный бюджет."
    }),

    "project-rescue": demo({
      slug: "project-rescue",
      brand: "Rescue Audit",
      descriptor: "audit · bugs · plan",
      mark: "RA",
      templateName: "Project Rescue / Audit Demo",
      businessType: "Project Rescue / Audit",
      demoLabel: "DEMO-шаблон аудита проекта",
      heroLabel: "Project rescue demo",
      image: "../../assets/images/categories/project-rescue.jpg",
      imageAlt: "Technology audit workspace",
      accent: "#dc2626",
      accent2: "#f97316",
      dark: "#1f1515",
      soft: "#fff1f1",
      bg: "#fffafa",
      title: "Аудит проекта, rescue и честный план исправлений",
      subtitle: "Если проект кажется готовым на 60%, я проверю, что реально работает, где риски и что чинить первым.",
      timeline: "1-4 дня",
      packageHint: "аудит от 2 500 Kč",
      chips: ["Аудит", "Баги", "План", "Приоритеты"],
      introKicker: "Rescue",
      introTitle: "Иногда сначала нужен не редизайн, а честная диагностика",
      introText: "Аудит помогает понять, какие экраны сломаны, где нет адаптива, что с формами, деплоем, безопасностью и пользовательским путём.",
      valueCards: [
        { title: "Список проблем", text: "Что сломано, где риск, что мешает запуску.", meta: "без догадок" },
        { title: "План исправлений", text: "Приоритеты: срочно, важно, можно позже.", meta: "scope" }
      ],
      offerKicker: "Аудит",
      offerTitle: "Что проверяется",
      offerText: "HTML/CSS/JS, адаптив, формы, ссылки, деплой, консоль, UX, структура и реальные риски.",
      offers: [
        { title: "UI / responsive", text: "Мобильная версия, горизонтальный скролл, CTA.", meta: "UX" },
        { title: "Forms / links", text: "Заявки, контакты, мёртвые ссылки.", meta: "conversion" },
        { title: "Deploy / code", text: "Публикация, структура, ошибки консоли.", meta: "technical" }
      ],
      processTitle: "Сначала диагностика, потом работа",
      processText: "Я не обещаю магию: сначала фиксирую факты, потом предлагаю порядок исправлений.",
      processCards: [
        { title: "1. Проверка", text: "Открываю проект, смотрю UX и код.", meta: "audit" },
        { title: "2. Отчёт", text: "Список проблем и план исправлений.", meta: "report" }
      ],
      galleryCards: [
        { title: "Ошибки", text: "Что реально мешает запуску." },
        { title: "Приоритеты", text: "Что чинить первым." },
        { title: "План", text: "Следующий шаг без хаоса." }
      ],
      finalTitle: "Нужен аудит или rescue проекта?",
      finalText: "Можно начать с короткой проверки сайта, лендинга, формы, адаптива, публикации или уже начатого MVP.",
      messagePlaceholder: "Ссылка на проект, что не работает, что нужно проверить и какой результат нужен?"
    }),

    "bug-fixing": demo({
      slug: "bug-fixing",
      brand: "BugFix Desk",
      descriptor: "forms · layout · deploy",
      mark: "BD",
      templateName: "Bug Fixing Website Demo",
      businessType: "Bug Fixing / Frontend / Deploy",
      demoLabel: "DEMO-шаблон bug fixing",
      heroLabel: "Bug fixing demo",
      image: "../../assets/images/categories/bug-fixing.jpg",
      imageAlt: "Laptop debugging workspace",
      accent: "#0891b2",
      accent2: "#6366f1",
      dark: "#101827",
      soft: "#e8faff",
      bg: "#f8fdff",
      title: "Исправление багов на сайте, форме, адаптиве или деплое",
      subtitle: "Сломалась форма, уехал мобильный экран, не открывается demo, ошибка в консоли или проблема с публикацией — можно разобрать точечно.",
      timeline: "по задаче",
      packageHint: "точечно от 1 250 Kč",
      chips: ["Формы", "Адаптив", "Ссылки", "Деплой"],
      introKicker: "Fix",
      introTitle: "Точечный баг лучше сначала локализовать",
      introText: "Для bug fixing важно понять, где именно ломается поведение: браузер, устройство, форма, код, путь файла или публикация.",
      valueCards: [
        { title: "Диагностика", text: "Повторить проблему и найти источник.", meta: "repro" },
        { title: "Исправление", text: "Патч без лишнего переписывания всего проекта.", meta: "scope" }
      ],
      offerKicker: "Точечные задачи",
      offerTitle: "Что можно чинить",
      offerText: "Формы, кнопки, мобильный layout, горизонтальный скролл, видео, ссылки, публикация и ошибки на сайте.",
      offers: [
        { title: "Form bugs", text: "Поля формы, hidden fields, redirect, email.", meta: "заявки" },
        { title: "Mobile layout", text: "Перекрытия, скролл, меню, CTA.", meta: "mobile" },
        { title: "Publication issues", text: "Пути, assets и настройка публикации.", meta: "publish" }
      ],
      processTitle: "Сначала воспроизведение, потом fix",
      processText: "Без воспроизведения легко чинить не то. Поэтому сначала фиксируем шаги, устройство и ошибку.",
      processCards: [
        { title: "1. Repro", text: "Где, как и на чём ломается.", meta: "факт" },
        { title: "2. Patch", text: "Минимальное исправление и проверка.", meta: "fix" }
      ],
      galleryCards: [
        { title: "Формы", text: "Поля, endpoint, redirect." },
        { title: "Адаптив", text: "Mobile-first проверка." },
        { title: "Публикация", text: "Пути и assets без 404." }
      ],
      finalTitle: "Нужно починить сайт?",
      finalText: "Можно разобрать конкретный баг: форма не отправляет, кнопка не работает, страница дёргается, видео лагает или опубликованная версия показывает не то.",
      messagePlaceholder: "Опишите баг, ссылку, устройство/браузер, шаги повторения и желаемый результат."
    })
  };
})();
