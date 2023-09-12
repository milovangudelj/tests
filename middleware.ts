import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  if (req.nextUrl.pathname.startsWith('/favicon.ico')) {
    console.log(
      'The user navigated to:',
      new URL(req.headers.get('referer') ?? 'http://localhost:3000').pathname
    )
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
}
