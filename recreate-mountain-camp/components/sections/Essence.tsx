import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export function Essence() {
  return (
    <section className="essence" id="essence">
      <div className="container">
        <RevealOnScroll as="div">
          <h2 className="essence__title">
            Не тур.
            <br />
            Не ретрит.
            <br />
            Не збори.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll as="div" delay={1}>
          <div className="essence__divider" />
        </RevealOnScroll>
        <RevealOnScroll as="div" delay={2}>
          <p className="essence__text">
            <strong>Mountain lifestyle camp</strong> — де все найкраще з гірського досвіду зібрано в
            8 днів із максимальною турботою.
          </p>
        </RevealOnScroll>
        <RevealOnScroll as="div" delay={3}>
          <p className="essence__text essence__text-secondary">
            Ми закохані в гори й активний спорт — і хочемо передати цю закоханість тобі.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
