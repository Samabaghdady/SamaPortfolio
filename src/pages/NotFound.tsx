import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#070d19] text-slate-100 font-sans">
      <h1 className="text-7xl font-extrabold gradient-text mb-4">404</h1>
      <p className="text-xl mb-8 text-slate-300">Oops! Page not found.</p>
      <Link to="/" className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-teal-500/20">
        Return Home
      </Link>
    </div>
  );
}
