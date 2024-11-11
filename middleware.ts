import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: Request): NextResponse | undefined {
  const url = req.nextUrl.clone();
  const publicRoutes = ['/', '/api/webhook', 'question/:id', '/tags', '/tags/:id', '/profile/:id', '/community', '/jobs'];

  if (publicRoutes.includes(url.pathname)) {
    return NextResponse.next();
  }

  // Handle authenticated routes here, e.g., redirect to login page if not authenticated
  // ...
}

export const config = {
  matcher: ['/(?!_next/static|public/fonts|public/images|public/icons|public/manifest.json).*'],
};