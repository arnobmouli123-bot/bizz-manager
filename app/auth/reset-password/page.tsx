import { AuthFeedback, AuthShell, inputClass, labelClass } from "@/components/auth/auth-shell";
import { updatePassword } from "@/app/auth/actions";

export default async function ResetPasswordPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return <AuthShell title="Choose a new password" description="Set a strong password you haven’t used on another site." backHref="/auth/login" backLabel="Back to sign in">
    <AuthFeedback error={error} />
    <form action={updatePassword} className="mt-6 space-y-4">
      <label className={labelClass}>New password<input className={inputClass} type="password" name="password" autoComplete="new-password" minLength={8} maxLength={128} required placeholder="At least 8 characters" /></label>
      <button className="h-11 w-full rounded-xl bg-brand-600 text-sm font-bold text-white transition hover:bg-brand-700">Update password</button>
    </form>
  </AuthShell>;
}
