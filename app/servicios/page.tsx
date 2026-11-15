import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Consultoría en control de costos, estimaciones, análisis de precios unitarios, volumetrías en Civil 3D e implementación BIM para constructoras.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    type: "website",
    url: "https://ingerickgarcia.com/servicios",
    title: "Servicios | Erick García",
    description:
      "Consultoría en control de costos, estimaciones, análisis de precios unitarios, volumetrías en Civil 3D e implementación BIM para constructoras.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Erick García – Control de Obra" }],
  },
};

const servicios = [
  {
    numero: "01",
    titulo: "Control de Obra",
    descripcion:
      "Llevo el control físico y financiero de la obra de principio a fin: estimaciones, seguimiento del programa, conciliaciones con el cliente y cierre administrativo. Es lo que hago desde 2019 en obras para SADM, CONAGUA y ASIPONA; hoy coordino a un equipo de tres analistas de control de obra.",
    entregables: [
      "Reportes de avance físico-financiero",
      "Control de estimaciones",
      "Programa de obra actualizado",
      "Conciliaciones con cliente",
    ],
  },
  {
    numero: "02",
    titulo: "Estimaciones y Precios Unitarios",
    descripcion:
      "Análisis de precios unitarios en Neodata con rendimientos que conozco de campo, generadores y volumetrías. Incluye el soporte y cobro de extraordinarios: en el Acueducto Armería–Manzanillo (~$900M MXN) se cobró la totalidad de las extras. Obra hidráulica bajo normativa CONAGUA y pavimentos bajo normativa SCT.",
    entregables: [
      "Análisis de precios unitarios",
      "Generadores de obra",
      "Volumetrías en Civil 3D",
      "Soporte de conceptos extraordinarios",
    ],
  },
  {
    numero: "03",
    titulo: "Gestión Documental",
    descripcion:
      "Integro y mantengo al día el expediente de la obra: certificados de calidad, pruebas de laboratorio, reportes fotográficos, fianzas, seguros, convenios y bitácora electrónica. El objetivo es que el cierre administrativo y la entrega-recepción no se detengan por un documento faltante.",
    entregables: [
      "Expediente de calidad integrado",
      "Gestión de bitácoras electrónicas (SADM)",
      "Control documental de fianzas, seguros y convenios",
      "Expediente para cierre y entrega-recepción",
    ],
  },
  {
    numero: "04",
    titulo: "Implementación BIM",
    descripcion:
      "Acompaño a constructoras que quieren empezar con BIM: documento de implementación, entorno común de datos (CDE), flujos de trabajo entre oficina y campo, y seguimiento. Es el proceso que lidero actualmente en Huajuco Construcciones con la suite Autodesk. Mi enfoque es la implementación y la coordinación, no la producción de modelos de alto detalle.",
    entregables: [
      "Documento de implementación BIM",
      "Estructura del entorno común de datos (CDE)",
      "Flujos de trabajo oficina–campo",
      "Revisión de modelos en Navisworks",
    ],
  },
  {
    numero: "05",
    titulo: "Análisis de Datos",
    descripcion:
      "Tableros de control de costos en Excel avanzado y análisis exploratorio con Python para ver a tiempo dónde se está desviando una obra. Python lo estoy desarrollando en el programa Citizen Data Science del Tec de Monterrey, así que hoy lo ofrezco como complemento del control de obra.",
    entregables: [
      "Dashboards de costos en Excel avanzado",
      "Análisis exploratorio en Python",
      "Reportes ejecutivos",
      "Seguimiento de desviaciones de costo",
    ],
  },
];

export default function Servicios() {
  return (
    <div className="bg-[#000000] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Servicios
          </h1>
          <p className="mt-4 text-[#64748B] max-w-xl">
            Control de obra, precios unitarios e implementación BIM para constructoras,
            por proyecto o como apoyo continuo.
          </p>
        </div>

        {/* Lista de servicios */}
        <div className="space-y-px">
          {servicios.map((servicio) => (
            <div
              key={servicio.numero}
              className="group border border-[#1E293B] bg-[#000000] hover:border-[#2563EB] transition-colors duration-300 p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8 items-start">

                {/* Número y título */}
                <div className="md:col-span-1">
                  <p className="text-xs font-bold tracking-[0.3em] text-[#2563EB] mb-2">
                    {servicio.numero}
                  </p>
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                    {servicio.titulo}
                  </h2>
                </div>

                {/* Descripción */}
                <div className="md:col-span-1">
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {servicio.descripcion}
                  </p>
                </div>

                {/* Entregables */}
                <div className="md:col-span-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold mb-4">
                    Entregables
                  </p>
                  <ul className="space-y-2">
                    {servicio.entregables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-xs text-[#64748B]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#2563EB] mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border border-[#1E293B] p-12 text-center">
          <p className="text-[#64748B] text-sm mb-2 uppercase tracking-widest">
            ¿Tienes una obra en curso o una licitación en puerta?
          </p>
          <h2 className="text-3xl font-bold text-white mb-8">
            Cuéntame qué necesitas
          </h2>
          <Link
            href="/contacto"
            className="inline-block bg-[#2563EB] px-12 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#1d4ed8] transition-all"
          >
            Ir a contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
