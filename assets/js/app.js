const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobileMenu");
const floatingCta = document.querySelector("#floatingCta");
const closeFloatingCta = document.querySelector("#closeFloatingCta");
const form = document.querySelector("#requestForm");
const formStatus = document.querySelector("#formStatus");
const toast = document.querySelector("#toast");
const modal = document.querySelector("#projectModal");
const modalImage = document.querySelector("#modalImage");
const modalGallery = document.querySelector("#modalGallery");
const modalTag = document.querySelector("#modalTag");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const modalActions = document.querySelector("#modalActions");

const recipientEmail = "urciknikolaj642@gmail.com";
let ctaClosed = false;

const projects = {
  pracehub: {
    title: "PráceHub.cz",
    tag: "Live product",
    tagClass: "live",
    image: "assets/img/pracehub-mobile-home.png",
    images: [
      "assets/img/pracehub-mobile-home.png",
      "assets/img/pracehub-login.png",
      "assets/img/pracehub-prague-brand.png"
    ],
    text: "Реальный живой проект: платформа с ролями, чатом, Firebase, PWA, Storage, Functions, пользователями, UX-решениями, безопасностью и уроками по стоимости инфраструктуры. Это главный proof, что я работаю не только с лендингами, но и с продуктовой логикой.",
    actions: [
      { label: "Открыть PráceHub.cz", href: "https://pracehub.cz", primary: true },
      { label: "Оставить заявку", href: "#contact" }
    ]
  },
  argus: {
    title: "ARGUS Control Room",
    tag: "Internal system",
    tagClass: "internal",
    image: "assets/img/argus-control-mobile.png",
    images: [
      "assets/img/argus-control-mobile.png"
    ],
    text: "Внутренний локальный рабочий контур Николая для AI-assisted разработки: отчёты, протоколы, контроль файлов, ручные одобрения и осторожная работа с чувствительными действиями. ARGUS активно дорабатывается и не является публичным скачиваемым продуктом.",
    actions: [
      { label: "Перейти к ARGUS", href: "#argus", primary: true },
      { label: "Обсудить процесс", href: "#contact" }
    ]
  },
  cafe: {
    title: "Cafe / Restaurant Landing",
    tag: "Demo concept",
    tagClass: "demo",
    image: "assets/img/demo-cafe.svg",
    text: "Демонстрационный концепт для кафе или ресторана: первый экран, меню, доверие, бронирование и быстрый путь к заявке. Не реальный клиентский проект.",
    actions: [{ label: "Заказать похожий", href: "#contact", primary: true }]
  },
  construction: {
    title: "Construction / Renovation Landing",
    tag: "Demo concept",
    tagClass: "demo",
    image: "assets/img/construction-landing-dark.png",
    images: [
      "assets/img/construction-landing-dark.png",
      "assets/img/construction-landing-light.png"
    ],
    text: "Демонстрационный концепт для строительной или ремонтной компании: услуги, заявки, портфолио работ, доверие, контакты и понятный путь к запросу. Не реальный клиентский проект.",
    actions: [{ label: "Заказать похожий", href: "#contact", primary: true }]
  },
  delivery: {
    title: "Delivery / Local Service",
    tag: "Demo concept",
    tagClass: "demo",
    image: "assets/img/demo-delivery.svg",
    text: "Демонстрационный концепт для локальной доставки или выездной услуги: понятная воронка, быстрый контакт, акцент на скорость и доверие. Не реальный клиентский проект.",
    actions: [{ label: "Заказать похожий", href: "#contact", primary: true }]
  }
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3600);
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Открыть меню");
}

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeModal();
  }
});

window.addEventListener("scroll", () => {
  if (ctaClosed || !floatingCta) return;
  const services = document.querySelector("#services");
  const revealPoint = services ? services.offsetTop + services.offsetHeight * 0.55 : window.innerHeight * 0.8;
  const progressed = window.scrollY > revealPoint || window.scrollY > window.innerHeight * 0.42;
  floatingCta.classList.toggle("visible", progressed);
}, { passive: true });

closeFloatingCta.addEventListener("click", () => {
  ctaClosed = true;
  floatingCta.classList.remove("visible");
});

floatingCta.querySelector("a").addEventListener("click", () => {
  floatingCta.classList.remove("visible");
});

function openModal(projectKey) {
  const project = projects[projectKey];
  if (!project) return;
  modalImage.src = project.image;
  modalImage.alt = `${project.title} preview`;
  modalGallery.innerHTML = "";
  const galleryImages = project.images && project.images.length ? project.images : [project.image];
  modalGallery.hidden = galleryImages.length <= 1;
  galleryImages.forEach((imageSrc, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === 0 ? "active" : "";
    button.setAttribute("aria-label", `Показать изображение ${index + 1}`);
    const thumb = document.createElement("img");
    thumb.src = imageSrc;
    thumb.alt = "";
    button.appendChild(thumb);
    button.addEventListener("click", () => {
      modalImage.src = imageSrc;
      modalGallery.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
    modalGallery.appendChild(button);
  });
  modalTag.textContent = project.tag;
  modalTag.className = `tag ${project.tagClass}`;
  modalTitle.textContent = project.title;
  modalText.textContent = project.text;
  modalActions.innerHTML = "";
  project.actions.forEach((action) => {
    const link = document.createElement("a");
    link.href = action.href;
    link.textContent = action.label;
    if (action.primary) link.classList.add("primary");
    if (action.href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.addEventListener("click", closeModal);
    }
    modalActions.appendChild(link);
  });
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(card.dataset.project);
    }
  });
});

modal.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeModal);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = `Заявка с сайта: ${data.get("task") || "Новая задача"}`;
  const body = [
    "Новая заявка с landing Nikolaj Dev",
    "",
    `Имя: ${data.get("name")}`,
    `Телефон / Email: ${data.get("contact")}`,
    `Telegram / WhatsApp: ${data.get("messenger") || "не указано"}`,
    `Тип задачи: ${data.get("task")}`,
    `Бюджет: ${data.get("budget")}`,
    `Срок: ${data.get("deadline") || "не указан"}`,
    "",
    "Описание задачи:",
    data.get("message")
  ].join("\n");

  const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formStatus.textContent = "Открываю email-клиент. Поля не очищены, чтобы заявка не потерялась.";
  showToast("Email-клиент должен открыться с готовым письмом.");
  window.location.href = mailto;
});
