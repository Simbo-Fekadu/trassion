import ResponsiveImage from "../components/ResponsiveImage";
import Container from "../components/Container";

export default function Market() {
  return (
    <div className="space-y-16">
      <Container className="space-y-16">
        <header className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Market Presence
          </h1>
          <p className="text-white/90 dark:text-slate-300 max-w-4xl leading-relaxed">
            We reach customers across Ethiopia through strategic distribution
            networks, trusted retail partners, and service centers that
            reinforce reliability and brand loyalty. Our mission is to connect
            communities with innovative technology while fostering sustainable
            economic growth.
          </p>
        </header>
        <section className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-brand dark:text-cyan-300">
              Customer Support
            </h2>
            <p className="text-white/90 dark:text-slate-300 leading-relaxed">
              Dedicated after-sales care through hotline, authorized centers,
              and digital channels ensures satisfaction and retention. Feedback
              loops drive iterative improvements in service quality and product
              relevance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["tecshop.png", "shoptec.png"].map((img) => (
              <div
                key={img}
                className="rounded-xl overflow-hidden ring-1 ring-slate-200/60 dark:ring-slate-700 bg-slate-100 dark:bg-slate-900/40"
              >
                <ResponsiveImage
                  file={img}
                  alt={img}
                  className="object-cover w-full h-40"
                />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
