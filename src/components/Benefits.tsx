/* eslint-disable @next/next/no-img-element */

export default function Benefits() {
  return (
    <section id="beneficios" className="relative flex w-full flex-col bg-panel">
      <div className="mx-auto flex w-full max-w-[1280px] grow flex-row items-center justify-center gap-10 py-[90px] max-mobile:flex-wrap max-mobile:py-[60px]">
        <div className="relative max-w-full min-w-0 text-center max-mobile:w-[270px]">
          <img
            src="/images/Group-1171275374-1-1.png"
            srcSet="/images/Group-1171275374-1-1.png 439w, /images/Group-1171275374-1-1-300x265.png 300w"
            sizes="(max-width: 439px) 100vw, 439px"
            width={439}
            height={388}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>

        <div
          className="relative flex w-1/2 min-w-0 flex-col gap-[30px] max-mobile:order-[-99999] max-mobile:w-[320px]"
        >
          <div className="relative w-[517px] max-w-full min-w-0 max-mobile:text-center">
            <h2 className="font-poppins text-[32px] leading-[1.2em] font-medium tracking-[0rem] text-white max-mobile:text-[24px]">
              Acelere o crescimento da sua empresa de forma inteligente.
            </h2>
          </div>
          <div className="relative w-[869px] max-w-full min-w-0 self-start text-left">
            <h2 className="font-poppins text-[18px] leading-[1.5em] font-normal tracking-[0rem] text-white max-mobile:text-[16px] max-mobile:leading-[1.2em]">
              <b>Geração de demanda:</b>
              <br />
              Empresas que utilizam automação de marketing geram 53% mais leads qualificados.
              <br />
              <br />
              <b>Redução do Custo: </b>
              <br />
              Processos rápidos e eficientes podem reduzir o custo por aquisição (CPA) em até 50%.
              <br />
              <br />
              <b>Aceleração do ciclo de vendas:</b>
              <br />
              Empresas que usam automação em conjunto com tráfego pago podem acelerar o ciclo de vendas{"\u00a0"}em
              {"\u00a0"}até{"\u00a0"}30%.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
