/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import NestedCarousel from "./NestedCarousel";

type CaseStudy = {
  name: string;
  /** O primeiro case usa <h1> no original */
  nameTag?: "h1" | "h2";
  text: ReactNode;
  image: { src: string; width: number; height: number; srcSet?: string; sizes?: string };
  /** No mobile este slide empilha sem esticar o card (igual ao original) */
  mobileColumn?: boolean;
};

const CASES: CaseStudy[] = [
  {
    name: "Nina Vazquez",
    nameTag: "h1",
    image: { src: "/images/img-nina-lp2609.webp", width: 363, height: 606 },
    text: (
      <>
        O e-commerce chegou até nós em Agosto/2021 e tinha esses números:
        <br />° 20K seguidores no Instagram
        <br />° R$1.000 em média de faturamento mensal pelo digital (com muito medo de investir alto no digital por não
        ter resultados expressivos até então).
        <br />
        <br />
        Criamos uma campanha de marketing para atingir os 20K seguidores e todas as pessoas que visitaram o site, e
        assim obter de forma rápida os primeiros resultados…
        <br />
        <br />O resultado?
        <br />
        <br />
        Em 2022, nós fechamos o ano com o maior faturamento da história desse e-commerce, que existe desde 2016. Já em
        2023 definimos uma meta ainda mais ousada (Crescer 100%, ou seja, dobrar o faturamento em 1 ano). Montamos uma
        estratégia combinando tráfego pago e orgânico. .
        <br />
        <br />E o novo resultado? Crescimento de 147% no faturamento em 2023.{" "}
      </>
    ),
  },
  {
    name: "Tintas Nacional",
    image: { src: "/images/Tintas-Nacional-img.webp", width: 363, height: 606 },
    text: (
      <>
        Realizamos um trabalho de pesquisa de mercado e público alvo, criando um novo site institucional, posicionamento
        correto, anúncios de alta performance em vendas, implementação de CRM e Assessoria Comercial.
        <br />
        <br />
        Identificamos um produto com maior volume de buscas, maior ticket médio e mais recompra online, além de criar
        páginas estratégicas para melhorar ainda mais o funil de vendas. Ajustamos também os encontros com a equipe
        comercial de quinzenais para semanais <br />
        <br />O resultado?
        <br />
        <br />
        Atingimos um ROI 12x com vendas de high ticket com recorrência, batendo o recorde de 57% de crescimento já no
        primeiro ano do nosso método Framework 4A.
      </>
    ),
  },
  {
    name: "SV Saúde",
    image: {
      src: "/images/FACHADA-HOSP-SV.png",
      width: 308,
      height: 450,
      srcSet: "/images/FACHADA-HOSP-SV.png 308w, /images/FACHADA-HOSP-SV-205x300.png 205w",
      sizes: "(max-width: 308px) 100vw, 308px",
    },
    text: (
      <>
        Iniciamos um processo para melhorar os seus números de captação de leads e vendas que antes, o melhor resultado
        era de um custo por lead de R$92 e 127 leads mensais, com mais de R$ 11.600 investidos. <br />
        <br />
        Nosso resultado?
        <br />
        <br />
        Em um mês de gestão, reduzimos o custo por conversão em 80% e triplicamos o número de leads recebidos. Em um mês
        foram 308 leads a R$18 investindo metade do valor. Resultado atingido pela junção de leads qualificados (e
        baratos) e um excelente comercial!{" "}
      </>
    ),
  },
  {
    name: "Buffet Personalité",
    image: { src: "/images/img-buffet-lp2609.webp", width: 363, height: 606 },
    mobileColumn: true,
    text: (
      <>
        Iniciamos uma parceria para realizar o processo de rebranding, posicionamento digital, recriação de site,
        melhorar a performance dos anúncios pagos e também a taxa de conversão da equipe comercial.
        <br />
        <br />
        Realizamos também uma consultoria comercial pois existiam diversos pontos de melhoria, além da implementação de
        um CRM para ter controle e clareza do processo de venda.
        <br />
        <br />O resultado?
        <br />
        <br />
        ROI de 70x sobre o valor investido no ano. Isso mesmo, retorno sobre o investimento de 70x em um ano.
      </>
    ),
  },
  {
    name: "Dr. Rodrigo Galvão",
    image: { src: "/images/img-drrodrigo-lp2609.webp", width: 363, height: 606 },
    text: (
      <>
        Fizemos uma análise no seu processo comercial e ajustamos diversas falhas antes de iniciarmos com os anúncios
        estratégicos. Investimos também em posicionamento digital mudando os conteúdos das redes sociais para aumentar o
        marketing.
        <br />
        <br />O resultado?
        <br />
        <br />
        Aumentamos em 60% o número de leads qualificados e melhoramos de 16% para 56% a taxa de conversão em apenas 20
        dias. O cliente abriu mais um consultório em uma das regiões mais nobres do Rio de Janeiro e hoje está lançando
        junto conosco seus produtos digitais conosco.
      </>
    ),
  },
];

function CaseSlide({ item }: { item: CaseStudy }) {
  const NameTag = item.nameTag ?? "h2";

  return (
    <div className="relative flex h-full w-full max-w-full min-w-0 flex-col">
      <div
        className={`mx-auto flex h-full w-full max-w-[1140px] grow flex-row gap-5 max-tablet:max-w-[1024px] max-mobile:max-w-[767px] max-mobile:flex-wrap ${
          item.mobileColumn ? "max-mobile:flex-col max-mobile:justify-start" : ""
        }`}
      >
        <div
          className="relative flex w-full min-w-0 flex-row gap-[60px] rounded-[10px] border border-solid border-brand bg-[linear-gradient(180deg,#1F1F1F_0%,#111_100%)] px-5 py-[15px] max-mobile:flex-col max-mobile:gap-5 max-mobile:px-2.5 max-mobile:py-5"
        >
          <div className="relative max-w-full min-w-0 self-center text-center">
            <img
              src={item.image.src}
              srcSet={item.image.srcSet}
              sizes={item.image.sizes}
              width={item.image.width}
              height={item.image.height}
              alt=""
              loading="lazy"
              decoding="async"
              className="rounded-[10px]"
            />
          </div>
          <div className="relative flex w-[626px] min-w-0 shrink-0 grow-0 flex-col gap-5 self-center max-mobile:w-full">
            <div className="relative w-auto max-w-full min-w-0 self-start text-left max-mobile:self-center max-mobile:text-center">
              <NameTag className="font-poppins text-[32px] leading-[1.2em] font-medium tracking-[0rem] text-brand max-mobile:text-[24px] max-mobile:leading-[1.9rem]">
                {item.name}
              </NameTag>
            </div>
            <div className="relative w-auto max-w-full min-w-0 self-start text-left max-mobile:text-center">
              <h2 className="font-poppins text-[20px] leading-[1.2em] font-light tracking-[0rem] text-white max-mobile:text-[16px]">
                {item.text}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cases() {
  return (
    <section
      id="cases"
      className="relative flex w-full flex-col bg-black"
    >
      <div className="mx-auto flex w-full max-w-[1280px] grow flex-col gap-5 py-[90px] max-mobile:items-center max-mobile:justify-center max-mobile:py-[60px]">
        <div
          className="relative flex w-full min-w-0 flex-col justify-center gap-[60px] px-[50px] max-mobile:w-[320px] max-mobile:gap-10 max-mobile:px-0"
        >
          <div className="relative w-auto max-w-full min-w-0 self-center text-center max-mobile:w-[240px]">
            <h2 className="font-poppins text-[32px] leading-[1.2em] font-medium tracking-[0rem] text-white max-mobile:text-[24px]">
              Cases de sucesso com a Genos
            </h2>
          </div>

          <NestedCarousel
            label="Carrossel"
            arrowClassName="text-white"
            slides={CASES.map((item) => (
              <CaseSlide key={item.name} item={item} />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
