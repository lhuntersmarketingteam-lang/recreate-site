import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SmartImage } from '@/components/ui/SmartImage';

interface Member {
  file: string;
  placeholderLabel: string;
  alt: string;
  name: string;
  role: string;
  instagram: { url: string; username: string };
  quote: string;
  achievements: string[];
  reverse?: boolean;
}

const MEMBERS: Member[] = [
  {
    file: 'team-illya.jpg',
    placeholderLabel: 'ІЛЛЯ · ПОРТРЕТ',
    alt: 'Ілля — співзасновник Recreate',
    name: 'Ілля',
    role: 'Співзасновник · Ідеолог кемпу',
    instagram: {
      url: 'https://www.instagram.com/ilya_sukhomlyn',
      username: '@ilya_sukhomlyn',
    },
    quote:
      '«Моя задача — закохати тебе в гори так, як сам закохався колись. Не через лекції. Через досвід».',
    achievements: [
      '— Професійний баскетболіст у минулому',
      '— Монблан (4 808 м), Маттерхорн (4 478 м)',
      '— Фрідайвінг, параплани, Ironman, напівмарафони',
      '— Скелелазіння, трейли, хайки по Альпах, Карпатах, Кавказу',
    ],
  },
  {
    file: 'team-alina.jpg',
    placeholderLabel: 'АЛІНА · ПОРТРЕТ',
    alt: 'Аліна — співзасновниця Recreate',
    name: 'Аліна',
    role: 'Співзасновниця · Recreate Surf Camp',
    instagram: {
      url: 'https://www.instagram.com/alina.nikitinaa',
      username: '@alina.nikitinaa',
    },
    quote:
      '«На сьорф-кемпах я побачила, як змінюються люди за один тиждень. Тепер переношу це в гори».',
    achievements: [
      '— Маттерхорн (4 478 м)',
      '— Напівмарафони, скелі, трейли',
      '— Професійний спортсмен Hyrox',
      '— Засновниця Recreate Surf Camp',
    ],
    reverse: true,
  },
];

export function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <RevealOnScroll as="div" delay={1}>
          <h2 className="section-title">
            Люди, які стоять
            <br />
            за Recreate.
          </h2>
        </RevealOnScroll>

        {MEMBERS.map((m) => (
          <RevealOnScroll
            key={m.name}
            as="div"
            className={`team-member${m.reverse ? ' team-member--reverse' : ''}`}
          >
            <div className="team-member__photo">
              <SmartImage
                file={m.file}
                alt={m.alt}
                label={m.placeholderLabel}
                sizes="(min-width: 800px) 45vw, 100vw"
              />
            </div>
            <div className="team-member__content">
              <h3 className="team-member__name">{m.name}</h3>
              <p className="team-member__role">{m.role}</p>
              <a
                href={m.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="team-member__ig"
              >
                Instagram · {m.instagram.username}
              </a>
              <p className="team-member__quote">{m.quote}</p>
              <ul className="team-member__achievements">
                {m.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
