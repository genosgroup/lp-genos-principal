/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import CtaButton from "./CtaButton";
import NestedCarousel from "./NestedCarousel";
import { CommercialIcon, DollarOnHandIcon, MarketingIcon, OperationsIcon } from "./icons";

type Service = {
  icon: ReactNode;
  title: string;
  items: string[];
  image: { src: string; width: number; height: number; srcSet?: string; sizes?: string };
};

const iconClass = "block h-[77px] w-auto max-mobile:h-10";

const SERVICES: Service[] = [
  {
    icon: <MarketingIcon className={iconClass} />,
    title: "Marketing",
    items: [
      "Análise de posicionamento digital",
      "Gestão de Tráfego Orgânico",
      "Gestão de Tráfego Pago",
      "Criação de Sites e Landing Pages",
      "Pesquisa de mercado, público alvo e de concorrentes",
      "Criação de funis de aquisição de leads",
      "Rastreamento de leads",
    ],
    image: { src: "/images/escala-img-lp0609.webp", width: 473, height: 501 },
  },
  {
    icon: <DollarOnHandIcon className="block h-[77px] w-[77px] fill-brand max-mobile:h-10 max-mobile:w-10" />,
    title: "Financeiro",
    items: [
      "Diagnóstico 360º;",
      "Projeção do Fluxo de Caixa;",
      "Planejamento Orçamentário;",
      "Metas de Vendas;",
      "Simulações Inteligentes para diferentes cenários de vendas;",
      "Gestão de dívidas e passivos;",
      "Estruturação operacional do setor financeiro.",
    ],
    image: { src: "/images/img-pessoas.webp", width: 494, height: 501 },
  },
  {
    icon: <CommercialIcon className={iconClass} />,
    title: "Comercial",
    items: [
      "Implementação de CRM",
      "Criação de funil de vendas",
      "Template de Scripts (SDR, Social Seller & Closer)",
      "Automatização dos processos comercias",
      "Criação de escada de valor",
      "Consultoria Comercial",
      "Treinamentos com Equipes Comerciais",
    ],
    image: {
      src: "/images/tec-img-lp0609.png",
      width: 473,
      height: 501,
      srcSet: "/images/tec-img-lp0609.png 473w, /images/tec-img-lp0609-283x300.png 283w",
      sizes: "(max-width: 473px) 100vw, 473px",
    },
  },
  {
    icon: <OperationsIcon className={iconClass} />,
    title: "Gestão",
    items: [
      "Mapeamento e automação de tarefas",
      "Análise e otimização de processos repetitivos",
      "Gestão de qualidade",
      "Gestão de mudança",
      "Implementação de metodologias ágeis",
      "Integração de sistemas",
      "Gestão de dados e analytics",
      "Desenvolvimento de manuais e procedimentos",
    ],
    image: { src: "/images/img-processos.webp", width: 473, height: 501 },
  },
];

function ServiceSlide({ service }: { service: Service }) {

  return (
    <div className="relative my-[15px] flex h-full w-full max-w-full min-w-0 flex-col">
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-row gap-5 py-[15px] max-tablet:max-w-[1024px] max-mobile:max-w-[767px] max-mobile:flex-wrap">
        <div
          className="relative m-2.5 flex w-full min-w-0 flex-row gap-5 rounded-[10px] border border-solid border-brand p-[60px] max-mobile:flex-wrap max-mobile:px-5 max-mobile:py-10"
        >
          <div
            className="relative flex w-[418px] min-w-0 shrink-0 grow flex-col gap-5 max-mobile:w-full max-mobile:grow-0 max-mobile:flex-wrap"
          >
            <div className="relative max-w-full min-w-0 self-start">
              <div className="text-left">
                <span className="inline-block text-[77px] leading-none max-mobile:text-[40px]">{service.icon}</span>
              </div>
            </div>
            <div className="relative w-auto max-w-full min-w-0 self-start text-left max-mobile:text-center">
              <h2 className="font-poppins text-[32px] leading-[1.2em] font-medium tracking-[0rem] text-white max-mobile:text-[24px] max-mobile:leading-[1.9rem]">
                {service.title}
              </h2>
            </div>
            <div className="relative w-auto max-w-full min-w-0 self-start text-left">
              <h2 className="font-poppins text-[20px] leading-[1.2em] font-normal tracking-[0rem] text-white max-mobile:text-[16px]">
                {service.items.map((item, i) => (
                  <span key={item}>
                    {i > 0 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                    • {item}
                  </span>
                ))}
              </h2>
            </div>
          </div>
          <div className="relative max-w-full min-w-0 self-center text-center">
            <img
              src={service.image.src}
              srcSet={service.image.srcSet}
              sizes={service.image.sizes}
              width={service.image.width}
              height={service.image.height}
              alt=""
              loading="lazy"
              decoding="async"
              className="rounded-[10px] border border-solid border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="relative flex w-full flex-col bg-panel">
      <div className="mx-auto flex w-full max-w-[1280px] grow flex-col gap-5 py-[90px] max-mobile:py-[60px]">
        <div
          className="relative flex w-full min-w-0 flex-col justify-center gap-[60px] px-[50px] max-mobile:w-[320px] max-mobile:self-center max-mobile:gap-10 max-mobile:px-0"
        >
          <div className="relative w-[500px] max-w-full min-w-0 self-center text-center">
            <h2 className="font-poppins text-[32px] leading-[1.2em] font-medium tracking-[0rem] text-brand max-mobile:text-[24px]">
              Como nós ajudamos você a acelerar a sua empresa
            </h2>
          </div>

          <NestedCarousel
            label="Carrossel"
            containerClassName="py-[15px]"
            arrowClassName="text-ui"
            slides={SERVICES.map((service) => (
              <ServiceSlide key={service.title} service={service} />
            ))}
          />
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
