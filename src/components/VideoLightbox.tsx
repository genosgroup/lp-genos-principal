"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { TestimonialVideo } from "@/lib/testimonials";
import { youtubeEmbedUrl } from "@/lib/testimonials";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  FacebookIcon,
  FrameExpandIcon,
  FrameMinimizeIcon,
  LoadingIcon,
  PinterestIcon,
  ShareArrowIcon,
  TwitterIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "./icons";
import "swiper/css";

type Props = {
  videos: TestimonialVideo[];
  startIndex: number;
  onClose: () => void;
};

const headerIcon =
  "mx-[0.35em] box-content h-[1em] w-[1em] cursor-pointer fill-ui p-[0.25em] transition-all duration-300 hover:fill-white";

/** Lightbox de vídeo (equivalente ao slideshow do Elementor). */
export default function VideoLightbox({ videos, startIndex, onClose }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [prevEl, setPrevEl] = useState<HTMLDivElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLDivElement | null>(null);
  const [active, setActive] = useState(startIndex);
  const [loaded, setLoaded] = useState(false);
  const [uiHidden, setUiHidden] = useState(false);
  const [shareMode, setShareMode] = useState(false);
  const [zoomMode, setZoomMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  // Some com os controles após 3,5s sem interação (menos no modo compartilhar)
  const showUi = useCallback(() => {
    setUiHidden(false);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setUiHidden(true), 3500);
  }, []);

  useEffect(() => {
    hideTimer.current = setTimeout(() => setUiHidden(true), 3500);
    return () => clearTimeout(hideTimer.current);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && !document.fullscreenElement && onClose();
    const onFullscreen = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFullscreen);
    };
  }, [onClose]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else rootRef.current?.requestFullscreen();
  };

  const close = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    onClose();
  };

  const pageUrl = typeof window === "undefined" ? "" : window.location.href.replace(/#.*/, "");
  const videoUrl = `https://www.youtube.com/embed/${videos[active].youtubeId}?feature=oembed&autoplay=1&rel=0&controls=0`;
  const shareLinks = [
    {
      label: "Compartilhar no Facebook",
      href: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(pageUrl)}`,
      icon: <FacebookIcon className="me-[0.75em] inline h-[1.25em] w-[1.25em] fill-[#3b5998]" />,
    },
    {
      label: "Compartilhar no Twitter",
      href: `https://twitter.com/intent/tweet?text=%20${encodeURIComponent(pageUrl)}`,
      icon: <TwitterIcon className="me-[0.75em] inline h-[1.25em] w-[1.25em] fill-[#1da1f2]" />,
    },
    {
      label: "Fixar",
      href: `https://www.pinterest.com/pin/create/button/?url=&media=${encodeURIComponent(videoUrl)}`,
      icon: <PinterestIcon className="me-[0.75em] inline h-[1.25em] w-[1.25em] fill-[#bd081c]" />,
    },
  ];

  const hideControls = uiHidden && !shareMode;
  const arrowClass = `absolute top-0 z-[1] flex h-full w-[15%] cursor-pointer items-center justify-center text-[25px] text-ui transition-all duration-300 hover:text-white max-mobile:w-[20%] ${
    zoomMode ? "pointer-events-none opacity-0" : hideControls ? "opacity-0" : "opacity-100"
  }`;

  return createPortal(
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label="Vídeos de depoimento"
      tabIndex={0}
      className="fixed inset-0 z-[9999] h-full w-full bg-black/80 select-none"
      onMouseMove={showUi}
      onClick={showUi}
      onKeyDown={showUi}
    >
      <div className="absolute top-0 left-0 h-full w-full">
        <a
          href="#"
          role="button"
          aria-label="Fechar (Esc)"
          className="absolute end-[0.75em] z-[2] mt-[13px] flex cursor-pointer p-[0.25em] text-[20px] leading-none text-ui transition-all duration-300 hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <CloseIcon className="h-[1em] w-[1em] fill-current" />
        </a>

        <div className="zoom-in h-full leading-normal">
          <div className="relative h-full">
            <header
              className={`absolute top-0 left-0 z-10 flex w-full flex-row-reverse items-center py-[15px] ps-[1em] pe-[2.6em] text-[20px] text-ui transition-all duration-300 ${
                hideControls ? "pointer-events-none opacity-0" : ""
              } ${zoomMode ? "bg-black/50" : ""}`}
            >
              <ShareArrowIcon
                role="button"
                tabIndex={0}
                aria-label="Compartilhar"
                className={`${headerIcon} ${shareMode ? "relative z-[2]" : ""}`}
                onClick={() => setShareMode((v) => !v)}
              />
              <div
                className={`absolute overflow-hidden transition-[background-color] duration-[400ms] ${
                  shareMode ? "top-0 left-0 h-screen w-screen cursor-default bg-black/50" : "h-0 w-0 bg-transparent"
                }`}
                onClick={(e) => e.target === e.currentTarget && setShareMode(false)}
              >
                <div
                  className={`absolute end-[2.8em] top-[3em] block min-w-[200px] origin-[90%_10%] rounded-[3px] bg-white px-5 py-[14px] shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all delay-100 duration-[250ms] before:absolute before:end-[0.5em] before:top-px before:block before:-translate-y-full before:scale-x-[0.7] before:border-[0.45em] before:border-transparent before:border-b-white before:content-[''] ${
                    shareMode ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                >
                  {shareLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`block text-start text-[12px] leading-[2.5] text-[#0c0d0e] transition-opacity delay-100 duration-500 hover:text-black ${
                        shareMode ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              {zoomMode ? (
                <ZoomOutIcon role="switch" aria-checked="true" aria-label="Zoom" className={headerIcon} onClick={() => setZoomMode(false)} />
              ) : (
                <ZoomInIcon role="switch" aria-checked="false" aria-label="Zoom" className={headerIcon} onClick={() => setZoomMode(true)} />
              )}
              {fullscreen ? (
                <FrameMinimizeIcon role="switch" aria-checked="true" aria-label="Tela cheia" className={headerIcon} onClick={toggleFullscreen} />
              ) : (
                <FrameExpandIcon role="switch" aria-checked="false" aria-label="Tela cheia" className={headerIcon} onClick={toggleFullscreen} />
              )}
              <span className="me-auto w-max text-[0.75em] text-white">
                {active + 1} / {videos.length}
              </span>
            </header>

            <Swiper
              modules={[Navigation, Keyboard, A11y]}
              className="h-full"
              loop
              spaceBetween={100}
              grabCursor
              keyboard={{ enabled: true }}
              initialSlide={startIndex}
              navigation={{ prevEl, nextEl }}
              onSlideChange={(swiper) => {
                setActive(swiper.realIndex);
                setLoaded(false);
              }}
            >
              {videos.map((video, i) => (
                <SwiperSlide key={video.youtubeId}>
                  <div
                    className="relative m-auto box-border flex h-full items-center justify-center p-[70px] max-mobile:px-0"
                    onClick={(e) => e.target === e.currentTarget && close()}
                  >
                    {i === active && (
                      <>
                        {!loaded && (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <LoadingIcon className="spin h-[100px] w-[100px] fill-white opacity-80 drop-shadow-[1px_0_6px_rgba(0,0,0,0.3)]" />
                          </div>
                        )}
                        <div
                          className={`absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 ${loaded ? "" : "invisible"}`}
                        >
                          <div className="m-auto h-full max-h-[85vh] w-[85vw] max-tablet:max-h-[95vh] max-tablet:w-[95vw]">
                            <iframe
                              src={youtubeEmbedUrl(video.youtubeId)}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              width={640}
                              height={360}
                              onLoad={() => setLoaded(true)}
                              className="inline aspect-[1.77777] h-auto max-h-[90vh] w-full border-0 bg-black align-baseline"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div ref={setPrevEl} role="button" tabIndex={0} aria-label="Anterior" className={`${arrowClass} left-0 max-mobile:justify-start`}>
              <ChevronLeftIcon className="h-[1em] w-[1em] fill-current" />
            </div>
            <div ref={setNextEl} role="button" tabIndex={0} aria-label="Próximo" className={`${arrowClass} right-0 max-mobile:justify-end`}>
              <ChevronRightIcon className="h-[1em] w-[1em] fill-current" />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
