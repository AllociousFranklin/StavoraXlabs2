import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ClientLogos } from "./components/ClientLogos";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { TechnologyStack } from "./components/TechnologyStack";
import { Testimonials } from "./components/Testimonials";
import { Insights } from "./components/Insights";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { ComplexityIntro } from "./components/ComplexityIntro";

export default function App() {
  return (
    <div className="size-full bg-black">
      <ComplexityIntro />
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <ClientLogos />
        <Portfolio />
        <Services />
        <CaseStudies />
        <TechnologyStack />
        <Testimonials />
        <Insights />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}