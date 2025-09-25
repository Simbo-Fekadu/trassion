document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = header ? header.querySelector("nav") : null;
  const navBackdrop = header ? header.querySelector(".nav-backdrop") : null;

  function openNav() {
    if (!nav) return;
    nav.classList.add("active");
    document.body.classList.add("nav-open");
    navToggle && navToggle.setAttribute("aria-expanded", "true");
    navBackdrop && (navBackdrop.style.display = "block");
  }
  function closeNav() {
    if (!nav) return;
    nav.classList.remove("active");
    document.body.classList.remove("nav-open");
    navToggle && navToggle.setAttribute("aria-expanded", "false");
    navBackdrop && (navBackdrop.style.display = "none");
  }
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      if (nav.classList.contains("active")) {
        closeNav();
      } else {
        openNav();
      }
    });
  }
  // Close nav on link click (mobile)
  if (nav) {
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }
  // Close nav when clicking outside (on backdrop)
  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeNav);
  }
  // Hide / show header on scroll & add scrolled class
  let lastScrollTop = 0;
  const scrollThreshold = 12;
  window.addEventListener(
    "scroll",
    () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (!header) return;
      if (Math.abs(st - lastScrollTop) > scrollThreshold) {
        header.style.top = st > lastScrollTop ? "-90px" : "0";
        lastScrollTop = st <= 0 ? 0 : st;
      }
      header.classList.toggle("scrolled", st > 30);
      // If nav is open and user scrolls, close nav
      if (nav && nav.classList.contains("active")) closeNav();
    },
    { passive: true }
  );

  // Ensure hero videos visible with optional fade-in
  const heroVideos = document.querySelectorAll("video.hero-video");
  heroVideos.forEach((v) => {
    v.classList.add("fade-in");
    const markReady = () => v.classList.add("ready");
    if (v.readyState >= 2) {
      markReady();
    } else {
      v.addEventListener("loadeddata", markReady, { once: true });
      v.addEventListener("canplay", markReady, { once: true });
    }
    v.addEventListener(
      "error",
      () => {
        markReady();
      },
      { once: true }
    );
    setTimeout(() => {
      if (!v.classList.contains("ready")) markReady();
    }, 2500);
    try {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(markReady).catch(markReady);
      }
    } catch {
      markReady();
    }
  });
});

