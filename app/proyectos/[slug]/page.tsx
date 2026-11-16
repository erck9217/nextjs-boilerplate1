import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { proyectos } from "../../data/proyectos";

export function generateStaticParams() {
  return proyectos.filter((p) => p.ficha || p.galeria).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug && (p.ficha || p.galeria));
  if (!proyecto) return {};

  const description = `${proyecto.titulo} — ${proyecto.cliente}. ${proyecto.escala}. Rol: ${proyecto.rol}.`;

  return {
    title: proyecto.titulo,
    description,
    alternates: { canonical: `/proyectos/${proyecto.slug}` },
    openGraph: {
      type: "article",
      url: `https://ingerickgarcia.com/proyectos/${proyecto.slug}`,
      title: `${proyecto.titulo} | Erick García`,
      description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: proyecto.titulo }],
    },
  };
}

export default async function FichaProyecto({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug && (p.ficha || p.galeria));
  if (!proyecto) notFound();

  // Los proyectos sin ficha muestran sus datos básicos, la descripción y la galería.
  const ficha = proyecto.ficha;
  const datos = ficha?.datos ?? [
    { label: "Cliente", valor: proyecto.cliente },
    { label: "Escala", valor: proyecto.escala },
    { label: "Rol", valor: proyecto.rol },
    { label: "Tipo de obra", valor: proyecto.tipo },
  ];

  return (
    <article className="bg-[#000000] min-h-screen">
      {/* Hero con imagen del proyecto */}
      <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={proyecto.imagen}
          alt={proyecto.titulo}
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
          <Link
            href="/proyectos"
            className="text-xs font-bold uppercase tracking-widest text-[#cbd5e1] hover:text-white transition-colors mb-6 inline-block"
          >
            ← Proyectos
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] mb-3">
            {proyecto.tipo}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight max-w-3xl">
            {proyecto.titulo}
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#cbd5e1]">
            <span>
              Cliente: <span className="text-white font-medium">{proyecto.cliente}</span>
            </span>
            <span className="text-[#2563EB] font-bold">{proyecto.tag}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        {/* Datos rápidos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1E293B] mb-20">
          {datos.map((dato) => (
            <div key={dato.label} className="bg-[#0a0a0a] p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold mb-2">
                {dato.label}
              </p>
              <p className="text-sm text-white font-medium leading-snug">{dato.valor}</p>
            </div>
          ))}
        </div>

        {!ficha && (
          <p className="text-[#cbd5e1] text-lg leading-relaxed max-w-3xl mb-20">
            {proyecto.descripcion}
          </p>
        )}

        {ficha && (
          <>
        {/* El reto */}
        <section className="mb-16 grid md:grid-cols-4 gap-8">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] md:pt-2">
            El reto
          </h2>
          <div className="md:col-span-3 space-y-5">
            {ficha.reto.map((parrafo, i) => (
              <p key={i} className="text-[#cbd5e1] text-lg leading-relaxed">
                {parrafo}
              </p>
            ))}
          </div>
        </section>

        {/* Decisiones y ejecución */}
        <section className="mb-16 grid md:grid-cols-4 gap-8 border-t border-[#1E293B] pt-16">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] md:pt-2">
            Decisiones y ejecución
          </h2>
          <ul className="md:col-span-3 space-y-4">
            {ficha.decisiones.map((item) => (
              <li key={item} className="flex items-start gap-4 text-[#cbd5e1]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2.5 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Resultados */}
        <section className="mb-20 grid md:grid-cols-4 gap-8 border-t border-[#1E293B] pt-16">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] md:pt-2">
            Resultados
          </h2>
          <div className="md:col-span-3 space-y-4">
            {ficha.resultados.map((item) => (
              <div
                key={item}
                className="border-l-2 border-[#2563EB] pl-6 py-1 text-lg text-white leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
          </>
        )}

        {/* Galería de obra */}
        {proyecto.galeria && (
          <section className="mb-20 border-t border-[#1E293B] pt-16">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#2563EB] mb-8">
              Fotos de obra
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {proyecto.galeria.map((foto) => (
                <a
                  key={foto.src}
                  href={foto.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  aria-label={`Ver foto completa: ${foto.alt}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                    <Image
                      src={foto.src}
                      alt={foto.alt}
                      fill
                      sizes="(min-width: 768px) 320px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-2 text-xs text-[#64748B] leading-snug">{foto.alt}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* CTA final */}
        <div className="border border-[#1E293B] p-10 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-xl mx-auto leading-tight">
            ¿Tu proyecto necesita este nivel de control?
          </h2>
          <Link
            href="/contacto"
            className="inline-block bg-[#2563EB] px-12 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#1d4ed8] transition-all"
          >
            Contacto
          </Link>
        </div>
      </div>
    </article>
  );
}
