"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const emailSchema = z.string().email().max(254);
const passwordSchema = z.string().min(8).max(128);
const safeMessage = (message: string) => encodeURIComponent(message);

export async function signIn(formData: FormData) {
  const email = emailSchema.safeParse(formData.get("email"));
  const password = passwordSchema.safeParse(formData.get("password"));
  if (!email.success || !password.success) redirect("/auth/login?error=" + safeMessage("Enter a valid email and password (at least 8 characters)."));
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email: email.data, password: password.data });
    if (error) redirect("/auth/login?error=" + safeMessage("We couldn't sign you in. Check your details and try again."));
  } catch {
    redirect("/auth/login?error=" + safeMessage("Authentication is not configured yet. Add the Supabase environment variables."));
  }
  redirect("/");
}

export async function signUp(formData: FormData) {
  const name = z.string().trim().min(2).max(80).safeParse(formData.get("name"));
  const email = emailSchema.safeParse(formData.get("email"));
  const password = passwordSchema.safeParse(formData.get("password"));
  if (!name.success || !email.success || !password.success) redirect("/auth/signup?error=" + safeMessage("Enter your name, a valid email, and a password of at least 8 characters."));
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signUp({
      email: email.data,
      password: password.data,
      options: { data: { full_name: name.data }, emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback` },
    });
    if (error) redirect("/auth/signup?error=" + safeMessage("We couldn't create your account. Try again or use a different email."));
  } catch {
    redirect("/auth/signup?error=" + safeMessage("Authentication is not configured yet. Add the Supabase environment variables."));
  }
  redirect("/auth/login?notice=" + safeMessage("Check your inbox for the email verification link."));
}

export async function requestPasswordReset(formData: FormData) {
  const email = emailSchema.safeParse(formData.get("email"));
  if (!email.success) redirect("/auth/forgot-password?error=" + safeMessage("Enter a valid email address."));
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email.data, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback?next=/auth/reset-password`,
    });
    if (error) redirect("/auth/forgot-password?error=" + safeMessage("We couldn't send a reset email. Please try again."));
  } catch {
    redirect("/auth/forgot-password?error=" + safeMessage("Authentication is not configured yet. Add the Supabase environment variables."));
  }
  redirect("/auth/forgot-password?notice=" + safeMessage("If an account exists for that email, a reset link is on its way."));
}

export async function updatePassword(formData: FormData) {
  const password = passwordSchema.safeParse(formData.get("password"));
  if (!password.success) redirect("/auth/reset-password?error=" + safeMessage("Use a password with at least 8 characters."));
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.updateUser({ password: password.data });
    if (error) redirect("/auth/reset-password?error=" + safeMessage("Your password couldn't be updated. Request a new reset link."));
  } catch {
    redirect("/auth/reset-password?error=" + safeMessage("Authentication is not configured yet. Add the Supabase environment variables."));
  }
  redirect("/auth/login?notice=" + safeMessage("Password updated. You can now sign in."));
}
