import Link from "next/link";
import { AuthFeedback, AuthShell, inputClass, labelClass } from "@/components/auth/auth-shell";
import { requestPasswordReset } from "@/app/auth/actions";

export default async function ForgotPasswordPage({ searchParams }: { searchParams: Promise<{ error?: string; notice?: string }> }) {
  const { error, notice } = await searchParams;
  return <AuthShell title="Reset your password" description="Enter your account email and we’ll send a secure reset link." backHref="/auth/login" backLabel="Back to sign in">
    <AuthFeedback error={error} notice={notice} />
    <form action={requestPasswordReset} className="mt-6 space-y-4">
      <label className={labelClass}>Email address<input className={inputClass} type="email" name="email" autoComplete="email" required placeholder="you@business.com" /></label>
      <button className="h-11 w-full rounded-xl bg-brand-600 text-sm font-bold text-white transition hover:bg-brand-700">Send reset link</button>
    </form>
    <p className="mt-6 text-center text-sm text-slate-600"><Link href="/auth/login" className="font-bold text-brand-700 hover:text-brand-800">Return to sign in</Link></p>
  </AuthShell>;
}
