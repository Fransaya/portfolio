import perfil from "./assets/perfil-portfolio_2.jpg";
import { CarouselComponent } from "./modules/carousel/Carousel";
import { Contact } from "./modules/contact/Contact";
import { ProjectComponent } from "./modules/projects/Project";

import Typewriter from "./components/Typewriter/Typewriter";

import "./index.css";

function App() {
  return (
    <div className="w-full px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4  min-h-screen">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-white">
          Hola, Yo soy Francisco Sayago
        </h1>
        <div className="mt-4">
          <h3 className="text-4xl text-blue-400 font-medium">
            <Typewriter />
          </h3>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full shadow-md transition-all duration-300">
            Contactame
          </button>
        </div>
      </div>

      {/* SECCIÓN SOBRE MÍ */}
      <div className="flex flex-wrap justify-between gap-8 mt-12">
        <div className="flex-1 min-w-[300px] bg-neutral-800 rounded-xl p-6 shadow-lg">
          <h4 className="text-2xl mb-4 text-white">Sobre Mí...</h4>
          <div className="space-y-4 text-gray-300 text-[1.4rem]">
            <p>🎓 Estudiante de tercer año de Analista de Sistemas</p>
            <p>
              💻 Desarrollo aplicaciones funcionales y bien estructuradas usando
              Angular, React, Node.js, TypeScript, MongoDB y MySQL.
            </p>
            <p>
              🤖 Certificado en desarrollo backend (Node, AWS) y fundamentos de
              IA
            </p>
            <p>
              🧠 Mente curiosa, trabajo en equipo, siempre con ganas de aprender
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-[300px] text-center relative">
          <p className="text-2xl font-bold text-yellow-400 mb-4">
            Compromiso por crear soluciones reales.
          </p>
          <div className="flex justify-center">
            <img
              src={perfil}
              alt="Foto de perfil"
              className="w-[350px] h-[350px] rounded-full object-cover border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div>
        <ProjectComponent />
      </div>

      {/* SECCIÓN SLIDER */}
      <div className="my-12">
        <div className="slider-stack">
          <CarouselComponent />
        </div>
      </div>

      {/* SECCIÓN CONTACTO */}
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
