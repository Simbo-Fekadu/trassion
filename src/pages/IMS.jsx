const Section = ({ title, children }) => (
  <section className="space-y-5">
    <div className="flex items-center gap-2">
      <span className="h-6 w-1 rounded bg-gradient-to-b from-cyan-500 to-blue-500" />
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
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
          Certified under ISO 9001, we drive quality, safety, environmental
          responsibility and continuous improvement into every operational
          layer.
        </p>
      </header>
      <div className="max-w-5xl mx-auto space-y-12">
        <Section title="Our Commitment">
          <p className="text-slate-700 dark:text-slate-300">We strive to:</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm mt-2">
            <li>
              Exceed customer expectations with high-quality products and
              services.
            </li>
            <li>Continuously improve efficiency and performance.</li>
            <li>Comply with all applicable legal and industry standards.</li>
            <li>
              Promote a culture of excellence, safety, and responsibility.
            </li>
          </ul>
        </Section>

        <Section title="Core Pillars">
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            <li>
              <strong>Quality Management:</strong> Monitoring & optimization of
              processes to reduce defects and boost satisfaction.
            </li>
            <li>
              <strong>Environmental Responsibility:</strong> Sustainable
              practices, resource efficiency, and regulatory compliance.
            </li>
            <li>
              <strong>Health & Safety:</strong> Training, risk assessment, and
              proactive prevention to protect people.
            </li>
            <li>
              <strong>Energy Management:</strong> Efficiency measures aligned
              with global best practice to reduce consumption.
            </li>
            <li>
              <strong>Continuous Improvement:</strong> Regular audits,
              corrective actions, and performance innovation.
            </li>
          </ul>
        </Section>

        <Section title="Vision & Training">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Our Vision:</strong> Lead in integrating quality,
            sustainability, safety, and energy efficiency for long-term
            stakeholder value.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Training & Awareness:</strong> Ongoing programs ensure every
            employee understands and applies IMS principles.
          </p>
        </Section>

        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 dark:bg-cyan-400/10 p-6 flex flex-col gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-3xl" role="img" aria-label="certificate">
              🎖️
            </span>
            <h3 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300">
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
