import { motion } from "framer-motion";
import { Code2, Palette, Zap, MapPin, CheckCircle2, Phone, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code2 size={26} style={{ color: 'var(--olive)' }} />,
      title: "Full-Stack & Desktop Dev",
      description: "Crafting performant web apps in React, Node.js, Spring Boot & EJS, plus desktop applications in C++ (wxWidgets) and Python (Tkinter & OpenCV).",
    },
    {
      icon: <Palette size={26} style={{ color: 'var(--olive-light)' }} />,
      title: "UI/UX & Creative Tools",
      description: "Designing user-centered wireframes and interface visuals using Figma, Adobe Photoshop, Adobe Illustrator, and modern CSS design systems.",
    },
    {
      icon: <Zap size={26} style={{ color: 'var(--beige-dark)' }} />,
      title: "Algorithms & Engineering",
      description: "Strong theoretical and practical foundation in C++, Java, Data Structures, Algorithms, OOP, and MVC Architecture patterns.",
    },
  ];

  const contactDetails = [
    { label: "Phone", value: "(+20) 01112242740", href: "tel:+2001112242740", icon: <Phone size={16} style={{ color: 'var(--olive)' }} /> },
    { label: "Email", value: "Samaalbaghdady90@gmail.com", href: "mailto:Samaalbaghdady90@gmail.com", icon: <Mail size={16} style={{ color: 'var(--olive)' }} /> },
    {
      label: "LinkedIn",
      value: "sama-albaghdady-19b75531a",
      href: "https://www.linkedin.com/in/sama-albaghdady-19b75531a",
      external: true,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--olive)' }}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    { label: "Location", value: "Cairo Elshrouk, Egypt", icon: <MapPin size={16} style={{ color: 'var(--olive)' }} /> },
  ];

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "12+", label: "Technologies" },
    { value: "3+", label: "Years Coding" },
  ];

  const skills = [
    "Full-Stack Web Architecture (React, Spring Boot, Node)",
    "C++ & Java Object-Oriented Engineering",
    "Computer Vision (OpenCV & Face Recognition)",
    "Database Management (MongoDB & MySQL)",
    "UI/UX Design in Figma & Adobe Suite",
    "Languages: Arabic (Native), English (Fluent)",
  ];

  return (
    <section id="about" className="py-28" style={{ background: 'var(--bg-cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* ── Section Header ── */}
        <motion.div {...fadeUp()} className="flex items-center gap-5 mb-16">
          <div>
            <span className="badge-olive mb-2 inline-block">About Me</span>
            <h2 className="display-giant text-[clamp(2rem,5vw,4rem)] mt-1" style={{ color: 'var(--text-primary)' }}>
              DRIVEN BY CODE &amp;<br />
              <span className="gradient-olive">CREATIVE ENGINEERING</span>
            </h2>
          </div>
        </motion.div>

        {/* ── Stats Row ── */}
        <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="card-warm rounded-2xl p-5 text-center border" style={{ borderColor: 'var(--border-soft)' }}>
              <p className="font-serif font-black text-4xl" style={{ color: 'var(--olive)' }}>{s.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Bio ── full width */}
        <div className="mb-16">
          <motion.div {...fadeUp(0.15)} className="space-y-6">
            <div className="card-light rounded-2xl p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="font-serif font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
                  Hello! I'm Sama Albaghdady
                </h3>
                <Link to="/cv" className="btn-olive text-xs">
                  <FileText size={13} /> View Full CV
                </Link>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Motivated and detail-oriented <strong style={{ color: 'var(--olive-dark)' }}>Computer Science senior student at Misr International University (MIU)</strong> with a strong passion for software development, full-stack web engineering, desktop GUI systems, and creative problem-solving.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Experienced in <strong style={{ color: 'var(--text-primary)' }}>C++, Java, Python, JavaScript, React, Spring Boot, Node.js, and MySQL/MongoDB</strong>. Continuously improving my software engineering knowledge through hands-on project implementation.
              </p>

              {/* Skills checklist */}
              <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                {skills.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="card-light flex items-center gap-3 px-4 py-3 rounded-xl"
                >
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ background: 'var(--bg-warm)', border: '1px solid var(--border-soft)' }}>
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase tracking-wider font-mono block" style={{ color: 'var(--text-muted)' }}>{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-xs font-bold truncate block transition-colors hover:underline"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-xs font-bold truncate block" style={{ color: 'var(--text-primary)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Highlight Cards ── */}
        <motion.div {...fadeUp(0.25)} className="grid md:grid-cols-3 gap-6">
          {highlights.map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp(0.1 * i)}
              className="card-light rounded-2xl p-6 border"
              style={{ borderColor: 'var(--border-soft)' }}
            >
              <div className="mb-4 p-3 rounded-xl w-fit" style={{ background: 'var(--bg-warm)' }}>
                {card.icon}
              </div>
              <h3 className="font-serif font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Decorative quote bar ── */}
        <motion.div {...fadeUp(0.3)} className="mt-16 rounded-2xl p-8 sm:p-12 relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10" style={{ background: 'var(--olive-light)', filter: 'blur(40px)' }} />
          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl leading-relaxed text-white max-w-3xl">
            "I design and build digital experiences that are not only beautiful but also{" "}
            <span style={{ color: 'var(--beige-light)' }}>functional, intuitive, and impactful.</span>"
          </p>
          <p className="mt-5 text-sm font-semibold" style={{ color: 'var(--beige)' }}>— Sama Albaghdady</p>
        </motion.div>
      </div>
    </section>
  );
}
