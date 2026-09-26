"use client";

import { useState, type ReactNode } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import "swiper/css";

type Props = {
  label: string;
  slides: ReactNode[];
  /** Cor das setas (o original usa tons diferentes em cada carrossel) */
  arrowClassName: string;
  /** Espaçamento interno do bloco do carrossel */
  containerClassName?: string;
};

// Mesmos breakpoints que o Elementor passava ao Swiper (min-width)
const BREAKPOINTS = {
  0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10 },
  767: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 10 },
  880: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 10 },
  1024: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10 },
  1200: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10 },
  1366: { slidesPerView: 1, slidesPerGroup: 1 },
  2400: { slidesPerView: 1, slidesPerGroup: 1 },
};

/**
 * Carrossel de cards (Serviços e Cases): 1 slide por vez (2 no tablet),
 * autoplay de 5s que pausa no hover, loop infinito e setas laterais.
 */
export default function NestedCarousel({ label, slides, arrowClassName, containerClassName = "" }: Props) {
  // As setas ficam fora do Swiper; guardamos os elementos em estado para ligá-las após montar
  const [prevEl, setPrevEl] = useState<HTMLDivElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLDivElement | null>(null);

  const bindHoverPause = (swiper: SwiperInstance) => {
    swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
  };

  const arrowBase = `absolute top-[calc(50%-14.5px)] z-[2] inline-flex -translate-y-1/2 cursor-pointer text-[29px] transition-all duration-[250ms] ${arrowClassName}`;

  return (
    <div className="relative w-full max-w-full min-w-0">
      <div className={containerClassName}>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            className="flex! min-w-0"
            aria-roledescription="carousel"
            aria-label={label}
            loop
            speed={500}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={10}
            breakpoints={BREAKPOINTS}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            a11y={{
              prevSlideMessage: "Slide anterior",
              nextSlideMessage: "Próximo slide",
              firstSlideMessage: "Este é o primeiro slide",
              lastSlideMessage: "Este é o último slide",
              slideLabelMessage: "{{index}} de {{slidesLength}}",
            }}
            navigation={{ prevEl, nextEl }}
            onSwiper={bindHoverPause}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i} className="h-auto! overflow-hidden">
                {slide}
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={setPrevEl} role="button" tabIndex={0} aria-label="Anterior" className={`${arrowBase} left-[-30px]`}>
            <ChevronLeftIcon className="h-[1em] w-[1em] fill-current" />
          </div>
          <div ref={setNextEl} role="button" tabIndex={0} aria-label="Próximo" className={`${arrowBase} right-[-30px]`}>
            <ChevronRightIcon className="h-[1em] w-[1em] fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
}
