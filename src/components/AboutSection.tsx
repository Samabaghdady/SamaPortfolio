import { motion } from "framer-motion";
import { Code2, Palette, Zap, MapPin, CheckCircle2, Phone, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code2 className="text-teal-400 mb-3" size={32} />,
      title: "Full-Stack & Desktop Dev",
      description: "Crafting performant web apps in React, Node.js, Spring Boot & EJS, plus desktop applications in C++ (wxWidgets) and Python (Tkinter & OpenCV)."
    },
    {
      icon: <Palette className="text-purple-400 mb-3" size={32} />,
      title: "UI/UX & Creative Tools",
      description: "Designing user-centered wireframes and interface visuals using Figma, Adobe Photoshop, Adobe Illustrator, and modern Tailwind CSS design systems."
    },
    {
      icon: <Zap className="text-amber-400 mb-3" size={32} />,
      title: "Algorithms & Engineering",
      description: "Strong theoretical and practical foundation in C++, Java, Data Structures, Algorithms, Object-Oriented Programming (OOP), and MVC Architecture."
    }
  ];

  const contactDetails = [
    { label: "Phone", value: "(+20) 01112242740", href: "tel:+2001112242740", icon: <Phone size={18} className="text-teal-400" /> },
    { label: "Email", value: "Samaalbaghdady90@gmail.com", href: "mailto:Samaalbaghdady90@gmail.com", icon: <Mail size={18} className="text-teal-400" /> },
    { 
      label: "LinkedIn", 
      value: "sama-albaghdady-19b75531a", 
      href: "https://www.linkedin.com/in/sama-albaghdady-19b75531a", 
      external: true, 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ) 
    },
    { label: "Location", value: "Cairo Elshrouk, Cairo, Egypt", icon: <MapPin size={18} className="text-teal-400" /> },
  ];

  return (
    <section id="about" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-teal-400 font-mono text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 inline-block mb-3"
        >
          About Me
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
        >
          Driven by Code & <span className="gradient-text">Creative Engineering</span>
        </motion.h2>
      </div>

      {/* Main Bio Card & Image */}
      <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
        {/* Left Side: Photo Frame */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 flex justify-center"
        >
          <div className="relative group">
            {/* Glowing Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 via-emerald-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
            
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl bg-[#0c1629] border-2 border-teal-500/40 overflow-hidden shadow-2xl flex flex-col justify-end p-4">
              <img 
                src="/profile-photo.jpg" 
                alt="Sama Albaghdady" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/profile-photo.jpeg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d19] via-transparent to-transparent opacity-90" />
              
              <div className="relative z-10 text-center bg-slate-950/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-extrabold text-white">Sama Albaghdady</h3>
                <p className="text-xs font-mono text-teal-400">CS Senior @ MIU</p>
                <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-emerald-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Open for Software Engineer Roles</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Bio & Details */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 space-y-6"
        >
          <div className="glass-card p-8 rounded-2xl border border-slate-800/80 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-2xl font-bold text-white">
                Hello! I'm Sama Albaghdady
              </h3>
              <Link
                to="/cv"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 px-4 py-2 rounded-full font-bold text-xs shadow-lg hover:from-teal-400 hover:to-emerald-400 transition-all"
              >
                <FileText size={14} />
                <span>View Full CV</span>
              </Link>
            </div>
            
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Motivated and detail-oriented <strong className="text-teal-300 font-semibold">Computer Science senior student at Misr International University (MIU)</strong> with a strong passion for software development, full-stack web engineering, desktop GUI systems, and creative problem-solving.
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              Experienced in <strong className="text-white">C++, Java, Python, JavaScript, React, Spring Boot, Node.js, and MySQL/MongoDB databases</strong>. Continuously improving my software engineering knowledge through hands-on project implementation—ranging from full-stack web platforms and face-recognition attendance systems to Java multi-role applications and C++ desktop software.
            </p>

            {/* Quick Skills Checklist */}
            <div className="pt-2 grid sm:grid-cols-2 gap-3">
              {[
                "Full-Stack Web Architecture (React, Spring Boot, Node)",
                "C++ & Java Object-Oriented Engineering",
                "Computer Vision (OpenCV & Face Recognition)",
                "Database Management (MongoDB & MySQL)",
                "UI/UX Design in Figma & Adobe Creative Suite",
                "Languages: Arabic (Native), English (Fluent)"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-medium">
                  <CheckCircle2 size={16} className="text-teal-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactDetails.map((item) => (
              <div key={item.label} className="glass-card p-4 rounded-xl border border-slate-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                  {item.icon}
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] text-slate-400 font-mono uppercase tracking-wider block">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-xs sm:text-sm font-bold text-white hover:text-teal-300 transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm font-bold text-white truncate block">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
          >
            <div>
              {card.icon}
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
