"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import MobileDrawer from "@/components/layout/MobileDrawer";
import Hero from "@/components/sections/Hero";


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
      </main>
    </>
  );
}