import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, RefreshCw } from "lucide-react";

export default function CVViewer() {
  const [useDriveViewer, setUseDriveViewer] = useState(false);
  const pdfPath = "/SamaAlbaghdadyCv.pdf#view=FitH";
  const driveEmbedUrl = "https://drive.google.com/file/d/1tRQBWoXKSTND6oYk6GK5KjxZK3QsTcu9/preview";
  const driveUrl = "https://drive.google.com/file/d/1tRQBWoXKSTND6oYk6GK5KjxZK3QsTcu9/view?usp=sharing";

  return (
    <div className="h-screen w-screen bg-[#070d19] text-slate-100 flex flex-col font-sans overflow-hidden">
      {/* Top Bar */}
      <header className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-3 bg-[#0a1120] border-b border-slate-800 z-50 shrink-0 shadow-lg gap-3">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-400 font-semibold text-xs sm:text-sm transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
          <span className="hidden md:inline text-xs font-mono text-slate-400 border-l border-slate-800 pl-4">
            Sama Albaghdady — CV / Resume
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Toggle Native / Drive */}
          <button
            onClick={() => setUseDriveViewer(!useDriveViewer)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium transition-all"
            title="Switch Viewer Engine"
          >
            <RefreshCw size={13} className="text-teal-400" />
            <span>{useDriveViewer ? "Use Native PDF" : "Use Google Drive Viewer"}</span>
          </button>

          {/* Drive Link */}
          <a 
            href={driveUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-teal-300 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all"
          >
            <ExternalLink size={14} />
            <span>Open Drive Link</span>
          </a>

          {/* Direct Download */}
          <a 
            href="/SamaAlbaghdadyCv.pdf" 
            download="SamaAlbaghdadyCv.pdf"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 px-4 py-1.5 rounded-full font-bold text-xs shadow-lg shadow-teal-500/20 transition-all"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* Fullscreen Viewer Area */}
      <main className="flex-1 w-full h-full relative bg-[#0a1120] overflow-hidden">
        {useDriveViewer ? (
          <iframe 
            src={driveEmbedUrl} 
            className="w-full h-full border-none"
            title="Sama Albaghdady CV (Google Drive Viewer)"
            allow="autoplay"
          />
        ) : (
          <object
            data={pdfPath}
            type="application/pdf"
            className="w-full h-full border-none"
          >
            <embed 
              src={pdfPath} 
              type="application/pdf"
              className="w-full h-full border-none"
            />
            {/* Fallback if browser blocks PDF plugin */}
            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
              <p className="text-slate-300 text-base">Your browser cannot inline PDF rendering directly.</p>
              <div className="flex gap-3">
                <a
                  href="/SamaAlbaghdadyCv.pdf"
                  download
                  className="bg-teal-500 text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm"
                >
                  Download PDF File
                </a>
                <a
                  href={driveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-800 text-white px-6 py-2.5 rounded-full font-medium text-sm border border-slate-700"
                >
                  View on Google Drive
                </a>
              </div>
            </div>
          </object>
        )}
      </main>
    </div>
  );
}
