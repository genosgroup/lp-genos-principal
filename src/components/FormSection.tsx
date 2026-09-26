import IconBox from "./IconBox";
import LeadForm from "./LeadForm";
import { FormIcon, PhoneRingIcon } from "./icons";

export default function FormSection() {
  return (
    <section
      className="relative flex min-h-[360px] w-full flex-col border-t-[20px] border-solid border-orange bg-[#0A0A0A]"
    >
      <div className="mx-auto flex w-full max-w-[1280px] grow flex-row justify-center gap-10 py-[90px] max-mobile:flex-wrap max-mobile:items-center max-mobile:gap-5 max-mobile:py-[60px]">
        <div
          className="relative flex w-[480px] min-w-0 flex-col justify-start gap-5 max-mobile:w-[320px] max-mobile:self-center"
        >
          {/* Fica "grudado" no topo enquanto o formulário rola (desktop/tablet) */}
          <div className="relative flex w-full min-w-0 flex-col gap-5 mobilex:sticky mobilex:top-5">
            <div
              className="relative w-[476px] max-w-full min-w-0 max-mobile:w-[269px] max-mobile:self-center max-mobile:text-center"
            >
              <div className="mb-5">
                <h2 className="font-poppins text-[32px] leading-[1.2em] font-medium tracking-[0rem] text-white max-mobile:text-[24px] max-mobile:leading-[1.9rem]">
                  Dar o próximo passo é mais rápido do que você imagina.
                </h2>
              </div>
            </div>

            <IconBox
              className="w-[480px]"
              boxClassName="p-5"
              position="left"
              iconSize={32}
              icon={<FormIcon className="relative mt-2.5 block h-[1em] w-[1em]" />}
              title={"Preencha o formulário\u00a0"}
              description="Forneça suas informações de contato. Todos os seus dados estarão seguros, cuidaremos deles como se fossem nossos."
            />

            <IconBox
              className="w-[480px]"
              boxClassName="p-5"
              position="left"
              iconSize={32}
              icon={<PhoneRingIcon className="relative mt-2.5 block h-[1em] w-[1em]" />}
              title="Com especialista em acelerar empresas"
              description="Sabemos que o crescimento da sua empresa não pode esperar. Por isso, um dos nossos especialistas logo entrará em contato para a reunião mais importante do seu negócio."
            />
          </div>
        </div>

        <div
          id="cta"
          className="relative flex w-[620px] min-w-0 flex-col gap-5 rounded-[10px] border border-solid border-brand pb-[60px] max-mobile:mt-5 max-mobile:w-[320px]"
        >
          <div
            className="relative flex w-full min-w-0 flex-row justify-center gap-5 rounded-t-[10px] bg-brand py-5 max-mobile:p-5"
          >
            <div className="relative w-[476px] max-w-full min-w-0 self-center text-center">
              <div className="my-2.5">
                <h2 className="font-poppins text-[24px] leading-[1.2em] font-normal tracking-[0rem] text-white max-mobile:text-[16px]">
                  Preencha e receba um diagnóstico do seu negócio
                </h2>
              </div>
            </div>
          </div>

          <div className="relative w-[90%] max-w-full min-w-0 self-center">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
