import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SmartImage } from '@/components/ui/SmartImage';

interface Emotion {
  file: string;
  placeholderLabel: string;
  alt: string;
  badge: string;
  label: string;
  title: string;
  desc: string;
}

const EMOTIONS: Emotion[] = [
  {
    file: 'emotion-01-place.jpg',
    placeholderLabel: '01 · МІСЦЕ',
    alt: 'Панорамне фото Шамоні з Монбланом',
    badge: '01  ·  Місце',
    label: '01 · Місце',
    title: 'Шамоні — мекка альпінізму.',
    desc: 'Сюди їдуть найкращі з 1786 року. Ти просто приїхав раніше за багатьох своїх.',
  },
  {
    file: 'emotion-02-newexp.jpg',
    placeholderLabel: '02 · НОВИЙ ДОСВІД',
    alt: 'Людина на скелі або віаферраті, репортаж',
    badge: '02  ·  Новий досвід',
    label: '02 · Новий досвід',
    title: 'Перша скеля. Перша віаферрата.',
    desc: 'Сім активностей за вісім днів. Знайдеш ту, яку захочеш узяти з собою в життя.',
  },
  {
    file: 'emotion-03-contrast.jpg',
    placeholderLabel: '03 · КОНТРАСТ',
    alt: 'Контраст: скала зранку, камін увечері',
    badge: '03  ·  Контраст',
    label: '03 · Контраст',
    title: 'Граніт зранку — камін увечері.',
    desc: 'Тіло вчиться перемикатися: напруга, потім тепло, тиша, вино. І так вісім днів.',
  },
  {
    file: 'emotion-04-people.jpg',
    placeholderLabel: '04 · СЕРЕДОВИЩЕ',
    alt: 'Силуети учасників на сонячному світлі в горах',
    badge: '04  ·  Середовище',
    label: '04 · Середовище',
    title: '14 людей з палаючими очима.',
    desc: 'Підприємці, спортсмени, креативники. До третього дня — вже свої. Контакти залишаються в житті.',
  },
  {
    file: 'emotion-05-care.jpg',
    placeholderLabel: '05 · ТУРБОТА',
    alt: 'Деталь побуту: інтерʼєр шале, сервірування',
    badge: '05  ·  Турбота',
    label: '05 · Турбота',
    title: 'Все вже продумано.',
    desc: 'Від трансферу до вечері. Єдине рішення за вісім днів — який десерт узяти після основного.',
  },
  {
    file: 'emotion-06-confidence.jpg',
    placeholderLabel: '06 · EARNED CONFIDENCE',
    alt: 'Людина на вершині, погляд у гори',
    badge: '06  ·  Earned confidence',
    label: '06 · Earned confidence',
    title: 'Впевненість, яку не дають слова.',
    desc: 'Ти був на скелі. Ти пробіг тропами UTMB. Це вже не мотивація — це твій досвід.',
  },
];

export function Emotions() {
  return (
    <section className="container">
      <RevealOnScroll as="div" delay={1}>
        <h2 className="section-title">
          Що ти забереш
          <br />
          із собою.
        </h2>
      </RevealOnScroll>

      <div className="emotions-grid">
        {EMOTIONS.map((e, i) => (
          <RevealOnScroll
            as="article"
            key={e.label}
            delay={(i % 3) as 0 | 1 | 2}
            className="emotion-card"
          >
            <div className="emotion-card__image">
              <SmartImage
                file={e.file}
                alt={e.alt}
                label={e.placeholderLabel}
                sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
              />
            </div>
            <div className="emotion-card__body">
              <div className="emotion-card__label">{e.badge}</div>
              <h3 className="emotion-card__title">{e.title}</h3>
              <p className="emotion-card__desc">{e.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
