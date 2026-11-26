import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="relative z-10 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
      <nav className="container-wide flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Bizz Manager home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-950 text-white shadow-glow"><Sparkles size={18} /></span>
          <span className="text-[17px] font-bold tracking-tight text-navy-950">bizz<span className="text-brand-600">.</span></span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="transition hover:text-navy-950">Features</a>
          <a href="#how-it-works" className="transition hover:text-navy-950">How it works</a>
          <a href="#pricing" className="transition hover:text-navy-950">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/auth/login" className="hidden px-3 py-2 text-sm font-semibold text-slate-700 transition hover:text-brand-700 sm:inline-flex">Log in</Link>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-navy-950/10 transition hover:-translate-y-0.5 hover:bg-navy-800">
            Get started <ArrowRight size={15} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
