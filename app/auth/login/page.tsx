import Link from "next/link";
import { AuthFeedback, AuthShell, inputClass, labelClass } from "@/components/auth/auth-shell";
import { signIn } from "@/app/auth/actions";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string; notice?: string }> }) {
  const { error, notice } = await searchParams;
  return <AuthShell title="Welcome back" description="Sign in to pick up where your business left off.">
    <AuthFeedback error={error} notice={notice} />
    <form action={signIn} className="mt-6 space-y-4">
      <label className={labelClass}>Email address<input className={inputClass} type="email" name="email" autoComplete="email" required placeholder="you@business.com" /></label>
      <label className={labelClass}>Password<input className={inputClass} type="password" name="password" autoComplete="current-password" minLength={8} required placeholder="Your password" /></label>
      <div className="-mt-1 flex justify-end"><Link href="/auth/forgot-password" className="text-xs font-semibold text-brand-700 hover:text-brand-800">Forgot password?</Link></div>
      <button className="h-11 w-full rounded-xl bg-brand-600 text-sm font-bold text-white transition hover:bg-brand-700">Sign in</button>
    </form>
    <p className="mt-6 text-center text-sm text-slate-600">New to Bizz Manager? <Link href="/auth/signup" className="font-bold text-brand-700 hover:text-brand-800">Create an account</Link></p>
  </AuthShell>;
}
