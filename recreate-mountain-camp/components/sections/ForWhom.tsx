import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

interface Item {
  num: string;
  title: string;
  desc: string;
}

const ITEMS: Item[] = [
  {
    num: '01',
    title: 'Втомився/-лась від одного й того самого відпочинку',
    desc: 'Не лежак. Не чергова країна в колекції. А вісім днів, після яких відчуваєш себе живим/-ою.',
  },
  {
    num: '02',
    title: 'Живеш у голові, не в тілі',
    desc: 'Тропи, скелі, силові, йога. Тіло знову нагадає про себе. Голова нарешті помовчить.',
  },
  {
    num: '03',
    title: 'Хочеш щось справжнє',
    desc: 'Нове середовище. Нові звʼязки. Точка входу в інше життя — не гучні слова, а точка на карті.',
  },
  {
    num: '04',
    title: 'Давно хочеш спробувати гірський спорт',
    desc: 'Досвіду не потрібно. Потрібна готовність. Усе решта — з нами і з інструкторами.',
  },
];

export function ForWhom() {
  return (
    <section className="for-whom">
      <div className="container">
        <RevealOnScroll as="div" delay={1}>
          <h2 className="section-title">
            Це для тебе,
            <br />
            якщо...
          </h2>
        </RevealOnScroll>

        <div className="for-whom__grid">
          {ITEMS.map((item, i) => (
            <RevealOnScroll
              key={item.num}
              as="div"
              delay={(i % 2) as 0 | 1}
              className="for-whom__item"
            >
              <div className="for-whom__num">{item.num}</div>
              <div className="for-whom__title">{item.title}</div>
              <p className="for-whom__desc">{item.desc}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll as="div" className="for-whom__not">
          <div className="for-whom__not-title">Це не для тебе, якщо...</div>
          <p className="for-whom__not-text">
            Шукаєш пасивний відпочинок. Не готовий/-а до 4–6 годин активності щодня. Хочеш чисті
            спортивні збори із секундоміром. Їдеш за «духовним ретритом». Очікуєш, що буде легко.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
