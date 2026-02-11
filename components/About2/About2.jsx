"use client";

import "./About2.css";

export default function About2() {
  return (
    <section id="about" className="about">

      {/* ───────── TOP SECTION ───────── */}
      <div className="about-top">

        {/* LEFT BIG TITLE */}
        <div className="about-heading">
          <h1>
            DEVELOPER<br />
            AI<br />
            CREATOR/
          </h1>
        </div>

        {/* RIGHT SKILLS */}
        <div className="about-skills">
          <h3 className="skills-title">Skills</h3>

          <div className="skills-columns">

            <ul>
              <li className="skill-item">Python</li>
              <li className="skill-item">SQL</li>
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">TypeScript</li>
              <li className="skill-item">Git</li>
              <li className="skill-item">Docker</li>
              <li className="skill-item">Linux</li>
            </ul>

            <ul>
              <li className="skill-item">React</li>
              <li className="skill-item">Next.js</li>
              <li className="skill-item">Node.js</li>
              <li className="skill-item">Express.js</li>
              <li className="skill-item">Tailwind CSS</li>
              <li className="skill-item">LangChain</li>
              <li className="skill-item">Ollama</li>
            </ul>

            <ul>
              <li className="skill-item">DSA</li>
              <li className="skill-item">RAG Systems</li>
              <li className="skill-item">Redis</li>
              <li className="skill-item">Operating Systems</li>
              <li className="skill-item">System Design</li>
            </ul>

          </div>
        </div>
      </div>

      {/* ───────── BOTTOM SECTION ───────── */}
      <div className="about-bottom">

        {/* IMAGE */}
        <div className="about-image">
          <img src="/hero.png" alt="About me" />
        </div>

        {/* TEXT */}
        <div className="about-text">

          <p className="about-highlight">
             I'm a software engineer passionate about building reliable systems and
            transforming ideas into scalable, real-world solutions.
          </p>

          <div className="about-description">
            <span>(ABOUT ME)</span>

            <p>
            My journey in tech started with a curiosity for how systems work under
            the hood, which grew into a strong interest in solving real-world
            problems through clean architecture and automation.
              <br /><br />
              My journey in tech began with a curiosity for solving real-world
              problems through innovative solutions, which evolved into a love
              for crafting user-centric digital experiences.
              <br /><br />
              Beyond coding, I enjoy working in collaborative environments and
              tackling complex problems by designing thoughtful, efficient solutions.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
