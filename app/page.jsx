"use client";

import { useRef } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Works from "@/components/Works/Works";
import About2 from "@/components/About2/About2";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  const headerRef = useRef(null);

  return (
    <>
      <Header ref={headerRef} />
      <Hero headerRef={headerRef} />
      <Services />
      <Works />
      <About2 />
      <Contact />
      <Footer />
    </>
  );
}
