import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Check, Copy } from "lucide-react";
import { playSound } from "../lib/audioUtils";

interface InteractiveTerminalProps {
  soundEnabled: boolean;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal({ soundEnabled }: InteractiveTerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: "whoami",
      output: (
        <div className="space-y-1 text-teal-300">
          <p className="font-bold">Sama Albaghdady — Senior CS Student @ Misr International University (MIU)</p>
          <p className="text-slate-400">Full-Stack Developer | C++ & Java Engineer | Desktop GUI & AI Vision Specialist</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const processCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    playSound("terminal", soundEnabled);

    if (!cmd) return;

    if (cmd === "clear") {
      setLogs([]);
      setInputVal("");
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-slate-300 text-xs font-mono">
            <p className="text-teal-400 font-bold">Available Commands:</p>
            <p><span className="text-emerald-400 font-semibold">whoami</span> - Summary of Sama's profile</p>
            <p><span className="text-emerald-400 font-semibold">skills</span> - List core programming languages and frameworks</p>
            <p><span className="text-emerald-400 font-semibold">projects</span> - View highlighted software projects</p>
            <p><span className="text-emerald-400 font-semibold">contact</span> - Display email, phone, & LinkedIn</p>
            <p><span className="text-emerald-400 font-semibold">cv</span> - Show link to view/download Curriculum Vitae</p>
            <p><span className="text-emerald-400 font-semibold">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case "whoami":
      case "about":
        outputNode = (
          <div className="text-teal-300 text-xs font-mono space-y-1">
            <p>Name: Sama Albaghdady</p>
            <p>Role: Software Developer & Computer Science Student</p>
            <p>University: Misr International University (MIU)</p>
            <p>GPA: 3.7+ (High Distinction Candidate)</p>
            <p>Location: Cairo Elshrouk, Egypt</p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-purple-300 font-bold">Languages:</p>
            <p className="text-slate-400">C++, Java, Python, JavaScript, HTML5, CSS3, SQL</p>
            <p className="text-purple-300 font-bold pt-1">Web & Backend Frameworks:</p>
            <p className="text-slate-400">React, Spring Boot, Node.js, Express.js, EJS, Tailwind CSS</p>
            <p className="text-purple-300 font-bold pt-1">Desktop & Computer Vision:</p>
            <p className="text-slate-400">wxWidgets (C++), Tkinter (Python), OpenCV (Face Recognition)</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="text-xs font-mono space-y-1.5 text-slate-300">
            <p className="text-amber-400 font-bold">🚀 Featured Projects:</p>
            <p>1. <span className="text-teal-300">Mello — Mental Wellness Platform</span> (React, Spring Boot, MongoDB)</p>
            <p>2. <span className="text-teal-300">Face Recognition Attendance System</span> (Python, OpenCV, Tkinter)</p>
            <p>3. <span className="text-teal-300">MyStore E-Commerce App</span> (Node.js, Express, EJS, MongoDB)</p>
            <p>4. <span className="text-teal-300">Fast Food Multi-Role GUI</span> (Java, Swing, OOP Pattern)</p>
            <p>5. <span className="text-teal-300">Smart Hospital Patient Desktop App</span> (C++, wxWidgets)</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-emerald-400 font-bold">Contact Coordinates:</p>
            <p>📧 Email: Samaalbaghdady90@gmail.com</p>
            <p>📱 Phone: (+20) 01112242740</p>
            <p>💼 LinkedIn: linkedin.com/in/sama-albaghdady-19b75531a</p>
            <p>🐙 GitHub: github.com/Samabaghdady</p>
          </div>
        );
        break;

      case "cv":
      case "resume":
        outputNode = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <p className="text-teal-300 font-bold">📄 Sama Albaghdady's CV is available for view/download.</p>
            <a
              href="/SamaAlbaghdadyCv.pdf"
              download="SamaAlbaghdadyCv.pdf"
              className="inline-flex items-center gap-1.5 bg-teal-500 text-slate-950 px-3 py-1 rounded font-bold hover:bg-teal-400"
            >
              Download PDF CV
            </a>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-xs font-mono text-rose-400">
            Command not recognized: "{cmdStr}". Type <span className="text-teal-300 font-bold">help</span> to view available commands.
          </div>
        );
        break;
    }

    setLogs((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInputVal("");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Samaalbaghdady90@gmail.com");
    setCopied(true);
    playSound("click", soundEnabled);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl bg-[#091122]/95 border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-left">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-xs text-slate-400 ml-2 font-medium flex items-center gap-1">
            <TerminalIcon size={14} className="text-teal-400" /> sama@miu-cs-senior:~
          </span>
        </div>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors border border-slate-700"
        >
          {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          <span>{copied ? "Copied!" : "Copy Email"}</span>
        </button>
      </div>

      {/* Preset Quick Buttons */}
      <div className="bg-slate-950/60 border-b border-slate-800/80 px-4 py-2 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-400 text-[11px] font-sans">Click to run:</span>
        {["whoami", "skills", "projects", "contact", "cv", "help"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => processCommand(cmd)}
            className="px-2.5 py-0.5 rounded bg-slate-900 text-teal-300 border border-slate-800 hover:border-teal-500/40 hover:bg-slate-800 transition-colors"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="p-4 max-h-72 overflow-y-auto space-y-3 text-xs sm:text-sm">
        {logs.map((log, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-teal-400">
              <span>sama@portfolio:~$</span>
              <span className="text-white font-semibold">{log.command}</span>
            </div>
            <div className="pl-4 text-slate-300">{log.output}</div>
          </div>
        ))}

        {/* Live Input Row */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            processCommand(inputVal);
          }}
          className="flex items-center gap-2 text-teal-400 pt-2"
        >
          <span>sama@portfolio:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono"
          />
          <button type="submit" className="text-slate-500 hover:text-teal-400">
            <CornerDownLeft size={16} />
          </button>
        </form>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
