import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

function getOriginFromRequestOrEnv(request: Request): string {
  const envOrigin = process.env.NEXT_PUBLIC_URL?.replace(/\/$/, '');
  if (envOrigin) return envOrigin;
  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

export async function GET(request: Request) {
  const origin = getOriginFromRequestOrEnv(request);

  const manifest = {
    accountAssociation: {
      header: process.env.FARCASTER_ACCOUNT_ASSOCIATION_HEADER || '',
      payload: process.env.FARCASTER_ACCOUNT_ASSOCIATION_PAYLOAD || '',
      signature: process.env.FARCASTER_ACCOUNT_ASSOCIATION_SIGNATURE || ''
    },
    frame: {
      version: '1',
      name: 'Waya Mini App',
      homeUrl: origin,
      iconUrl: `${origin}/icon.png`,
      splashImageUrl: `${origin}/splash.png`,
      splashBackgroundColor: '#FFFFFF',
      subtitle: 'Waya on Farcaster and Base',
      description: 'Waya Mini App powered by Li.Fi, available on Farcaster and Base.',
      screenshotUrls: [`${origin}/screenshot.png`],
      primaryCategory: 'social',
      tags: ['waya', 'miniapp', 'farcaster', 'base', 'lifi'],
      heroImageUrl: `${origin}/hero.png`,
      tagline: 'Trade across chains with Waya using Li.Fi',
      noindex: false
    }
  };

  return NextResponse.json(manifest, {
    headers: {
      // Short cache to allow quick updates during iteration while still being cacheable by CDNs
      'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=600'
    }
  });
}


