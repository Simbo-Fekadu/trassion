// Core element references
const header = document.querySelector("header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("active");
    document.body.classList.toggle("nav-open");
  });
}

// Close nav on link click (mobile)
nav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      navToggle?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
});

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
  },
  { passive: true }
);

// Ensure hero videos visible with optional fade-in
const heroVideos = document.querySelectorAll("video.hero-video");
heroVideos.forEach((v) => {
  // apply fade-in class if supported
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
