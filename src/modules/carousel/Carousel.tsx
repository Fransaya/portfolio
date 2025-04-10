import React, { useCallback, useRef } from "react";
import styles from "./Carousel.module.css";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

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
  {
    tecnologia: "React",
    imagen:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    tecnologia: "TypeScript",
    imagen:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    tecnologia: "Nest.js",
    imagen: "https://nestjs.com/img/logo-small.svg",
  },
  {
    tecnologia: "MySQL",
    imagen:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    tecnologia: "SQL Server",
    imagen:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  {
    tecnologia: "MongoDB",
    imagen:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

const OPTIONS: EmblaOptionsType = { loop: true };

export const CarouselComponent: React.FC = () => {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [autoplay.current]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Stack</h2>
      <div className={styles.embla}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {tecnologias.map((item) => (
              <div className={styles.emblaSlide} key={item.tecnologia}>
                <div className={styles.card}>
                  <img
                    src={item.imagen}
                    alt={item.tecnologia}
                    className={styles.image}
                  />
                </div>
                <span className={styles.label}>{item.tecnologia}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className={styles.buttons}>
          <button className={styles.prev} onClick={scrollPrev}>
            ‹
          </button>
          <button className={styles.next} onClick={scrollNext}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
