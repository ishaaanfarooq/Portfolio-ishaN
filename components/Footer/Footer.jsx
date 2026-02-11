"use client";

import { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* MENU */}
        <div className="footer-col">
  <h4>Menu</h4>
  <ul>
    <li>
      <a href="#top">Home</a>
    </li>
    <li>
      <a href="#services">Services</a>
    </li>
    <li>
      <a href="#works">Works</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</div>

        {/* SOCIALS */}
        <div className="footer-col">
          <h4>Socials</h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/ishan-farooq-8a0563292/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/ishaaanfarooq" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/ishaaanfarooq" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* TIME */}
      <div className="footer-bottom">
        <span className="footer-time-label">LOCAL TIME</span>
        <span className="footer-time">{time}, IST</span>
      </div>
    </footer>
  );
}
