import React, { useCallback, useRef } from "react";

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
    <div className="bg-blue-600 text-center">
      <h2 className="text-3xl font-bold m-0 text-white">Stack</h2>

      <div className="relative overflow-hidden w-full pt-2">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-6">
            {tecnologias.map((item) => (
              <div
                key={item.tecnologia}
                className="flex flex-col items-center flex-[0_0_100%] md:flex-[0_0_33.33%] lg:flex-[0_0_16.9%] sm:flex-[0_0_50%] scroll-snap-align-center"
              >
                <div className="bg-[#1f1f1f] rounded-2xl w-[130px] h-[130px] flex items-center justify-center mb-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out">
                  <img
                    src={item.imagen}
                    alt={item.tecnologia}
                    className="h-[90px] object-contain"
                  />
                </div>
                <span className="text-gray-100 text-sm font-medium text-center">
                  {item.tecnologia}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className="absolute top-1/2 left-0 right-0 px-2 sm:px-1 transform -translate-y-1/2 z-10 flex justify-between items-center pointer-events-none">
          <button
            onClick={scrollPrev}
            className="pointer-events-auto bg-white/10 border border-white/20 text-white text-[1.8rem] sm:text-[1.5rem] px-3 py-1 rounded-full shadow-lg hover:bg-white/20 hover:scale-110 transition"
          >
            ‹
          </button>
          <button
            onClick={scrollNext}
            className="pointer-events-auto bg-white/10 border border-white/20 text-white text-[1.8rem] sm:text-[1.5rem] px-3 py-1 rounded-full shadow-lg hover:bg-white/20 hover:scale-110 transition"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
