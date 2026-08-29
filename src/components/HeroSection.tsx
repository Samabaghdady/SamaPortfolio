import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, GraduationCap, FileText, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const techBadges = ["React", "Spring Boot", "C++", "Java", "Python", "Node.js", "MongoDB", "OpenCV", "Figma"];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Overlay & Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070d19]/80 to-[#070d19] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-teal-500/30 text-teal-300 text-sm font-mono backdrop-blur-md shadow-lg shadow-teal-500/10">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
            <GraduationCap size={16} className="text-teal-400" />
            <span>Senior CS Student @ Misr International University (MIU)</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Hi, I'm <span className="gradient-text">Sama Albaghdady</span>
            <br />
            <span className="text-slate-300 font-bold text-4xl sm:text-5xl md:text-6xl block mt-2">
              Software Developer & Computer Scientist
            </span>
          </h1>
          
          {/* Tagline / Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Computer Science senior student specializing in full-stack web applications, desktop software systems, AI & computer vision, and user interface design.
          </p>

          {/* Quick Skill Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 pb-4">
            {techBadges.map((badge) => (
              <span 
                key={badge}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
              >
                #{badge}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold px-7 py-3.5 rounded-full text-base transition-all duration-300 shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-1 group"
            >
              <span>Explore My Work</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/cv"
              className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-teal-500/50 text-slate-200 hover:text-teal-300 font-semibold px-6 py-3.5 rounded-full text-base transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <FileText size={18} className="text-teal-400" />
              <span>View CV</span>
            </Link>

            <a
              href="https://www.linkedin.com/in/sama-albaghdady-19b75531a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/50 hover:bg-slate-800 transition-all duration-300 shadow-lg"
              title="LinkedIn Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://github.com/Samabaghdady"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/50 hover:bg-slate-800 transition-all duration-300 shadow-lg"
              title="GitHub Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="pt-14">
            <button
              onClick={scrollToAbout}
              className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors group"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-teal-400">Scroll to About</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-teal-400 group-hover:border-teal-500/40"
              >
                <ArrowDown size={18} />
              </motion.div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
