import { useState, type FormEvent } from 'react';
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, Send, MessageSquare, Phone, FileText } from "lucide-react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

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

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Submit to Netlify Forms format
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formData,
      }),
    })
      .then(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      })
      .catch(() => {
        // Fallback: trigger mailto if offline/local
        setIsSubmitting(false);
        setFormSubmitted(true);
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
        )}`;
      });
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
          Let's Connect
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Interested in discussing software engineering opportunities, reviewing my work, or collaborating on a project? Reach out anytime!
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          {contactMethods.map((method, idx) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * idx }}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800/80 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">{method.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-mono break-all">{method.value}</p>
                  {method.sub && <p className="text-[11px] text-slate-400 mt-0.5">{method.sub}</p>}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {method.href && (
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition-colors"
                    title="Open Link"
                  >
                    <Send size={15} />
                  </a>
                )}

                {method.action && (
                  <button
                    onClick={method.action}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition-colors"
                    title={method.actionLabel}
                  >
                    {method.copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  </button>
                )}
              </div>
            </motion.div>
          ))}

          {/* CV Links Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-950 border border-teal-500/20 text-center space-y-3">
            <h4 className="text-sm font-bold text-white">Curriculum Vitae (CV)</h4>
            <p className="text-xs text-slate-400">View or download Sama Albaghdady's official resume</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href="/SamaAlbaghdadyCv.pdf"
                download="SamaAlbaghdadyCv.pdf"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-full text-xs shadow-lg hover:from-teal-400 hover:to-emerald-400 transition-all"
              >
                <FileText size={14} />
                <span>Download PDF CV</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1tRQBWoXKSTND6oYk6GK5KjxZK3QsTcu9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-slate-900 text-slate-200 border border-slate-700 hover:border-teal-500/50 font-medium px-4 py-2 rounded-full text-xs transition-all"
              >
                <Send size={12} />
                <span>View on Google Drive</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Message Form with Netlify Forms Integration */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border border-slate-800/80 shadow-2xl relative"
          >
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare size={20} className="text-teal-400" />
              <span>Send Me a Message</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Messages submitted here are sent directly to <strong className="text-teal-300">Samaalbaghdady90@gmail.com</strong>
            </p>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check size={32} />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out! Your message has been routed to Sama's inbox.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs text-teal-400 font-mono hover:bg-slate-800"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Hiring Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="manager@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Software Engineer Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold py-3.5 rounded-xl text-sm transition-all duration-300 shadow-xl shadow-teal-500/20 hover:shadow-teal-500/35 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
