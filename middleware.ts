import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from 'next/server';


export function middleware(req: NextRequest): NextResponse | undefined {
  const url = req.nextUrl.clone();
  const publicRoutes = ['/', '/api/webhook', 'question/:id', '/tags', '/tags/:id', '/profile/:id', '/community', '/jobs'];

  if (publicRoutes.includes(url.pathname)) {
    return NextResponse.next();
  }

  // Handle authenticated routes here, e.g., redirect to login page if not authenticated
  // ...
}
export default clerkMiddleware()
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}