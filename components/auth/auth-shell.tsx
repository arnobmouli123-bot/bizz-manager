import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export function AuthShell({ children, title, description, backHref = "/", backLabel = "Back to home" }: { children: React.ReactNode; title: string; description: string; backHref?: string; backLabel?: string }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f7fb] px-4 py-10">
      <div className="w-full max-w-[430px]">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2 text-lg font-bold tracking-tight text-navy-950"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-950 text-white"><Sparkles size={18} /></span>bizz<span className="-ml-2 text-brand-600">.</span></Link>
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card sm:p-8">
          <Link href={backHref} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-700"><ArrowLeft size={14} />{backLabel}</Link>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-navy-950">{title}</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          {children}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </main>
  );
}

export function AuthFeedback({ error, notice }: { error?: string; notice?: string }) {
  if (error) return <p role="alert" className="mt-5 rounded-lg border border-red-100 bg-red-50 px-3 py-2.5 text-sm text-red-700">{error}</p>;
  if (notice) return <p role="status" className="mt-5 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-700">{notice}</p>;
  return null;
}

export const inputClass = "mt-1.5 h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-navy-950 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10";
export const labelClass = "block text-sm font-semibold text-slate-700";
