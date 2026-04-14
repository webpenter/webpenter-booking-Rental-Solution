import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import LaravelEngine from "@/components/sections/LaravelEngine";
import WpEngine from "@/components/sections/WpEngine";
import Portfolio from "@/components/sections/FeaturedListings";
import SocialProof from "@/components/sections/SocialProof";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import SmoothScroll from "@/components/layout/SmoothScroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <main className="flex-1">
          <Hero />
          <Services />
          <HowItWorks />
          <LaravelEngine />
          <WpEngine />
          <Portfolio />
          <SocialProof />
          <Testimonials />
          <About />
          <Contact />
          <CTA />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
