import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategoriesData, type SkillCategory } from "../data/skillsData";
import { Search } from "lucide-react";


const categoryColors: Record<string, string> = {
  "web-dev":      "var(--olive)",
  "languages":    "var(--olive-light)",
  "databases-ai": "var(--beige-dark)",
  "cs-core":      "var(--olive-dark)",
  "tools-design": "var(--beige)",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function SkillsSection() {
  const [activeTab, setActiveTab]     = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", label: "All Skills" },
    ...skillCategoriesData.map((c) => ({ id: c.id, label: c.title })),
  ];

  const filtered = skillCategoriesData
    .map((cat) => {
      if (activeTab !== "all" && cat.id !== activeTab) return null;
      if (!searchQuery.trim()) return cat;
      const matchingSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchingSkills.length === 0 && !cat.title.toLowerCase().includes(searchQuery.toLowerCase())) return null;
      return { ...cat, skills: matchingSkills.length > 0 ? matchingSkills : cat.skills };
    })
    .filter(Boolean) as SkillCategory[];

  return (
    <section id="skills" className="py-28" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="badge-olive mb-2 inline-block">Technical Proficiency</span>
            <h2 className="display-giant text-[clamp(2rem,5vw,4rem)] mt-1" style={{ color: 'var(--text-primary)' }}>
              SKILLS &amp;<br />
              <span className="gradient-olive">EXPERTISE</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed pb-1" style={{ color: 'var(--text-muted)' }}>
            A comprehensive overview of my technical abilities spanning web, desktop, AI, and software engineering.
          </p>
        </motion.div>

        {/* ── Filter + Search bar ── */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200"
                style={
                  activeTab === tab.id
                    ? { background: 'var(--olive)', color: '#fff', borderColor: 'var(--olive)' }
                    : { background: 'transparent', color: 'var(--text-secondary)', borderColor: 'var(--border-soft)' }
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-60">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search skill…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border focus:outline-none transition-all"
              style={{
                background: 'var(--bg-cream)',
                borderColor: 'var(--border-soft)',
                color: 'var(--text-primary)',
              }}
            />
          </div>
        </motion.div>

        {/* ── Skill Category Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((category, index) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: 0.04 * index }}
                className="card-light rounded-2xl p-6 border"
                style={{ borderColor: 'var(--border-soft)' }}
              >
                {/* Category header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-serif font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                      {category.title}
                    </h3>
                    <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {category.skills.length} skills
                    </p>
                  </div>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: categoryColors[category.id] ?? 'var(--olive)' }}
                  />
                </div>

                {/* Skill pills — names only */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all"
                      style={{
                        background: 'var(--bg-warm)',
                        borderColor: 'var(--border-soft)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: categoryColors[category.id] ?? 'var(--olive)' }}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-14 text-sm" style={{ color: 'var(--text-muted)' }}>
            No skills matching "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
}
