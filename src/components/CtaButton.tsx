import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Largura/alinhamento do bloco do botão */
  className?: string;
  /** Espaçamento externo (margem) do botão */
  spacingClassName?: string;
};

/** Botão laranja "QUERO ..." que leva ao formulário (#cta). */
export default function CtaButton({ children, className = "", spacingClassName = "" }: Props) {
  return (
    <div className={`relative max-w-full min-w-0 ${className}`}>
      <div className={spacingClassName}>
        <a href="#cta" className="cta-button font-poppins">
          <span className="flex flex-row justify-center gap-[5px]">
            <span>{children}</span>
          </span>
        </a>
      </div>
    </div>
  );
}
