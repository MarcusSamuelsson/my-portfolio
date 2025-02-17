// pages/middleware.ts

import { NextRequest, NextResponse } from 'next/server';

// Middleware to handle routing based on subdomain
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host'); // Get the full hostname
  const subdomain = hostname?.split('.')[0]; // Extract the subdomain part

  // Redirect based on the subdomain
  if (subdomain === 'main') {
    return NextResponse.rewrite(new URL('/main', request.url)); // Redirect to /main folder
  }

  if (subdomain === 'portfolio') {
    return NextResponse.rewrite(new URL('/portfolio', request.url)); // Redirect to /portfolio folder
  }

  // Fallback: If no subdomain matches, return the default response (or you can redirect elsewhere)
  return NextResponse.next();
}

// Apply the middleware to the entire site
export const config = {
  matcher: ['/((?!_next|api|static).*)'], // Match all requests except Next.js internal paths
};
