import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated =
    request.cookies.get("authenticated")?.value === "true";

  const protectedPaths = ["/dashboard"];
  const unProtectedPaths = ["/login", "/signup", "/otp"];
  if (
    unProtectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    if (isAuthenticated) {
      const dashboardUrl = new URL("/dashboard", request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }
  if (
    protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    if (!isAuthenticated) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/dashboard/:path*"], // Adjust to your protected paths
// };
