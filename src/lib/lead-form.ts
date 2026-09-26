/**
 * Definição do formulário de lead, idêntica à do Elementor original
 * (mesmos ids, names, rótulos e opções). Compartilhado entre o
 * componente do formulário e a rota /api/lead.
 */

export type LeadField = {
  id: string;
  label: string;
  type: "text" | "email" | "select" | "hidden";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  /** Parâmetro da URL que preenche o campo oculto */
  urlParam?: string;
};

export const FORM_ID = "5ee1ef5";
export const FORM_NAME = "form-princi-lpv2609";

export const LEAD_FIELDS: LeadField[] = [
  { id: "Nome", label: "Nome", type: "text", placeholder: "Ex: João Santos" },
  { id: "Email", label: "Email", type: "email", required: true, placeholder: "nome@email.com" },
  { id: "Whatsapp", label: "Whatsapp", type: "text", required: true, placeholder: "(99) 99999-9999" },
  {
    id: "Representa",
    label: "Qual das opções abaixo te representa melhor?",
    type: "select",
    required: true,
    options: ["Empresário", "Diretor de empresa", "Gerente de empresa", "Outros"],
  },
  {
    id: "receita_mensal",
    label: "Qual é a sua receita MENSAL aproximada?",
    type: "select",
    required: true,
    options: [
      "Abaixo de R$ 20 mil",
      "Entre R$ 20 mil a R$ 50 mil",
      "Entre R$ 50 mil a R$ 100 mil",
      "Entre R$ 100 mil a R$ 500 mil",
      "Acima de R$ 500 mil",
    ],
  },
  {
    id: "field_fa5174a",
    label: "Qual é o número de colaboradores da sua empresa?",
    type: "select",
    required: true,
    options: ["De 0 a 5", "De 5 a 10", "De 10 a 20", "De 20 a 50", "Acima de 50"],
  },
  {
    id: "Desafios",
    label: "Qual é o maior desafio da sua empresa?",
    type: "select",
    required: true,
    options: [
      "Ter mais oportunidade de vendas",
      "Melhorar a conversão comercial",
      "Automatizar tarefas repetitivas",
      "Treinamento de vendas",
      "Outros",
    ],
  },
  {
    id: "acelerar_crescimento",
    label:
      "Na escala de 0 a 10, o quanto você está disposto (a) hoje a acelerar o crescimento da sua empresa de forma sólida e inteligente?",
    type: "select",
    required: true,
    options: ["0 até 2", "3 até 5", "6 até 8", "9 até 10"],
  },
  { id: "Utm_source", label: "Utm_source", type: "hidden", urlParam: "utm_source" },
  { id: "Utm_medium", label: "Utm_medium", type: "hidden", urlParam: "utm_medium" },
  { id: "Utm_campaign", label: "Utm_campaign", type: "hidden", urlParam: "utm_campaign" },
  { id: "Utm_term", label: "Utm_term", type: "hidden", urlParam: "utm_term" },
  { id: "Utm_content", label: "Utm_content", type: "hidden", urlParam: "utm_content" },
];

export const FORM_MESSAGES = {
  success: "O formulário foi enviado com sucesso.",
  error: "Ocorreu um erro.",
  required: "Este campo é obrigatório.",
  invalid: "Formulário inválido, verifique os campos.",
  invalidEmail: "Endereço de e-mail inválido.",
};

export type LeadResponse = {
  success: boolean;
  data: { message: string; errors?: Record<string, string> };
};
