(function () {
  const PRODUCT_KEY = "zevo_demo_products_override";
  const CATEGORY_KEY = "zevo_demo_categories_override";

  const fallbackCategories = [
    { id: "phones", name: "Смартфони та гаджети", shortName: "Смартфони", icon: "📱", image: "assets/img/categories/smartphones.jpg", active: true },
    { id: "laptops", name: "Ноутбуки", shortName: "Ноутбуки", icon: "💻", image: "assets/img/categories/laptops.jpg", active: true },
    { id: "home", name: "Техніка для дому", shortName: "Для дому", icon: "🏠", image: "assets/img/categories/home-appliances.jpg", active: true },
    { id: "tv", name: "TV / Аудіо", shortName: "TV / Аудіо", icon: "🎧", image: "assets/img/categories/tv-audio.jpg", active: true },
    { id: "gaming", name: "Gaming", shortName: "Gaming", icon: "🎮", image: "assets/img/categories/gaming.jpg", active: true },
    { id: "beauty", name: "Краса та догляд", shortName: "Краса", icon: "✨", image: "assets/img/categories/beauty.jpg", active: true },
    { id: "kids", name: "Товари для дітей", shortName: "Дітям", icon: "🧸", image: "assets/img/categories/kids.jpg", active: true },
    { id: "sport", name: "Спорт і активність", shortName: "Спорт", icon: "🏃", image: "assets/img/categories/sport.jpg", active: true },
    { id: "auto", name: "Автотовари", shortName: "Авто", icon: "🚗", image: "assets/img/categories/auto.jpg", active: true },
    { id: "pets", name: "Товари для тварин", shortName: "Тварини", icon: "🐾", image: "assets/img/categories/pets.jpg", active: true }
  ];

  const fallbackProducts = [
    { id: 101, name: "Смартфон ZEVO Nova X 8/256GB Graphite", cat: "phones", price: 14999, oldPrice: 17999, discount: 17, badge: "hit", rating: 4.8, reviews: 42, stock: "Є в наявності", image: "assets/img/products/smartphone-nova.jpg", sections: ["day", "best", "top", "phones"], promo: "Швидка заявка без оплати онлайн", description: "Демо-картка смартфона для каталогу малого магазину." },
    { id: 102, name: "Смартфон ZEVO Edge Slim 6/128GB Blue", cat: "phones", price: 9999, oldPrice: 11999, discount: 17, badge: "sale", rating: 4.6, reviews: 28, stock: "Є в наявності", image: "assets/img/products/smartphone-edge.jpg", sections: ["best", "new", "phones"], promo: "Компактний варіант для щоденного використання", description: "Приклад товару для категорії смартфонів." },
    { id: 103, name: "Ноутбук AirBook 14 Office 16/512GB", cat: "laptops", price: 28999, oldPrice: 32999, discount: 12, badge: "new", rating: 4.7, reviews: 19, stock: "Передзамовлення", image: "assets/img/products/laptop-airbook.jpg", sections: ["best", "top", "new"], promo: "Для роботи, навчання і презентацій", description: "Легка картка ноутбука з промо-рядком." },
    { id: 104, name: "Ноутбук GameBook G15 Performance", cat: "laptops", price: 37999, oldPrice: 45999, discount: 17, badge: "top", rating: 4.9, reviews: 33, stock: "Є в наявності", image: "assets/img/products/laptop-gaming.jpg", sections: ["best", "gaming", "top"], promo: "Для ігор, монтажу та важких задач", description: "Демо-товар для преміальної вітрини." },
    { id: 105, name: "Навушники Pulse Air ANC", cat: "tv", price: 2699, oldPrice: 3499, discount: 23, badge: "sale", rating: 4.5, reviews: 57, stock: "Є в наявності", image: "assets/img/products/headphones.jpg", sections: ["best", "now", "tv"], promo: "Активне шумозаглушення у demo-картці", description: "Карточка для аксесуарів." },
    { id: 106, name: "Телевізор Vision Q55 Smart TV", cat: "tv", price: 18999, oldPrice: 22999, discount: 17, badge: "hit", rating: 4.6, reviews: 21, stock: "Є в наявності", image: "assets/img/products/tv.jpg", sections: ["top", "home"], promo: "Великий екран для дому", description: "Приклад товару для TV / Audio." },
    { id: 107, name: "GamePad Pro Wireless", cat: "gaming", price: 1599, oldPrice: 2199, discount: 27, badge: "top", rating: 4.8, reviews: 64, stock: "Є в наявності", image: "assets/img/products/gamepad.jpg", sections: ["top", "now", "gaming"], promo: "Gaming-аксесуар для швидких продажів", description: "Compare-кнопка візуальна." },
    { id: 108, name: "Кавомашина HomeBar Compact", cat: "home", price: 5499, oldPrice: 6999, discount: 21, badge: "sale", rating: 4.4, reviews: 17, stock: "Є в наявності", image: "assets/img/products/coffee-machine.jpg", sections: ["best", "home", "new"], promo: "Для дому, офісу і подарунків", description: "Товар для домашньої техніки." },
    { id: 109, name: "Пилосос Cyclone Clean 2200", cat: "home", price: 3299, oldPrice: 3999, discount: 18, badge: "hit", rating: 4.7, reviews: 36, stock: "Є в наявності", image: "assets/img/products/vacuum-cleaner.jpg", sections: ["top", "home", "now"], promo: "Практичний товар для домашньої категорії", description: "Демо-опис пилососа." },
    { id: 110, name: "Блендер FreshMix 900", cat: "home", price: 1199, oldPrice: 1599, discount: 25, badge: "new", rating: 4.3, reviews: 11, stock: "Є в наявності", image: "assets/img/products/blender.jpg", sections: ["home", "new"], promo: "Компактна техніка для кухні", description: "Приклад невеликого товару." },
    { id: 111, name: "Набір догляду Glow Daily", cat: "beauty", price: 899, oldPrice: 1299, discount: 31, badge: "sale", rating: 4.6, reviews: 24, stock: "Є в наявності", image: "assets/img/products/beauty-kit.jpg", sections: ["best", "new"], promo: "Підходить для beauty-магазину", description: "Демо-картка для косметики." },
    { id: 112, name: "Дитячий набір PlayBox Color", cat: "kids", price: 749, oldPrice: 999, discount: 25, badge: "hit", rating: 4.8, reviews: 39, stock: "Є в наявності", image: "assets/img/products/kids-toy.jpg", sections: ["now", "new"], promo: "Для дитячих товарів і подарунків", description: "Товар із категорії kids." },
    { id: 113, name: "Самокат Urban Move", cat: "sport", price: 2499, oldPrice: 2999, discount: 17, badge: "top", rating: 4.5, reviews: 18, stock: "Є в наявності", image: "assets/img/products/scooter.jpg", sections: ["top", "sport"], promo: "Активний товар для вихідних", description: "Товар для спортивного магазину." },
    { id: 114, name: "Автотримач SafeGrip 360", cat: "auto", price: 399, oldPrice: 599, discount: 33, badge: "sale", rating: 4.4, reviews: 45, stock: "Є в наявності", image: "assets/img/products/car-holder.jpg", sections: ["now"], promo: "Недорогий товар для швидкої заявки", description: "Демо-товар для auto accessories." },
    { id: 115, name: "Корм PetCare Daily 2 кг", cat: "pets", price: 549, oldPrice: 0, discount: 0, badge: "new", rating: 4.7, reviews: 14, stock: "Є в наявності", image: "assets/img/products/pet-food.jpg", sections: ["best", "pets"], promo: "Категорія для pet-shop демо", description: "Приклад товару для зоомагазину." },
    { id: 116, name: "Smart Watch Active 2", cat: "phones", price: 2299, oldPrice: 2999, discount: 23, badge: "hit", rating: 4.5, reviews: 52, stock: "Є в наявності", image: "assets/img/products/smartwatch.jpg", sections: ["top", "new", "phones"], promo: "Гаджет для щоденного ритму", description: "Додатковий товар для смартфонної категорії." },
    { id: 117, name: "Power Bank 20000 mAh FastCharge", cat: "phones", price: 1299, oldPrice: 1699, discount: 24, badge: "sale", rating: 4.6, reviews: 31, stock: "Є в наявності", image: "assets/img/products/powerbank.jpg", sections: ["best", "now", "phones"], promo: "Аксесуар з високим попитом", description: "Демо-картка аксесуара." },
    { id: 118, name: "Рюкзак CityPack 22L", cat: "sport", price: 999, oldPrice: 1399, discount: 29, badge: "new", rating: 4.4, reviews: 22, stock: "Є в наявності", image: "assets/img/products/backpack.jpg", sections: ["new", "sport"], promo: "Універсальний товар для lifestyle-магазину", description: "Підходить для одягу або аксесуарів." },
    { id: 119, name: "Килимок YogaSoft Pro", cat: "sport", price: 699, oldPrice: 899, discount: 22, badge: "top", rating: 4.7, reviews: 27, stock: "Є в наявності", image: "assets/img/products/yoga-mat.jpg", sections: ["top", "home"], promo: "Для wellness і sport-каталогу", description: "Приклад товару з невисокою ціною." },
    { id: 120, name: "Електрочайник SteelHeat 1.7L", cat: "home", price: 899, oldPrice: 1199, discount: 25, badge: "sale", rating: 4.6, reviews: 18, stock: "Є в наявності", image: "assets/img/products/blender.jpg", sections: ["best", "home", "now"], promo: "Швидка покупка для кухні", description: "Демо-товар для категорії техніки для дому. У реальному магазині власник замінює фото, характеристики і ціну." }
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function normalizeProduct(product) {
    return {
      id: Number(product.id || Date.now()),
      name: product.name || "Новий товар",
      cat: product.cat || product.category || "home",
      price: Number(product.price || 0),
      oldPrice: Number(product.oldPrice || product.old_price || 0),
      discount: Number(product.discount || 0),
      badge: product.badge || "",
      rating: Number(product.rating || 0),
      reviews: Number(product.reviews || 0),
      stock: product.stock || "Demo stock",
      image: product.image || product.img || "assets/img/ui/product-placeholder.svg",
      sections: Array.isArray(product.sections) ? product.sections : [],
      promo: product.promo || "",
      description: product.description || "Demo-опис товару. Замінити на реальний текст клієнта."
    };
  }

  async function loadJson(path, fallback) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn(`ZEVO demo fallback for ${path}:`, error.message);
      return clone(fallback);
    }
  }

  async function loadProducts() {
    const local = localStorage.getItem(PRODUCT_KEY);
    if (local) {
      try {
        return JSON.parse(local).map(normalizeProduct);
      } catch (error) {
        console.warn("Broken products override, using JSON/fallback", error);
      }
    }
    const data = await loadJson("assets/data/products.json", fallbackProducts);
    return data.map(normalizeProduct);
  }

  async function loadCategories() {
    const local = localStorage.getItem(CATEGORY_KEY);
    if (local) {
      try {
        return JSON.parse(local);
      } catch (error) {
        console.warn("Broken categories override, using JSON/fallback", error);
      }
    }
    return loadJson("assets/data/categories.json", fallbackCategories);
  }

  function saveProducts(products) {
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(products.map(normalizeProduct)));
  }

  function saveCategories(categories) {
    localStorage.setItem(CATEGORY_KEY, JSON.stringify(categories));
  }

  function resetProducts() {
    localStorage.removeItem(PRODUCT_KEY);
  }

  function resetCategories() {
    localStorage.removeItem(CATEGORY_KEY);
  }

  function price(value) {
    return Number(value || 0).toLocaleString("uk-UA") + " ₴";
  }

  function badgeLabel(badge) {
    return {
      hit: "Хіт",
      sale: "Акція",
      new: "Новинка",
      top: "Топ",
      best: "Топ",
      demo: "Demo"
    }[badge] || "";
  }

  window.ZevoData = {
    fallbackProducts: clone(fallbackProducts),
    fallbackCategories: clone(fallbackCategories),
    loadProducts,
    loadCategories,
    saveProducts,
    saveCategories,
    resetProducts,
    resetCategories,
    normalizeProduct,
    price,
    badgeLabel
  };
})();
