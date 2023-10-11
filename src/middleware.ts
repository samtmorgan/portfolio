import { NextRequest, NextResponse } from 'next/server';

// Should be added to the CSP header once all inline style is removed
// style-src 'self' 'nonce-${nonce}';
// script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
// default-src 'self';
//

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  //   const cspHeader = `
  //     img-src 'self' blob: data:;
  //     font-src 'self';
  //     object-src 'none';
  //     base-uri 'self';
  //     form-action 'self';
  //     frame-ancestors 'none';
  //     block-all-mixed-content;
  //     upgrade-insecure-requests;
  //     style-src 'self' 'nonce-${nonce}';
  //     script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
  //     default-src 'self';
  //   `;

  const cspHeader = `
      img-src 'self' blob: data:;
      font-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      block-all-mixed-content;
      upgrade-insecure-requests;
  `;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set(
    'Content-Security-Policy',
    // Replace newline characters and spaces
    cspHeader.replace(/\s{2,}/g, ' ').trim(),
  );

  return NextResponse.next({
    headers: requestHeaders,
    request: {
      headers: requestHeaders,
    },
  });
}
