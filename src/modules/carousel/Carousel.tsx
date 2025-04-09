import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";

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

export const Carousel: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Stack</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        className={styles.swiper}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {tecnologias.map((item) => (
          <SwiperSlide key={item.tecnologia} className={styles.slide}>
            <div className={styles.card}>
              <img
                src={item.imagen}
                alt={item.tecnologia}
                className={styles.image}
              />
            </div>
            <span className={styles.label}>{item.tecnologia}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
