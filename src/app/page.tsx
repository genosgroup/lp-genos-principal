import { preload } from "react-dom";
import Benefits from "@/components/Benefits";
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";
import FormSection from "@/components/FormSection";
import Founders from "@/components/Founders";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import PageEffects from "@/components/PageEffects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  preload("/images/Mask-group-3.png", { as: "image", fetchPriority: "high" });

  return (
    <>
      <PageEffects />
      <Header />
      <main>
        <Hero />
        <FormSection />
        <Benefits />
        <Methodology />
        <Services />
        <Cases />
        <Testimonials />
        <Founders />
      </main>
      <Footer />
    </>
  );
}
