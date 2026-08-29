import { useState } from 'react';
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, Send, Phone, FileText } from "lucide-react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "Samaalbaghdady90@gmail.com";
  const phone = "(+20) 01112242740";

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
      icon: <Mail className="text-teal-400 mb-2" size={28} />,
      title: "Email Address",
      value: email,
      action: handleCopyEmail,
      actionLabel: copiedEmail ? "Copied Email!" : "Copy Email",
      copied: copiedEmail,
      href: `mailto:${email}`
    },
    {
      icon: <Phone className="text-emerald-400 mb-2" size={28} />,
      title: "Phone / Mobile",
      value: phone,
      action: handleCopyPhone,
      actionLabel: copiedPhone ? "Copied Phone!" : "Copy Phone",
      copied: copiedPhone,
      href: `tel:+2001112242740`
    },
    {
      icon: (
        <svg className="text-blue-400 mb-2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      title: "LinkedIn Profile",
      value: "linkedin.com/in/sama-albaghdady",
      href: "https://www.linkedin.com/in/sama-albaghdady-19b75531a",
      external: true
    },
    {
      icon: (
        <svg className="text-cyan-400 mb-2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      title: "GitHub Profile",
      value: "github.com/Samabaghdady",
      href: "https://github.com/Samabaghdady",
      external: true
    },
    {
      icon: <MapPin className="text-purple-400 mb-2" size={28} />,
      title: "Location",
      value: "Cairo Elshrouk, Cairo, Egypt",
      sub: "Misr International University"
    }
  ];

  return (
    <section id="contact" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-teal-400 font-mono text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 inline-block mb-3"
        >
          Keep In Touch
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
        >
          Let's <span className="gradient-text">Connect</span>
        </motion.h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Interested in software engineering opportunities, reviewing my work, or discussing projects? Reach out via email, phone, or social profiles!
        </p>
      </div>

      {/* Grid of Contact Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, idx) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * idx }}
            className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0">
                  {method.icon}
                </div>
                <div className="flex items-center gap-2">
                  {method.action && (
                    <button
                      onClick={method.action}
                      className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition-colors"
                      title={method.actionLabel}
                    >
                      {method.copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  )}
                  {method.href && (
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition-colors"
                      title="Open Link"
                    >
                      <Send size={14} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-base font-bold text-white mb-1">{method.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-mono break-all">{method.value}</p>
              {method.sub && <p className="text-xs text-slate-400 mt-1">{method.sub}</p>}
            </div>
          </motion.div>
        ))}

        {/* CV Links Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card glass-card-hover p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-950 flex flex-col justify-between"
        >
          <div>
            <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 w-fit mb-4 text-teal-400">
              <FileText size={24} />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Curriculum Vitae (CV)</h3>
            <p className="text-xs text-slate-400 mb-4">View or download Sama Albaghdady's resume</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href="/SamaAlbaghdadyCv.pdf"
              download="SamaAlbaghdadyCv.pdf"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold px-3.5 py-2 rounded-full text-xs shadow-lg hover:from-teal-400 hover:to-emerald-400 transition-all"
            >
              <FileText size={13} />
              <span>Download PDF</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1tRQBWoXKSTND6oYk6GK5KjxZK3QsTcu9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-900 text-slate-200 border border-slate-700 hover:border-teal-500/50 font-medium px-3.5 py-2 rounded-full text-xs transition-all"
            >
              <Send size={12} />
              <span>Drive Link</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
