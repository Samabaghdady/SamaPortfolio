import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, Send, Phone, FileText } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "Samaalbaghdady90@gmail.com";
  const phone  = "(+20) 01112242740";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("01112242740");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} style={{ color: 'var(--olive)' }} />,
      title: "Email Address",
      value: email,
      action: handleCopyEmail,
      actionLabel: copiedEmail ? "Copied!" : "Copy Email",
      copied: copiedEmail,
      href: `mailto:${email}`,
    },
    {
      icon: <Phone size={24} style={{ color: 'var(--olive-light)' }} />,
      title: "Phone / Mobile",
      value: phone,
      action: handleCopyPhone,
      actionLabel: copiedPhone ? "Copied!" : "Copy Phone",
      copied: copiedPhone,
      href: `tel:+2001112242740`,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--beige-dark)' }}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
        </svg>
      ),
      title: "LinkedIn Profile",
      value: "linkedin.com/in/sama-albaghdady",
      href: "https://www.linkedin.com/in/sama-albaghdady-19b75531a",
      external: true,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--olive-dark)' }}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      title: "GitHub Profile",
      value: "github.com/Samabaghdady",
      href: "https://github.com/Samabaghdady",
      external: true,
    },
    {
      icon: <MapPin size={24} style={{ color: 'var(--beige-dark)' }} />,
      title: "Location",
      value: "Cairo Elshrouk, Egypt",
      sub: "Misr International University (MIU)",
    },
  ];

  return (
    <section id="contact" className="py-28" style={{ background: 'var(--bg-warm)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="mb-16">
          <span className="badge-olive mb-2 inline-block">Keep In Touch</span>
          <h2 className="display-giant text-[clamp(2rem,5vw,4rem)] mt-1" style={{ color: 'var(--text-primary)' }}>
            LET'S CREATE<br />
            <span className="gradient-olive">SOMETHING GREAT</span>
          </h2>
          <p className="mt-4 text-sm max-w-md leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Have a project in mind? Interested in software engineering opportunities or reviewing my work? Reach out — I'd love to connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* ── Contact Cards Grid ── */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={method.title}
                {...fadeUp(0.08 * idx)}
                className="card-light rounded-2xl p-5 border flex flex-col justify-between"
                style={{ borderColor: 'var(--border-soft)' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{ background: 'var(--bg-warm)', border: '1px solid var(--border-soft)' }}
                  >
                    {method.icon}
                  </div>
                  <div className="flex gap-2">
                    {method.action && (
                      <button
                        onClick={method.action}
                        className="p-2 rounded-lg border transition-colors text-xs"
                        style={{ borderColor: 'var(--border-soft)', color: 'var(--text-muted)' }}
                        title={method.actionLabel}
                      >
                        {method.copied
                          ? <Check size={14} style={{ color: 'var(--olive)' }} />
                          : <Copy size={14} />}
                      </button>
                    )}
                    {method.href && (
                      <a
                        href={method.href}
                        target={method.external ? "_blank" : undefined}
                        rel={method.external ? "noopener noreferrer" : undefined}
                        className="p-2 rounded-lg border transition-all"
                        style={{ borderColor: 'var(--border-soft)', color: 'var(--text-muted)' }}
                        title="Open"
                      >
                        <Send size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-widest font-mono mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    {method.title}
                  </p>
                  <p className="text-xs font-bold break-all leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {method.value}
                  </p>
                  {method.sub && <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{method.sub}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── CV Card + Availability Banner ── */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Availability status */}
            <motion.div
              {...fadeUp(0.15)}
              className="rounded-2xl p-6 text-center"
              style={{ background: 'var(--bg-dark)' }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#a8e6a0' }}>
                  Currently Available
                </span>
              </div>
              <p className="text-white font-serif font-bold text-xl mb-1">Open for Work</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--beige-light)' }}>
                Actively seeking software engineering roles, internships, and freelance projects.
              </p>
            </motion.div>

            {/* CV Card */}
            <motion.div
              {...fadeUp(0.2)}
              className="card-light rounded-2xl p-6 flex flex-col justify-between border-2 flex-1"
              style={{ borderColor: 'rgba(107,122,62,0.3)' }}
            >
              <div>
                <div className="p-3 rounded-xl w-fit mb-4" style={{ background: 'rgba(107,122,62,0.1)', border: '1px solid rgba(107,122,62,0.25)' }}>
                  <FileText size={22} style={{ color: 'var(--olive)' }} />
                </div>
                <h3 className="font-serif font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                  Curriculum Vitae
                </h3>
                <p className="text-xs mb-5" style={{ color: 'var(--text-muted)' }}>
                  View or download Sama Albaghdady's full resume
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="/SamaAlbaghdadyCv.pdf"
                  download="SamaAlbaghdadyCv.pdf"
                  className="btn-olive text-xs"
                >
                  <FileText size={13} /> Download PDF
                </a>
                <a
                  href="https://drive.google.com/file/d/1tRQBWoXKSTND6oYk6GK5KjxZK3QsTcu9/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-ghost text-xs"
                >
                  <Send size={12} /> Google Drive
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
