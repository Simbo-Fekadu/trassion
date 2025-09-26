import Container from "../components/Container";
export default function Terms() {
  return (
    <div className="space-y-12">
      <Container size="md" className="space-y-12">
      <header className="space-y-4 pt-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Terms of Use
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          By using this website, you agree to comply with our terms and
          conditions. Please review them regularly to stay informed about our
          policies.
        </p>
      </header>

      <Section title="Use of Content">
        All content on this website is for informational purposes only. You may
        not redistribute, reproduce, or use our materials without explicit
        permission from Transsion Holdings Ethiopia.
      </Section>
      <Section title="User Responsibilities">
        You agree to use our website lawfully and not engage in any activities
        that could harm the site, its users, or our business.
      </Section>
      <Section title="Limitation of Liability">
        Transsion Holdings Ethiopia is not liable for any damages arising from
        the use of this website or reliance on its content. Use at your own
        risk.
      </Section>
      <Section title="Changes to Terms">
        We reserve the right to update these terms at any time without prior
        notice. Continued use of the website constitutes acceptance of the
        updated terms.
      </Section>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        For details on how we handle your personal data, please review our{" "}
        <a
          href="/privacy"
          className="text-cyan-600 dark:text-cyan-400 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>
      </Container>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
        <span className="h-6 w-1 rounded bg-gradient-to-b from-cyan-500 to-blue-500" />
        {title}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
        {children}
      </p>
    </section>
  );
}
