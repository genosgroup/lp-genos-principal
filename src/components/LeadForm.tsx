"use client";

import { useEffect, useRef, useState, type SubmitEvent } from "react";
import { FORM_ID, FORM_MESSAGES, FORM_NAME, LEAD_FIELDS, type LeadResponse } from "@/lib/lead-form";
import { registrarLead } from "@/lib/conversao";
import { CaretDownIcon, SpinnerIcon } from "./icons";

type Message = { type: "success" | "danger"; text: string };

const labelClass =
  "block cursor-pointer pb-2.5 font-poppins text-[18px] leading-none font-normal text-white max-mobile:text-[14px] max-mobile:leading-[1.2em]";

const inputClass =
  "min-h-[47px] w-full max-w-full grow basis-full rounded-none border-0 bg-white px-4 py-1.5 align-middle font-poppins text-[18px] leading-[1.4] font-normal text-ink transition-all duration-300 placeholder:text-inherit placeholder:opacity-60 focus:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] focus:outline-0 max-mobile:text-[15px]";

const selectClass =
  "min-h-[47px] w-full basis-full appearance-none rounded-none border-0 bg-white py-1.5 ps-4 pe-5 align-middle font-[inherit] text-[length:inherit] leading-[inherit] text-inherit transition-all duration-300 focus:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] focus:outline-0";

export default function LeadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [waiting, setWaiting] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Preenche os campos ocultos de UTM a partir da URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (const field of LEAD_FIELDS) {
      if (!field.urlParam) continue;
      const value = params.get(field.urlParam);
      const input = formRef.current?.querySelector<HTMLInputElement>(`[name="form_fields[${field.id}]"]`);
      if (input && value) input.value = value;
    }
  }, []);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (waiting) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("referrer", window.location.toString());

    setWaiting(true);
    setMessage(null);
    setFieldErrors({});

    try {
      const response = await fetch("/api/lead", { method: "POST", body: data });
      const result = (await response.json()) as LeadResponse;

      if (result.success) {
        // Depois da resposta de sucesso, nunca no submit: lead que falhou
        // a validacao ou o webhook nao e lead, e contado como se fosse
        // inflaria a conversao e estragaria a otimizacao da campanha.
        registrarLead(FORM_NAME);
        form.reset();
        setMessage({ type: "success", text: result.data.message });
      } else {
        setFieldErrors(result.data.errors ?? {});
        setMessage({ type: "danger", text: result.data.message });
      }
    } catch {
      setMessage({ type: "danger", text: FORM_MESSAGES.error });
    } finally {
      setWaiting(false);
    }
  }

  return (
    <form
      ref={formRef}
      method="post"
      name={FORM_NAME}
      onSubmit={handleSubmit}
      style={{ opacity: waiting ? 0.45 : 1, transition: `opacity ${waiting ? 500 : 100}ms` }}
    >
      <input type="hidden" name="form_id" value={FORM_ID} />
      <div className="-mx-[5px] -mb-5 flex flex-wrap">
        {LEAD_FIELDS.map((field) => {
          const name = `form_fields[${field.id}]`;
          const id = `form-field-${field.id}`;
          const error = fieldErrors[field.id];

          if (field.type === "hidden") {
            return (
              <div key={field.id} className="hidden">
                {/* Sem defaultValue: o valor da UTM precisa sobreviver ao reset do formulário */}
                <input type="hidden" name={name} id={id} />
              </div>
            );
          }

          return (
            <div
              key={field.id}
              className="relative mb-5 flex min-h-px w-full flex-wrap items-center px-[5px]"
            >
              <label htmlFor={id} className={labelClass}>
                {field.label}
              </label>
              {field.type === "select" ? (
                <div className="relative flex w-full max-w-full basis-full font-poppins text-[18px] font-normal text-ink max-mobile:text-[15px]">
                  <div className="pointer-events-none absolute end-2.5 top-1/2 -translate-y-1/2 text-[11px]">
                    <CaretDownIcon className="inline w-[1em] overflow-visible fill-current" />
                  </div>
                  <select
                    name={name}
                    id={id}
                    required={field.required}
                    aria-invalid={error ? true : undefined}
                    className={selectClass}
                  >
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <input
                  size={1}
                  type={field.type}
                  name={name}
                  id={id}
                  placeholder={field.placeholder}
                  required={field.required}
                  aria-invalid={error ? true : undefined}
                  className={inputClass}
                />
              )}
              {error && (
                <span role="alert" className="form-message form-message-danger">
                  {error}
                </span>
              )}
            </div>
          );
        })}

        <div className="relative mb-5 flex min-h-px w-full flex-wrap items-end px-[5px]">
          <button
            type="submit"
            disabled={waiting}
            className="hover-grow inline-block min-h-[40px] basis-full cursor-pointer rounded-[40px] border-0 bg-accent py-5 text-center font-poppins text-[18px] leading-none font-normal text-white disabled:cursor-default max-mobile:text-[16px]"
          >
            <span className="flex flex-row items-center justify-center gap-[5px]">
              {waiting && (
                <span className="whitespace-normal">
                  <SpinnerIcon className="spin inline-block h-[1em] w-[1em] fill-current align-[-0.143em]" />
                  &nbsp;
                </span>
              )}
              <span className="whitespace-normal">RECEBER MAIS INFORMAÇÕES</span>
            </span>
          </button>
        </div>
      </div>

      {message && (
        <div role="alert" className={`form-message form-message-${message.type}`}>
          {message.text}
        </div>
      )}
    </form>
  );
}
