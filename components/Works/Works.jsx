"use client";

import { useEffect, useRef, useState } from "react";
import "./Works.css";

const PROJECTS = [
  {
    id: "01",
    title: "Portfolio Website",
    subtitle: "Design & Development",
    description:
      "A thoughtfully crafted personal portfolio focused on typography, motion, and smooth scrolling interactions.",
    image: "/ishanproject_1.png",
    github: "https://github.com/ishaaanfarooq/Portfolio-ishaN.git",
  },
  {
    id: "02",
    title: "Equity Research Analyst",
    subtitle: "AI-Powered Market Analysis",
    description:
      "An intelligent research system enabling semantic search, real-time insights, and automated financial content analysis.",
    image: "/ishanproject-2.png",
    github: "https://github.com/ishaaanfarooq/Equity-Research-Analyst",
  },
  {
    id: "03",
    title: "Multilingual RAG-Based AI Assistant",
    subtitle: "Production-Ready Knowledge Retrieval System",
    description:
      "A scalable, multilingual Retrieval-Augmented Generation system designed for real-world deployment, featuring hybrid retrieval, multi-agent verification, automatic language detection, and offline LLM inference for accurate, context-aware responses across multiple websites.",
    image: "/ishanProj-3.png",
    github: "https://github.com/ishaaanfarooq/College-Website-RAG-Chatbot",
  },
];

export default function Works() {
  const sectionsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="works" className="works">
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
