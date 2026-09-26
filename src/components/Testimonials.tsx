import CtaButton from "./CtaButton";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  return (
    <section className="relative flex w-full flex-col bg-black">
      <div className="mx-auto flex w-full max-w-[1280px] grow flex-col gap-5 py-[90px] max-mobile:items-center max-mobile:justify-center max-mobile:py-[60px]">
        <div className="relative flex w-full min-w-0 flex-col gap-5 max-mobile:w-[320px]">
          <div className="relative w-auto max-w-full min-w-0 self-center text-center">
            <div className="mb-10">
              <h2 className="font-poppins text-[32px] leading-[1.2em] font-medium tracking-[0rem] text-white max-mobile:text-[24px]">
                O que estão falando sobre a Genos Group
              </h2>
            </div>
          </div>

          <TestimonialsCarousel />

          <CtaButton
            className="w-[390px] self-center max-mobile:w-[320px]"
            spacingClassName="mt-10"
          >
            QUERO ACELERAR MINHA EMPRESA
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
