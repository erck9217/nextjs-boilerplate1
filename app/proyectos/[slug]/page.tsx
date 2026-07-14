import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { proyectos } from "../../data/proyectos";

export function generateStaticParams() {
  return proyectos.filter((p) => p.ficha).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug && p.ficha);
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
  const proyecto = proyectos.find((p) => p.slug === slug && p.ficha);
  if (!proyecto) notFound();

  const ficha = proyecto.ficha!;

  return (
    <article className="bg-[#000000] min-h-screen">
      {/* Hero con imagen del proyecto */}
      <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={proyecto.imagen}
          alt={proyecto.titulo}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
          <Link
            href="/proyectos"
            className="text-xs font-bold uppercase tracking-widest text-[#64748B] hover:text-white transition-colors mb-6 inline-block"
          >
            ← Proyectos
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] mb-3">
            {proyecto.tipo}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight max-w-3xl">
            {proyecto.titulo}
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#94a3b8]">
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
          {ficha.datos.map((dato) => (
            <div key={dato.label} className="bg-[#0a0a0a] p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold mb-2">
                {dato.label}
              </p>
              <p className="text-sm text-white font-medium leading-snug">{dato.valor}</p>
            </div>
          ))}
        </div>

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
