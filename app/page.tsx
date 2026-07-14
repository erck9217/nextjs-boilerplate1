import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo full screen */}
      <Image
        src="/cerrodelasilla.jpg"
        alt="Obra de infraestructura hidráulica"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay negro 65% */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-[#64748B] mb-6 font-medium">
          Ingeniero Civil · Control de Obra · BIM
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.3em] uppercase text-white mb-6">
          Erick García
        </h1>

        <div className="w-12 h-px bg-[#2563EB] mb-6" />

        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#64748B] mb-12 max-w-md">
          Infraestructura hidráulica de gran escala
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/proyectos"
            className="border border-white px-10 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Ver proyectos
          </Link>
          <Link
            href="/contacto"
            className="border border-[#2563EB] bg-[#2563EB] px-10 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#1d4ed8] transition-all duration-300"
          >
            Contacto
          </Link>
        </div>

        <a
          href="/cv/CV_Erick_Garcia_Reyna.pdf"
          download
          aria-label="Descargar CV en PDF"
          className="mt-8 text-[10px] font-medium uppercase tracking-[0.3em] text-[#64748B] hover:text-white transition-colors"
        >
          Descargar CV ↓
        </a>
      </div>

      {/* Indicador scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#64748B]" />
        <p className="text-[10px] uppercase tracking-widest text-[#64748B]">Scroll</p>
      </div>
    </div>
  );
}
