import ResponsiveImage from "../components/ResponsiveImage";
import Container from "../components/Container";

// Reusable styles
const sectionTitle =
  "text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2";
// Brand accent bar now uses brand color tokens instead of fixed cyan/blue gradient
const gradientBar = (
  <span className="h-7 w-1 rounded bg-brand dark:bg-brand-dark" />
);

export default function About() {
  return (
    <div className="space-y-20">
      <Container>
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl shadow ring-1 ring-slate-200/70 dark:ring-slate-700 overflow-hidden bg-slate-100 dark:bg-slate-900/40">
            <ResponsiveImage
              file="TRANSSIONHOME.png"
              alt="Transsion Holdings Ethiopia"
              className="object-cover w-full max-h-[360px]"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-brand dark:text-cyan-300">
              Welcome to Transsion Holdings Ethiopia
            </h1>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              We deliver innovative and affordable technology solutions across
              Africa, connecting communities and empowering people.
            </p>
          </div>
        </section>
      </Container>

      <Container className="space-y-10">
        <div className={sectionTitle}>{gradientBar} Our Mission</div>
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
          To empower individuals and communities across Africa by connecting
          them through innovative mobile and electronic products.
        </p>
        <div className={sectionTitle}>{gradientBar} Our Values</div>
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            "Customer-centric approach",
            "Innovation and quality",
            "Community empowerment",
            "Sustainability and responsibility",
          ].map((v) => (
            <li
              key={v}
              className="rounded-lg bg-white/70 dark:bg-slate-800/60 p-4 border border-slate-200/70 dark:border-slate-700 shadow-sm flex items-start gap-2"
            >
              <span className="mt-1 text-brand dark:text-cyan-400">•</span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </Container>

      <GalleryBlock
        title="Community Engagement"
        text="Our team actively engages with local communities through educational programs, social projects, and technology empowerment initiatives that create meaningful and lasting impact."
        images={["Comeng.png", "comm.png", "commegn.png"]}
      />
      <GalleryBlock
        title="Ethiopian Tamririt Expo"
        text="Showcasing our Ethiopian Tamririt Expo to highlight our commitment to technology and community growth."
        images={["run.png", "runn.png", "runnn.png"]}
      />
      <GalleryBlock
        title="2024 Recognition Program"
        text="Celebrating the 2024 Annual Recognition Program of our employees achievements; recognizing their contributions to company success."
        images={["an.png", "ann.png", "annu.png"]}
      />

      <Container className="space-y-10">
        <div className={sectionTitle}>{gradientBar} Departments & Roles</div>
        <p className="text-slate-600 dark:text-slate-300 max-w-4xl">
          Our strength comes from specialized teams working together to deliver
          innovation, quality, and community impact.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {departments.map((d) => (
            <div
              key={d.name}
              className="group rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                {d.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {d.desc}
              </p>
              <ul className="flex flex-wrap gap-2 mt-auto">
                {d.roles.map((r) => (
                  <li
                    key={r}
                    className="text-[10px] tracking-wide uppercase bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 dark:bg-cyan-500/20 px-2 py-1 rounded"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function GalleryBlock({ title, text, images }) {
  return (
    <Container className="space-y-6">
      <h3 className="text-2xl font-semibold text-brand dark:text-cyan-300">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 max-w-3xl">{text}</p>
      <div className="grid sm:grid-cols-3 gap-4">
        {images.map((img) => (
          <div
            key={img}
            className="relative rounded-xl overflow-hidden ring-1 ring-slate-200/60 dark:ring-slate-700 bg-slate-100 dark:bg-slate-900/40 group"
          >
            <ResponsiveImage
              file={img}
              alt={title}
              className="h-52 w-full object-cover object-center group-hover:scale-[1.03] transition-transform"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

const departments = [
  {
    name: "Management Representative (MR)",
    desc: "Links management and departments, ensuring IMS/ISO compliance and overseeing Health & Safety, Logistics, Canteen, and Procurement.",
    roles: [
      "IMS Coordinator",
      "Compliance Officer",
      "Management Liaison",
      "Procurement",
      "Logistics",
      "EHS",
      "Supply Chain",
    ],
  },
  {
    name: "Production & Manufacturing",
    desc: "Oversees mobile and electronics assembly, ensuring world-class quality and efficiency.",
    roles: ["Supervisors", "QC Inspectors", "Technicians"],
  },
  {
    name: "Product Department",
    desc: "Product planning, development, and lifecycle management to meet market demands.",
    roles: ["Product Managers", "Market Analysts", "Specialists"],
  },
  {
    name: "Quality Department",
    desc: "Ensures product standards, continuous improvement, and compliance with international benchmarks.",
    roles: ["QA Officers", "QC Inspectors", "Process Engineers"],
  },
  {
    name: "Engineering Department",
    desc: "Technical design, innovation, and equipment maintenance for smooth production.",
    roles: ["Design Eng", "Maintenance", "Process Eng"],
  },
  {
    name: "Warehouse & Logistics",
    desc: "Storage, inventory control, and efficient distribution across Ethiopia.",
    roles: ["Managers", "Controllers", "Logistics"],
  },
  {
    name: "Sales & Marketing",
    desc: "Drives product awareness and connects brands to customers across Ethiopia.",
    roles: ["Sales Exec", "Marketing", "Brand Managers"],
  },
  {
    name: "Customer Service",
    desc: "After-sales service, repairs, and customer satisfaction programs.",
    roles: ["Support Agents", "Technicians", "Warranty"],
  },
  {
    name: "Human Resources",
    desc: "Recruitment, training, employee welfare, and workplace culture.",
    roles: ["HR Managers", "Training", "Comp & Benefits"],
  },
  {
    name: "Finance & Administration",
    desc: "Financial management, reporting, and operational efficiency.",
    roles: ["Accountants", "Finance Officers", "Admin"],
  },
  {
    name: "Research & Development (R&D)",
    desc: "Innovates and adapts technology to meet African market needs and sustainability goals.",
    roles: ["Designers", "Software Eng", "Testing"],
  },
];
