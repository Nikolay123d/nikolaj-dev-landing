(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function dispatchHeroReady() {
    window.dispatchEvent(new CustomEvent("hero-media-ready"));
  }

  function prepareVideo(video, options = {}) {
    if (!video || !video.dataset.src || reduceMotion) return Promise.resolve(false);
    if (!video.src) {
      video.src = video.dataset.src;
      video.load();
    }
    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    return new Promise((resolve) => {
      let settled = false;
      const done = (ready) => {
        if (settled) return;
        settled = true;
        resolve(ready);
      };

      video.addEventListener("canplay", () => done(true), { once: true });
      video.addEventListener("loadedmetadata", () => done(true), { once: true });
      video.addEventListener("error", () => done(false), { once: true });
      window.setTimeout(() => done(false), options.timeout || 2200);
    });
  }

  function safePlay(video) {
    if (!video || reduceMotion) return;
    const play = video.play();
    if (play && typeof play.catch === "function") play.catch(() => {});
  }

  document.addEventListener("DOMContentLoaded", () => {
    const heroVideo = document.getElementById("heroVideo");
    prepareVideo(heroVideo, { timeout: 2300 }).then((ready) => {
      if (ready && heroVideo) {
        safePlay(heroVideo);
        document.body.classList.add("hero-video-ready");
      }
      dispatchHeroReady();
    });

    const lazyVideos = Array.from(document.querySelectorAll(".lazy-video"));
    if (!lazyVideos.length || reduceMotion) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.setAttribute("autoplay", "");
          safePlay(video);
          prepareVideo(video, { timeout: 1800 }).then(() => safePlay(video));
        } else {
          video.pause();
        }
      });
    }, { rootMargin: "220px 0px", threshold: 0.22 });

    lazyVideos.forEach((video) => observer.observe(video));
  });
})();
