"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import MobileDrawer from "@/components/layout/MobileDrawer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Coverage from "@/components/sections/Coverage";
import Testimonials from "@/components/sections/Testimonials";
import FAQs from "@/components/sections/FAQs";
import FinalCTA from "@/components/sections/FinalCTA";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <main>
        <Hero />
        <Services/>
        <WhyUs/>
        <Coverage/>
        <Testimonials/>
        <FAQs/>
        <FinalCTA/>
      </main>
    </>
  );
}