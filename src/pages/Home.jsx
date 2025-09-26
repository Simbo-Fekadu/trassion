import ResponsiveImage from "../components/ResponsiveImage";
import Container from "../components/Container";

export default function Home() {
  return (
    <div className="space-y-24 w-full">
      {/* Full-bleed hero without side white margins */}
      <section className="relative w-full aspect-[16/7] bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full opacity-60"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/20" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg max-w-4xl">
            Empowering Africa with Smart Technology
          </h1>
          <p className="mt-5 text-slate-200 max-w-2xl text-sm md:text-lg leading-relaxed">
            Connecting communities through innovative mobile solutions.
          </p>
          <a
            href="/about"
            className="mt-7 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-10 py-4 rounded-full shadow hover:shadow-lg hover:from-cyan-400 hover:to-blue-400 transition text-sm md:text-base"
          >
            Discover More
          </a>
        </div>
      </section>
      <div className="space-y-24">
        <Container className="space-y-24">
        <section className="space-y-6" id="who">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-3">
            <span className="h-8 w-1 rounded bg-gradient-to-b from-cyan-500 to-blue-500" />
            Who We Are
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Transsion Holdings Ethiopia is part of Transsion Holdings, a leader
            in smart devices and mobile services for Africa. We bring TECNO,
            Infinix, itel, Syinix, and Oraimo to millions, empowering
            communities with reliable technology solutions.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium hover:gap-3 transition-all"
          >
            Learn More <span aria-hidden>→</span>
          </a>
        </section>
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-3">
            <span className="h-8 w-1 rounded bg-gradient-to-b from-cyan-500 to-blue-500" />
            Our Brands
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { file: "tecbrand.png", alt: "TECNO" },
              { file: "infbrand.png", alt: "Infinix" },
              { file: "itelbrand.png", alt: "itel" },
              { file: "syibrand.png", alt: "Syinix" },
              { file: "orabrand.png", alt: "Oraimo" },
              { file: "carlbrand.png", alt: "Carlcare" },
            ].map((b) => (
              <div
                key={b.file}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6 shadow-lg ring-1 ring-white/10 hover:ring-cyan-300/60 transition dark:from-slate-800 dark:via-slate-700 dark:to-slate-600"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e9_0%,transparent_55%)] opacity-0 group-hover:opacity-40 transition-opacity" />
                <ResponsiveImage
                  file={b.file}
                  alt={b.alt}
                  className="relative mx-auto h-14 w-auto object-contain drop-shadow-[0_6px_18px_rgba(14,165,233,0.45)]"
                />
              </div>
            ))}
          </div>
        </section>
        </Container>
      </div>
    </div>
  );
}
