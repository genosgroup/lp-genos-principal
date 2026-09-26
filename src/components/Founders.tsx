/* eslint-disable @next/next/no-img-element */

const nameClass =
  "font-poppins text-[32px] leading-[1.2em] font-medium tracking-[0rem] text-brand max-mobile:text-[24px] max-mobile:leading-[1.9rem]";
const bioClass =
  "font-poppins text-[20px] leading-[1.2em] font-light tracking-[0rem] text-white max-mobile:text-[16px]";

export default function Founders() {
  return (
    <section className="relative flex w-full flex-col bg-panel">
      <div className="mx-auto flex w-full max-w-[1280px] grow flex-col gap-5 py-[90px] max-mobile:items-center max-mobile:justify-center max-mobile:gap-[60px] max-mobile:pt-[60px] max-mobile:pb-[120px]">
        {/* Gilvan */}
        <div
          className="relative flex w-full min-w-0 flex-row items-center justify-center gap-10 max-mobile:w-[320px] max-mobile:flex-wrap max-mobile:self-center"
        >
          <div className="relative max-w-full min-w-0 text-right">
            <img
              src="/images/WhatsApp-Image-2024-09-09-at-13.56.09-3.jpeg"
              srcSet="/images/WhatsApp-Image-2024-09-09-at-13.56.09-3.jpeg 853w, /images/WhatsApp-Image-2024-09-09-at-13.56.09-3-200x300.jpeg 200w, /images/WhatsApp-Image-2024-09-09-at-13.56.09-3-682x1024.jpeg 682w, /images/WhatsApp-Image-2024-09-09-at-13.56.09-3-768x1152.jpeg 768w"
              sizes="(max-width: 853px) 100vw, 853px"
              width={853}
              height={1280}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="relative flex w-[850px] min-w-0 flex-col gap-5 max-mobile:w-full">
            <div className="relative w-auto max-w-full min-w-0 self-start text-left max-mobile:self-center max-mobile:text-center">
              <h2 className={nameClass}>Gilvan Brito</h2>
            </div>
            <div className="relative w-auto max-w-full min-w-0 self-start text-left max-mobile:text-center">
              <h2 className={bioClass}>
                Comecei minha trajetória no comercial com os dois pés no campo de batalha: vendendo, lidando com metas
                desafiadoras e aprendendo, na prática, o que faz uma equipe performar de verdade.
                <br />
                <br />
                De lá pra cá, foram mais de 14 anos dedicados à área de vendas e desenvolvimento de negócios. Treinei
                mais de 5.000 empreendedores e vendedores, liderei uma equipe com mais de 600 pessoas e fui responsável
                por diversas vendas diretas.
                <br />
                <br />
                Meu propósito sempre foi claro: ajudar empresas a crescerem com estrutura, liderança e estratégia. Atuei
                como gestor, mentor e consultor — e em cada uma dessas funções, vi o mesmo problema se repetir: líderes
                sobrecarregados, processos desorganizados e times desalinhados.
                <br />
                <br />
                Foi a partir dessa dor que fundei a Genos Group, uma aceleradora de empresas que desenvolve negócios
                preparados para escalar. Ao lado da Thalita, construímos o Método 4A: uma metodologia prática e
                assertiva que ajuda empresas a saírem do caos da operação e alcançarem crescimento com previsibilidade.
                <br />
                <br />
                Hoje, meu foco é ajudar empresários a assumirem de fato o papel de CEO. Porque quando o dono para de
                apagar incêndio e começa a pensar estrategicamente, tudo muda — inclusive os resultados.
              </h2>
            </div>
          </div>
        </div>

        {/* Thalita */}
        <div
          className="relative flex w-full min-w-0 flex-row items-center justify-center gap-10 pt-20 max-mobile:w-[320px] max-mobile:flex-wrap"
        >
          <div
            className="relative flex w-[850px] min-w-0 flex-col gap-5 max-mobile:w-full [@media(max-width:768px)]:[&_br]:hidden"
          >
            <div className="relative w-auto max-w-full min-w-0 self-start text-left max-mobile:self-center max-mobile:text-center">
              <h2 className={nameClass}>Thalita Azeredo</h2>
            </div>
            {/* white-space: pre-line — as quebras "\n" da lista 1A–4A viram linhas, como no original */}
            <div
              className="relative w-auto max-w-full min-w-0 self-start text-left whitespace-pre-line max-mobile:text-center"
            >
              <h2 className={bioClass}>
                Se você sorrir, você vende. Anota isso e vem comigo.
                <br />
                <br />
                Bem antes da faculdade, já era apaixonada por comunicação. A ambição por resultado e vendas surgiu no
                caminho…
                <br />
                <br />
                No início, era eu e eu. Já fiz de tudo um pouco: criei logo, site e até a arte para personalizar uma
                kombi. Até que em 2020 mergulhei de cabeça em ajudar empresários a se desafiarem a vender mais.
                <br />
                <br />
                De lá pra cá acelerei dezenas de negócios em 3 continentes. E, desenvolvi equipes responsáveis por
                diversas vendas diretas no Rio de Janeiro.
                <br />
                <br />
                Ao lado do Gilvan, criei a Genos Group em 2023. Uma aceleradora de empresas.
                <br />
                <br />
                Percebemos que os negócios mais lucrativos tem um padrão: aplicaram à risca o método que sugerimos e
                hoje nomeamos de 4A.
                <br />
                <br />
                De lá pra cá já geramos + 25 MILHÕES com um investimento médio de apenas 4% desse valor.
                <br />
                <br />
                {
                  "1A. Marketing: para atrair clientes certos.\n2A. Vendas: para converter oportunidades em $$.\n3A. Gestão: para criar processos ágeis.\n4A. Financeiro: para controlar custos e aumentar lucros."
                }
                <br />
                <br />
                Negócios sólidos têm duas coisas em comum: as 4 áreas alinhadas e… sorrisos.
                <br />
                <br />A venda é uma conquista, entenda isso.
                <br />
                <br />
                Se te conquistei ler até aqui nesse mundo caótico e veloz, fico feliz! Significa que está pronto(a) para
                se desafiar a vender mais. E a partir de agora, vender sorrindo.
              </h2>
            </div>
          </div>
          <div className="relative max-w-full min-w-0 text-right max-mobile:order-[-99999]">
            <img
              src="/images/WhatsApp-Image-2025-04-30-at-16.34.03-1.jpeg"
              srcSet="/images/WhatsApp-Image-2025-04-30-at-16.34.03-1.jpeg 1000w, /images/WhatsApp-Image-2025-04-30-at-16.34.03-1-200x300.jpeg 200w, /images/WhatsApp-Image-2025-04-30-at-16.34.03-1-681x1024.jpeg 681w, /images/WhatsApp-Image-2025-04-30-at-16.34.03-1-768x1154.jpeg 768w"
              sizes="(max-width: 1000px) 100vw, 1000px"
              width={1000}
              height={1503}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
