import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Ingeniero Civil con 9+ años en control de obra de infraestructura hidráulica. Especialista en estimaciones, presupuestos y gestión documental. En transición hacia gerencia de proyectos con BIM y Data Science.",
};

const stats = [
  { value: "9+", label: "Años de experiencia" },
  { value: "$900M", label: "Proyecto máximo MXN" },
  { value: "+$1,400M", label: "En licitaciones participadas" },
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
  "Autodesk Docs",
  "Navisworks",
  "Revit",
  "Power BI",
  "Python",
];

export default function SobreMi() {
  return (
    <div className="bg-[#000000] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-16 border-l-4 border-[#2563EB] pl-8">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-2">
            Perfil Profesional
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Sobre mí
          </h1>
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-start">

          {/* Bio */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-[#e2e8f0] text-lg leading-relaxed">
              Soy Ingeniero Civil con{" "}
              <span className="text-white font-semibold">9+ años especializándome en control
              administrativo de obra e infraestructura hidráulica</span> — acueductos,
              drenaje y pavimentación. Desde 2019 en{" "}
              <span className="text-white font-semibold">Huajuco Construcciones</span>, donde
              he evolucionado de Control de Obra a{" "}
              <span className="text-[#2563EB] font-bold">Superintendente y Líder de Implementación BIM</span>,
              coordinando proyectos de hasta{" "}
              <span className="text-[#2563EB] font-bold">~$900M MXN</span>.
            </p>

            <p className="text-[#64748B] leading-relaxed">
              Mi eje siempre ha sido el control desde el escritorio y la sala de juntas:{" "}
              <span className="text-[#94a3b8]">
                análisis de precios unitarios, generadores de obra, control presupuestal,
                seguimiento de estimaciones, cobro de extras y gestión documental
              </span>
              . Conozco a fondo rendimientos, materiales y equipos — ese conocimiento técnico
              es lo que le da precisión real a mis números.
            </p>

            <p className="text-[#64748B] leading-relaxed">
              Hoy lidero la implementación de{" "}
              <span className="text-white font-medium">metodología BIM</span> en mi empresa
              (Autodesk Docs, Navisworks, CDE) y curso activamente{" "}
              <span className="text-white font-medium">Citizen Data Science</span>{" "}
              en el Tecnológico de Monterrey. El objetivo: escalar hacia gerencia de proyectos
              con dominio técnico, financiero y digital.
            </p>

            <div className="border-l-2 border-[#1E293B] pl-6 py-2">
              <p className="text-[#64748B] text-sm italic leading-relaxed">
                "La diferencia entre un proyecto que termina bien y uno que se sale de control
                no está en el campo — está en la calidad del control administrativo."
              </p>
            </div>

            {/* Evolución del rol */}
            <div className="border border-[#1E293B] p-6 space-y-3">
              <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-4">
                Trayectoria en Huajuco Construcciones
              </p>
              {[
                { periodo: "Mar 2025 – Actualidad", rol: "Superintendente / Líder de Control de Obra e Implementación BIM" },
                { periodo: "Oct 2023 – Mar 2025", rol: "Superintendente de Obra — Acueducto Armería-Manzanillo, Colima" },
                { periodo: "Oct 2020 – Oct 2023", rol: "Responsable Administrativo Senior — Proyectos de gran escala" },
                { periodo: "Ago 2019 – Oct 2020", rol: "Control de Obra" },
              ].map((item) => (
                <div key={item.periodo} className="flex gap-4">
                  <p className="text-[10px] text-[#64748B] w-36 flex-shrink-0 pt-0.5 font-mono">{item.periodo}</p>
                  <p className="text-xs text-[#94a3b8]">{item.rol}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
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
                Formación y Certificaciones
              </p>
              <div className="space-y-4">
                {[
                  { title: "Citizen Data Science aplicado a Construcción", org: "Tec de Monterrey", note: "En curso" },
                  { title: "Metodología BIM", org: "CMIC", note: "En proceso" },
                  { title: "Diplomado en Administración de Obra", org: "TEC / CMIC", note: "" },
                  { title: "Diplomado en Precios Unitarios", org: "CMIC", note: "" },
                  { title: "Neodata Avanzado", org: "CMIC", note: "" },
                  { title: "Diplomado Tecnología del Concreto", org: "CEMEX", note: "" },
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
