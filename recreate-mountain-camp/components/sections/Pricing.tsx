import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { TelegramCTA } from '@/components/ui/TelegramCTA';

const INCLUDED = [
  '8 ночей у преміальному шале · вид 360°',
  'Сніданки та вечері від шеф-повара',
  'Мульти-спортивна програма · 7 активностей',
  'Сертифікований інструктор зі скелелазіння',
  'Гіди по трейлах та віаферратах',
  'Йога-інструктор · щоденні сесії',
  'Сауна щовечора',
  'Професійна фото/відео зйомка',
  'Pre-camp підготовка · план тренувань',
  'Онбординг-дзвінок + знайомство групи',
  'After-camp follow-up',
];

const NOT_INCLUDED = [
  'Авіаквитки',
  'Трансфер Женева → Шамоні (можемо організувати груповий)',
  'Обіди (вільний формат)',
  'Особисте спорядження (дамо чек-лист)',
  'Страхування (обовʼязкове · підкажемо де)',
];

export function Pricing() {
  return (
    <section className="container" id="pricing">
      <div className="pricing">
        <div className="pricing__header">
          <RevealOnScroll as="div">
            <div className="pricing__amount">€2 800</div>
            <div className="pricing__amount-sub">
              Передоплата €1 000 фіксує місце. Решта — за 45 днів до старту.
            </div>
          </RevealOnScroll>
          <RevealOnScroll as="div" delay={1} className="pricing__meta">
            <span className="pricing__early-bird">З другом · €2 500 на кожного</span>
            <p className="pricing__per-day">~€350 / день · 8 днів · усе, крім квитків і обідів</p>
          </RevealOnScroll>
        </div>

        <div className="pricing__includes">
          <RevealOnScroll as="div">
            <div className="pricing__list-title">Включено</div>
            <ul className="pricing__list pricing__list--yes">
              {INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll as="div" delay={1}>
            <div className="pricing__list-title">Не включено</div>
            <ul className="pricing__list pricing__list--no">
              {NOT_INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>

        <RevealOnScroll as="div" className="pricing__cta-row">
          <TelegramCTA variant="primary-dark">Забронювати місце</TelegramCTA>
          <span className="pricing__cta-note">
            Перед бронюванням — короткий дзвінок. Хочемо знати, хто їде.
          </span>
        </RevealOnScroll>
        <p className="pricing__referral">
          Приводиш друга — кожен платить €2 500 замість €2 800.
        </p>
      </div>
    </section>
  );
}
