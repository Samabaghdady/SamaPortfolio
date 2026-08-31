import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Calendar, ExternalLink, Check, Cpu, UserCheck, Eye, X, } from "lucide-react";
import { projectsData } from "../data/projectsData";
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageModal, setActiveImageModal] = useState<{ src: string; title: string } | null>(null);

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "AI / Desktop"];

  const filteredProjects = projectsData.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-28" style={{ background: 'var(--bg-cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="badge-olive mb-2 inline-block">Portfolio Showcase</span>
            <h2 className="display-giant text-[clamp(2rem,5vw,4rem)] mt-1" style={{ color: 'var(--text-primary)' }}>
              SELECTED<br />
              <span className="gradient-olive">PROJECTS</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed pb-1" style={{ color: 'var(--text-muted)' }}>
            A curated selection of recent work showcasing design, development, and problem-solving.
          </p>
        </motion.div>

        {/* ── Horizontal rule with category filters ── */}
        <motion.div {...fadeUp(0.08)} className="flex flex-wrap items-center gap-2 pb-10 border-b" style={{ borderColor: 'var(--border-soft)' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="text-xs font-semibold px-4 py-2 rounded-full border transition-all"
              style={
                selectedCategory === cat
                  ? { background: 'var(--olive)', color: '#fff', borderColor: 'var(--olive)' }
                  : { background: 'transparent', color: 'var(--text-secondary)', borderColor: 'var(--border-soft)' }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Project List ── */}
        <div className="mt-10 space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 28 }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                className="card-light rounded-2xl overflow-hidden border"
                style={{ borderColor: 'var(--border-soft)' }}
              >
                <div className="grid lg:grid-cols-12">
                  {/* ── Left: Project Info ── */}
                  <div
                    className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between border-b lg:border-b-0 lg:border-r"
                    style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-warm)' }}
                  >
                    <div className="space-y-4">
                      {/* Number + Category row */}
                      <div className="flex items-center gap-3 text-xs font-mono">
                        <span
                          className="font-serif font-black text-4xl leading-none"
                          style={{ color: 'var(--beige)' }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <span className="badge-olive">{project.category}</span>
                          <span
                            className="flex items-center gap-1 mt-1 text-[10px] uppercase tracking-wider"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            <Calendar size={10} /> {project.date}
                          </span>
                        </div>
                      </div>

                      {/* Screenshot (if available) */}
                      {(project.id === "mello-wellness" || project.id === "ecommerce-store") && (
                        <div
                          onClick={() =>
                            setActiveImageModal({
                              src: project.id === "mello-wellness" ? "/mello-bg.jpg" : "/ecommerce-store.png",
                              title: project.id === "mello-wellness" ? "Mello — Mood Valley Interface" : "MyStore — E-Commerce Interface",
                            })
                          }
                          className="relative rounded-xl overflow-hidden border cursor-pointer group aspect-video"
                          style={{ borderColor: 'var(--border-soft)' }}
                        >
                          <img
                            src={project.id === "mello-wellness" ? "/mello-bg.jpg" : "/ecommerce-store.png"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(42,39,33,0.45)' }}>
                            <span className="flex items-center gap-1.5 text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-full">
                              <Eye size={13} /> View UI
                            </span>
                          </div>
                        </div>
                      )}

                      <h3 className="font-serif font-bold text-xl" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>

                      {project.role && (
                        <div className="rounded-xl p-3.5 text-xs space-y-1 border" style={{ background: 'rgba(107,122,62,0.08)', borderColor: 'rgba(107,122,62,0.2)' }}>
                          <span className="font-bold flex items-center gap-1.5 font-mono uppercase tracking-wide text-[10px]" style={{ color: 'var(--olive-dark)' }}>
                            <UserCheck size={12} /> My Key Role
                          </span>
                          <p style={{ color: 'var(--text-secondary)' }}>{project.role}</p>
                        </div>
                      )}

                      {project.architecture && (
                        <div className="rounded-xl p-3.5 text-xs space-y-1 border" style={{ background: 'rgba(168,152,124,0.1)', borderColor: 'rgba(168,152,124,0.25)' }}>
                          <span className="font-bold flex items-center gap-1.5 font-mono uppercase tracking-wide text-[10px]" style={{ color: 'var(--beige-dark)' }}>
                            <Cpu size={12} /> Architecture
                          </span>
                          <p style={{ color: 'var(--text-secondary)' }}>{project.architecture}</p>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-5 mt-2 border-t" style={{ borderColor: 'var(--border-soft)' }}>
                      <span className="text-[10px] font-mono uppercase tracking-widest block mb-2.5" style={{ color: 'var(--text-muted)' }}>
                        Technologies Used
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="tech-pill">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── Right: Features + Actions ── */}
                  <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between bg-white space-y-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: 'var(--olive)' }}>
                        <span className="w-4 h-px inline-block" style={{ background: 'var(--olive)' }} />
                        Key Features &amp; Functionality
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {project.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                            <span
                              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ background: 'rgba(107,122,62,0.12)', border: '1px solid rgba(107,122,62,0.3)' }}
                            >
                              <Check size={9} style={{ color: 'var(--olive)' }} />
                            </span>
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t space-y-3" style={{ borderColor: 'var(--border-soft)' }}>
                      <div className="flex flex-wrap items-center gap-2.5">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank" rel="noopener noreferrer"
                            className="btn-ghost text-xs"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--olive)' }}>
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            View Code on GitHub
                          </a>
                        )}
                        {project.driveUrl && (
                          <a
                            href={project.driveUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="btn-olive text-xs"
                          >
                            <Play size={12} /> Watch Demo
                          </a>
                        )}
                      </div>

                      {/* Video Demo Pills */}
                      {project.demos && project.demos.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-widest block" style={{ color: 'var(--text-muted)' }}>
                            Video Walkthroughs
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.demos.map((demo) => (
                              <a
                                key={demo.name}
                                href={demo.link}
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all"
                                style={{ borderColor: 'var(--border-soft)', color: 'var(--text-secondary)' }}
                              >
                                <Play size={10} style={{ color: 'var(--olive)' }} />
                                {demo.name}
                                <ExternalLink size={9} style={{ opacity: 0.5 }} />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {activeImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(26,24,20,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl p-4"
            style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-soft)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b" style={{ borderColor: 'var(--border-soft)' }}>
              <h4 className="text-sm font-serif font-bold" style={{ color: 'var(--text-primary)' }}>{activeImageModal.title}</h4>
              <button
                onClick={() => setActiveImageModal(null)}
                className="p-1.5 rounded-lg transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                <X size={18} />
              </button>
            </div>
            <img
              src={activeImageModal.src}
              alt={activeImageModal.title}
              className="w-full h-auto rounded-xl max-h-[75vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
