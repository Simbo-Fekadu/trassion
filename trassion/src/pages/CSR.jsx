const Section = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
      {title}
    </h2>
    <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none leading-relaxed">
      {children}
    </div>
  </section>
);

export default function CSR() {
  return (
    <div className="max-w-5xl mx-auto px-4 space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Corporate Social Responsibility
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
          We embed responsibility into every layer of our operations—balancing
          innovation, social impact, environmental stewardship, and inclusive
          growth.
        </p>
      </header>

      <Section title="Our CSR Commitment">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Ethical Manufacturing:</strong> International standards for
            labor rights, workplace safety, and environmental protection.
          </li>
          <li>
            <strong>Community Engagement:</strong> Skills development, job
            creation, and youth opportunity programs.
          </li>
          <li>
            <strong>Sustainability:</strong> Waste reduction, energy efficiency,
            and responsible sourcing.
          </li>
          <li>
            <strong>Innovation for Inclusion:</strong> Accessible, affordable,
            locally relevant technology.
          </li>
        </ul>
      </Section>

      <Section title="Global CSR Highlights">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Education for Refugees & Youth:</strong> UNHCR partnerships,
            DAFI scholarships, and refugee learning support.
          </li>
          <li>
            <strong>Digital Learning Programs:</strong> UNICEF Learning
            Passport, TECNO Future Star scholarships, tech-enabled classrooms.
          </li>
          <li>
            <strong>Community & Relief Efforts:</strong> Itel "Love Always On"
            campaigns, disaster aid, and school donations.
          </li>
          <li>
            <strong>Environmental Responsibility:</strong> Conflict-free
            minerals policy, lean manufacturing, green design.
          </li>
        </ul>
      </Section>

      <Section title="Our Focus in Ethiopia">
        <p>As our presence grows locally, we focus on:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Education and community support initiatives.</li>
          <li>Partnerships with government and NGOs on key social goals.</li>
          <li>Meaningful, fair employment with strong working conditions.</li>
        </ul>
        <p className="mt-4">
          CSR here is more than policy—it's culture that shapes how we build,
          serve, and sustain for the future.
        </p>
      </Section>
    </div>
  );
}
