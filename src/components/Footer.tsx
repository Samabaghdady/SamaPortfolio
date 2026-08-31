import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t py-10" style={{ background: 'var(--bg-dark)', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <span className="font-serif font-bold text-lg text-white">Sama Albaghdady</span>
            <p className="text-[11px] font-mono tracking-widest uppercase mt-0.5" style={{ color: 'var(--beige)' }}>
              CS Senior · MIU · Cairo, Egypt
            </p>
          </div>

          {/* Social + Back-to-top */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/sama-albaghdady-19b75531a"
              target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all"
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
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
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
              title="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all"
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-center" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Sama Albaghdady. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
