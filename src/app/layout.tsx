import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Tracking, { TrackingNoScript } from "@/components/Tracking";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-src",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genosgroup.com.br"),
  title: "Genos Group",
  robots: { "max-image-preview": "large" },
  alternates: { canonical: "https://genosgroup.com.br/" },
  icons: {
    icon: [
      { url: "/images/genos-preto-150x150.png", sizes: "32x32" },
      { url: "/images/genos-preto.png", sizes: "192x192" },
    ],
    apple: "/images/genos-preto.png",
  },
  other: {
    "facebook-domain-verification": "6z6cze7yhra0icdup2bdq1lto0l0sw",
    "msapplication-TileImage": "https://genosgroup.com.br/images/genos-preto.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        <Tracking />
        <TrackingNoScript />
        {children}
      </body>
    </html>
  );
}
