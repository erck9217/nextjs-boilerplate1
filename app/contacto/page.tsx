import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto profesional para oportunidades laborales y consultoría en control de obra e infraestructura hidráulica.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    type: "website",
    url: "https://ingerickgarcia.com/contacto",
    title: "Contacto | Erick García",
    description:
      "Contacto profesional para oportunidades laborales y consultoría en control de obra e infraestructura hidráulica.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Erick García – Control de Obra" }],
  },
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

        {/* CTA diferenciado por público */}
        <div className="grid md:grid-cols-2 gap-1 mb-16">
          {/* Bloque 1 — reclutadores */}
          <div className="bg-[#0a0a0a] border border-[#1E293B] p-8 hover:border-[#2563EB] transition-colors flex flex-col">
            <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-4">
              Para empresas
            </p>
            <h2 className="text-xl font-bold text-white mb-3 leading-snug">
              ¿Buscas talento para tu empresa?
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed mb-6 flex-1">
              Perfil disponible para roles de control de obra, coordinación y gerencia de
              proyectos en infraestructura.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/cv/CV_Erick_Garcia_Reyna.pdf"
                download
                aria-label="Descargar CV en PDF"
                className="inline-flex items-center gap-2 bg-[#2563EB] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#1d4ed8] transition-all"
              >
                Descargar CV ↓
              </a>
              <a
                href="https://linkedin.com/in/erickmgr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#1E293B] px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#64748B] hover:border-[#2563EB] hover:text-white transition-all"
              >
                Ver LinkedIn
              </a>
            </div>
          </div>

          {/* Bloque 2 — consultoría */}
          <div className="bg-[#0a0a0a] border border-[#1E293B] p-8 hover:border-[#2563EB] transition-colors flex flex-col">
            <p className="text-[10px] uppercase tracking-widest text-[#2563EB] font-bold mb-4">
              Para tu proyecto
            </p>
            <h2 className="text-xl font-bold text-white mb-3 leading-snug">
              ¿Necesitas apoyo en control de obra?
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed mb-6 flex-1">
              Consultoría en estimaciones, precios unitarios, volumetrías en Civil 3D e
              implementación BIM.
            </p>
            <div>
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 bg-[#2563EB] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#1d4ed8] transition-all"
              >
                Enviar mensaje ↓
              </a>
            </div>
          </div>
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
          <div id="formulario" className="border border-[#1E293B] p-px scroll-mt-24">
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
