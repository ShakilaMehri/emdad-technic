import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import  Coverage  from "@/components/sections/Coverage";
import Testimonials from "@/components/sections/Testimonials";
import FAQs from "@/components/sections/FAQs";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Coverage />
      <Testimonials />
      <FAQs />
      <FinalCTA />
    </main>
  );
}
