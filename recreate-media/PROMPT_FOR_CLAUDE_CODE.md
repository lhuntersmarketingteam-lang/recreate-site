# Промпт для Claude Code — Recreate Mountain Camp

Скопируй весь текст ниже и отдай Claude Code вместе со всей этой папкой (файлы `index.html`, `hero-video.mp4`, все `.jpg` фото).

---

## Завдання

Ти отримуєш готовий HTML-прототип премʼюм-сайту **Recreate Mountain Camp** — гірського лайфстайл-кемпу в Шамоні (Франція, 6–13 червня 2026, 14 людей, €2 800). Твоя задача — перетворити його на повноцінний **Next.js 14+ (App Router, TypeScript)** проєкт, готовий до деплою на Vercel.

Прототип уже містить:
- Усю структуру блоків (13 секцій) у правильному порядку
- Усі фінальні тексти українською (НЕ ПЕРЕПИСУЙ їх)
- Усі design tokens (CSS-змінні, шрифти Fraunces + Inter, palette)
- Реальні CTA-лінки на Telegram `@Ilya_marketing1` з pre-filled повідомленням
- Реальні Instagram-лінки команди і футер-контакти
- Hero з відео `hero-video.mp4` + fallback-зображенням
- 7 з 22 фото-слотів заповнені реальними зображеннями

Твоя задача — зберегти **усе** з прототипу і перенести в сучасний Next.js стек без втрат.

## Технічний стек (обовʼязково)

- **Next.js 14+** (App Router, TypeScript)
- **Tailwind CSS** + CSS-змінні з прототипу (перенеси в `tailwind.config.ts` і `globals.css`)
- **next/font/google** для Fraunces (display serif) і Inter (body sans)
- **next/image** для всіх JPG-зображень з правильними `sizes` і `priority` для hero-fallback
- **Framer Motion** для reveal-анімацій (замість поточного IntersectionObserver)
- **next/script** з `strategy="afterInteractive"` для Plausible (коли додаси)
- Hero-відео через нативний `<video autoplay muted loop playsinline>` — **НЕ** обгортай у Framer Motion

## Структура проекту

```
/app
  /page.tsx              # головна, імпортує секції по порядку
  /layout.tsx            # root + fonts + metadata
  /globals.css           # design tokens із :root блоку прототипу
/components
  /sections/
    Hero.tsx
    Immersion.tsx
    Essence.tsx
    Emotions.tsx
    Activities.tsx
    Chamonix.tsx
    Environment.tsx
    ForWhom.tsx
    Program.tsx
    Team.tsx
    Pricing.tsx
    FAQ.tsx
    Footer.tsx
  /ui/
    Nav.tsx
    TelegramCTA.tsx      # reusable CTA з pre-filled Telegram лінком
    Accordion.tsx
    RevealOnScroll.tsx
/public
  /media/
    hero-video.mp4
    hero-fallback.jpg
    immersion-photo.jpg
    emotion-04-people.jpg
    chamonix-photo.jpg
    activity-viaferrata.jpg
    villa-exterior.jpg
    team-illya.jpg
    (плейсхолдери для відсутніх — див. нижче)
```

## Що зберегти дослівно з прототипу

- **Усі українські тексти** — жодного переписування, жодного «покращення»
- **Усі design tokens** (palette, шрифти, spacing, animations)
- **Структуру 13 блоків** у тому самому порядку
- **Barely-there навігацію** (transparent → blur на скролі після 60vh)
- **Telegram CTA-лінки** з pre-filled повідомленням (3 місця: nav, hero, pricing)
- **Instagram-лінки команди** (у блоці Team, під роллю)
- **Футер-контакти**: Telegram @Ilya_marketing1, Instagram @recreate.surfcamp, телефон +380 63 030 22 04
- **Horizontal scroll з snap** у секції Activities
- **Zig-zag layout** у блоці Environment і Team
- **Timeline з маркерами** у блоці Program (день 07 підсвічений кольором accent)
- **Accordion логіку** у FAQ (тільки один відкритий)

## Telegram CTA — deep-link

Усі 3 CTA-кнопки «Забронювати» ведуть на:
```
https://t.me/Ilya_marketing1?text=<URL-encoded ukrainian text>
```

Повний URL з закодованим текстом (НЕ ЗМІНЮЙ, ВИКОРИСТОВУЙ ЯК Є):
```
https://t.me/Ilya_marketing1?text=%D0%9F%D1%80%D0%B8%D0%B2%D1%96%D1%82%21%20%D0%A6%D1%96%D0%BA%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20Recreate%20Mountain%20Camp%20%D1%83%20%D0%A8%D0%B0%D0%BC%D0%BE%D0%BD%D1%96%20%286%E2%80%9313%20%D1%87%D0%B5%D1%80%D0%B2%D0%BD%D1%8F%29.%20%D0%A0%D0%BE%D0%B7%D0%BA%D0%B0%D0%B6%D1%96%D1%82%D1%8C%20%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D1%96%2C%20%D0%B1%D1%83%D0%B4%D1%8C%20%D0%BB%D0%B0%D1%81%D0%BA%D0%B0.
```

Декодовано це означає: «Привіт! Цікавить Recreate Mountain Camp у Шамоні (6–13 червня). Розкажіть деталі, будь ласка.»

Винеси цю URL у константу `TELEGRAM_CTA_URL` у `lib/constants.ts` і посилайся на неї з компонента `<TelegramCTA>`.

## Missing фото — як обробити

**7 слотів заповнені реальними файлами**, вони вже лежать у папці:
- `hero-video.mp4` + `hero-fallback.jpg`
- `immersion-photo.jpg`
- `emotion-04-people.jpg`
- `chamonix-photo.jpg`
- `activity-viaferrata.jpg`
- `villa-exterior.jpg`
- `team-illya.jpg`

**15 слотів поки відсутні**. У прототипі на їхніх місцях стоять блоки `<div class="img-placeholder">НАЗВА</div>` з градієнтною заглушкою. Створи **React-компонент `<ImagePlaceholder label="..." />`** із тим самим стилем (градієнт із `--color-accent-light` → `--color-accent-warm` → `--color-accent`, mono-текст по центру), і рендери його на пустих слотах. Коли користувачка додасть реальний файл у `/public/media/` з відповідним імʼям, плейсхолдер автоматично заміниться на `<Image>`.

Простий підхід: в кожній секції, де є фото, створюй компонент типу:
```tsx
function SmartImage({ src, alt, label, ...props }: Props) {
  // Якщо файл існує — показує <Image>, якщо ні — <ImagePlaceholder label={label} />.
  // На build-time перевір існування через fs.existsSync у серверному компоненті,
  // або просто передавай прапорець `available` вручну.
}
```

**Імена відсутніх файлів (для довідки)** — коли користувачка додасть, ці імена мають збігтися:
```
emotion-01-place.jpg       # панорама Шамоні без людей
emotion-02-newexp.jpg      # людина на скелі / віаферраті, видно обличчя
emotion-03-contrast.jpg    # деталь після нагрузки: камін, чай, стіл
emotion-05-care.jpg        # інтерʼєр шале, сервірування
emotion-06-confidence.jpg  # людина на вершині
activity-trail.jpg         # трейлраннер на тропі UTMB
activity-hiking.jpg        # група на панорамному маршруті
activity-climbing.jpg      # гранітна стіна, страховка
activity-strength.jpg      # функціональне тренування на повітрі
activity-yoga.jpg          # йога на природі (НЕ в залі, НЕ на пляжі)
activity-tea.jpg           # деталь: руки, чашка, ритуал
chef-food.jpg              # подача від шефа, довгий стіл
sauna.jpg                  # інтерʼєр сауни, дерево
care-detail.jpg            # абстрактна деталь «турботи» в природі
team-alina.jpg             # портрет Аліни в природі
```

## Reveal-анімації

Замінити поточний IntersectionObserver у `<script>` на Framer Motion. Створи компонент `<RevealOnScroll>` із `useInView` (threshold 0.12, rootMargin -60px, triggerOnce). Підтримай атрибут `delay` (0–3 через затримку 0.1s кожна).

Приклад використання:
```tsx
<RevealOnScroll>
  <h2 className="section-title">Чому Шамоні.</h2>
</RevealOnScroll>
<RevealOnScroll delay={1}>
  <p>...</p>
</RevealOnScroll>
```

Поважай `prefers-reduced-motion` — вимикай всі анімації.

## Metadata і SEO

У `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Recreate Mountain Camp — Chamonix, June 6–13, 2026',
  description: 'Mountain lifestyle camp у Шамоні. 8 днів, 14 людей. Трейли, скелі, віаферрати, преміальне шале, шеф-повар.',
  openGraph: {
    title: 'Recreate Mountain Camp',
    description: 'Chamonix · June 6–13, 2026 · 14 людей',
    images: ['/media/hero-fallback.jpg'],
    locale: 'uk_UA',
  },
  // додай robots, canonical тощо на свій розсуд
};
```

Додай також Structured Data `schema.org/Event` у `<head>` головної сторінки.

## Performance цілі

- LCP < 2.0s (hero-fallback.jpg як `priority={true}` у `<Image>`)
- CLS < 0.05
- Lighthouse > 95 на всіх метриках
- Hero-відео `preload="metadata"`, не `auto`

## Accessibility

- `aria-expanded` на FAQ кнопках
- `aria-label` на навігації і CTA
- Keyboard navigation для accordion
- Alt-текст для усіх зображень (у прототипі вже прописаний)
- `prefers-reduced-motion` — вимикає Framer Motion анімації

## Чого НЕ робити

- ❌ НЕ додавати i18n (тільки українська)
- ❌ НЕ додавати CMS (усе в коді)
- ❌ НЕ додавати авторизацію
- ❌ НЕ використовувати shadcn/ui або подібні component libraries
- ❌ НЕ додавати іконки (Lucide, FontAwesome, emoji) крім стрілок →
- ❌ НЕ додавати pop-up, exit-intent, timer-countdown
- ❌ НЕ змінювати палітру, шрифти, розміри — усе вже визначено
- ❌ НЕ переписувати українські тексти
- ❌ НЕ створювати форму заявки — усі CTA ведуть у Telegram напряму

## Deploy

Створи для Vercel:
- `.env.example` (на майбутнє — `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`)
- `README.md` з інструкцією запуску (`npm install`, `npm run dev`, `npm run build`) і деплою на Vercel
- Коректний `.gitignore`

## Порядок виконання

1. Спочатку покажи мені план файлової структури і `package.json` із залежностями
2. Отримай моє підтвердження
3. Потім генеруй код компонентів по черзі (починай із `layout.tsx`, `globals.css`, `Nav.tsx`, `Hero.tsx`)
4. Наприкінці — Vercel deploy-check і README

Починай.
