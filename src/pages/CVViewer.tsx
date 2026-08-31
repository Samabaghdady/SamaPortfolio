import { Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink }
  from "lucide-react";
export default function CVViewer() {
  const pdfPath = "/SamaAlbaghdadyCv.pdf";
  const driveEmbedUrl = "https://drive.google.com/file/d/1zjjk-KYhGG6WdAYV2n2bHm3RVM9jMsW6/preview";
  const driveUrl = "https://drive.google.com/file/d/1zjjk-KYhGG6WdAYV2n2bHm3RVM9jMsW6/view?usp=sharing";
  return (<div className="h-screen w-screen bg-[#070d19] text-slate-100 flex flex-col font-sans overflow-hidden">
    <header className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-3 bg-[#0a1120] border-b border-slate-800 z-50 shrink-0 shadow-lg gap-3">
      <div className="flex items-center gap-4">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-400 font-semibold text-xs sm:text-sm transition-colors group" >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span> </Link>
        <span className="hidden md:inline text-xs font-mono text-slate-400 border-l border-slate-800 pl-4"> Sama Albaghdady — CV / Resume </span>
      </div>
      <div className="flex items-center gap-2">
        <a href={driveUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-teal-300 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all" >
          <ExternalLink size={14} />
          <span>Open Drive</span> </a>
        <a href={pdfPath} download="SamaAlbaghdadyCv.pdf"
          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 px-4 py-1.5 rounded-full font-bold text-xs shadow-lg shadow-teal-500/20 transition-all" >
          <Download size={14} />
          <span>Download PDF</span>
        </a>
      </div>
    </header>
    <main className="flex-1 w-full relative bg-[#0a1120] overflow-hidden">
      <iframe src={driveEmbedUrl} className="w-full h-full border-none" title="Sama Albaghdady CV" allow="autoplay" /> </main> </div>);
}
