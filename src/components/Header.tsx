"use client";

import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import { MenuIcon } from "./icons";

export const NAV_LINKS = [
  { label: "Início", href: "#" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
];

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScroll = window.pageYOffset;

    // Fundo do menu escurece de 0 a 50% nos primeiros 200px de rolagem
    const updateBackground = () => {
      const opacity = Math.min(Math.max((window.scrollY / 200) * 0.5, 0), 0.5);
      if (barRef.current) barRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity.toFixed(2)})`;
    };

    // Esconde ao rolar para baixo e mostra ao rolar para cima
    const onScroll = () => {
      const current = window.pageYOffset;
      setVisible(!(current > lastScroll));
      lastScroll = current;
      updateBackground();
    };

    updateBackground();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`site-menu fixed top-0 left-0 z-[999] flex w-full flex-col ${visible ? "is-visible" : ""}`}
      >
        <div className="mx-auto flex w-full max-w-[1140px] grow flex-row justify-center gap-0 pt-5 pb-5 max-tablet:max-w-[1024px] max-mobile:max-w-[767px] max-mobile:flex-wrap max-mobile:pb-0">
          <div
            id="menu-fixo"
            ref={barRef}
            className="relative flex w-[1280px] min-w-0 shrink-0 grow-0 flex-row justify-between gap-5 rounded-[40px] px-10 py-2.5 transition-[background,border,box-shadow] duration-300 mobile:max-tablet:w-[550px] max-mobile:w-[320px] max-mobile:flex-nowrap max-mobile:px-5"
          >
            <div className="relative min-w-0 text-center max-mobile:self-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo-1.png"
                width={129}
                height={48}
                alt=""
                className="max-mobilex:max-w-[80px] max-mobile:max-w-[70px]"
              />
            </div>

            <div className="relative hidden min-w-0 max-mobilex:block max-mobilex:self-center">
              <div className="text-center">
                <a
                  href="#"
                  aria-label="Abrir menu"
                  className="inline-block text-center text-[20px] leading-none text-[#69727d] transition-all duration-300 max-mobile:text-[16px]"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(true);
                  }}
                >
                  <MenuIcon className="relative block h-5 w-full max-mobile:h-4" />
                </a>
              </div>
            </div>

            <nav
              className="relative flex w-[637px] min-w-0 flex-row items-center justify-end gap-[60px] max-mobile:w-full max-mobile:flex-wrap max-mobilex:hidden"
            >
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative min-w-0 shrink grow-0 self-center"
                >
                  <div>
                    <a
                      href={link.href}
                      className="inline-flex items-center justify-center rounded-[3px] bg-transparent p-0 text-center font-poppins text-[18px] leading-none font-light text-white transition-all duration-300 hover:text-orange focus:text-orange"
                    >
                      <span className="flex flex-row justify-center gap-[5px]">
                        <span>{link.label}</span>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
