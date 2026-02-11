"use client";

import "./Hero.css";

export default function Hero() {
  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
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

          <button className="hero-contact" onClick={goToContact}>
            CONTACT ↗
          </button>
        </div>

        {/* CENTER IMAGE */}
        <div className="hero-image">
          <img src="/hero.png" alt="Hero" />
        </div>

        {/* RIGHT AVAILABILITY */}
        <div className="hero-right">
          <span>AVAILABLE FOR WORK</span>
          <h2>FEB’26</h2>
        </div>
      </div>
    </section>
  );
}
