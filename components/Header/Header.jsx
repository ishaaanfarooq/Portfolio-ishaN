"use client";

import { forwardRef } from "react";
import "./Header.css";

const Header = forwardRef(function Header(_, ref) {
  return (
    <header ref={ref} className="header">
      <span className="header-left">Software Engineer (AI Systems & Full-Stack)</span>

      <nav className="header-right">
        <a href="#services">Services</a>
        <a href="#works">Works</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
});

export default Header;
