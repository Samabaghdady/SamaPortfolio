import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Globe, Database, Brain, GitBranch, Search, Sparkles } from "lucide-react";
import { skillCategoriesData, type SkillCategory } from "../data/skillsData";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe": return <Globe size={24} className="text-teal-400" />;
      case "Code2": return <Code2 size={24} className="text-cyan-400" />;
      case "Database": return <Database size={24} className="text-purple-400" />;
      case "Brain": return <Brain size={24} className="text-amber-400" />;
      case "GitBranch": return <GitBranch size={24} className="text-emerald-400" />;
      default: return <Sparkles size={24} className="text-teal-400" />;
    }
  };

  const tabs = [
    { id: "all", label: "All Skills" },
    ...skillCategoriesData.map(c => ({ id: c.id, label: c.title }))
  ];

  const filteredCategories = skillCategoriesData.map(cat => {
    if (activeTab !== "all" && cat.id !== activeTab) {
      return null;
    }
    
    if (!searchQuery.trim()) return cat;

    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length === 0 && !cat.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }

    return {
      ...cat,
      skills: matchingSkills.length > 0 ? matchingSkills : cat.skills
    };
  }).filter(Boolean) as SkillCategory[];

  return (
    <section id="skills" className="py-24 relative bg-[#091122]/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-400 font-mono text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 inline-block mb-3"
          >
            Technical Proficiency
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my technical abilities, software engineering concepts, web tools, and university core competencies.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800/80 max-w-full overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-teal-500 text-slate-950 font-semibold shadow-md shadow-teal-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g., C++, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/60 transition-all"
            />
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
                      {getIcon(category.iconName)}
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded-full border border-slate-800">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5">{category.title}</h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{category.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 font-medium hover:border-teal-500/40 hover:text-teal-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        {skill.name}
                        {skill.level && (
                          <span className="text-[10px] text-slate-400 font-normal">
                            ({skill.level})
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            No matching skills found for "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
}
