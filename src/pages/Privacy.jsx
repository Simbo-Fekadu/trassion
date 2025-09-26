import Container from "../components/Container";
export default function Privacy() {
  return (
    <div className="space-y-12">
      <Container size="md" className="space-y-12">
        <header className="space-y-4 pt-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-brand dark:text-cyan-300">
            Privacy Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Your privacy is important to us. We handle your personal information
            responsibly and securely, and never share it without your consent.
          </p>
        </header>

        <Section title="Information We Collect">
          We may collect personal information such as your name, email address,
          and other details when you contact us or use our services.
        </Section>
        <Section title="How We Use Your Information">
          Your information helps us provide better services, respond to
          inquiries, and improve your experience on our website.
        </Section>
        <Section title="Data Security">
          We implement security measures to protect your data from unauthorized
          access, alteration, or disclosure.
        </Section>
        <Section title="Third-Party Sharing">
          We do not sell or share your personal data with third parties except
          as required by law or to trusted partners helping us deliver our
          services.
        </Section>
        <Section title="Cookies and Tracking">
          Our website may use cookies to enhance user experience. You can manage
          cookie preferences through your browser settings.
        </Section>
        <Section title="Changes to this Policy">
          We may update this privacy policy periodically. Please review it
          regularly for any changes.
        </Section>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          For our terms and conditions, please see our{" "}
          <a
            href="/terms"
            className="text-brand dark:text-cyan-300 hover:underline"
          >
            Terms of Use
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
  <span className="h-6 w-1 rounded bg-brand dark:bg-brand-dark" />
        {title}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
        {children}
      </p>
    </section>
  );
}
