import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code2, FolderGit2, Mail, FileText, Sparkles, X, Terminal, Palette, ArrowRight } from "lucide-react";
import { projectsData } from "../data/projectsData";
import { skillCategoriesData } from "../data/skillsData";
import { playSound } from "../lib/audioUtils";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled: boolean;
  onSelectTheme?: (theme: string) => void;
}

export default function CommandPalette({ isOpen, onClose, soundEnabled, onSelectTheme }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          playSound("toggle", soundEnabled);
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, soundEnabled]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    playSound("click", soundEnabled);
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const allSkills = skillCategoriesData.flatMap(c => c.skills);

  const matchedProjects = projectsData.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tech.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const matchedSkills = allSkills.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-[#0c1427] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        >
          {/* Header Input */}
          <div className="relative flex items-center border-b border-slate-800 px-4 py-3">
            <Search className="text-teal-400 mr-3" size={20} />
            <input
              type="text"
              autoFocus
              placeholder="Search projects, skills, commands or press ESC..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-slate-100 placeholder-slate-400 text-sm font-sans focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Actions & Search Results */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 font-sans text-xs sm:text-sm">
            {!query && (
              <>
                {/* Navigation Quick Shortcuts */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 px-2">
                    Quick Navigation
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { label: "About Me", id: "about", icon: <Sparkles size={14} className="text-teal-400" /> },
                      { label: "Skills", id: "skills", icon: <Code2 size={14} className="text-cyan-400" /> },
                      { label: "Projects", id: "projects", icon: <FolderGit2 size={14} className="text-purple-400" /> },
                      { label: "Contact", id: "contact", icon: <Mail size={14} className="text-emerald-400" /> },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => navigateTo(item.id)}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/40 hover:bg-slate-800 text-slate-200 transition-all text-left"
                      >
                        {item.icon}
                        <span className="font-semibold truncate">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Theme Palette Switcher Quick Actions */}
                {onSelectTheme && (
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 px-2 flex items-center gap-1.5">
                      <Palette size={13} className="text-teal-400" /> Theme Accent Presets
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { name: "Teal Matrix", id: "teal", color: "bg-teal-400" },
                        { name: "Violet Glow", id: "violet", color: "bg-purple-400" },
                        { name: "Emerald Cyber", id: "emerald", color: "bg-emerald-400" },
                        { name: "Cyber Sunset", id: "gold", color: "bg-amber-400" },
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => {
                            onSelectTheme(t.id);
                            playSound("toggle", soundEnabled);
                          }}
                          className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono"
                        >
                          <span className={`w-3 h-3 rounded-full ${t.color}`} />
                          <span>{t.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Matched Projects */}
            {matchedProjects.length > 0 && (
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 px-2">
                  Matching Projects ({matchedProjects.length})
                </span>
                <div className="space-y-1.5">
                  {matchedProjects.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => navigateTo("projects")}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/40 hover:bg-slate-800/80 text-left transition-all group"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <FolderGit2 size={16} className="text-teal-400 shrink-0" />
                        <span className="font-medium text-slate-200 truncate">{p.title}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded-full border border-teal-500/20">
                          {p.category}
                        </span>
                        <ArrowRight size={14} className="text-slate-500 group-hover:text-teal-400 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Matched Skills */}
            {matchedSkills.length > 0 && (
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 px-2">
                  Matching Skills ({matchedSkills.length})
                </span>
                <div className="flex flex-wrap gap-1.5 px-2">
                  {matchedSkills.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => navigateTo("skills")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 hover:border-teal-500/40 hover:text-teal-300 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="border-t border-slate-800/80 px-4 py-2 bg-slate-950/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Navigation: Press ESC to exit</span>
            <span className="flex items-center gap-1">
              <Terminal size={12} className="text-teal-400" /> Interactive Command Palette
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
