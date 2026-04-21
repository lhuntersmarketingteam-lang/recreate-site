import { TELEGRAM_CTA_URL } from '@/lib/constants';
import type { ReactNode } from 'react';

interface TelegramCTAProps {
  children?: ReactNode;
  variant?: 'primary' | 'primary-dark' | 'nav';
  className?: string;
  showArrow?: boolean;
  ariaLabel?: string;
}

export function TelegramCTA({
  children = 'Забронювати місце',
  variant = 'primary',
  className,
  showArrow = true,
  ariaLabel,
}: TelegramCTAProps) {
  const classes = {
    primary: 'btn-primary',
    'primary-dark': 'btn-primary btn-primary--dark',
    nav: 'nav__cta',
  } as const;

  const base = classes[variant];
  const finalClass = className ? `${base} ${className}` : base;

  return (
    <a
      href={TELEGRAM_CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={finalClass}
      aria-label={ariaLabel ?? 'Забронювати місце на Recreate Mountain Camp через Telegram'}
    >
      {children}
      {showArrow && variant !== 'nav' ? (
        <span className="btn-primary__arrow" aria-hidden="true">
          →
        </span>
      ) : null}
    </a>
  );
}
