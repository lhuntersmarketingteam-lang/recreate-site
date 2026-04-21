import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { CAMP } from '@/lib/constants';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${CAMP.name} — ${CAMP.city}, ${CAMP.dates}`,
  description:
    'Mountain lifestyle camp у Шамоні. 8 днів, 14 людей. Трейли, скелі, віаферрати, преміальне шале, шеф-повар.',
  metadataBase: new URL('https://recreate-mountain-camp.vercel.app'),
  openGraph: {
    title: CAMP.name,
    description: `${CAMP.city} · ${CAMP.dates} · ${CAMP.people} людей`,
    images: ['/media/hero-fallback.jpg'],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: CAMP.name,
    description: `${CAMP.city} · ${CAMP.dates} · ${CAMP.people} людей`,
    images: ['/media/hero-fallback.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F8F6F1',
};

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: CAMP.name,
  description:
    'Mountain lifestyle camp у Шамоні. 8 днів, 14 людей. Трейли, скелі, віаферрати, преміальне шале, шеф-повар.',
  startDate: CAMP.startDate,
  endDate: CAMP.endDate,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Chamonix-Mont-Blanc',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chamonix-Mont-Blanc',
      addressRegion: 'Haute-Savoie',
      addressCountry: 'FR',
    },
  },
  image: ['/media/hero-fallback.jpg'],
  offers: {
    '@type': 'Offer',
    price: String(CAMP.priceEUR),
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: 'https://recreate-mountain-camp.vercel.app/#pricing',
  },
  organizer: {
    '@type': 'Organization',
    name: 'Recreate',
    url: 'https://www.instagram.com/recreate.surfcamp',
  },
  maximumAttendeeCapacity: CAMP.people,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="uk" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <Script
          id="event-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body>
        {children}
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
