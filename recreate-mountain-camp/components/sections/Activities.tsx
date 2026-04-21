import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SmartImage } from '@/components/ui/SmartImage';

interface Activity {
  file: string;
  placeholderLabel: string;
  alt: string;
  num: string;
  title: string;
  desc: string;
}

const ACTIVITIES: Activity[] = [
  {
    file: 'activity-trail.jpg',
    placeholderLabel: 'Трейл',
    alt: 'Трейлраннер на тропі UTMB',
    num: '01 / 07',
    title: 'Трейл',
    desc: 'По справжніх тропах UTMB. Бігти чи йти — вирішуєш ти.',
  },
  {
    file: 'activity-hiking.jpg',
    placeholderLabel: 'Хайкінг',
    alt: 'Група на панорамному маршруті',
    num: '02 / 07',
    title: 'Хайкінг',
    desc: 'Від панорамних маршрутів до ночівлі у хижині на 2 700 м.',
  },
  {
    file: 'activity-climbing.jpg',
    placeholderLabel: 'Скелелазіння',
    alt: 'Людина на граніті, з інструктором',
    num: '03 / 07',
    title: 'Скелелазіння',
    desc: 'Граніт Шамоні. З нуля, з інструктором, зі страховкою.',
  },
  {
    file: 'activity-viaferrata.jpg',
    placeholderLabel: 'Віаферрата',
    alt: 'Віаферрата — вид зверху на ноги і спорядження групи',
    num: '04 / 07',
    title: 'Віаферрата',
    desc: 'Сталевий трос. Ущелина. Відчуття — на все життя.',
  },
  {
    file: 'activity-strength.jpg',
    placeholderLabel: 'Силові',
    alt: 'Функціональні силові на природі',
    num: '05 / 07',
    title: 'Силові',
    desc: 'Короткі сесії на свіжому повітрі — тримають тіло між навантаженнями.',
  },
  {
    file: 'activity-yoga.jpg',
    placeholderLabel: 'Йога · Медитація',
    alt: 'Йога та медитація на природному світлі',
    num: '06 / 07',
    title: 'Йога · Медитація',
    desc: 'Повертає тіло після гір. Не «баланс тіла і душі» — просто працює.',
  },
  {
    file: 'activity-tea.jpg',
    placeholderLabel: 'Чайна церемонія',
    alt: 'Чайна церемонія, спокійний інтерʼєр',
    num: '07 / 07',
    title: 'Чайна церемонія',
    desc: 'Ритуал сповільнення. День раптом стає довшим.',
  },
];

export function Activities() {
  return (
    <section className="activities container">
      <div className="section-title section-title--with-note">
        <RevealOnScroll as="div" delay={1}>
          <h2 className="section-title" style={{ margin: 0, maxWidth: '14ch' }}>
            Кожен день
            <br />
            — новий досвід.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll as="p" delay={2} className="section-title__note">
          7 видів активностей за 8 днів. Рівномірно. Без домінуючого жанру.
        </RevealOnScroll>
      </div>

      <div className="activities-scroll">
        {ACTIVITIES.map((a, i) => (
          <RevealOnScroll
            as="article"
            key={a.num}
            delay={(i % 4) as 0 | 1 | 2 | 3}
            className="activity-card"
          >
            <div className="activity-card__num">{a.num}</div>
            <div className="activity-card__image">
              <SmartImage
                file={a.file}
                alt={a.alt}
                label={a.placeholderLabel}
                sizes="(min-width: 1200px) 22vw, 70vw"
              />
            </div>
            <h3 className="activity-card__title">{a.title}</h3>
            <p className="activity-card__desc">{a.desc}</p>
          </RevealOnScroll>
        ))}
      </div>
      <div className="activities-hint">Проведи, щоб подивитися всі сім &nbsp;→</div>
    </section>
  );
}
