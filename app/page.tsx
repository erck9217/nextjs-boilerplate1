import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      {/* Menu de navegación */}
      <nav className="fixed top-0 w-full bg-black text-white p-4 z-10">
        <ul className="flex justify-center space-x-8">
          <li><a href="#home" className="hover:underline">Inicio</a></li>
          <li><a href="#about" className="hover:underline">Sobre mí</a></li>
          <li><a href="#portfolio" className="hover:underline">Portafolio</a></li>
          <li><a href="#blog" className="hover:underline">Blog</a></li>
          <li><a href="#contact" className="hover:underline">Contacto</a></li>
        </ul>
      </nav>

      {/* Sección de Encabezado */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/cerrodelasilla.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
          <h1 className="text-4xl font-bold">¡Hola, soy Erick!</h1>
          <p className="mt-4 text-lg text-gray-300">Bienvenido a mi sitio web.</p>
          <Image src="/logo.webp" alt="Logo" width={96} height={96} className="mt-8" />
        </div>
      </div>

      {/* Sobre mí */}
      <section id="about" className="mt-16 p-8 bg-gray-100 text-center text-black">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg">
          Soy Erick, un ingeniero civil apasionado por la tecnología, el desarrollo web y el aprendizaje continuo.
          Me encanta combinar mis habilidades técnicas con creatividad para resolver problemas y construir soluciones útiles.
        </p>
      </section>

      {/* Portafolio */}
      <section id="portfolio" className="mt-16 p-8 bg-gray-200 text-black">
        <h2 className="text-3xl font-bold mb-4 text-center">Portafolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded p-4">
            <Image src="/acueductomonterrey.jpeg" alt="Proyecto 1" width={400} height={192} className="w-full h-auto object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Proyecto 1</h3>
            <p className="text-gray-600 mt-2">Acueducto de acero de 84&quot; de 4.0 km de longitud, Monterrey-Cerro Prieto.</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <Image src="/acueductoguadalajara.jpg" alt="Proyecto 2" width={400} height={192} className="w-full h-auto object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Proyecto 2</h3>
            <p className="text-gray-600 mt-2">Acueducto de acero de 54&quot; de 6.0 km de longitud, El Salto-Calderón.</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <Image src="/tanqueeleden.jpg" alt="Proyecto 3" width={400} height={192} className="w-full h-auto object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Proyecto 3</h3>
            <p className="text-gray-600 mt-2">Acueducto de acero de 30&quot; de 42.0 km de longitud, Armería-Manzanillo.</p>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="mt-16 p-8 bg-gray-100 text-black">
        <h2 className="text-3xl font-bold mb-4 text-center">Blog</h2>
        <div className="space-y-6">
          <article className="p-6 bg-white shadow rounded">
            <h3 className="text-2xl font-bold">Primer artículo</h3>
            <p className="text-gray-600 mt-2">
              Un breve resumen o introducción al artículo. Puedes incluir detalles sobre tecnología, proyectos o experiencias.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-4 block">Leer más →</a>
          </article>
          <article className="p-6 bg-white shadow rounded">
            <h3 className="text-2xl font-bold">Segundo artículo</h3>
            <p className="text-gray-600 mt-2">
              Otro tema interesante que quieras compartir. Tal vez tus avances o aprendizajes recientes.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-4 block">Leer más →</a>
          </article>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="mt-16 p-8 bg-gray-200 text-black">
        <h2 className="text-3xl font-bold mb-4 text-center">Contacto</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="w-full p-4 border border-gray-300 rounded" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-4 border border-gray-300 rounded" />
          <textarea placeholder="Mensaje" className="w-full p-4 border border-gray-300 rounded h-32"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-4 rounded hover:bg-blue-600">
            Enviar
          </button>
        </form>
      </section>

      {/* Footer Redes sociales */}
      <footer className="bg-black text-white p-6 text-center">
        <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/erickmgr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
         </a>
        <a href="https://www.instagram.com/erck92?igshid=cDc0YW9pXzBz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wa.me/message/SV76QYIB53HL0" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a href="mailto:erck92@hotmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
         </a>
        </div>
      </footer>   
    </div>
  );
}