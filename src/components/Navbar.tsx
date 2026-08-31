import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") { window.location.href = `/#${id}`; return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "About",    id: "about"    },
    { name: "Skills",   id: "skills"   },
    { name: "Projects", id: "projects" },
    { name: "Contact",  id: "contact"  },
  ];

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(245,240,232,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => location.pathname !== '/' ? (window.location.href = '/') : window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-start"
        >
          <span className="font-serif font-bold text-lg leading-none" style={{ color: 'var(--text-primary)' }}>
            Sama Albaghdady
          </span>
          <span className="font-mono text-[10px] tracking-widest uppercase mt-0.5" style={{ color: 'var(--olive)' }}>
            Software Developer
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="relative text-sm font-semibold tracking-wide transition-colors group"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="group-hover:text-[var(--olive-dark)] transition-colors">{link.name}</span>
              <span
                className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300"
                style={{ background: 'var(--olive)' }}
              />
            </button>
          ))}

          <Link
            to="/cv"
            className="btn-olive text-xs"
          >
            <FileText size={14} />
            View CV
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <Link to="/cv" className="badge-olive">CV</Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border transition-colors"
            style={{ borderColor: 'var(--border-soft)', color: 'var(--text-primary)' }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="md:hidden border-t px-6 py-6 space-y-1"
          style={{ background: 'var(--bg-cream)', borderColor: 'var(--border-soft)' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-warm)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t" style={{ borderColor: 'var(--border-soft)' }}>
            <Link
              to="/cv"
              onClick={() => setIsOpen(false)}
              className="btn-olive w-full justify-center"
            >
              <FileText size={15} /> View & Download CV
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
