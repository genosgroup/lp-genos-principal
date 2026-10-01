import Script from "next/script";

/**
 * Tags do site.
 *
 * GA_GENOS_ID e o Pixel sao da Genos: a propriedade do GA4 fica na conta
 * Genos Group (445075916) e e a unica que a gente administra e configura.
 * Sem ela aqui, o site principal e a calculadora em /avaliacao reportavam
 * para propriedades diferentes e nenhum relatorio via o funil inteiro.
 *
 * GOOGLE_TAG_ID e GTM_ID vieram do Site Kit do WordPress e apontam para
 * propriedades de terceiro, que nao aparecem em nenhuma conta da Genos.
 * Ficam no ar por enquanto porque desligar corta o relatorio de quem ainda
 * acompanha; sao candidatos a remocao, nao parte da medicao oficial.
 */
const GA_GENOS_ID = "G-X2G6KW4TNY";
const GOOGLE_TAG_ID = "GT-552FQVS";
const GTM_ID = "GTM-WBJTM4T2";
const META_PIXEL_ID = "624880005754303";

export default function Tracking() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag("set","linker",{"domains":["genosgroup.com.br"]});
gtag("js", new Date());
gtag("config", "${GOOGLE_TAG_ID}");
gtag("config", "${GA_GENOS_ID}", {content_group: "Site \u00b7 Genos Group"});`}
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
