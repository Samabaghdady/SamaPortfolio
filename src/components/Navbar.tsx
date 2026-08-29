import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, Terminal } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a1120]/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-xl shadow-black/20"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => {
            if (location.pathname !== '/') {
              window.location.href = '/';
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="group flex items-center gap-2 text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 group-hover:border-teal-400 group-hover:bg-teal-500/20 transition-all duration-300">
            <Terminal size={20} />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-sans">
              Sama Albaghdady
            </span>
            <span className="block text-[11px] font-mono text-teal-400/90 font-medium tracking-wide">
              CS Senior @ MIU
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-300 hover:text-teal-400 font-medium text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
            <Link
              to="/cv"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-0.5"
            >
              <FileText size={16} />
              <span>View CV</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/cv"
            className="inline-flex items-center gap-1.5 bg-teal-500/20 text-teal-300 border border-teal-500/40 px-3 py-1.5 rounded-full text-xs font-semibold"
          >
            <FileText size={14} />
            <span>CV</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/60 border border-slate-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1120]/95 backdrop-blur-2xl border-b border-slate-800 px-4 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-slate-200 hover:text-teal-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-800/50 transition-colors text-base"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800">
            <Link
              to="/cv"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-semibold py-3 rounded-xl shadow-lg"
            >
              <FileText size={18} />
              <span>View & Download CV</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
