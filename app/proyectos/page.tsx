import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portafolio de proyectos de infraestructura hidráulica y civil: acueductos, líneas de impulsión, pavimentación y obra pública de gran escala.",
};

const proyectos = [
  {
    titulo: "Reforzamiento Acueducto Cerro Prieto",
    tag: "84\" Acero · $199M MXN",
    img: "/acueductomonterrey.jpeg",
    descripcion:
      "Reforzamiento de 4,000 ml de tubería de acero de 2.13 m de diámetro. Proyecto de infraestructura hidráulica crítica para el suministro de agua potable en la zona metropolitana de Monterrey.",
    escala: "$199,000,000 MXN",
    tipo: "Infraestructura Hidráulica",
    rol: "Superintendente de Obra",
  },
  {
    titulo: "Línea de Impulsión El Salto–Calderón",
    tag: "54\" Acero · 6.8 KM",
    img: "/acueductoguadalajara.jpg",
    descripcion:
      "Construcción de línea de impulsión de 6.8 km de tubería de acero de 54\" de diámetro. Obra de interconexión hidráulica entre sistemas de abastecimiento en el área metropolitana de Guadalajara.",
    escala: "6.8 km lineales",
    tipo: "Línea de Impulsión",
    rol: "Control Administrativo",
  },
  {
    titulo: "Acueducto Armería–Manzanillo",
    tag: "42.0 KM · Colima",
    img: "/tanqueeleden.jpg",
    descripcion:
      "Construcción de acueducto nuevo de 42 km con tanque de almacenamiento incluido. Proyecto de abastecimiento de agua potable para los municipios de Armería y Manzanillo, Colima.",
    escala: "42 km · Tanque de almacenamiento",
    tipo: "Acueducto",
    rol: "Control de Obra",
  },
  {
    titulo: "Reconstrucción Puente Vehicular Apodaca",
    tag: "Obra Civil · $14M MXN",
    img: "/cerrodelasilla.jpg",
    descripcion:
      "Reconstrucción completa de puente vehicular en el municipio de Apodaca, Nuevo León. Incluye estructura de concreto, acabados, señalización y obras complementarias.",
    escala: "$14,000,000 MXN",
    tipo: "Obra Civil",
    rol: "Control Presupuestal",
  },
  {
    titulo: "Rehabilitación Calle Apolo, Monterrey",
    tag: "Pavimentación · $7M MXN",
    img: "/acueductomonterrey.jpeg",
    descripcion:
      "Rehabilitación integral de pavimento en calle Apolo, Monterrey, N.L. Trabajos de bacheo, carpeta asfáltica, guarniciones, banquetas y señalización horizontal y vertical.",
    escala: "$7,000,000 MXN",
    tipo: "Pavimentación",
    rol: "Estimaciones y Control",
  },
  {
    titulo: "Ampliación Galerías Valle Oriente",
    tag: "Obra Privada · 3,000 m²",
    img: "/tanqueeleden.jpg",
    descripcion:
      "Ampliación de 3,000 m² de losa en el centro comercial Galerías Valle Oriente, San Pedro Garza García, N.L. Coordinación de estructuras, instalaciones y acabados.",
    escala: "3,000 m² de losa",
    tipo: "Obra Privada",
    rol: "Administración de Obra",
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
                <h2 className="text-lg font-bold text-white uppercase mb-3 leading-tight">
                  {proyecto.titulo}
                </h2>
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
