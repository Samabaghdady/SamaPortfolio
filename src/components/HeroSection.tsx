import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, FileText } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const techBadges = ["C++", "Java", "Python", "Node.js", "MongoDB", "OpenCV", "Figma", "React", "Spring Boot"];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'var(--bg-cream)' }}
    >
      {/* ── Sidebar vertical labels ── */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6">
        <div className="sidebar-text">UI / UX Design</div>
        <div className="w-px h-16" style={{ background: 'var(--border-soft)' }} />
        <div className="sidebar-text">Web Development</div>
        <div className="w-px h-16" style={{ background: 'var(--border-soft)' }} />
        <div className="sidebar-text">Software Engineering</div>
      </div>

      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6">
        <div className="sidebar-text">Branding</div>
        <div className="w-px h-16" style={{ background: 'var(--border-soft)' }} />
        <div className="sidebar-text">Digital Experiences</div>
      </div>

      {/* ── Top bar ── */}
      <div className="max-w-7xl mx-auto px-8 lg:px-20 pt-36 pb-0 flex items-center justify-between text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
        <span>Software Developer</span>
        <div className="flex items-center gap-2" style={{ color: 'var(--olive)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse inline-block" />
          <span>Available for Opportunities</span>
        </div>
      </div>

      {/* ── Giant PORTFOLIO headline ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="display-giant text-[clamp(4rem,14vw,13rem)] text-center leading-[0.85] pt-4 pb-0 select-none"
          style={{ color: 'var(--text-primary)' }}
        >
          PORTFOLIO
        </motion.div>

        {/* ── Profile photo circle + intro block ── */}
        <div className="grid lg:grid-cols-12 gap-6 items-end -mt-8 lg:-mt-16 relative z-10">
          {/* Left: Name + tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="lg:col-span-5 pb-8"
          >
            <span className="text-sm font-semibold tracking-wider uppercase mb-2 block" style={{ color: 'var(--text-muted)' }}>
              Hello, I'm
            </span>
            <h1 className="display-giant text-[clamp(2.6rem,6vw,5rem)]" style={{ color: 'var(--text-primary)' }}>
              SAMA<br />ALBAGHDADY
            </h1>
            <p className="mt-2 text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--olive)' }}>
              Software Developer &amp; Computer Scientist
            </p>

            <p className="mt-5 text-sm leading-relaxed max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              I craft modern, full-stack applications that combine elegant engineering with intuitive design — from web platforms to desktop systems and AI-powered tools.
            </p>

            {/* Signature-style divider */}
            <div className="mt-5 flex items-center gap-4">
              <span className="font-serif italic text-xl" style={{ color: 'var(--olive)' }}>Sama Albaghdady</span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-soft)' }} />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <button onClick={() => scrollTo("projects")} className="btn-olive">
                View Projects <ArrowRight size={14} />
              </button>
              <Link to="/cv" className="btn-ghost">
                <FileText size={14} /> CV
              </Link>
              {/* Social icons */}
              <a
                href="https://www.linkedin.com/in/sama-albaghdady-19b75531a"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all"
                style={{ borderColor: 'var(--border-soft)', color: 'var(--text-muted)' }}
                title="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://github.com/Samabaghdady"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all"
                style={{ borderColor: 'var(--border-soft)', color: 'var(--text-muted)' }}
                title="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Center: Profile photo with olive circle bg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="lg:col-span-4 flex justify-center items-end"
          >
            <div className="relative">
              {/* Big olive circle behind photo */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full"
                style={{ background: 'var(--olive-light)', opacity: 0.22, filter: 'blur(2px)' }}
              />
              <div
                className="relative w-52 h-64 sm:w-60 sm:h-72 rounded-3xl overflow-hidden border-4 shadow-2xl"
                style={{ borderColor: 'var(--beige-light)' }}
              >
                <img
                  src="/profile-photo.jpg"
                  alt="Sama Albaghdady"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/profile-photo.jpeg"; }}
                />
                {/* Name / title overlay at bottom */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.62) 0%, transparent 55%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <p className="text-white font-bold text-sm">Sama Albaghdady</p>
                  <p className="text-[10px] font-mono tracking-wide mt-0.5" style={{ color: 'var(--beige-light)' }}>CS Senior @ MIU</p>
                  <div className="mt-1.5 flex items-center justify-center gap-1.5 text-[10px] font-semibold" style={{ color: '#a8e6a0' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                    Open for Opportunities
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Tech cloud + scroll cue */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-3 flex flex-col justify-end pb-8 gap-5"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest block mb-3" style={{ color: 'var(--text-muted)' }}>
                Core Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((b) => (
                  <span key={b} className="tech-pill cursor-default transition-all">{b}</span>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollTo("about")}
              className="inline-flex flex-col items-center gap-1.5 self-start group"
              style={{ color: 'var(--text-muted)' }}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest group-hover:text-[var(--olive)] transition-colors">
                Scroll Down
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors group-hover:border-[var(--olive)]"
                style={{ borderColor: 'var(--border-soft)' }}
              >
                <ArrowDown size={14} style={{ color: 'var(--olive)' }} />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom divider line ── */}
      <div className="max-w-7xl mx-auto px-8 lg:px-20 mt-10">
        <div className="h-px" style={{ background: 'var(--border-soft)' }} />
      </div>
    </section>
  );
}
