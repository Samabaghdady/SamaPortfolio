import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Play, Calendar, ExternalLink, Sparkles, Check, ChevronDown, Plus, Cpu, UserCheck } from "lucide-react";
import { projectsData } from "../data/projectsData";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAddGuide, setShowAddGuide] = useState<boolean>(false);

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "AI / Machine Learning"];

  const filteredProjects = projectsData.filter(p => 
    selectedCategory === "All" ? true : p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-teal-400 font-mono text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 inline-block mb-3"
        >
          Portfolio Showcase
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Explore real-world full-stack web applications, software design projects, and video walkthroughs.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-teal-500 text-slate-950 font-bold shadow-lg shadow-teal-500/20"
                : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Showcase Cards */}
      <div className="space-y-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl border border-slate-800/80 overflow-hidden shadow-2xl hover:border-teal-500/30 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Left Column: Visual / Meta Overview */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#0c1629] to-slate-950 p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-semibold">
                        {project.category}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Calendar size={14} /> {project.date}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Role Contribution */}
                    {project.role && (
                      <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-xs text-teal-200 space-y-1">
                        <span className="font-bold flex items-center gap-1.5 text-teal-300 font-mono">
                          <UserCheck size={14} /> My Key Contribution & Role:
                        </span>
                        <p className="leading-relaxed">{project.role}</p>
                      </div>
                    )}

                    {/* Architecture Note */}
                    {project.architecture && (
                      <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 space-y-1">
                        <span className="font-bold flex items-center gap-1.5 text-purple-300 font-mono">
                          <Cpu size={14} /> Application Architecture:
                        </span>
                        <p className="leading-relaxed">{project.architecture}</p>
                      </div>
                    )}
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/90 text-teal-300 border border-slate-700/70 text-xs font-mono font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Features & Video Demos */}
                <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between space-y-8 bg-[#0b1326]/40">
                  {/* Features List */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400 mb-4 flex items-center gap-2">
                      <Sparkles size={16} /> Key Features & Functionality
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-slate-200 text-xs sm:text-sm">
                          <span className="w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                            <Check size={12} />
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons & Video Demos */}
                  <div className="pt-6 border-t border-slate-800/80 space-y-4">
                    {/* Repository & External Links */}
                    <div className="flex flex-wrap items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-teal-500/50 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                          <span>View Code on GitHub</span>
                        </a>
                      )}
                      {project.driveUrl && (
                        <a
                          href={project.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-lg shadow-teal-500/20"
                        >
                          <Play size={14} />
                          <span>Watch Video Demo (Google Drive)</span>
                        </a>
                      )}
                    </div>

                    {/* Video Demos Pill List */}
                    {project.demos && project.demos.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                          Video Walkthrough Demos
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.demos.map((demo) => (
                            <a
                              key={demo.name}
                              href={demo.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-slate-900/90 hover:bg-teal-500/10 text-slate-300 hover:text-teal-300 border border-slate-800 hover:border-teal-500/40 px-3 py-1.5 rounded-xl text-xs font-medium transition-all group"
                            >
                              <Play size={12} className="text-teal-400 group-hover:scale-110 transition-transform" />
                              <span>{demo.name}</span>
                              <ExternalLink size={10} className="opacity-50 group-hover:opacity-100" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Guide Box on How to Add New Projects */}
      <div className="mt-16">
        <div className="glass-card rounded-2xl border border-slate-800/80 p-6">
          <button
            onClick={() => setShowAddGuide(!showAddGuide)}
            className="w-full flex items-center justify-between text-left focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Plus size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">How to add new projects to this portfolio?</h4>
                <p className="text-xs text-slate-400">Simple 1-step process to update your projects data anytime</p>
              </div>
            </div>
            <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${showAddGuide ? 'rotate-180' : ''}`} />
          </button>

          {showAddGuide && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-slate-800 text-xs sm:text-sm text-slate-300 space-y-3 font-mono bg-slate-950/80 p-4 rounded-xl border border-slate-800"
            >
              <p className="text-teal-300 font-semibold font-sans">
                Open <code className="bg-slate-900 text-teal-400 px-2 py-1 rounded">src/data/projectsData.ts</code> and add a new object to the array:
              </p>
              <pre className="text-slate-300 text-xs overflow-x-auto p-3 bg-slate-900 rounded-lg border border-slate-800">
{`{
  id: "mello-wellness",
  title: "Mello – Mental Wellness Platform",
  category: "Full-Stack",
  date: "2024",
  description: "Built a full-stack mental wellness platform...",
  role: "Developed the Mood Tracking module...",
  tech: ["React", "Spring Boot", "Java", "MongoDB", "Spring Security", "Chart.js", "Three.js"],
  features: ["Mood Logging", "Trend Visualization", "Analytics Dashboards"],
  github: "https://github.com/farahkhaledl/mello-Software-design-project",
  driveUrl: "https://drive.google.com/file/d/19EWLWsEwNuWu0MR2VLc1YN9hD8sYlSpm/view?usp=sharing"
}`}
              </pre>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
