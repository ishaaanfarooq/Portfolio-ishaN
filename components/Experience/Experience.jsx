"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Experience.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ROLES = [
  {
    id: "01",
    company: "Handshake",
    role: "AI/ML Engineer",
    period: "May 2026 — Present",
    points: [
      "Built deterministic evaluation environments using Python, Docker, Harbor, and CI/CD, with hardened scoring pipelines and zero ground-truth leakage.",
      "Red-teamed AI benchmark environments through live agent evaluations, identifying failure modes and improving system reliability before client deployment.",
      "Developed mathematically optimal reference solutions using MILP, column generation, dynamic programming, and retrograde game-tree search.",
      "Acted as the primary technical contact for frontier model labs, designing production AI evaluation environments and driving tasks through production acceptance.",
    ],
    stack: ["Python", "Docker", "Harbor", "CI/CD", "MILP", "Agent Evals"],
  },
  {
    id: "02",
    company: "Bolt Wealth Advisories",
    role: "Full Stack Intern (Remote)",
    period: "Sep 2025 — Apr 2026",
    points: [
      "Architected and deployed REST microservices using Node.js and Python powering financial analytics, production APIs, and React dashboards for real-world advisor workflows.",
      "Built PostgreSQL ETL pipelines, optimized schemas, and implemented JWT/RBAC authentication, rate limiting, and secure backend services.",
      "Integrated React applications with REST and WebSocket services for real-time portfolio visualization and responsive user experiences.",
      "Worked directly with clients during live demos, translating business requirements into production features while owning debugging, testing, and Docker deployments.",
    ],
    stack: ["Node.js", "Python", "PostgreSQL", "React", "WebSockets", "Docker"],
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-top", {
        scrollTrigger: {
          trigger: ".experience",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      rowsRef.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="experience" ref={containerRef}>
      {/* TOP HEADER */}
      <div className="experience-top">
        <h2 className="experience-title">EXPERIENCE /</h2>

        <div className="experience-intro">
          <span>(WHERE I&apos;VE WORKED)</span>
          <p>
            Building evaluation infrastructure for frontier AI systems, and
            production backends for the people who depend on them.
          </p>
        </div>
      </div>

      {/* ROLES */}
      <div className="experience-list">
        {ROLES.map((item, index) => (
          <article
            key={item.id}
            className="experience-item"
            ref={(el) => (rowsRef.current[index] = el)}
          >
            {/* LEFT – IDENTITY */}
            <div className="experience-identity">
              <div className="experience-meta">
                <span className="experience-number">({item.id})</span>
                <span className="experience-period">{item.period}</span>
              </div>

              <h3 className="experience-company">{item.company}</h3>
              <span className="experience-role">{item.role}</span>

              <div className="experience-stack">
                {item.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            {/* RIGHT – POINTS */}
            <ul className="experience-points">
              {item.points.map((point, idx) => (
                <li key={idx}>
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
