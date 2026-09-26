"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CloseIcon } from "./icons";

const LINKS = [
  // O "Início" do menu mobile aponta para esta URL no site original
  { label: "Início", href: "https://genosgroup.com.br/lp-genos/" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
];

type Props = { onClose: () => void };

/** Popup lateral do menu mobile (equivalente ao popup do Elementor). */
export default function MobileMenu({ onClose }: Props) {
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Anima a saída (0,5s, deslizando para a direita) antes de desmontar
  const close = useCallback(() => {
    setClosing(true);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(onClose, 500);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(closeTimer.current);
    };
  }, [close]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex h-full w-full items-center justify-center bg-black/80 select-none max-mobile:justify-end"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div
        className={`relative max-h-full max-w-full bg-panel shadow-[2px_8px_23px_3px_rgba(0,0,0,0.2)] ${closing ? "slide-out-right" : "slide-in-right"}`}
      >
        <a
          href="#"
          role="button"
          aria-label="Fechar"
          className="absolute end-5 top-5 z-[9999] flex cursor-pointer text-[15px] leading-none text-white max-mobile:text-[24px]"
          onClick={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <CloseIcon className="h-[1em] w-[1em] fill-white" />
        </a>
        <div className="flex h-screen max-h-screen w-[640px] max-w-[100vw] items-center overflow-auto leading-normal max-mobile:w-[90vw]">
          <div className="w-full">
            <div
              className="relative flex w-[637px] min-w-0 flex-col items-center justify-end gap-[60px] max-mobile:w-full max-mobile:flex-wrap"
            >
              <div className="relative min-w-0 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Logo-1.png" width={129} height={48} alt="" className="max-mobile:max-w-[89px]" />
              </div>
              {LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative min-w-0 shrink grow-0 self-center"
                >
                  <div>
                    <a
                      href={link.href}
                      onClick={close}
                      className="inline-block rounded-[3px] bg-transparent p-0 text-center font-poppins text-[18px] leading-none font-light text-white transition-all duration-300 hover:text-orange focus:text-orange max-mobile:text-[16px]"
                    >
                      <span className="flex flex-row justify-center gap-[5px]">
                        <span>{link.label}</span>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
