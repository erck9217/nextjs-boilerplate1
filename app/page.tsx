export default function Home() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/cerrodelasilla.jpg')" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
        <h1 className="text-4xl font-bold">¡Hola, soy Erick!</h1>
        <p className="mt-4 text-lg text-gray-300">Bienvenido a mi sitio web.</p>
        {/* Logo */}
        <img
          src="/logo.webp"
          alt="Logo"
          className="mt-8 w-24 h-auto"
        />
      </div>
    </div>
  );
}
