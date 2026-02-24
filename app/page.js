export default function EFTechCheinWeb() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">EFTECH CHEIN</h1>
          <p className="text-xl md:text-2xl mb-6">
            Servicio Técnico Informático Profesional en Banda del Río Salí - Tucumán
          </p>
          <p className="text-lg opacity-90">
            Reparación de PC • Instalación de Cámaras • Redes e Internet • Mantenimiento Informático
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/5493813040672"
              target="_blank"
              className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Reparación de PC</h3>
              <p>
                Formateo, instalación de Windows, limpieza interna, cambio de discos, ampliación de memoria y optimización.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Instalación de Cámaras</h3>
              <p>
                Instalación y configuración de sistemas de seguridad para hogares y comercios.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Redes e Internet</h3>
              <p>
                Configuración de routers, redes WiFi, cableado estructurado y optimización de conexión.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Mantenimiento a Comercios</h3>
              <p>
                Servicio mensual para negocios: soporte técnico, respaldo de datos y mantenimiento preventivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="bg-gray-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Confianza y Profesionalismo</h2>
          <p className="text-lg mb-6">
            Más de 11 años de experiencia en el sector tecnológico en Tucumán. Atención personalizada,
            diagnóstico claro y presupuestos sin sorpresas.
          </p>
          <a
            href="https://wa.me/5493813040672"
            target="_blank"
            className="bg-blue-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-900 transition"
          >
            Solicitar Presupuesto Ahora
          </a>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-2xl shadow">
              <p className="italic">"Excelente servicio, rápido y muy profesional."</p>
              <p className="mt-4 font-semibold">Cliente Hogar</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow">
              <p className="italic">"Nos instaló cámaras en el local y quedó impecable."</p>
              <p className="mt-4 font-semibold">Comercio Local</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow">
              <p className="italic">"Siempre responde rápido cuando tenemos un problema."</p>
              <p className="mt-4 font-semibold">Estudio Contable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mantenimiento para Comercios */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Planes de Mantenimiento Mensual</h2>
          <p className="text-lg mb-6">
            Soporte técnico mensual para negocios en Banda del Río Salí y alrededores.
            Ideal para comercios, oficinas y estudios profesionales.
          </p>
          <ul className="text-left max-w-2xl mx-auto space-y-2 mb-6">
            <li>✔ Soporte prioritario</li>
            <li>✔ Mantenimiento preventivo</li>
            <li>✔ Respaldo de datos</li>
            <li>✔ Asistencia remota y presencial</li>
          </ul>
          <a
            href="https://wa.me/5493813040672"
            target="_blank"
            className="bg-blue-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-900 transition"
          >
            Consultar Planes
          </a>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Zona de Atención</h2>
          <p className="mb-6">Atendemos Banda del Río Salí y Gran San Miguel de Tucumán.</p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Banda%20del%20R%C3%ADo%20Sal%C3%AD%2C%20Tucum%C3%A1n&output=embed"
              width="100%"
              height="350"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} EFTECH CHEIN - Banda del Río Salí, Tucumán</p>
        <p className="text-sm opacity-80">Servicio técnico a domicilio</p>
      </footer>
    </div>
  );
}
