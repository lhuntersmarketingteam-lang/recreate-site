'use client';

import { useEffect, useState } from 'react';
import { TelegramCTA } from './TelegramCTA';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Головна навігація">
      <a href="#top" className="nav__logo" aria-label="Recreate — на початок сторінки">
        RECREATE
      </a>
      <div className="nav__links" role="list">
        <a href="#essence" role="listitem">
          Кемп
        </a>
        <a href="#program" role="listitem">
          Програма
        </a>
        <a href="#team" role="listitem">
          Команда
        </a>
        <a href="#faq" role="listitem">
          FAQ
        </a>
      </div>
      <TelegramCTA variant="nav" showArrow={false}>
        Забронювати
      </TelegramCTA>
    </nav>
  );
}
