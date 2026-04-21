import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SmartImage } from '@/components/ui/SmartImage';

export function Immersion() {
  return (
    <section className="container" style={{ paddingTop: 'clamp(5rem, 10vw, 8rem)' }}>
      <div className="immersion">
        <RevealOnScroll as="div" className="immersion__media">
          <SmartImage
            file="immersion-photo.jpg"
            alt="Ч/б кадр: трійка на засніженому схилі над хмарами"
            label="ІМЕРСІЯ · ШАЛЕ"
            sizes="(min-width: 900px) 55vw, 100vw"
          />
        </RevealOnScroll>

        <RevealOnScroll as="div" delay={1} className="immersion__content">
          <div className="immersion__eyebrow eyebrow">Перший день</div>
          <div className="immersion__text">
            <p>
              Ранок. Відкриваєш очі — Монблан за вікном. Запах кави знизу, десь шеф уже щось готує.
              У шале тихо, лише чути, як прокидається група.
            </p>
            <p>
              До обіду — гори. Тропа, скеля чи віаферрата над ущелиною — залежить від дня. Тіло
              вмикається не одразу. А потім ловиш темп, дихання вирівнюється, і ти розумієш, що це
              воно.
            </p>
            <p>
              Після обіду — повільно. Йога чи сауна, душ, довгий прийом їжі за одним столом. З
              людьми, яких ти вранці ще толком не знав, а до вечора вже сміється вся вілла.
            </p>
            <p>
              Увечері — вино, розмови, хтось грає, хтось дивиться у вогонь. І ще один день, який не
              схожий на жоден попередній.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
