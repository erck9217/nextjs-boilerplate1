"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHome
          ? "bg-transparent"
          : "bg-black/95 backdrop-blur-sm border-b border-[#1E293B]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-bold text-sm tracking-[0.2em] uppercase text-white hover:text-[#2563EB] transition-colors"
          >
            Erick García
          </Link>

          <nav>
            <ul className="hidden md:flex space-x-10 font-medium text-xs uppercase tracking-widest text-[#64748B]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-white ${
                      pathname === link.href ? "text-white" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Menú móvil simplificado */}
            <div className="md:hidden flex space-x-6 text-[10px] uppercase tracking-widest text-[#64748B]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-white ${
                    pathname === link.href ? "text-white" : ""
                  }`}
                >
                  {link.label.split(" ")[0]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
