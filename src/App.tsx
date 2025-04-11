import "./App.css";
import perfil from "./assets/perfil-portfolio_2.jpg";

import { CarouselComponent } from "./modules/carousel/Carousel";
import { Contact } from "./modules/contact/Contact";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Hola, Yo soy Francisco Sayago</h1>
          <div className="description-header">
            <h3>Full Stack Web Developer</h3>
          </div>
          <div className="btn-header">
            <button>Contactame</button>
          </div>

          <div className="section1">
            <div className="aboutMe">
              <h4>Sobre Mí...</h4>
              <div className="aboutMe-text">
                <p>🎓 Estudiante de tercer año de Analista de Sistemas</p>
                <br />
                <p>
                  💻 Desarrollo aplicaciones funcionales y bien estructuradas
                  usando Angular, React, Node.js, TypeScript, MongoDB y MySQL.
                </p>
                <br />
                <p>
                  🤖 Certificado en desarrollo backend (Node, AWS) y fundamentos
                  de IA
                </p>
                <br />
                <p>
                  🧠 Mente curiosa, trabajo en equipo, siempre con ganas de
                  aprender
                </p>
              </div>
            </div>

            <div className="photo-text">
              <p className="text">
                Mente curiosa, con compromiso por crear soluciones reales.
              </p>
              <div className="photo">
                <img src={perfil} alt="Foto de perfil" />
              </div>
            </div>
          </div>

          <div className="section2"></div>

          <div className="section3">
            <div className="slider-stack">
              <CarouselComponent />
            </div>
          </div>

          <div className="section4">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
