const Section = ({ title, children }) => (
  <section className="space-y-5">
    <div className="flex items-center gap-2">
      <span className="h-6 w-1 rounded bg-brand dark:bg-brand-dark" />
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
        {title}
      </h2>
    </div>
    <div className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 space-y-4">
      {children}
    </div>
  </section>
);

import Container from "../components/Container";
export default function IMS() {
  return (
    <div className="space-y-12">
      <Container className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Integrated Management System (IMS)
          </h1>
          <p className="text-white/90 dark:text-slate-300 max-w-3xl">
            Certified under ISO 9001, we drive quality, safety, environmental
            responsibility and continuous improvement into every operational
            layer.
          </p>
        </header>
        <div className="max-w-6xl mx-auto space-y-10">
          {/* At a glance strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Standard", value: "ISO 9001:2015" },
              { label: "Scope", value: "Quality • Safety • Environment" },
              { label: "Approach", value: "Plan • Do • Check • Act" },
              { label: "Focus", value: "Continuous Improvement" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl px-4 py-3 border border-white/30 text-white/90 bg-white/10"
              >
                <div className="text-[11px] uppercase tracking-wide opacity-80">
                  {m.label}
                </div>
                <div className="text-sm font-medium">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Commitment as checklist card */}
          <div className="rounded-2xl border border-white/30 bg-white/10 p-6 shadow-sm">
            <Section title="Our Commitment">
              <p className="text-white/90 dark:text-slate-300">We strive to:</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm mt-2">
                {[
                  "Exceed customer expectations with high-quality products and services.",
                  "Continuously improve efficiency and performance.",
                  "Comply with all applicable legal and industry standards.",
                  "Promote a culture of excellence, safety, and responsibility.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-white/80">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Pillars as cards grid */}
          <Section title="Core Pillars" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                t: "Quality Management",
                d: "Monitoring & optimization of processes to reduce defects and boost satisfaction.",
              },
              {
                t: "Environmental Responsibility",
                d: "Sustainable practices, resource efficiency, and regulatory compliance.",
              },
              {
                t: "Health & Safety",
                d: "Training, risk assessment, and proactive prevention to protect people.",
              },
              {
                t: "Energy Management",
                d: "Efficiency measures aligned with global best practice to reduce consumption.",
              },
              {
                t: "Continuous Improvement",
                d: "Regular audits, corrective actions, and performance innovation.",
              },
            ].map((p) => (
              <div
                key={p.t}
                className="rounded-xl p-5 border border-white/30 bg-white/10 flex flex-col gap-2"
              >
                <h3 className="font-semibold text-white">{p.t}</h3>
                <p className="text-sm text-white/90 dark:text-slate-300 leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>

          {/* Vision & Training split */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl p-5 border border-white/30 bg-white/10">
              <Section title="Our Vision">
                <p className="text-white/90 dark:text-slate-300">
                  Lead in integrating quality, sustainability, safety, and
                  energy efficiency for long-term stakeholder value.
                </p>
              </Section>
            </div>
            <div className="rounded-xl p-5 border border-white/30 bg-white/10">
              <Section title="Training & Awareness">
                <p className="text-white/90 dark:text-slate-300">
                  Ongoing programs ensure every employee understands and applies
                  IMS principles.
                </p>
              </Section>
            </div>
          </div>

          {/* Certification highlight (kept brand styling) */}
          <div className="rounded-2xl border border-brand/40 bg-brand/5 dark:bg-brand-dark/30 p-6 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl" role="img" aria-label="certificate">
                🎖️
              </span>
              <h3 className="text-xl font-semibold text-brand dark:text-cyan-300">
                ISO 9001:2015 Certified
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              This certification reflects our systematic approach to Quality
              Management Systems, operational excellence, and unwavering
              dedication to consistent improvement.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
