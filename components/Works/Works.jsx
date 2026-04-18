"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Works.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
  {
    id: "01",
    title: "Multi-Model RAG System",
    subtitle: "AI Pipeline",
    description:
      "Built a Retrieval-Augmented Generation system using FastAPI, LangChain, FAISS, and Llama 3. Designed multi-model routing pipelines, implemented document embedding systems, and developed a real-time interface for pipeline execution.",
    image: "/multi_model_rag.png",
    github: "https://github.com/ishaaanfarooq/Multi-Model-RAG",
  },
  {
    id: "02",
    title: "ReWise AI",
    subtitle: "Chrome Extension & Backend System",
    description:
      "Developed a system to capture highlighted content from webpages. Built asynchronous pipelines using Node.js, Redis, and LLM APIs. Integrated Google OAuth and MongoDB, and implemented automated weekly summaries for content revision.",
    image: "/rewise_ai.png",
    github: "https://github.com/ishaaanfarooq/ReWise.AI",
  },
  {
    id: "03",
    title: "Portfolio Website",
    subtitle: "Design & Development",
    description:
      "A thoughtfully crafted personal portfolio focused on typography, motion, and smooth scrolling interactions.",
    image: "/ishanproject_1.png",
    github: "https://github.com/ishaaanfarooq/Portfolio-ishaN.git",
  },
];

export default function Works() {
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // 1. Active Index Scroll Tracker
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.65;

      let closestIndex = 0;
      let closestDistance = Infinity;

      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. GSAP ScrollTrigger Animations
    const ctx = gsap.context(() => {
      // Animate the Header
      gsap.from(".works-top", {
        scrollTrigger: {
          trigger: ".works",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Animate each Work Item
      sectionsRef.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <section id="works" className="works" ref={containerRef}>
      {/* TOP HEADER */}
      <div className="works-top">
        <h2 className="works-title">SELECTED WORKS /</h2>

        <div className="works-intro">
          <span>(PROJECTS)</span>
          <p>
            Thoughtfully crafted digital projects that blend utility and
            aesthetics into something functional, memorable, and refined.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="works-content">
        {/* LEFT – STICKY NUMBER */}
        <div className="works-left">
          <h3 className="works-number">
            {PROJECTS[activeIndex].id}
          </h3>
        </div>

        {/* RIGHT – PROJECTS */}
        <div className="works-right">
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="work-item"
              ref={(el) => (sectionsRef.current[index] = el)}
            >
              {/* TEXT ABOVE IMAGE */}
              <div className="work-text">
                <h4>{project.title}</h4>
                <span>{project.subtitle}</span>
                <p>{project.description}</p>
              </div>

              {/* IMAGE */}
              <div className="work-image">
                <img src={project.image} alt={project.title} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
