const infoItems = [
  {
    icon: "📞",
    label: "Phone",
    value: "+251 11 123 4567",
    href: "tel:+251111234567",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@transsionethiopia.com",
    href: "mailto:info@transsionethiopia.com",
  },
  {
    icon: "📍",
    label: "Address",
    value: "ICT Industrial Park, GORO, Addis Ababa, Ethiopia",
  },
  { icon: "⏱️", label: "Office Hours", value: "Mon – Fri, 9:00 AM – 5:00 PM" },
];

import { useState } from "react";
import Container from "../components/Container";
import ResponsiveImage from "../components/ResponsiveImage"; // in case we add decorative images later

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  return (
    <div className="space-y-16">
      <Container className="space-y-16">
        <header className="space-y-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            We are here to help. Reach out via any of the official channels
            below.
          </p>
        </header>
        <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
              <span className="h-6 w-1 rounded bg-brand dark:bg-brand-dark" />{" "}
              Quick Contacts
            </h2>
            <ul className="space-y-4">
              {infoItems.map((item) => (
                <li key={item.label} className="flex gap-3 items-start">
                  <span className="text-lg" aria-hidden>
                    {item.icon}
                  </span>
                  <div className="text-sm">
                    <p className="font-medium text-slate-700 dark:text-slate-200">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brand dark:text-cyan-300 hover:underline break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-600 dark:text-slate-300">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <ContactCard
                title="Main Office (HQ)"
                address={[
                  "Transsion Holdings Ethiopia",
                  "Welo Sefer, Garad Building",
                  "Addis Ababa, Ethiopia",
                ]}
                phone="+251114671360"
              />
              <ContactCard
                title="Manufacturing Facility"
                address={[
                  "Transsion Manufacturing PLC",
                  "Bole Sub-City, Wereda 11",
                  "ICT Park, Addis Ababa",
                ]}
                badge="ISO 9001:2015"
              />
              <ContactCard
                title="Additional Contacts"
                details={[
                  "Mobile: +251 9 223 373 91",
                  "Telephone: +251 11 467 1360",
                  "Fax: +251 11 467 1049",
                ]}
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
              <span className="h-6 w-1 rounded bg-brand dark:bg-brand-dark" />{" "}
              Send Us a Message
            </h2>
            <form
              className="grid gap-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = Object.fromEntries(new FormData(form));
                setStatus("submitting");
                setMessage("");
                try {
                  // Replace FORM_ENDPOINT with your Formspree endpoint e.g. https://formspree.io/f/xxxxx
                  const FORM_ENDPOINT =
                    import.meta.env.VITE_FORMSPREE_ENDPOINT || "/api/contact";
                  const res = await fetch(FORM_ENDPOINT, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });
                  if (!res.ok) throw new Error("Failed to send");
                  setStatus("success");
                  setMessage("Thank you – your message has been sent.");
                  form.reset();
                } catch {
                  setStatus("error");
                  setMessage("Sorry, something went wrong. Please try again.");
                }
              }}
            >
              <Input label="Name" name="name" required />
              <Input label="Email" name="email" type="email" required />
              <TextArea label="Message" name="message" rows={6} required />
              {message && (
                <div
                  className={`text-sm rounded-md px-3 py-2 border ${
                    status === "success"
                      ? "bg-green-50 border-green-300 text-green-700 dark:bg-green-500/10 dark:border-green-600 dark:text-green-300"
                      : status === "error"
                      ? "bg-red-50 border-red-300 text-red-700 dark:bg-red-500/10 dark:border-red-600 dark:text-red-300"
                      : "border-slate-300 dark:border-slate-600"
                  }`}
                >
                  {message}
                </div>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="justify-center inline-flex items-center gap-2 rounded-md bg-brand text-white font-semibold px-6 py-3 hover:bg-brand-light shadow-sm hover:shadow transition text-sm disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand/60 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
            <div className="rounded-xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 shadow">
              <iframe
                title="Map location of Transsion Holdings Ethiopia"
                src="https://www.google.com/maps?q=Bole+Lemi+Industrial+Park,+Addis+Ababa,+Ethiopia&output=embed"
                className="w-full h-64"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

function Input({ label, ...rest }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label
      className="text-sm font-medium text-slate-700 dark:text-slate-200 space-y-1"
      htmlFor={id}
    >
      {label}
      <input
        id={id}
        {...rest}
        className="w-full rounded-md border border-slate-300 dark:border-slate-600 px-4 py-2 bg-white/80 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
      />
    </label>
  );
}

function TextArea({ label, ...rest }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label
      className="text-sm font-medium text-slate-700 dark:text-slate-200 space-y-1"
      htmlFor={id}
    >
      {label}
      <textarea
        id={id}
        {...rest}
        className="w-full rounded-md border border-slate-300 dark:border-slate-600 px-4 py-2 bg-white/80 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
      />
    </label>
  );
}

function ContactCard({ title, address, phone, badge, details }) {
  return (
    <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 p-4 flex flex-col gap-2 text-sm shadow-sm">
      <h3 className="font-semibold text-slate-700 dark:text-slate-200">
        {title}
      </h3>
      {address && (
        <address className="not-italic text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
          {address.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </address>
      )}
      {phone && (
        <a
          href={`tel:${phone}`}
          className="text-cyan-600 dark:text-cyan-400 text-xs hover:underline"
        >
          {phone}
        </a>
      )}
      {details && (
        <ul className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed list-disc pl-4">
          {details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}
      {badge && (
        <span className="mt-auto self-start text-[10px] uppercase tracking-wide bg-cyan-600/20 text-cyan-700 dark:text-cyan-300 dark:bg-cyan-500/20 px-2 py-1 rounded">
          {badge}
        </span>
      )}
    </div>
  );
}
