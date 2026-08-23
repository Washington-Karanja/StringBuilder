import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_SUSPENDED = false;

const PUBLIC_PATHS = new Set([
  "/suspended",
  "/favicon.ico",
  "/logo.svg",
  "/logo.png",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/opengraph-image.png",
  "/twitter-image.png",
]);

export function middleware(request: NextRequest) {
  if (!SITE_SUSPENDED) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.has(pathname) || pathname.startsWith("/_next/") || pathname.startsWith("/images/")) {
    return NextResponse.next();
  }

  if (pathname !== "/suspended") {
    const url = request.nextUrl.clone();
    url.pathname = "/suspended";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
