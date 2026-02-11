"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
  gsap.fromTo(
    panelsRef.current,
    { y: 18, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    }
  );
}, []);

  return (
    <section id="services" ref={sectionRef} className="services">
      <div className="services-layout">
        {/* LEFT */}
        <div className="services-header" ref={headerRef}>
          <h2>WHAT I DO /</h2>
        </div>

        {/* RIGHT */}
        <div className="services-panels">
          {[
            {
              number: "(01)",
              title: "AI Systems & Backend",
              text:
                "I build reliable backend systems and AI-powered workflows that go beyond demos. From APIs to agent pipelines, I focus on correctness, scalability, and real-world reliability.",
              list: [
                "Python, Node.js, Express.js",
                "REST APIs, Background Workers",
                "PostgreSQL, Redis, Docker",
              ],
            },
            {
              number: "(02)",
              title: "LLMs & Agent Workflows",
              text:
                "I design and implement LLM-based systems that reason, retrieve, and act. My work focuses on structured outputs, tool usage, and offline or privacy-first deployments.",
              list: [
                "RAG, LangChain, Tool Calling",
                "Ollama, Offline LLM Inference",
                "Vector DBs, ChromaDB",
              ],
            },
            {
              number: "(03)",
              title: "Full-Stack & Systems Thinking",
              text:
                "I enjoy owning systems end-to-end, from user-facing interfaces to backend logic. I apply core CS fundamentals to build software that is maintainable, observable, and resilient.",
              list: [
                "Next.js, React, Tailwind CSS",
                "Event-Driven Architectures",
                "Git, Linux, System Design",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="service-panel"
              ref={(el) => (panelsRef.current[i] = el)}
            >
              <span className="service-number">{item.number}</span>

              <div className="service-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <ul>
                  {item.list.map((li, idx) => (
                    <li key={idx}>
                      <span>{String(idx + 1).padStart(2, "0")}</span>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
