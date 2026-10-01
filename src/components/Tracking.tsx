import Script from "next/script";

/**
 * Tags do site.
 *
 * GA4 e Pixel ficam aqui, no codigo, de proposito. Os dois sao da Genos:
 * a propriedade do GA4 esta na conta Genos Group (445075916) e o Pixel e
 * o mesmo que roda na calculadora em /avaliacao, entao o funil inteiro
 * reporta para o mesmo lugar.
 *
 * O que saiu, e por que:
 *
 * - GT-552FQVS (carregava G-VH9KE2YJM6) e GTM-WBJTM4T2 vieram do Site Kit
 *   do WordPress na migracao. Apontavam para propriedades do GA4 que nao
 *   aparecem em conta nenhuma da Genos: dados nossos indo para painel de
 *   terceiro, com acesso que pode acabar sem aviso.
 *
 * - As conversoes do formulario moravam dentro do GTM-WBJTM4T2, nao no
 *   codigo. Tirar o conteiner sem mais nada apagaria o evento de Lead em
 *   silencio: nada quebra na tela, as campanhas so param de receber sinal.
 *   Por isso o Lead agora e disparado pelo LeadForm, em codigo versionado.
 *
 * GTM_ID e o conteiner da propria Genos, que entra no lugar do antigo.
 * Esta vazio hoje e serve para adicionar tag futura (Google Ads, LinkedIn,
 * TikTok) sem precisar de deploy.
 *
 * ATENCAO ao usar o GTM: NAO recrie o GA4 nem o Pixel la dentro. Os dois
 * ja estao nesta pagina. Duplicar qualquer um deles conta cada visita duas
 * vezes na mesma propriedade, e o relatorio passa a mentir para cima sem
 * dar nenhum sinal de erro.
 */
const GA_ID = "G-X2G6KW4TNY";
const META_PIXEL_ID = "624880005754303";
const GTM_ID = "GTM-M8L8DL58";

export default function Tracking() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag("set","linker",{"domains":["genosgroup.com.br"]});
gtag("js", new Date());
gtag("config", "${GA_ID}", {content_group: "Site · Genos Group"});`}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
    </>
  );
}

export function TrackingNoScript() {
  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
