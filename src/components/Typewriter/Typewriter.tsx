import TypeIt from "typeit-react";

const Typewriter = () => {
  return (
    <TypeIt
      options={{
        speed: 100,
        waitUntilVisible: true,
        loop: true,
      }}
      getBeforeInit={(instance) => {
        instance
          .type("Full Stack Web Developer")
          .pause(2000) // espera 2 segundos
          .delete(null, { delay: 50 }) // borra todo con velocidad 50ms
          .pause(1000) // espera antes de volver a escribir
          .go();

        return instance;
      }}
    />
  );
};

export default Typewriter;
