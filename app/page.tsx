import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHardHat, faRulerCombined, faClipboardCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Chatbot from "./components/Chatbot";
import ContactForm from "./components/ContactForm";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      {/* Menu de navegación */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-xl tracking-tighter">
              ERICK<span className="text-accent">MGR</span>
            </div>
            <ul className="hidden md:flex space-x-8 font-medium text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portafolio</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Sobre mí</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
            {/* Mobile menu button placeholder - can be added later */}
          </div>
        </div>
      </nav>

      <main id="contenido" className="pt-16">
        {/* HERO */}
        <section id="home" className="relative isolate px-6 pt-14 lg:px-8 min-h-[90vh] flex items-center">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>

          <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-accent ring-1 ring-inset ring-accent/20 bg-accent/10 mb-6">
                <span className="mr-2">✨</span> +5 Años de Experiencia
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Ingeniería Civil <br />
                <span className="text-accent">de Alto Nivel</span>
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
                Especialista en control de obra para acueductos y urbanización.
                Garantizo entregas claras en costo, plazo y calidad mediante estimaciones precisas y QA/QC riguroso.
              </p>
              <div className="flex items-center gap-x-6">
                <a href="#contact" className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all transform hover:scale-105">
                  Solicitar Cotización
                </a>
                <a href="#portfolio" className="text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors flex items-center gap-2">
                  Ver Proyectos <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
              <Image
                src="/cerrodelasilla.jpg"
                alt="Vista de obra en Monterrey"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="font-bold text-xl">Monterrey, NL</p>
                <p className="text-sm opacity-80">Supervisión de Acueducto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (NEW) */}
        <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-accent">Mis Servicios</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Soluciones Integrales de Ingeniería</p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Ofrezco servicios especializados para asegurar el éxito de tu proyecto de construcción.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-foreground">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-accent">
                      <FontAwesomeIcon icon={faHardHat} className="h-6 w-6 text-white" />
                    </div>
                    Control de Obra
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">Supervisión detallada de avances físicos y financieros. Gestión de recursos y personal para cumplir con los cronogramas establecidos.</p>
                  </dd>
                </div>
                <div className="flex flex-col bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-foreground">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-accent">
                      <FontAwesomeIcon icon={faRulerCombined} className="h-6 w-6 text-white" />
                    </div>
                    Estimaciones
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">Elaboración y revisión de generadores de obra. Análisis de precios unitarios y control de costos para evitar sobrecostos.</p>
                  </dd>
                </div>
                <div className="flex flex-col bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-foreground">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-accent">
                      <FontAwesomeIcon icon={faClipboardCheck} className="h-6 w-6 text-white" />
                    </div>
                    QA/QC
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">Aseguramiento y control de calidad. Verificación de cumplimiento de normas y especificaciones técnicas en cada etapa.</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Portafolio */}
        <section id="portfolio" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Proyectos Destacados</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Experiencia probada en obras de gran envergadura.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Acueducto Monterrey–Cerro Prieto",
                  desc: "Acueducto de acero de 84\" y 4.0 km de longitud.",
                  img: "/acueductomonterrey.jpeg",
                  tag: "Infraestructura Hidráulica"
                },
                {
                  title: "Acueducto El Salto–Calderón",
                  desc: "Acueducto de acero de 54\" y 6.0 km de longitud.",
                  img: "/acueductoguadalajara.jpg",
                  tag: "Urbanización"
                },
                {
                  title: "Acueducto Armería–Manzanillo",
                  desc: "Acueducto de acero de 30\" y 42.0 km de longitud.",
                  img: "/tanqueeleden.jpg",
                  tag: "Gran Escala"
                }
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-md hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                      {project.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Sobre mí</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Soy Erick, un ingeniero civil apasionado por la tecnología y la eficiencia.
                Me dedico a optimizar procesos constructivos mediante herramientas digitales y metodologías modernas.
              </p>
              <p className="text-lg text-muted-foreground">
                Mi enfoque combina la solidez técnica de la ingeniería civil con la innovación del desarrollo web,
                permitiéndome ofrecer soluciones únicas para el control y gestión de proyectos.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              {/* Placeholder for a profile picture if available, or just a graphic */}
              <div className="w-64 h-64 bg-slate-200 rounded-full flex items-center justify-center text-6xl">
                👷‍♂️
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contáctame</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ¿Tienes un proyecto en mente? Hablemos.
              </p>
            </div>
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Chatbot */}
        <section id="chatbot" className="py-12 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-8">Asistente IA</h2>
            <div className="max-w-md mx-auto">
              <Chatbot />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <p className="text-2xl font-bold tracking-tight">ERICK<span className="text-accent">MGR</span></p>
            <p className="text-slate-400 mt-2">Ingeniería Civil & Desarrollo Web</p>
          </div>
          <div className="flex space-x-8">
            <a href="https://www.linkedin.com/in/erickmgr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/erck92?igshid=cDc0YW9pXzBz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.me/message/SV76QYIB53HL0" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="mailto:erck92@hotmail.com" className="text-slate-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Erick MGR. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}