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
- **Plugins substituídos por código**: rolagem suave do mouse (Mousewheel Smooth Scroll → `smoothscroll-for-websites`), carrosséis (Swiper), animação Lottie (`lottie-web`), menu mobile e lightbox de vídeos.

## Deploy

Previsto para Cloudflare Workers (via OpenNext). Lembre de cadastrar `LEAD_WEBHOOK_URL` nas variáveis do Worker.
