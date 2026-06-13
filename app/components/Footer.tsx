import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#1E293B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#1E293B]">

          {/* Columna izquierda: identidad y contacto */}
          <div className="space-y-4">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-white">
              Erick M. García Reyna
            </p>
            <p className="text-xs text-[#64748B] uppercase tracking-widest">
              Ingeniero Civil
            </p>
            <div className="pt-2 space-y-2 text-sm text-[#64748B]">
              <p>Guadalupe, Nuevo León</p>
              <p>8180105716</p>
              <a
                href="mailto:erck9217@gmail.com"
                className="block hover:text-white transition-colors"
              >
                erck9217@gmail.com
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/in/erickmgr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748B] hover:text-[#2563EB] transition-colors text-xs uppercase tracking-widest font-bold"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/erck92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748B] hover:text-[#2563EB] transition-colors text-xs uppercase tracking-widest font-bold"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Columna centro: navegación rápida */}
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#64748B]">
              Navegación
            </p>
            <nav className="space-y-3">
              {[
                { href: "/sobre-mi", label: "Sobre mí" },
                { href: "/proyectos", label: "Proyectos" },
                { href: "/servicios", label: "Servicios" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[#64748B] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna derecha: certificaciones */}
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#64748B]">
              Certificaciones
            </p>
            <div className="space-y-3">
              {[
                { name: "BIM Profesional", org: "CMIC" },
                { name: "Neodata Avanzado", org: "CMIC" },
                { name: "Admin. de Obra", org: "Tec de Monterrey" },
              ].map((cert) => (
                <div key={cert.name} className="border-l border-[#1E293B] pl-4">
                  <p className="text-sm text-white font-medium">{cert.name}</p>
                  <p className="text-xs text-[#64748B]">{cert.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-[10px] uppercase tracking-widest text-[#64748B]">
            &copy; {new Date().getFullYear()} Erick M. García Reyna — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
