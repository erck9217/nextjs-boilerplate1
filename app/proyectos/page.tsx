import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Acueductos, líneas de impulsión, drenaje pluvial y obra civil: proyectos de hasta $900M MXN con SADM, CONAGUA, ASIPONA y municipios.",
  alternates: { canonical: "/proyectos" },
  openGraph: {
    type: "website",
    url: "https://ingerickgarcia.com/proyectos",
    title: "Proyectos | Erick García",
    description:
      "Acueductos, líneas de impulsión, drenaje pluvial y obra civil: proyectos de hasta $900M MXN con SADM, CONAGUA, ASIPONA y municipios.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Erick García – Control de Obra" }],
  },
};

const proyectos = [
  {
    titulo: "Acueducto Armería–Manzanillo",
    tag: "42 KM · ~$900M MXN",
    img: "/tanqueeleden.jpg",
    cliente: "ASIPONA",
    descripcion:
      "Construcción de acueducto nuevo de 42 km con tanque de almacenamiento. Proyecto de mayor escala personal: superintendencia de campo completa, toma de decisiones en sitio, cobro de extras y coordinación de equipos.",
    escala: "42 km · Tanque de almacenamiento",
    rol: "Superintendente de campo · ~200 personas",
    tipo: "Acueducto",
  },
  {
    titulo: "Línea de Impulsión El Salto–Calderón",
    tag: "~$500M MXN · Jalisco",
    img: "/acueductoguadalajara.jpg",
    cliente: "CONAGUA",
    descripcion:
      "Línea de impulsión + tanque de cambio de régimen. Participación clave en licitación: volumetrías, análisis de costos y documentación técnica. Coordinación remota durante ejecución.",
    escala: "Línea de impulsión + tanque de régimen",
    rol: "Licitación y coordinación remota",
    tipo: "Línea de Impulsión",
  },
  {
    titulo: "Reforzamiento Acueducto Cerro Prieto",
    tag: "84\" Acero · ~$200M MXN",
    img: "/acueductomonterrey.jpeg",
    cliente: "SADM",
    descripcion:
      "Reforzamiento de 4,000 ml de tubería de acero de 2.13 m de diámetro. Infraestructura hidráulica crítica para el suministro de agua potable en la zona metropolitana de Monterrey.",
    escala: "4,000 ml · Tubería acero 84\"",
    rol: "Responsable administrativo integral",
    tipo: "Infraestructura Hidráulica",
  },
  {
    titulo: "Drenaje Pluvial Concepción Barragán",
    tag: "Ducto CR · ~$99M MXN",
    img: "/cerrodelasilla.jpg",
    cliente: "Municipio de Apodaca",
    descripcion:
      "Diseño y proyecto ejecutivo completo del sistema de drenaje pluvial: ducto de concreto reforzado más tubería aluminizada de 84\" de diámetro. Desarrollado en etapa de Secretaría de Obras Públicas.",
    escala: "Ducto CR + tubería aluminizada 84\"",
    rol: "Diseño completo (etapa SOP)",
    tipo: "Drenaje Pluvial",
  },
  {
    titulo: "Puente Arroyo El Infiernillo",
    tag: "Obra Civil · ~$42M MXN",
    img: "/cerrodelasilla.jpg",
    cliente: "Municipio de Apodaca",
    descripcion:
      "Construcción de puente vehicular sobre Arroyo El Infiernillo en Apodaca, N.L. Control administrativo completo e intervención como firma de superintendente en etapas clave de la obra.",
    escala: "~$42,000,000 MXN",
    rol: "Administrativo + firma de superintendente",
    tipo: "Obra Civil",
  },
  {
    titulo: "Ampliación Galerías Valle Oriente",
    tag: "Obra Privada · 3,000 m²",
    img: "/tanqueeleden.jpg",
    cliente: "Postensa",
    descripcion:
      "Ampliación de 3,000 m² de losa en el centro comercial Galerías Valle Oriente, San Pedro Garza García, N.L. Coordinación de estructuras, instalaciones y acabados.",
    escala: "3,000 m² de losa",
    rol: "Residente de obra · ~40 personas",
    tipo: "Obra Privada",
  },
];

export default function Proyectos() {
  return (
    <div className="bg-[#000000] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-16 border-l-4 border-[#2563EB] pl-8">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-2">
            Portafolio
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Proyectos
          </h1>
          <p className="mt-4 text-[#64748B] max-w-xl">
            Infraestructura de gran escala ejecutada con control administrativo riguroso y
            precisión técnica.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E293B]">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="group relative bg-[#000000] overflow-hidden"
            >
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={proyecto.img}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-black/80 px-2 py-1">
                    {proyecto.tipo}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 border-t border-[#1E293B]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] block mb-3">
                  {proyecto.tag}
                </span>
                <h2 className="text-lg font-bold text-white uppercase mb-1 leading-tight">
                  {proyecto.titulo}
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-[#64748B] mb-3 font-medium">
                  Cliente: {proyecto.cliente}
                </p>
                <p className="text-[#64748B] text-xs leading-relaxed mb-6">
                  {proyecto.descripcion}
                </p>

                <div className="border-t border-[#1E293B] pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold mb-1">
                      Escala
                    </p>
                    <p className="text-xs text-white font-medium">{proyecto.escala}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold mb-1">
                      Rol
                    </p>
                    <p className="text-xs text-white font-medium">{proyecto.rol}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
