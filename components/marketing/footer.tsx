import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-wide flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-navy-950"><Sparkles size={16} className="text-brand-600" /> bizz manager</Link>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Bizz Manager. Built for ambitious small businesses.</p>
        <div className="flex gap-5 text-xs text-slate-500"><Link href="/auth/login" className="hover:text-brand-700">Sign in</Link><a href="mailto:hello@bizzmanager.app" className="hover:text-brand-700">Contact</a></div>
      </div>
    </footer>
  );
}
