"use client";

import { useEffect } from "react";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

/**
 * Comportamentos globais que o site original tinha via plugins/scripts do WordPress:
 * - rolagem suave da roda do mouse (plugin "Mousewheel Smooth Scroll", mesmas opções);
 * - UTMs da URL salvas no localStorage (script customizado do original).
 *
 * Os links de âncora (#beneficios, #cta…) usam a rolagem nativa do navegador,
 * suavizada pelo `scroll-behavior: smooth` do globals.css — igual ao original.
 */
export default function PageEffects() {
  useEffect(() => {
    import("smoothscroll-for-websites").then(({ default: SmoothScroll }) => {
      SmoothScroll({
        frameRate: 150,
        animationTime: 1000,
        stepSize: 100,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: true,
        arrowScroll: 50,
      });
    });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      const storageKey = key.replace(/^utm_(\w)/, (_, c: string) => `Utm_${c.toUpperCase()}`);
      try {
        if (value) localStorage.setItem(storageKey, value);
      } catch {
        // localStorage indisponível (modo privado etc.)
      }
    }
  }, []);

  return null;
}
