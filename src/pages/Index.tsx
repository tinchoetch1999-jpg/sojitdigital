import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen animated-gradient-bg">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
