import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const nextPath = request.nextUrl.searchParams.get("next") ?? "/";
  const safePath = nextPath.startsWith("/") && !nextPath.startsWith("//") ? nextPath : "/";
  const destination = new URL(safePath, request.url);

  if (!code) {
    destination.pathname = "/auth/login";
    destination.searchParams.set("error", "This verification link is invalid or has expired.");
    return NextResponse.redirect(destination);
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    destination.pathname = "/auth/login";
    destination.searchParams.set("error", "Authentication is not configured yet.");
    return NextResponse.redirect(destination);
  }

  const response = NextResponse.redirect(destination);
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (cookiesToSet) => cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options)),
    },
  });
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    const failed = new URL("/auth/login", request.url);
    failed.searchParams.set("error", "This verification link is invalid or has expired.");
    return NextResponse.redirect(failed);
  }
  return response;
}
