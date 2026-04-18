"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);

  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-title", {
        y: 120,
        opacity: 0,
        duration: 1.4,
        delay: 0.1,
      })
      .from(
        [".hero-arrow", ".hero-description", ".hero-actions"],
        {
          y: 40,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
        },
        "-=0.9"
      )
      .from(
        ".hero-image",
        {
          scale: 0.85,
          y: 40,
          opacity: 0,
          duration: 1.4,
        },
        "-=1.1"
      )
      .from(
        ".hero-right",
        {
          x: 40,
          opacity: 0,
          duration: 1,
        },
        "-=1.2"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* BIG NAME */}
      <h1 className="hero-title">ISHAN FAROOQ</h1>

      <div className="hero-layout">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <span className="hero-arrow">↘</span>

          <p className="hero-description">
            Open to job opportunities worldwide.
            <br />
            Passionate about building polished,
            <br />
            intuitive, and thoughtful digital
            <br />
            products that leave a mark.
          </p>

          <div className="hero-actions">
            <button className="hero-contact" onClick={goToContact}>
              CONTACT ↗
            </button>
            <a href="/resume.pdf" download="Ishan_Farooq_Resume.pdf" className="hero-resume">
              RESUME ↓
            </a>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="hero-image">
          <img src="/hero.png" alt="Hero" />
        </div>

        {/* RIGHT AVAILABILITY */}
        <div className="hero-right">
          <span>AVAILABLE FOR WORK</span>
          <h2>APR’26</h2>
        </div>
      </div>
    </section>
  );
}
