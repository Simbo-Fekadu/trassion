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
export default function CSR() {
  return (
    <div className="space-y-12">
      <Container className="space-y-12">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Corporate Social Responsibility
          </h1>
          <p className="text-white/90 dark:text-slate-300 max-w-3xl">
            We embed responsibility into every layer of our operations—balancing
            innovation, social impact, environmental stewardship, and inclusive
            growth.
          </p>
        </header>
        <div className="max-w-6xl mx-auto space-y-10">
          {/* At a glance strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Theme", value: "People • Planet • Prosperity" },
              { label: "Approach", value: "Ethics • Inclusion • Impact" },
              { label: "Programs", value: "Education • Relief • Green" },
              { label: "Partnering", value: "UN • NGOs • Gov" },
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
            <Section title="Our CSR Commitment">
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  [
                    "Ethical Manufacturing:",
                    "International standards for labor rights, workplace safety, and environmental protection.",
                  ],
                  [
                    "Community Engagement:",
                    "Skills development, job creation, and youth opportunity programs.",
                  ],
                  [
                    "Sustainability:",
                    "Waste reduction, energy efficiency, and responsible sourcing.",
                  ],
                  [
                    "Innovation for Inclusion:",
                    "Accessible, affordable, locally relevant technology.",
                  ],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start gap-2">
                    <span className="mt-1 text-white/80">•</span>
                    <span>
                      <strong>{k}</strong> {v}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Global highlights as cards grid */}
          <Section title="Global CSR Highlights" />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              [
                "Education for Refugees & Youth",
                "UNHCR partnerships, DAFI scholarships, and refugee learning support.",
              ],
              [
                "Digital Learning Programs",
                "UNICEF Learning Passport, TECNO Future Star scholarships, tech-enabled classrooms.",
              ],
              [
                "Community & Relief Efforts",
                "Itel 'Love Always On' campaigns, disaster aid, and school donations.",
              ],
              [
                "Environmental Responsibility",
                "Conflict-free minerals policy, lean manufacturing, green design.",
              ],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-xl p-5 border border-white/30 bg-white/10 flex flex-col gap-2"
              >
                <h3 className="font-semibold text-white">{t}</h3>
                <p className="text-sm text-white/90 dark:text-slate-300 leading-relaxed">
                  {d}
                </p>
              </div>
            ))}
          </div>

          {/* Ethiopia focus */}
          <div className="rounded-2xl border border-white/30 bg-white/10 p-6">
            <Section title="Our Focus in Ethiopia">
              <p className="text-white/90 dark:text-slate-300">
                As our presence grows locally, we focus on:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm mt-2">
                {[
                  "Education and community support initiatives.",
                  "Partnerships with government and NGOs on key social goals.",
                  "Meaningful, fair employment with strong working conditions.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-white/80">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-white/90 dark:text-slate-300">
                CSR here is more than policy—it's culture that shapes how we
                build, serve, and sustain for the future.
              </p>
            </Section>
          </div>
        </div>
      </Container>
    </div>
  );
}
