import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SmartImage } from '@/components/ui/SmartImage';

export function Chamonix() {
  return (
    <section className="chamonix">
      <div className="chamonix__media">
        <SmartImage
          file="chamonix-photo.jpg"
          alt="Шамоні — старе містечко з видом на Aiguille du Midi і Монблан"
          label="ШАМОНІ · ПАНОРАМА"
          sizes="100vw"
        />
      </div>

      <div className="chamonix__content">
        <RevealOnScroll as="div">
          <h2 className="chamonix__title">Чому Шамоні.</h2>
        </RevealOnScroll>
        <RevealOnScroll as="p" delay={1} className="chamonix__text">
          Тут зародився альпінізм. Звідси починається UTMB — найбільша трейл-гонка планети.
          Пʼятнадцять хвилин від центру — і ти вже на висоті. Година від аеропорту Женеви. Монблан —
          перед очима щоранку.
        </RevealOnScroll>

        <div className="chamonix__facts">
          <RevealOnScroll as="div" delay={1}>
            <div className="chamonix__fact-num">1786</div>
            <div className="chamonix__fact-label">Рік, коли вперше зійшли на Монблан</div>
          </RevealOnScroll>
          <RevealOnScroll as="div" delay={2}>
            <div className="chamonix__fact-num">UTMB</div>
            <div className="chamonix__fact-label">Найбільша трейл-гонка планети</div>
          </RevealOnScroll>
          <RevealOnScroll as="div" delay={3}>
            <div className="chamonix__fact-num">1 год</div>
            <div className="chamonix__fact-label">Від аеропорту Женеви до шале</div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
