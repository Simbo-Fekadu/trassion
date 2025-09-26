import ResponsiveImage from "../components/ResponsiveImage";
import Container from "../components/Container";

const products = [
  {
    title: "Tecno Spark 9",
    tag: "Smartphone for Youth",
    img: "tecno-spark.png",
    desc: "Affordable smartphone with powerful features for everyday use, ideal for students and young professionals.",
    link: "https://www.tecno-mobile.com/phones/product-list/#new-spark",
  },
  {
    title: "Infinix HOT 50 Pro+",
    tag: "Big Screen & Performance",
    img: "HOT50.PNG",
    desc: "Large display, smooth performance and stylish design for streaming, gaming and multitasking.",
    link: "https://et.infinixmobility.com/",
  },
  {
    title: "Itel A70",
    tag: "Classic Feature Phone",
    img: "A7-.PNG",
    desc: "Long battery life and reliability in a simple, accessible form factor.",
    link: "https://www.itel-life.com/products/phone/p-series/power-70",
  },
  {
    title: "Syinix Smart TV",
    tag: "Smart Entertainment",
    img: "syinix-smart-tv.png",
    desc: "Immersive home entertainment with smart connectivity and vivid display technology.",
    link: "https://ke.syinix.com/collections/august-deals",
  },
  {
    title: "Oraimo Powerbank",
    tag: "Portable Power",
    img: "oraimo-powerbank.png",
    desc: "Compact and dependable portable power solution to keep devices charged anywhere.",
    link: "https://www.itel-life.com/products/powr/power-bank",
  },
  {
    title: "Speaker Bar",
    tag: "Immersive Sound",
    img: "SYN.png",
    desc: "Powerful, space-efficient audio for movies, music, and gaming.",
    link: "https://ke.syinix.com/collections/soundbar",
  },
  {
    title: "Feature Phones",
    tag: "Classic Feature Phones",
    img: "Tecno-T528.png",
    desc: "Reliable phones with long-lasting batteries and essential communication features.",
    link: "https://www.tecno-mobile.com/phones/product-list/#new-spark",
  },
];

export default function Products() {
  return (
    <div className="space-y-14">
      <Container className="space-y-14">
        <header className="space-y-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-brand dark:text-cyan-300">
            Our Products
          </h1>
          <p className="text-white/90 dark:text-slate-300 leading-relaxed">
            We proudly distribute and support leading brands: TECNO, Infinix,
            itel, Syinix, Oraimo and more—bringing innovation, reliability and
            accessibility to diverse users.
          </p>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.title}
              className="relative rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 shadow-sm hover:shadow-md transition flex flex-col group"
            >
              <div className="product-top-text absolute top-2 left-2 text-[10px] uppercase bg-brand text-white px-2 py-1 rounded tracking-wide font-medium group-hover:bg-brand-light">
                {p.tag}
              </div>
              <div className="aspect-square w-full bg-slate-100 dark:bg-slate-900/40 flex items-center justify-center overflow-hidden">
                <ResponsiveImage
                  file={p.img}
                  alt={p.title}
                  className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-brand dark:group-hover:text-cyan-300">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                  {p.desc}
                </p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand dark:text-cyan-300 hover:gap-2 transition-all hover:text-brand-light"
                >
                  Learn More <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
