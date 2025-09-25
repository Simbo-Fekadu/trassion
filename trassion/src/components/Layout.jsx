import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png"; // ensure you add logo.png to assets
import { useState, useEffect } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/market", label: "Market" },
  { to: "/csr", label: "CSR" },
  { to: "/ims", label: "IMS Policy" },
  { to: "/contact", label: "Contact" },
];

// Lightweight SVG icons (no external deps)
function Icon({ name, className = "w-5 h-5" }) {
  const common = {
    className: `${className} fill-current`,
    "aria-hidden": true,
    focusable: false,
  };
  switch (name) {
    case "facebook":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.99 3.64 9.13 8.4 9.93v-7.03H7.9v-2.9h2.37V9.41c0-2.35 1.4-3.65 3.55-3.65 1.03 0 2.1.18 2.1.18v2.31h-1.18c-1.16 0-1.52.72-1.52 1.45v1.74h2.59l-.41 2.9h-2.18V22c4.76-.8 8.4-4.94 8.4-9.93Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM8.34 17.34H6.16V10h2.18v7.34ZM7.25 8.92a1.26 1.26 0 1 1 0-2.52 1.26 1.26 0 0 1 0 2.52Zm10.09 8.42h-2.18v-3.78c0-.9-.02-2.06-1.25-2.06-1.25 0-1.44.97-1.44 1.99v3.85h-2.18V10h2.09v1.01h.03c.29-.55 1-1.13 2.05-1.13 2.19 0 2.59 1.44 2.59 3.31v4.15Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.8 4.75 12 4.75 12 4.75s-5.8 0-7.64.49A2.75 2.75 0 0 0 2.42 7.2 28.46 28.46 0 0 0 1.93 12c0 1.66.18 3.31.49 4.81.25.92.98 1.64 1.94 1.89 1.84.5 7.64.5 7.64.5s5.8 0 7.64-.49a2.75 2.75 0 0 0 1.94-1.95c.31-1.5.49-3.15.49-4.81 0-1.66-.18-3.31-.49-4.81ZM10 15.02V8.98l5.14 3.02L10 15.02Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Initialize dark mode synchronously from storage or media query
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  // Apply theme class whenever it changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // ignore persistence errors (private mode, etc.)
    }
  }, [dark]);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-cyan-200 bg-white/10"
        : "text-white/80 hover:text-white hover:bg-white/10"
    }`;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 dark:text-slate-100 bg-[linear-gradient(180deg,#f2f7ff_0%,#ffffff_60%,#e8f1ff_100%)] dark:bg-[linear-gradient(180deg,#061529_0%,#071a33_55%,#05101f_100%)] selection:bg-cyan-500/30">
      <header
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur shadow transition-all bg-[linear-gradient(90deg,#003b73_0%,#005a9c_50%,#0077b6_100%)] dark:bg-[linear-gradient(90deg,#021223_0%,#032b52_55%,#03406f_100%)] ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Transsion" className="h-10 w-auto" />
            <div className="leading-tight">
              <p className="text-white font-semibold text-sm md:text-base">
                Transsion Holdings Ethiopia
              </p>
              <p className="text-cyan-200 text-[10px] md:text-xs tracking-wide uppercase drop-shadow">
                Together We Can
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </NavLink>
            ))}
            <button
              onClick={() => setDark((d) => !d)}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="Toggle dark mode"
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="text-lg" aria-hidden>
                {dark ? "🌙" : "☀️"}
              </span>
            </button>
          </nav>
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden relative h-10 w-10 grid place-content-center rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
        {/* Mobile panel */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            open
              ? "bg-slate-900/60 backdrop-blur-sm opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        ></div>
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[80%] z-50 bg-[linear-gradient(180deg,#003760_0%,#004b80_40%,#003760_100%)] dark:bg-[linear-gradient(180deg,#052038_0%,#063255_45%,#041627_100%)] backdrop-blur-xl shadow-xl pt-24 pb-8 px-6 flex flex-col gap-3 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `block rounded px-3 py-2 text-sm font-medium tracking-wide ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "text-slate-100 hover:bg-white/10"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {n.label}
            </NavLink>
          ))}
          <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-100 hover:text-cyan-300"
            >
              {dark ? "🌙 Dark" : "☀️ Light"}
            </button>
            <span className="text-xs text-slate-400">© 2025</span>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-28 md:pt-32 pb-16">
        <Outlet />
      </main>
      <footer className="mt-auto text-slate-200 py-12 text-sm bg-[linear-gradient(135deg,#003b73_0%,#005a9c_60%,#0077b6_100%)] dark:bg-[linear-gradient(135deg,#03182c_0%,#052e52_55%,#064069_100%)]">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-white font-semibold mb-3 text-base tracking-wide">
              Transsion Holdings Ethiopia
            </h3>
            <p className="text-xs leading-relaxed text-slate-100/70">
              Delivering accessible smart technology and services that empower
              communities across Africa.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2 text-sm tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {navItems.slice(0, 5).map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={n.to}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2 text-sm tracking-wide">
              Connect
            </h4>
            <ul className="flex gap-4 items-center" aria-label="Social media">
              <li>
                <a
                  href="https://www.facebook.com/TranssionHoldings"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded bg-white/5 hover:bg-white/15 text-white/85 hover:text-white transition shadow-sm"
                  aria-label="Facebook"
                >
                  <Icon name="facebook" className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/transsion-holdings/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded bg-white/5 hover:bg-white/15 text-white/85 hover:text-white transition shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@TECNOMobile"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded bg-white/5 hover:bg-white/15 text-white/85 hover:text-white transition shadow-sm"
                  aria-label="YouTube"
                >
                  <Icon name="youtube" className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-[11px] text-white/60 tracking-wide">
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}
