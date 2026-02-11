"use client";

import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="contact-frame">
      <div className="contact-section">

        <h1 className="contact-title">
          LET’S MAKE
          <br />
          IT HAPPEN
        </h1>

        <div className="contact-card">
          <h3>Say Hello</h3>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Drop a name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Wanna hear back? Add your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Say hello or drop a note..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p style={{ color: "#9effa1", textAlign: "center" }}>
                Message sent successfully!
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
