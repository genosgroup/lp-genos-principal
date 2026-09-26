"use client";

import { useEffect, useRef } from "react";

/** Animação flutuante no canto inferior direito que leva ao formulário. */
export default function FloatingLottie() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let destroyed = false;
    let animation: { destroy: () => void } | undefined;

    import("lottie-web/build/player/lottie_svg").then(({ default: lottie }) => {
      if (destroyed || !containerRef.current) return;
      animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/lottie/animation.json",
      });
    });

    return () => {
      destroyed = true;
      animation?.destroy();
    };
  }, []);

  return (
    <div
      className="fixed right-10 bottom-10 z-[1] max-w-full min-w-0 text-center max-mobile:right-5 max-mobile:bottom-5"
    >
      <a href="#cta" aria-label="Ir para o formulário">
        <div className="inline-block w-[80px] max-w-[80px] max-mobile:w-[60px] max-mobile:max-w-[60px]">
          <div ref={containerRef} />
        </div>
      </a>
    </div>
  );
}
