import React from "react";
import styles from "./Carousel.module.css";
// import { Carousel } from "antd";

const tecnologias = [
  {
    tecnologia: "Angular",
    imagen:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    tecnologia: "Node.js",
    imagen:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    tecnologia: "PHP",
    imagen:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    tecnologia: "Git",
    imagen:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    tecnologia: "JavaScript",
    imagen:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
];

export const CarouselComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Stack</h2>
      <div className={styles.container_stack}>
        {tecnologias.map((tec, index) => (
          <div className={styles.container_stack} key={index}>
            <div className={styles.tecnologiaCard}>
              <img
                src={tec.imagen}
                alt={tec.tecnologia}
                className={styles.tecnologiaImg}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
