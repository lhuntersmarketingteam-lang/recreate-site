import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SmartImage } from '@/components/ui/SmartImage';

interface Pair {
  file: string;
  placeholderLabel: string;
  alt: string;
  eyebrow: string;
  title: string;
  text: string;
  reverse?: boolean;
}

const PAIRS: Pair[] = [
  {
    file: 'villa-exterior.jpg',
    placeholderLabel: 'ВІЛЛА · ЕКСТЕРʼЄР',
    alt: 'Гірська хижина з видом на долину',
    eyebrow: 'Вілла',
    title: 'Вілла в серці Шамоні.',
    text: 'Камін. Тераса з видом на Монблан. Великий спільний стіл. Простір, у який хочеться повертатися після кожного маршруту — і залишатися ще на одну розмову.',
  },
  {
    file: 'chef-food.jpg',
    placeholderLabel: 'ШЕФ · ЛОКАЛЬНІ ПРОДУКТИ',
    alt: 'Подача від шефа, локальні продукти, довгий стіл',
    eyebrow: 'Шеф-повар',
    title: 'Свіжі локальні продукти.',
    text: 'Один довгий стіл на 14. Сніданок і вечеря щодня. Не буфет на 200 людей, а їжа, яку готують саме для цієї групи.',
    reverse: true,
  },
  {
    file: 'sauna.jpg',
    placeholderLabel: 'САУНА',
    alt: 'Інтерʼєр сауни, дерево, тепле світло',
    eyebrow: 'Сауна',
    title: 'Після гір — тепло і тиша.',
    text: 'Сауна щовечора. Після трейлу чи скелі тіло само веде тебе сюди. Не додаткова опція — просто частина дня.',
  },
  {
    file: 'care-detail.jpg',
    placeholderLabel: 'ТУРБОТА · ДЕТАЛЬ',
    alt: 'Деталь турботи: гори, краєвид, момент спокою',
    eyebrow: 'Турбота',
    title: 'Все продумано до тебе.',
    text: 'Трансфери, страховка, спорядження, маршрути, ритм дня, графік сну. Єдине, що від тебе — купити квиток у Женеву. Решту не думаєш.',
    reverse: true,
  },
];

export function Environment() {
  return (
    <section className="container">
      <RevealOnScroll as="div" delay={1}>
        <h2 className="section-title env__title">
          Як ми
          <br />
          піклуємось.
        </h2>
      </RevealOnScroll>

      {PAIRS.map((p) => (
        <div key={p.title} className={`env-pair${p.reverse ? ' env-pair--reverse' : ''}`}>
          <RevealOnScroll as="div" className="env-pair__media">
            <SmartImage
              file={p.file}
              alt={p.alt}
              label={p.placeholderLabel}
              sizes="(min-width: 900px) 50vw, 100vw"
            />
          </RevealOnScroll>
          <RevealOnScroll as="div" delay={1} className="env-pair__content">
            <div className="env-pair__eyebrow eyebrow">{p.eyebrow}</div>
            <h3 className="env-pair__title">{p.title}</h3>
            <p className="env-pair__text">{p.text}</p>
          </RevealOnScroll>
        </div>
      ))}
    </section>
  );
}
