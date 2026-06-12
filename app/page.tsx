import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHardHat, faRulerCombined, faClipboardCheck, faArrowRight, faDraftingCompass, faChartLine } from "@fortawesome/free-solid-svg-icons";
import Chatbot from "./components/Chatbot";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-200 font-sans selection:bg-orange-600 selection:text-white">

      {/* Navegación */}
      <nav className="fixed top-0 w-full bg-[#0f1115]/95 backdrop-blur-sm border-b border-slate-800 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-xl tracking-tighter text-white">
              ERICK<span className="text-orange-600">MGR</span>
            </div>
            <ul className="hidden md:flex space-x-8 font-medium text-xs uppercase tracking-widest text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portafolio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre mí</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main id="contenido" className="pt-16">

        {/* ── HERO ── */}
        <section id="home" className="relative isolate px-6 py-24 lg:px-8 min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

          <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center border border-slate-700 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-orange-500 bg-orange-500/5 mb-8">
                10+ Años en Obra · BIM · Data Science
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-none">
                OBRA CIVIL.<br />
                <span className="text-slate-500">VISIÓN</span><br />
                <span className="text-orange-600">DIGITAL.</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-400 mb-10 max-w-lg border-l-2 border-orange-600 pl-6">
                Ingeniero Civil con dominio técnico y financiero del control de obra en
                infraestructura hidráulica de gran escala — ahora integrando BIM y
                análisis de datos para gestionar proyectos con mayor precisión y visibilidad.
              </p>
              <div className="flex items-center gap-x-6">
                <a href="#contact" className="rounded-none bg-orange-600 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-orange-700 transition-all">
                  Solicitar Cotización
                </a>
                <a href="#portfolio" className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors flex items-center gap-3">
                  Ver Proyectos <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 text-orange-600" />
                </a>
              </div>
            </div>
            <div className="relative h-[550px] w-full border border-slate-800 p-2 bg-[#1a1c23]">
              <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/cerrodelasilla.jpg"
                  alt="Vista de obra en Monterrey"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="font-bold text-xs uppercase tracking-widest text-orange-500">Ubicación Actual</p>
                  <p className="text-2xl font-bold text-white">Monterrey, Nuevo León</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ── */}
        <section id="services" className="py-32 bg-[#12141a]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-20 border-l-4 border-orange-600 pl-8">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-orange-500 mb-2">Especialidades</h2>
              <p className="text-4xl font-bold tracking-tight text-white">Servicios Técnicos</p>
            </div>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: faHardHat,
                  title: "Control de Obra",
                  desc: "Gestión técnica de avances físicos y financieros con metodologías de precisión. Supervisión directa en campo para acueductos, drenaje y pavimentación."
                },
                {
                  icon: faRulerCombined,
                  title: "Estimaciones",
                  desc: "Análisis de precios unitarios y generadores de obra para control absoluto de costos. Experiencia en proyectos de hasta $199 millones MXN."
                },
                {
                  icon: faClipboardCheck,
                  title: "QA / QC",
                  desc: "Verificación rigurosa de normas y especificaciones técnicas en infraestructura hidráulica. Cumplimiento de estándares SCT y CONAGUA."
                },
                {
                  icon: faDraftingCompass,
                  title: "Modelado BIM",
                  desc: "Creación y coordinación de modelos BIM para infraestructura civil. Detección de interferencias, extracción de cantidades y flujos de trabajo colaborativos."
                },
                {
                  icon: faChartLine,
                  title: "Análisis de Datos",
                  desc: "Aplicación de Data Science al control de obra: dashboards de avance, análisis de costos, detección de desviaciones y reportes basados en datos para la toma de decisiones."
                }
              ].map((item, i) => (
                <div key={i} className="bg-[#1a1c23] p-12 border border-slate-800 hover:border-orange-600 transition-colors group">
                  <FontAwesomeIcon icon={item.icon} className="h-8 w-8 text-slate-500 mb-8 group-hover:text-orange-600 transition-colors" />
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTAFOLIO ── */}
        <section id="portfolio" className="py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-white uppercase">Proyectos</h2>
                <p className="mt-4 text-slate-400">Infraestructura de gran escala supervisada con éxito.</p>
              </div>
              <div className="h-[1px] flex-grow bg-slate-800 mx-8 hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {[
                {
                  title: "Acueducto Monterrey",
                  tag: "84\" Acero",
                  img: "/acueductomonterrey.jpeg",
                  impact: "Reforzamiento de 4,000 ml de tubería de acero de 2.13 m de diámetro."
                },
                {
                  title: "El Salto–Calderón",
                  tag: "54\" Acero",
                  img: "/acueductoguadalajara.jpg",
                  impact: "Línea de impulsión de 6.8 km de acero de 54\" de diámetro."
                },
                {
                  title: "Armería–Manzanillo",
                  tag: "42.0 KM",
                  img: "/tanqueeleden.jpg",
                  impact: "Acueducto nuevo de 42 km con tanque de almacenamiento incluido."
                }
              ].map((project, index) => (
                <div key={index} className="group relative h-[440px] overflow-hidden bg-slate-900 border border-slate-800">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/40 to-transparent"></div>
                  <div className="absolute bottom-0 p-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-2 block">{project.tag}</span>
                    <h3 className="text-xl font-bold text-white uppercase mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed border-t border-slate-700 pt-3 mt-1">{project.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOBRE MÍ ── */}
        <section id="about" className="py-32 bg-[#12141a]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-20 border-l-4 border-orange-600 pl-8">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-orange-500 mb-2">Perfil Profesional</h2>
              <p className="text-4xl font-bold tracking-tight text-white">Sobre mí</p>
            </div>

            <div className="grid md:grid-cols-5 gap-16 items-start">
              {/* Bio */}
              <div className="md:col-span-3 space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Soy Ingeniero Civil con más de 10 años especializándome en el{" "}
                  <span className="text-white font-semibold">control administrativo y financiero de proyectos
                  de infraestructura hidráulica</span>: acueductos, drenaje y pavimentación.
                  He trabajado como Superintendente en{" "}
                  <span className="text-white font-semibold">Huajuco Construcciones</span>, gestionando
                  proyectos de hasta <span className="text-orange-500 font-bold">$199 millones MXN</span>.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Mi fortaleza está en dominar el ciclo completo de control de obra desde el escritorio
                  y la sala de juntas: <span className="text-slate-300">análisis de precios unitarios,
                  generadores de obra, control presupuestal, seguimiento de estimaciones y
                  gestión documental</span>. Conozco a fondo rendimientos, materiales y equipos —
                  ese conocimiento técnico es lo que le da precisión real a mis números.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Hoy integro <span className="text-white font-medium">metodología BIM</span> y{" "}
                  <span className="text-white font-medium">Data Science aplicado a construcción</span>{" "}
                  (Tecnológico de Monterrey) a esa base. El resultado: un perfil que puede
                  gestionar la complejidad financiera de un proyecto grande y, al mismo tiempo,
                  modelarlo, medirlo y comunicarlo con herramientas digitales de vanguardia.
                </p>
                <div className="pt-4">
                  <a
                    href="https://linkedin.com/in/erickmgr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-none border border-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 hover:border-orange-600 hover:text-white transition-all"
                  >
                    Ver perfil en LinkedIn <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 text-orange-600" />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="md:col-span-2 grid grid-cols-2 gap-1">
                {[
                  { value: "10+", label: "Años en Control de Obra" },
                  { value: "$199M", label: "Proyecto máx. MXN" },
                  { value: "BIM", label: "Cert. Tec de Monterrey" },
                  { value: "Data", label: "Science Aplicado" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#1a1c23] border border-slate-800 p-8 flex flex-col justify-between">
                    <p className="text-3xl font-black text-orange-500 tracking-tighter">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mt-3 font-bold">{stat.label}</p>
                  </div>
                ))}
                <div className="col-span-2 bg-[#1a1c23] border border-slate-800 p-8">
                  <p className="text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-3">Áreas de especialidad</p>
                  <div className="flex flex-wrap gap-2">
                    {["Acueductos", "Drenaje", "Pavimentación", "Control de Obra", "Estimaciones", "QA/QC", "Revit", "Python", "Power BI"].map((tag) => (
                      <span key={tag} className="border border-slate-700 px-3 py-1 text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contact" className="py-32 bg-[#0f1115]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white uppercase mb-8">Hablemos de <br /><span className="text-orange-600">tu proyecto</span></h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Disponible para empleo en empresas de construcción e infraestructura,
                y para consultoría freelance en control de obra, estimaciones, BIM y
                análisis de datos aplicado a proyectos.
              </p>
              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-300 tracking-widest uppercase">Ubicación</p>
                <p className="text-slate-500">San Nicolás de los Garza, NL</p>
              </div>
            </div>
            <div className="bg-[#1a1c23] p-1 border border-slate-800">
              <div className="bg-[#0f1115] p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-black text-white py-16 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-bold tracking-[0.4em] uppercase">Erick<span className="text-orange-600">MGR</span></p>
          <div className="flex space-x-10 my-8 md:my-0">
            {[
              { icon: faLinkedin, href: "https://linkedin.com/in/erickmgr/" },
              { icon: faInstagram, href: "#" },
              { icon: faWhatsapp, href: "https://wa.me/525523993428" },
              { icon: faEnvelope, href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href !== "#" ? "_blank" : undefined}
                rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">
            &copy; {new Date().getFullYear()} Ingeniería y Desarrollo
          </p>
        </div>
      </footer>
    </div>
  );
}
