import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const logo = "/images/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/market", label: "Market" },
  { to: "/csr", label: "CSR" },
  { to: "/ims", label: "IMS Policy" },
  { to: "/contact", label: "Contact" },
];

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
    case "instagram":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 8.25A3.75 3.75 0 1 1 8.25 12 3.76 3.76 0 0 1 12 8.25Zm0 2A1.75 1.75 0 1 0 13.75 12 1.75 1.75 0 0 0 12 10.25Zm4.25-4.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M17.53 2 13.3 8.27 18.59 16h-3.06l-3.4-5.06L7.9 16H2.47l5.57-7.94L3.59 2h3.06l3.16 4.71L14.77 2h2.76Zm-2.57 12.62.89 1.33h2.15l-4-5.85-1.6 2.3 2.56 4.82H9.52l.89-1.33h4.55Z" />
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

function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

  // Ensure any previous dark-mode remnants are removed
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    try {
      localStorage.removeItem("theme");
    } catch {
      // ignore
    }
  }, []);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-white/25 text-white shadow-inner"
        : "text-white/90 hover:text-white hover:bg-white/15"
    }`;

  return (
    <div className="app-root min-h-screen w-full flex flex-col font-sans selection:bg-white/30">
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open
            ? "bg-slate-900/60 backdrop-blur-sm opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <header
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur transition-all ${
          scrolled ? "py-2" : "py-3"
        } bg-[#33A1E0] shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <NavLink
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="Transsion"
              className="h-10 w-auto drop-shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="leading-tight">
              <p className="text-white font-semibold text-sm md:text-base group-hover:text-white transition-colors">
                Transsion Holdings Ethiopia
              </p>
              <p className="text-white/80 text-[10px] md:text-xs tracking-wide uppercase drop-shadow">
                Together We Can
              </p>
            </div>
          </NavLink>
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
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <button
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="relative h-10 w-10 grid place-content-center rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-current transition-transform ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-transform ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
        {/* Mobile drawer */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[80%] z-50 backdrop-blur-xl shadow-xl pt-24 pb-8 px-6 flex flex-col gap-3 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          } bg-[#33A1E0] text-white`}
        >
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `block rounded px-3 py-2 text-sm font-medium tracking-wide ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "text-white/85 hover:bg-white/15"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {n.label}
            </NavLink>
          ))}
          <div className="mt-6 border-t border-white/30 pt-4 flex items-center justify-end">
            <span className="text-xs text-white/80">© 2025</span>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-28 md:pt-32 pb-12">
        <Outlet />
      </main>
      <footer className="mt-auto pt-8 pb-5 text-[11px] md:text-sm bg-[#33A1E0] text-white border-t border-[#33A1E0]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="space-y-4 max-w-md">
            <h3 className="font-semibold text-sm md:text-base tracking-wide">
              Transsion Holdings Ethiopia
            </h3>
            <p className="leading-relaxed text-white/85">
              Delivering accessible smart technology and services that empower
              communities across Africa.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-white/70">
              {["TECNO", "Infinix", "itel", "Syinix", "Oraimo", "Carlcare"].map(
                (b) => (
                  <span
                    key={b}
                    className="after:mx-1 after:text-white/50 after:content-['•'] last:after:content-none"
                  >
                    {b}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <ul className="flex gap-3" aria-label="Social media">
              {[
                {
                  n: "facebook",
                  href: "https://www.facebook.com/TranssionHoldings",
                  label: "Facebook",
                },
                {
                  n: "instagram",
                  href: "https://www.instagram.com",
                  label: "Instagram",
                },
                { n: "x", href: "https://twitter.com", label: "X" },
                {
                  n: "youtube",
                  href: "https://www.youtube.com/@TECNOMobile",
                  label: "YouTube",
                },
              ].map((s) => (
                <li key={s.n}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-white/75 hover:text-white transition-colors"
                    aria-label={s.label}
                  >
                    <Icon name={s.n} className="w-5 h-5" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 text-white/60">
              <a href="/privacy" className="hover:text-white">
                Privacy
              </a>
              <span className="h-3 w-px bg-white/35 dark:bg-white/15" />
              <a href="/terms" className="hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 mx-auto max-w-7xl px-4 pt-4 border-t border-white/30 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-[11px] text-white/70 tracking-wide">
          <span>
            © {new Date().getFullYear()} Transsion Holdings Ethiopia. All rights
            reserved.
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="uppercase tracking-wide text-white/60 hover:text-white transition text-[10px]"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
