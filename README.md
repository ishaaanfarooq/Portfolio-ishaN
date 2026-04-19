# Ishan Farooq - Software Engineer Portfolio

A premium, highly interactive personal portfolio built focusing on high-performance animations, fluid typography, and premium digital design. This project serves as an interactive showcase of my technical expertise in AI systems, full-stack architectures, and robust backend engineering.

## ✨ Key Features

- **Fluid Animations & Micro-Interactions**: Features a custom `framer-motion` jelly-cursor with dynamic `mix-blend-mode` background contrast, alongside cinematic GSAP timelines for entry sequences.
- **Dynamic Scroll Architectures**: Includes a highly polished CSS/GSAP overlapping card-stack pushback animation in the Services section, delivering deep 3D-like parallax layouts.
- **Modern Architecture**: Engineered on cutting-edge React 19 and Next.js 16.1, leveraging the modern App Router and Turbopack.
- **Serverless Communications**: Fully functioning contact form architecture powered by the `Resend` API handling server side mail dispatches.
- **Premium Responsiveness**: Rigorously optimized CSS styling ensuring pristine layout shifts, aspect ratio locks, and animation transitions across all mobile and touch devices.

## 🛠️ Tech Stack

* **Core**: Next.js & React
* **Styling**: Vanilla CSS, Flex/Grid layouts, custom media queries
* **Animations**: GSAP (ScrollTrigger & core engine), Framer Motion
* **Integrations**: Resend (Serverless Emailing)

## 💻 Getting Started Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/ishaaanfarooq/Portfolio-ishaN.git
   cd Portfolio-ishaN
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file at the root of the project to enable the contact form functionality:
   ```env
   RESEND_API_KEY="your_resend_api_key_here"
   CONTACT_EMAIL="your_receiving_email_address_here"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to explore the portfolio interactively.
