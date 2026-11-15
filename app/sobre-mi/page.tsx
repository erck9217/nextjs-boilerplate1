import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Trayectoria de 11+ años en infraestructura: control de obra, superintendencia de campo, licitaciones ganadas por +$1,400M MXN e implementación BIM.",
  alternates: { canonical: "/sobre-mi" },
  openGraph: {
    type: "website",
    url: "https://ingerickgarcia.com/sobre-mi",
    title: "Sobre mí | Erick García",
    description:
      "Trayectoria de 11+ años en infraestructura: control de obra, superintendencia de campo, licitaciones ganadas por +$1,400M MXN e implementación BIM.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Erick García – Control de Obra" }],
  },
};

const stats = [
  { value: "11+", label: "Años en infraestructura" },
  { value: "$900M", label: "Proyecto máximo MXN" },
  { value: "+$1,400M", label: "En licitaciones ganadas" },
  { value: "~200", label: "Personas coordinadas" },
];

const habilidades = [
  "Acueductos",
  "Drenaje",
  "Pavimentación",
  "Control de Obra",
  "Estimaciones",
  "Precios Unitarios",
  "Control Presupuestal",
  "Facturación",
  "Gestión Documental",
  "Civil 3D",
  "AutoCAD",
  "Neodata",
  "Opus",
  "CivilCAD",
  "Autodesk Docs",
  "Navisworks",
  "Revit",
  "Excel Avanzado",
  "Python",
];

export default function SobreMi() {
  return (
    <div className="bg-[#000000] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Sobre mí
          </h1>
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-start">

          {/* Bio */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-[#e2e8f0] text-lg leading-relaxed">
              Soy Ingeniero Civil con 11+ años en infraestructura. Empecé en 2015 como
              proyectista de drenaje pluvial, pavimentación y puentes en Obras Públicas de
              Apodaca, y desde 2019 estoy en{" "}
              <span className="text-white font-semibold">Huajuco Construcciones</span>, donde
              pasé de Control de Obra a Superintendente y Líder de Implementación BIM, en
              proyectos de hasta ~$900M MXN.
            </p>

            <p className="text-[#94a3b8] leading-relaxed">
              Mi especialidad es el control administrativo de obra: precios unitarios,
              generadores, estimaciones, control presupuestal, cobro de extras y gestión
              documental. También he estado del lado del campo, como residente de obra en
              Postensa y como superintendente del Acueducto Armería–Manzanillo con ~200
              personas. Por eso conozco rendimientos, materiales y equipo de primera mano, y
              eso es lo que respalda mis números.
            </p>

            <p className="text-[#94a3b8] leading-relaxed">
              Hoy coordino a un equipo de tres analistas de control de obra, lidero la
              implementación de metodología BIM en la empresa y curso Citizen Data Science en
              el Tecnológico de Monterrey. Mi siguiente paso es la gerencia de proyectos.
            </p>

            {/* Trayectoria */}
            <div className="border border-[#1E293B] p-6 space-y-3">
              <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-4">
                Trayectoria
              </p>
              {[
                { periodo: "Mar 2025 – Actualidad", rol: "Superintendente / Líder de Control de Obra e Implementación BIM", empresa: "Huajuco Construcciones" },
                { periodo: "Oct 2023 – Mar 2025", rol: "Superintendente de Obra — Acueducto Armería-Manzanillo, Colima", empresa: "Huajuco Construcciones" },
                { periodo: "Oct 2020 – Oct 2023", rol: "Responsable Administrativo Senior — Proyectos de gran escala", empresa: "Huajuco Construcciones" },
                { periodo: "Ago 2019 – Oct 2020", rol: "Control de Obra", empresa: "Huajuco Construcciones" },
                { periodo: "Feb 2019 – Jul 2019", rol: "Residente de Obra — Ampliación Galerías Valle Oriente", empresa: "Postensa" },
                { periodo: "Jun 2015 – Feb 2019", rol: "Proyectista — Infraestructura Urbana", empresa: "Secretaría de Obras Públicas, Apodaca, N.L." },
              ].map((item) => (
                <div key={item.periodo} className="flex gap-4">
                  <p className="text-[10px] text-[#64748B] w-36 flex-shrink-0 pt-0.5 font-mono">{item.periodo}</p>
                  <div>
                    <p className="text-xs text-[#e2e8f0]">{item.rol}</p>
                    <p className="text-[11px] text-[#64748B]">{item.empresa}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="/cv/CV_Erick_Garcia_Reyna.pdf"
                download
                aria-label="Descargar CV en PDF"
                className="inline-flex items-center gap-2 border border-[#2563EB] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2563EB] transition-all"
              >
                Descargar CV ↓
              </a>
              <a
                href="https://linkedin.com/in/erickmgr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#1E293B] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#64748B] hover:border-[#2563EB] hover:text-white transition-all"
              >
                LinkedIn
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-[#2563EB] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#1d4ed8] transition-all"
              >
                Contactar
              </Link>
            </div>
          </div>

          {/* Stats + habilidades */}
          <div className="md:col-span-2 space-y-1">
            <div className="grid grid-cols-2 gap-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0a0a0a] border border-[#1E293B] p-8 flex flex-col justify-between"
                >
                  <p className="text-2xl font-black text-[#2563EB] tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#64748B] mt-3 font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#0a0a0a] border border-[#1E293B] p-8">
              <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-4">
                Áreas de especialidad
              </p>
              <div className="flex flex-wrap gap-2">
                {habilidades.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#1E293B] px-3 py-1 text-[10px] uppercase tracking-wider text-[#64748B] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Formación */}
            <div className="bg-[#0a0a0a] border border-[#1E293B] p-8">
              <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-4">
                Formación e idiomas
              </p>
              <div className="space-y-4">
                {[
                  { title: "Licenciatura en Ingeniería Civil", org: "Universidad Autónoma de Nuevo León · 2012 – 2017 · Céd. Prof. 11369437", note: "" },
                  { title: "Citizen Data Science aplicado a Construcción", org: "Tec de Monterrey", note: "En curso" },
                  { title: "Metodología BIM", org: "CMIC", note: "En proceso" },
                  { title: "Diplomado en Administración de Obra", org: "TEC / CMIC", note: "" },
                  { title: "Diplomado en Precios Unitarios", org: "CMIC", note: "" },
                  { title: "Neodata Avanzado", org: "CMIC", note: "" },
                  { title: "Diplomado Tecnología del Concreto", org: "CEMEX", note: "" },
                  { title: "Inglés intermedio-alto", org: "Idiomas · Español nativo", note: "" },
                ].map((item) => (
                  <div key={item.title} className="border-l border-[#1E293B] pl-4">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-white font-medium">{item.title}</p>
                      {item.note && (
                        <span className="text-[9px] uppercase tracking-widest text-[#2563EB] border border-[#2563EB]/30 px-1.5 py-0.5">
                          {item.note}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#64748B]">{item.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
