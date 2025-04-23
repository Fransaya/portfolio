import perfil from "./assets/perfil-portfolio_2.jpg";
import { CarouselComponent } from "./modules/carousel/Carousel";
import { Contact } from "./modules/contact/Contact";
import { ProjectComponent } from "./modules/projects/Project";
import Typewriter from "./components/Typewriter/Typewriter";
import "./index.css";

function App() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Navegación fija */}
      <nav className="fixed top-0 w-full bg-[#121212]/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">FS</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Sobre Mí
                </button>
                <button onClick={() => scrollToSection('proyectos')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Proyectos
                </button>
                <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="pt-16">
        {/* Sección Inicio */}
        <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              Hola, soy Francisco Sayago
            </h1>
            <div className="mt-4">
              <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-400 font-medium">
                <Typewriter />
              </h3>
            </div>
            <div className="mt-12">
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contactame
              </button>
            </div>
          </div>
        </section>

        {/* Sección Sobre Mí */}
        <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-6">Sobre Mí</h2>
                <div className="space-y-6 text-gray-300 text-lg">
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">🎓</span>
                    Estudiante de tercer año de Analista de Sistemas
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">💻</span>
                    Desarrollo aplicaciones funcionales y bien estructuradas usando Angular, React, Node.js, TypeScript, MongoDB y MySQL.
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">🤖</span>
                    Certificado en desarrollo backend (Node, AWS) y fundamentos de IA
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">🧠</span>
                    Mente curiosa, trabajo en equipo, siempre con ganas de aprender
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400 mb-8">
                  Compromiso por crear soluciones reales.
                </p>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
                  <img
                    src={perfil}
                    alt="Foto de perfil"
                    className="w-[350px] h-[350px] rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Proyectos */}
        <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
          <ProjectComponent />
        </section>

        {/* Sección Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900/50">
          <div className="max-w-7xl mx-auto">
            <CarouselComponent />
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
