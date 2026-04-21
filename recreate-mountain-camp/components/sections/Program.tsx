import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

interface Day {
  label: string;
  title: string;
  desc: string;
  highlight?: boolean;
}

const DAYS: Day[] = [
  {
    label: 'День 01',
    title: 'Знайомство з Шамоні. Перший хайк.',
    desc: 'Легкий маршрут, щоб тіло зрозуміло, куди воно прилетіло. Ввечері — вечеря, сауна, перше коло знайомств.',
  },
  {
    label: 'День 02',
    title: 'Трейл по тропах UTMB.',
    desc: 'Ті самі тропи, якими щороку в серпні біжить півсвіту. Ти — просто сьогодні.',
  },
  {
    label: 'День 03',
    title: 'Скелелазіння на граніті.',
    desc: 'З нуля, зі страховкою, з інструктором поруч. Зранку страшно, до обіду ти вже лізеш сам/-а.',
  },
  {
    label: 'День 04',
    title: 'Панорамний хайк. Recovery-день.',
    desc: 'Ноги після скелі відновлюються, голова відпочиває. Маршрут, де хочеш зупинятися кожні десять хвилин.',
  },
  {
    label: 'День 05',
    title: 'Віаферрата над ущелиною.',
    desc: 'Сталевий трос, скоби, висота. На початку страшно. Потім уже не можеш перестати усміхатися.',
  },
  {
    label: 'День 06',
    title: 'Довгий трейл. Набір висоти.',
    desc: 'Там, де тіло розуміє, на що воно здатне. І ще одна межа відсовується трохи далі.',
  },
  {
    label: 'День 07',
    title: 'Ночівля в хижині на 2 700 м.',
    desc: 'Піднімаємося до заходу. Вечеряємо разом. Засинаємо з видом на льодовик. Світанок — над хмарами. Одна з тих ночей, які згадуєш роками.',
    highlight: true,
  },
  {
    label: 'День 08',
    title: 'Спуск. Остання вечеря. Прощання.',
    desc: 'Чат групи — вже створено. Контакти — вже обмінялися. Розʼїжджаємося тимчасово: за кілька місяців хтось знову тут.',
  },
];

export function Program() {
  return (
    <section className="container" id="program">
      <RevealOnScroll as="div" delay={1}>
        <h2 className="section-title">8 днів.</h2>
      </RevealOnScroll>

      <div className="program__timeline">
        {DAYS.map((d) => (
          <RevealOnScroll
            key={d.label}
            as="div"
            className={`program__day${d.highlight ? ' program__day--highlight' : ''}`}
          >
            <div className="program__day-label">{d.label}</div>
            <div>
              <h3 className="program__day-title">{d.title}</h3>
              <p className="program__day-desc">{d.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
