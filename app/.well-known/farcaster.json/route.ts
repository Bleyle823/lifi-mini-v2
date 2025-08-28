import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

function getOriginFromRequestOrEnv(request: Request): string {
  const envOrigin = process.env.NEXT_PUBLIC_URL?.replace(/\/$/, '');
  if (envOrigin) return envOrigin;
  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

function withValidProperties(properties: Record<string, string | string[] | boolean | undefined>) {
  return Object.fromEntries(
    Object.entries(properties).filter(([_, value]) => {
      if (Array.isArray(value)) return value.length > 0;
      return value !== undefined && value !== '';
    })
  );
}

export async function GET(request: Request) {
  const origin = getOriginFromRequestOrEnv(request);

  const tagsFromEnv = (process.env.NEXT_PUBLIC_APP_TAGS || '')
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  const requiredChains = (process.env.NEXT_PUBLIC_REQUIRED_CHAINS || '')
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean);

  const manifest = {
    accountAssociation: {
      header:
        process.env.FARCASTER_HEADER || process.env.FARCASTER_ACCOUNT_ASSOCIATION_HEADER || '',
      payload:
        process.env.FARCASTER_PAYLOAD || process.env.FARCASTER_ACCOUNT_ASSOCIATION_PAYLOAD || '',
      signature:
        process.env.FARCASTER_SIGNATURE || process.env.FARCASTER_ACCOUNT_ASSOCIATION_SIGNATURE || ''
    },
    frame: withValidProperties({
      version: '1',
      name: process.env.NEXT_PUBLIC_APP_NAME || 'Waya Mini App',
      subtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE || 'Waya on Farcaster and Base',
      description:
        process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
        'Waya Mini App powered by Li.Fi, available on Farcaster and Base.',
      homeUrl: process.env.NEXT_PUBLIC_HOME_URL || origin,
      iconUrl: process.env.NEXT_PUBLIC_APP_ICON || `${origin}/icon.png`,
      splashImageUrl: process.env.NEXT_PUBLIC_APP_SPLASH_IMAGE || `${origin}/splash.png`,
      splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR || '#FFFFFF',
      webhookUrl: process.env.NEXT_PUBLIC_WEBHOOK_URL || `${origin}/api/webhook`,
      primaryCategory: process.env.NEXT_PUBLIC_APP_PRIMARY_CATEGORY || 'social',
      tags: tagsFromEnv.length ? tagsFromEnv : ['waya', 'miniapp', 'farcaster', 'base', 'lifi'],
      heroImageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE || `${origin}/hero.png`,
      tagline: process.env.NEXT_PUBLIC_APP_TAGLINE || 'Trade across chains with Waya using Li.Fi',
      screenshotUrls: (process.env.NEXT_PUBLIC_APP_SCREENSHOTS || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean).length
        ? (process.env.NEXT_PUBLIC_APP_SCREENSHOTS || '')
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
        : [`${origin}/screenshot.png`],
      ogTitle: process.env.NEXT_PUBLIC_APP_OG_TITLE,
      ogDescription: process.env.NEXT_PUBLIC_APP_OG_DESCRIPTION,
      ogImageUrl: process.env.NEXT_PUBLIC_APP_OG_IMAGE,
      requiredChains: requiredChains.length ? requiredChains : undefined,
      noindex: (process.env.NEXT_PUBLIC_APP_NOINDEX || 'false') === 'true'
    })
  };

  return NextResponse.json(manifest, {
    headers: {
      // Short cache to allow quick updates during iteration while still being cacheable by CDNs
      'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=600'
    }
  });
}


