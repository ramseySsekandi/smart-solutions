import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from './lib/session';

export default async function middleware(req: NextRequest) {
  // This middleware only runs for /dashboard and subroutes due to the matcher below
  const session = await decrypt(req.cookies.get('session')?.value);
  if (!session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
