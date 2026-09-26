/* eslint-disable @next/next/no-img-element */
import CtaButton from "./CtaButton";
import { PlusCircleIcon } from "./icons";

const CLIENT_LOGOS = [
  { src: "/images/logo1.webp" },
  { src: "/images/logo2.webp" },
  { src: "/images/logo3.webp", mobileWidth: true },
  { src: "/images/logo4.webp" },
  { src: "/images/logo5.webp" },
];

const STATS = [
  { value: "200", label: "Clientes satisfeitos" },
  { value: "R$35 MI", label: "Em receita gerados" },
  { value: "10 ANOS", label: "De experiência" },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[800px] w-full flex-col bg-black bg-[url(/images/Mask-group-3.png)] bg-cover bg-[position:20vw_0vh] bg-no-repeat wide:bg-contain wide:bg-[position:72%_1%] max-tablet:bg-[url(/images/bg-hero-mb-lpv111.webp)] max-tablet:bg-contain max-tablet:bg-[position:0%_0%] max-mobile:min-h-0 max-mobile:bg-[url(/images/Prancheta-1-3.png)] max-mobile:bg-[position:top_center]"
    >
      <div className="mx-auto flex w-full max-w-[1280px] grow flex-col justify-center gap-5 max-tablet:pt-[60%] max-tablet:pb-[15%]">
        <div
          className="relative flex w-[599px] min-w-0 shrink-0 grow-0 flex-col justify-center gap-7 mobile:max-tablet:w-[550px] max-tablet:self-center max-mobile:w-[320px] max-mobile:gap-5"
        >
          {/* Logos de clientes + "+200 Clientes Satisfeitos" */}
          <div
            className="relative flex w-full min-w-0 flex-row justify-start gap-0 max-mobile:w-[320px] max-mobile:flex-wrap max-mobile:items-center max-mobile:justify-center max-mobile:gap-2.5"
          >
            <div
              className="relative flex w-[160px] min-w-0 flex-row gap-0 max-mobile:w-full max-mobile:flex-wrap max-mobile:items-center max-mobile:justify-center"
            >
              {CLIENT_LOGOS.map((logo) => (
                <div key={logo.src} className="relative min-w-0 text-center">
                  <div className="-mr-2.5">
                    <img
                      src={logo.src}
                      width={100}
                      height={100}
                      alt=""
                      className={`hover-float max-w-[35px] max-mobile:max-w-[30px] ${logo.mobileWidth ? "max-mobile:w-[38px]" : ""}`}
                    />
                  </div>
                </div>
              ))}
              <div className="relative min-w-0 text-center">
                <div className="-mr-2.5">
                  <img
                    src="/images/logo6.png"
                    width={38}
                    height={38}
                    alt=""
                    className="hover-float pulse-badge max-mobile:max-w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="relative min-w-0 self-center max-mobile:text-center">
              <div className="ml-5 max-mobile:ml-0">
                <span className="font-poppins text-[16px] leading-[1.2em] font-normal text-[#FFFFFB] max-mobile:text-[14px]">
                  +200 Clientes Satisfeitos
                </span>
              </div>
            </div>
          </div>

          <div
            className="relative max-w-full min-w-0 max-tablet:text-center max-mobile:w-[336px] max-mobile:self-center"
          >
            <h1 className="font-poppins text-[40px] leading-[1.2em] font-medium tracking-[0rem] text-white max-mobile:text-[20px]">
              <b>Aumente o seu faturamento</b>,<br />
              reduza custos e otimize
              <br />a sua produtividade.
            </h1>
          </div>

          <div
            className="relative w-[387px] max-w-full min-w-0 max-tablet:self-center max-tablet:text-center max-mobile:w-[263px]"
          >
            <h2 className="font-poppins text-[19px] leading-[1.2em] font-normal tracking-[0rem] text-white max-mobile:text-[16px]">
              Descubra como o nosso método 4A, nosso ecossistema de elite, já gerou mais de 35 milhões investindo
              apenas 6% disso.
            </h2>
          </div>

          <div
            className="relative flex w-full min-w-0 flex-row gap-2.5 max-tablet:justify-center max-mobilex:hidden max-mobile:w-[320px]"
          >
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="relative flex w-[150px] min-w-0 flex-col items-center justify-center gap-2.5 rounded-[10px] bg-panel pb-5 wide:pb-2.5 max-mobile:w-[32%] max-mobile:justify-start"
              >
                <div
                  className="relative flex w-full min-w-0 flex-col items-center justify-center rounded-t-[10px] bg-brand py-2.5"
                >
                  <div className="relative min-w-0">
                    <div className="-my-2.5">
                      <ul className="m-0 list-none p-0">
                        <li className="relative m-0 flex items-center p-0">
                          <span className="relative flex">
                            <PlusCircleIcon className="me-[3.5px] h-[14px] w-[14px] fill-white" />
                          </span>
                          <span className="self-center ps-[5px] font-poppins text-[24px] font-semibold text-white max-mobile:text-[16px]">
                            {stat.value}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative w-auto max-w-full min-w-0 self-center text-center">
                  <h2 className="font-poppins text-[12px] leading-[1.2em] font-normal tracking-[0rem] text-white max-mobile:text-[8px] max-mobile:leading-none">
                    {stat.label}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <CtaButton className="w-[330px] self-start max-tablet:self-center max-mobile:w-[320px]">
            QUERO MAIS INFORMAÇÕES
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
