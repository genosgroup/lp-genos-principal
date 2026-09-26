import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
  /** "left": ícone ao lado do texto (vira "top" no mobile). "top": ícone acima. */
  position: "left" | "top";
  /** Tamanho do ícone em px (font-size do Elementor) */
  iconSize: 32 | 48;
  className?: string;
  boxClassName?: string;
};

/** Caixa com ícone, título laranja e descrição (widget "icon-box" do original). */
export default function IconBox({ icon, title, description, position, iconSize, className = "", boxClassName = "" }: Props) {
  const left = position === "left";

  return (
    <div className={`relative max-w-full min-w-0 ${className}`}>
      <div className={`h-full rounded-[10px] bg-ink ${boxClassName}`}>
        <div className={left ? "flex flex-row text-start max-mobile:block max-mobile:text-center" : "block text-left"}>
          <div
            className={
              left
                ? "me-2 inline-flex flex-none max-mobile:mx-auto max-mobile:mb-2 max-mobile:block"
                : "mx-auto mb-2"
            }
          >
            <span
              className={`inline-block leading-none text-accent ${iconSize === 32 ? "text-[32px]" : "text-[48px]"}`}
            >
              {icon}
            </span>
          </div>
          <div className="grow">
            <h3
              className={`mt-2 mb-2.5 font-poppins leading-[1.2] font-medium text-accent ${iconSize === 32 ? "text-[20px]" : "text-[24px]"}`}
            >
              <span>{title}</span>
            </h3>
            <p className="m-0 font-poppins text-[16px] font-normal text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
