import { SignJWT, jwtVerify } from 'jose';
import { cookies as nextCookies } from 'next/headers';

const secret = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secret);

export interface SessionPayload {
  userId: string;
  expiresAt: number;
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(key);
}

export async function decrypt(session: string | undefined) {
  if (!session) return null;
  try {
    const { payload } = await jwtVerify(session, key, { algorithms: ['HS256'] });
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

// Helper to get the cookie store in both sync and async contexts
async function getCookieStore() {
  const store = nextCookies();
  if (typeof (store as any).then === 'function') {
    return await store;
  }
  return store;
}

export async function createSession(userId: string) {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const session = await encrypt({ userId, expiresAt });
  const cookieStore = await getCookieStore();
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(expiresAt),
  });
}

export async function deleteSession() {
  const cookieStore = await getCookieStore();
  cookieStore.set('session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(0),
  });
}
