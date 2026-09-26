"use client";

import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TESTIMONIAL_VIDEOS } from "@/lib/testimonials";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from "./icons";
import VideoLightbox from "./VideoLightbox";
import "swiper/css";
import "swiper/css/pagination";

// Mesmos breakpoints que o Elementor passava ao Swiper (min-width)
const BREAKPOINTS = {
  0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10 },
  767: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 10 },
  880: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 10 },
  1024: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 10 },
  1200: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 10 },
  1366: { slidesPerView: 3, slidesPerGroup: 1 },
  2400: { slidesPerView: 3, slidesPerGroup: 1 },
};

/** Carrossel de vídeos de depoimento; cada slide abre o vídeo no lightbox. */
export default function TestimonialsCarousel() {
  // Setas e bolinhas ficam fora do Swiper; guardamos os elementos em estado para ligá-los após montar
  const [prevEl, setPrevEl] = useState<HTMLDivElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLDivElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const bindHoverPause = (swiper: SwiperInstance) => {
    swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
  };

  const arrowClass =
    "absolute top-[calc(50%-15px)] z-[1] inline-flex -translate-y-1/2 cursor-pointer text-[20px] text-ui";

  return (
    <div className="relative w-full max-w-full min-w-0">
      <div className="relative [--swiper-pagination-bottom:5px] [--swiper-pagination-bullet-horizontal-gap:6px] [--swiper-pagination-bullet-size:6px] [--swiper-theme-color:#000]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          className="static! h-screen w-[89%] pb-[30px]! max-mobile:h-[82vh] max-mobile:w-[260px]"
          aria-label="Slides"
          loop
          speed={500}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={10}
          breakpoints={BREAKPOINTS}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          a11y={{
            prevSlideMessage: "Slide anterior",
            nextSlideMessage: "Próximo slide",
            firstSlideMessage: "Este é o primeiro slide",
            lastSlideMessage: "Este é o último slide",
            paginationBulletMessage: "Ir para o slide {{index}}",
          }}
          navigation={{ prevEl, nextEl }}
          pagination={{ el: paginationEl, clickable: true }}
          onSwiper={bindHoverPause}
        >
          {TESTIMONIAL_VIDEOS.map((video, i) => (
            <SwiperSlide key={video.youtubeId} className="overflow-hidden">
              <a
                href={video.thumb}
                className="inline"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(i);
                }}
              >
                <div
                  role="img"
                  aria-label={video.title}
                  className="relative h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${video.thumb})` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <PlayIcon className="h-[100px] w-[100px] fill-white opacity-80 drop-shadow-[1px_0_6px_rgba(0,0,0,0.3)] transition-all duration-500" />
                    <span className="sr-only">Reproduzir</span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={setPaginationEl} className="swiper-pagination" />
        <div ref={setPrevEl} role="button" tabIndex={0} aria-label="Anterior" className={`${arrowClass} left-2.5`}>
          <ChevronLeftIcon className="h-[1em] w-[1em] fill-current" />
        </div>
        <div ref={setNextEl} role="button" tabIndex={0} aria-label="Próximo" className={`${arrowClass} right-2.5`}>
          <ChevronRightIcon className="h-[1em] w-[1em] fill-current" />
        </div>
      </div>

      {openIndex !== null && (
        <VideoLightbox videos={TESTIMONIAL_VIDEOS} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </div>
  );
}
