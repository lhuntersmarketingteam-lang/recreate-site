# Recreate Mountain Camp

Лендінг mountain lifestyle кемпу в Шамоні (6–13 червня 2026).
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Запуск

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # production server
npm run lint
```

Вимоги: Node.js 18.17+ (рекомендовано 20+).

## Структура

```
app/                     головна сторінка + layout + globals.css
components/
  sections/              13 блоків у порядку прототипу
  ui/                    Nav, TelegramCTA, Accordion, RevealOnScroll,
                         SmartImage, ImagePlaceholder
lib/
  constants.ts           TELEGRAM_CTA_URL, CAMP metadata
  media.ts               реєстр наявних файлів у /public/media
public/media/            hero-video.mp4, фото
```

## Як додати нове фото

1. Покласти файл у `public/media/` з імʼям зі списку в [lib/media.ts](lib/media.ts)
   (наприклад `emotion-01-place.jpg`).
2. Додати це імʼя в `AVAILABLE_MEDIA` set у тому самому файлі.
3. Placeholder автоматично заміниться на `<Image>` у відповідному компоненті
   (див. `<SmartImage>`).

## Деплой на Vercel

1. Запушити репозиторій на GitHub.
2. Імпортувати проект у [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (визначається автоматично).
4. Build command: `next build`. Output: `.next`.
5. Environment variables: за бажанням додати `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
   (див. `.env.example`) — якщо заповнено, на сайті підключиться Plausible Analytics.

## Контент і брендинг

- Усі тексти — українською, у `components/sections/*.tsx`.
- Design tokens — у `app/globals.css` (`:root`) та продубльовані у
  `tailwind.config.ts` як Tailwind-тема.
- Шрифти — `next/font/google`: Fraunces (serif display, cyrillic),
  Inter (body), JetBrains Mono.
- CTA ведуть у Telegram `@Ilya_marketing1` з pre-filled повідомленням.
  Повний URL — константа `TELEGRAM_CTA_URL` у `lib/constants.ts`.

## Accessibility / Performance

- `prefers-reduced-motion` вимикає Framer Motion reveal-анімації.
- FAQ accordion: `aria-expanded`, `aria-controls`, keyboard (Enter/Space,
  ArrowUp/ArrowDown, Home/End).
- Hero fallback — `next/image` з `priority`, відео з `preload="metadata"`.
- Schema.org `Event` — JSON-LD у `<head>`.
- `alt` у всіх зображень.
