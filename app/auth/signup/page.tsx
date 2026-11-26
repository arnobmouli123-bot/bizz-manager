import Link from "next/link";
import { AuthFeedback, AuthShell, inputClass, labelClass } from "@/components/auth/auth-shell";
import { signUp } from "@/app/auth/actions";

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return <AuthShell title="Create your account" description="Start with a clearer, calmer way to run your business.">
    <AuthFeedback error={error} />
    <form action={signUp} className="mt-6 space-y-4">
      <label className={labelClass}>Your name<input className={inputClass} type="text" name="name" autoComplete="name" minLength={2} maxLength={80} required placeholder="Ayesha Rahman" /></label>
      <label className={labelClass}>Email address<input className={inputClass} type="email" name="email" autoComplete="email" required placeholder="you@business.com" /></label>
      <label className={labelClass}>Password<input className={inputClass} type="password" name="password" autoComplete="new-password" minLength={8} maxLength={128} required placeholder="At least 8 characters" /></label>
      <button className="h-11 w-full rounded-xl bg-brand-600 text-sm font-bold text-white transition hover:bg-brand-700">Create account</button>
    </form>
    <p className="mt-6 text-center text-sm text-slate-600">Already have an account? <Link href="/auth/login" className="font-bold text-brand-700 hover:text-brand-800">Sign in</Link></p>
  </AuthShell>;
}
