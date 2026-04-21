import Image from 'next/image';
import { TelegramCTA } from '@/components/ui/TelegramCTA';
import { CAMP } from '@/lib/constants';

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__media">
        {/*
          Hero-відео: нативний тег (НЕ обгортати у Framer Motion).
          preload="metadata" — не тягне весь файл до взаємодії.
          poster + <Image> як fallback для slow connection / reduced-motion.
        */}
        <Image
          src="/media/hero-fallback.jpg"
          alt="Шамоні — світанок у хижині над хмарами"
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-fallback.jpg"
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0 }}
        >
          <source src="/media/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero__content">
        <h1 className="hero__title">
          Recreate
          <br />
          Mountain Camp.
        </h1>
        <p className="hero__subtitle">Перший кемп. Перша точка на карті.</p>

        <div className="hero__meta">
          <div className="hero__stat">
            <span className="hero__stat-num">14</span>
            <span className="hero__stat-label">Людей</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">7</span>
            <span className="hero__stat-label">Активностей</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">3</span>
            <span className="hero__stat-label">Тренери</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">1</span>
            <span className="hero__stat-label">Шеф-повар</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">1</span>
            <span className="hero__stat-label">Вілла</span>
          </div>
        </div>

        <p className="hero__social-proof">
          {CAMP.city}&nbsp; · &nbsp;{CAMP.dates}
        </p>

        <div className="hero__actions">
          <TelegramCTA variant="primary">Забронювати місце</TelegramCTA>
          <span className="hero__spots">
            {CAMP.spotsLeft} з {CAMP.people} місць вільні
          </span>
        </div>
      </div>
    </header>
  );
}
