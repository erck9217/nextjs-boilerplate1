import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { proyectos } from "../data/proyectos";

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
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.slug}
              className="group relative bg-[#000000] overflow-hidden flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={proyecto.imagen}
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
              <div className="p-8 border-t border-[#1E293B] flex flex-col flex-1">
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

                {proyecto.ficha && (
                  <Link
                    href={`/proyectos/${proyecto.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] hover:text-white transition-colors group/link"
                  >
                    Ver caso completo
                    <span className="transition-transform group-hover/link:translate-x-1">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
