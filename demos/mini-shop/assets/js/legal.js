(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const year = document.querySelector("#year");
    if (year) year.textContent = new Date().getFullYear();

    document.addEventListener("submit", (event) => {
      const form = event.target.closest("[data-demo-form]");
      if (!form) return;
      event.preventDefault();
      const status = form.querySelector(".form-status");
      const type = form.dataset.demoForm || "form";
      const key = type === "withdrawal" ? "zevo_demo_withdrawals" : "zevo_demo_legal_forms";
      const data = Object.fromEntries(new FormData(form).entries());
      const stored = JSON.parse(localStorage.getItem(key) || "[]");
      stored.unshift({
        id: `ZEVO-${type.toUpperCase()}-${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toISOString(),
        data
      });
      localStorage.setItem(key, JSON.stringify(stored));
      form.reset();
      if (status) {
        status.textContent = "Demo: formulář byl uložen pouze lokálně v tomto prohlížeči. V ostré verzi musí být odeslán provozovateli a potvrzen e-mailem.";
      }
    });
  });
})();
