# LP Genos Group

Landing page principal da Genos Group (genosgroup.com.br), migrada do WordPress/Elementor para **Next.js + TypeScript + Tailwind CSS**, mantendo o visual e o comportamento idênticos ao original.

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # e preencha LEAD_WEBHOOK_URL
npm run dev                  # http://localhost:3000
```

Build de produção: `npm run build && npm start`.

## Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `LEAD_WEBHOOK_URL` | Webhook do n8n que recebe os leads do formulário (o mesmo que o Elementor usava). |

## Estrutura

```
src/
  app/
    layout.tsx        metadados, fonte Poppins e tags de rastreamento
    page.tsx          monta as seções da página
    globals.css       tema do Tailwind (breakpoints do Elementor) e efeitos
    api/lead/route.ts recebe o formulário e repassa ao webhook
  components/         uma seção por arquivo (Hero, FormSection, Services…)
  lib/                dados do formulário e dos vídeos de depoimento
public/
  images/             imagens do site original
  lottie/             animação do botão flutuante
```

### Breakpoints

Os breakpoints do Tailwind replicam os do Elementor (desktop-first):

| Prefixo | Largura |
| --- | --- |
| `max-mobile:` | até 767px |
| `max-mobilex:` | até 880px |
| `max-tablet:` | até 1024px |
| `max-tabletx:` | até 1200px |
| `max-laptop:` | até 1366px |
| `wide:` | a partir de 2400px |

## O que foi adaptado do WordPress

- **Formulário**: em vez do `admin-ajax.php` do Elementor, envia para `/api/lead`, que repassa ao webhook do n8n no mesmo formato (`application/x-www-form-urlencoded`, chaves = rótulos dos campos + metadados + `form_id`/`form_name`). Os campos mantêm os mesmos `id`/`name`, que o GTM usa nas conversões.
- **Rastreamento**: Google tag (`GT-552FQVS`), GTM (`GTM-WBJTM4T2`) e Pixel da Meta (`624880005754303`) inseridos diretamente, sem os plugins Site Kit, PixelYourSite e Meta for WordPress.
- **GA4 oficial da Genos** (`G-X2G6KW4TNY`): adicionado depois, em `src/components/Tracking.tsx`. É a propriedade da conta Genos Group (445075916), a única que a Genos administra — as duas que vieram do WordPress apontam para propriedades que não aparecem em conta nenhuma da empresa. Com ela aqui, o site principal e a calculadora em `genosgroup.com.br/avaliacao` passam a reportar para a mesma propriedade, e o funil inteiro fica visível num relatório só. Marca as páginas com o grupo de conteúdo `Site · Genos Group`, para separá-las das LPs sem depender de filtro por URL.
- **Plugins substituídos por código**: rolagem suave do mouse (Mousewheel Smooth Scroll → `smoothscroll-for-websites`), carrosséis (Swiper), animação Lottie (`lottie-web`), menu mobile e lightbox de vídeos.

## Deploy (Cloudflare Workers)

O site roda no Cloudflare Workers com o adaptador [OpenNext](https://opennext.js.org/cloudflare) (`wrangler.jsonc` e `open-next.config.ts`). O Worker se chama `lp-genos-principal`.

- **Automático:** cada push na `main` publica pelo GitHub Actions (`.github/workflows/deploy.yml`). O repositório precisa dos segredos `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` em *Settings > Secrets and variables > Actions*.
- **Manual:** `npx wrangler login` e depois `npm run deploy`.
- **Webhook:** `LEAD_WEBHOOK_URL` é um secret do Worker, configurado uma vez com `npx wrangler secret put LEAD_WEBHOOK_URL` (ou no painel, em *Workers > lp-genos-principal > Settings > Variables and Secrets*). O deploy não mexe nele.

### Domínio

A LP responde pelo domínio inteiro `genosgroup.com.br` (o WordPress foi desativado). O domínio é ligado ao Worker no painel da Cloudflare, em *Workers > lp-genos-principal > Settings > Domains & Routes*, e não no `wrangler.jsonc`: assim um deploy nunca mexe no domínio sem querer.
