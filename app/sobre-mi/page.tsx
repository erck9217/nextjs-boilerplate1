import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Ingeniero Civil con 10+ años en control de obra de infraestructura hidráulica. Especialista en estimaciones, presupuestos y gestión documental. En transición hacia BIM y Data Science.",
};

const stats = [
  { value: "10+", label: "Años en Control de Obra" },
  { value: "$199M", label: "Proyecto máximo MXN" },
  { value: "BIM", label: "Cert. Tec de Monterrey" },
  { value: "Data", label: "Science Aplicado" },
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
  "QA / QC",
  "Gestión Documental",
  "Revit",
  "AutoCAD Civil 3D",
  "Neodata",
  "Python",
  "Power BI",
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
              Soy Ingeniero Civil con más de 10 años especializándome en el{" "}
              <span className="text-white font-semibold">
                control administrativo y financiero de proyectos de infraestructura hidráulica
              </span>
              : acueductos, drenaje y pavimentación. He trabajado como Superintendente en{" "}
              <span className="text-white font-semibold">Huajuco Construcciones</span>, gestionando
              proyectos de hasta{" "}
              <span className="text-[#2563EB] font-bold">$199 millones MXN</span>.
            </p>

            <p className="text-[#64748B] leading-relaxed">
              Mi fortaleza está en dominar el ciclo completo de control de obra desde el escritorio
              y la sala de juntas:{" "}
              <span className="text-[#94a3b8]">
                análisis de precios unitarios, generadores de obra, control presupuestal,
                seguimiento de estimaciones y gestión documental
              </span>
              . Conozco a fondo rendimientos, materiales y equipos — ese conocimiento técnico es
              lo que le da precisión real a mis números.
            </p>

            <p className="text-[#64748B] leading-relaxed">
              Hoy integro{" "}
              <span className="text-white font-medium">metodología BIM</span> y{" "}
              <span className="text-white font-medium">Data Science aplicado a construcción</span>{" "}
              (Tecnológico de Monterrey) a esa base. El resultado: un perfil que puede gestionar
              la complejidad financiera de un proyecto grande y, al mismo tiempo, modelarlo,
              medirlo y comunicarlo con herramientas digitales de vanguardia.
            </p>

            <div className="border-l-2 border-[#1E293B] pl-6 py-2">
              <p className="text-[#64748B] text-sm italic leading-relaxed">
                "La diferencia entre un proyecto que termina bien y uno que se sale de control
                no está en el campo — está en la calidad del control administrativo."
              </p>
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
                  <p className="text-3xl font-black text-[#2563EB] tracking-tighter">
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
                  {
                    title: "BIM Profesional",
                    org: "CMIC",
                    year: "",
                  },
                  {
                    title: "Administración de Obra",
                    org: "Tecnológico de Monterrey",
                    year: "",
                  },
                  {
                    title: "Neodata Avanzado",
                    org: "CMIC",
                    year: "",
                  },
                  {
                    title: "Data Science Aplicado a Construcción",
                    org: "Tecnológico de Monterrey",
                    year: "2024",
                  },
                  {
                    title: "Ingeniería Civil",
                    org: "Universidad",
                    year: "",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l border-[#1E293B] pl-4">
                    <p className="text-sm text-white font-medium">{item.title}</p>
                    <p className="text-xs text-[#64748B]">
                      {item.org}
                      {item.year ? ` · ${item.year}` : ""}
                    </p>
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
