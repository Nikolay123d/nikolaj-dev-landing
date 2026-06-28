(function () {
  const preloader = document.getElementById("preloader");
  const heroImage = document.querySelector(".hero-bg img");
  const minDelay = new Promise((resolve) => window.setTimeout(resolve, 650));
  const maxDelay = new Promise((resolve) => window.setTimeout(resolve, 2800));

  function imageReady(image) {
    if (!image) return Promise.resolve();
    if (image.complete && image.naturalWidth > 0) return Promise.resolve();
    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  }

  const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready.catch(() => {}) : Promise.resolve();
  const heroMediaReady = new Promise((resolve) => {
    let resolved = false;
    const done = () => {
      if (resolved) return;
      resolved = true;
      resolve();
    };
    window.addEventListener("hero-media-ready", done, { once: true });
    window.setTimeout(done, 2400);
  });

  Promise.race([
    Promise.all([imageReady(heroImage), fontsReady, heroMediaReady, minDelay]),
    maxDelay
  ]).then(() => {
    document.body.classList.remove("is-loading");
    preloader?.classList.add("is-hidden");
    window.setTimeout(() => preloader?.remove(), 700);
  });
})();
