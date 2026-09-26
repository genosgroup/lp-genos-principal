/* eslint-disable @next/next/no-img-element */
import CtaButton from "./CtaButton";
import IconBox from "./IconBox";
import { CommercialIcon, DollarOnHandIcon, MarketingIcon, OperationsIcon } from "./icons";

const svgIcon = "relative block h-[1em] w-[1em]";

const PILLARS = [
  {
    icon: <MarketingIcon className={svgIcon} />,
    title: "Marketing",
    description:
      "Aplicamos estratégias de tráfego orgânico e pago para que juntos fortaleçam o seu branding e posicionamento, além de ter ativos funis de geração de leads todos os dias.",
  },
  {
    icon: <CommercialIcon className={svgIcon} />,
    title: "Comercial",
    description:
      "Aqui está o coração do seu negócio. A conversão de oportunidades em vendas e a retenção de clientes são essenciais para um crescimento sustentável.",
  },
  {
    icon: <OperationsIcon className={svgIcon} />,
    title: "Gestão Operacional",
    description:
      "Te ajudamos a analisar a eficiência e a qualidade da sua entrega, para que sua operação sempre esteja afiada e otimizada, garantindo que a sua equipe trabalhe menos e gere mais resultado.",
  },
  {
    icon: <DollarOnHandIcon className={`${svgIcon} fill-current`} />,
    title: "Financeiro",
    description:
      "O foco é na gestão de recursos, controle de custos e alocação de capital para garantir que as suas decisões estejam sempre alinhadas ao crescimento da sua empresa.",
    shadow: true,
  },
];

export default function Methodology() {
  return (
    <section className="relative flex min-h-[283px] w-full flex-col bg-black">
      <div className="mx-auto flex w-full max-w-[1280px] grow flex-col gap-5 py-[90px] max-mobile:py-[60px]">
        <div
          className="relative flex w-full min-w-0 flex-col gap-10 max-mobile:w-[320px] max-mobile:self-center max-mobile:gap-5"
        >
          <div className="relative w-auto max-w-full min-w-0 self-center text-center">
            <h2 className="font-poppins text-[32px] leading-[1.2em] font-medium tracking-[0rem] text-brand max-mobile:text-[24px]">
              Conheça nossa Metodologia{"\u00a0"}
            </h2>
          </div>

          <div className="relative max-w-full min-w-0 text-center">
            <img
              src="/images/genos-group-25-2.png"
              srcSet="/images/genos-group-25-2.png 1273w, /images/genos-group-25-2-300x158.png 300w, /images/genos-group-25-2-1024x538.png 1024w, /images/genos-group-25-2-768x404.png 768w"
              sizes="(max-width: 1273px) 100vw, 1273px"
              width={1273}
              height={669}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>

          <div
            className="relative mt-[70px] flex w-full min-w-0 flex-row justify-center gap-5 max-mobile:mt-0 max-mobile:flex-wrap"
          >
            {PILLARS.map((pillar) => (
              <IconBox
                key={pillar.title}
                className="gradient-border w-[290px] max-mobile:w-[320px]"
                boxClassName={`px-[15px] py-5 ${pillar.shadow ? "shadow-[0_0_10px_0_rgba(0,0,0,0.5)]" : ""}`}
                position="top"
                iconSize={48}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </div>

        <CtaButton
          className="w-[390px] self-center max-mobile:w-[320px]"
          spacingClassName="mt-10 max-mobile:mt-5"
        >
          QUERO ACELERAR MINHA EMPRESA
        </CtaButton>
      </div>
    </section>
  );
}
