import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Erick García para proyectos de control de obra, estimaciones, BIM o análisis de datos. Disponible para empleo y consultoría freelance.",
};

const datosContacto = [
  { label: "Teléfono", valor: "8180105716", href: "tel:8180105716" },
  { label: "Correo", valor: "erck9217@gmail.com", href: "mailto:erck9217@gmail.com" },
  { label: "Ubicación", valor: "Guadalupe, Nuevo León", href: null },
  { label: "LinkedIn", valor: "linkedin.com/in/erickmgr/", href: "https://linkedin.com/in/erickmgr/" },
];

export default function Contacto() {
  return (
    <div className="bg-[#000000] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-16 border-l-4 border-[#2563EB] pl-8">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-2">
            Disponibilidad
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Contacto
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Info izquierda */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Hablemos de <span className="text-[#2563EB]">tu proyecto</span>
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                Disponible para empleo en empresas de construcción e infraestructura,
                y para consultoría freelance en control de obra, estimaciones, BIM y
                análisis de datos aplicado a proyectos de gran escala.
              </p>
            </div>

            {/* Datos de contacto */}
            <div className="space-y-1">
              {datosContacto.map((dato) => (
                <div
                  key={dato.label}
                  className="flex items-start gap-6 border border-[#1E293B] p-6 hover:border-[#2563EB] transition-colors group"
                >
                  <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold w-20 flex-shrink-0 pt-0.5">
                    {dato.label}
                  </p>
                  {dato.href ? (
                    <a
                      href={dato.href}
                      target={dato.href.startsWith("http") ? "_blank" : undefined}
                      rel={dato.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-white group-hover:text-[#2563EB] transition-colors font-medium"
                    >
                      {dato.valor}
                    </a>
                  ) : (
                    <p className="text-sm text-white font-medium">{dato.valor}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Disponibilidad */}
            <div className="border border-[#1E293B] p-8">
              <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-6">
                Tipos de colaboración
              </p>
              <div className="space-y-4">
                {[
                  {
                    tipo: "Empleo de tiempo completo",
                    desc: "Empresas de infraestructura, constructoras, CONAGUA, gobierno estatal.",
                  },
                  {
                    tipo: "Consultoría Freelance",
                    desc: "Control de obra, estimaciones, modelado BIM, dashboards y análisis de datos.",
                  },
                  {
                    tipo: "Proyectos por obra",
                    desc: "Control y supervisión por proyecto específico con entregables definidos.",
                  },
                ].map((item) => (
                  <div key={item.tipo} className="flex gap-4">
                    <span className="w-1 h-1 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white font-medium">{item.tipo}</p>
                      <p className="text-xs text-[#64748B] mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario derecha */}
          <div className="border border-[#1E293B] p-px">
            <div className="bg-[#0a0a0a] p-8 h-full">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#64748B] mb-8">
                Enviar mensaje
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
