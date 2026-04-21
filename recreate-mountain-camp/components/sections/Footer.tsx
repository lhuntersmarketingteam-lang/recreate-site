import {
  TELEGRAM_CTA_URL,
  TELEGRAM_USERNAME,
  INSTAGRAM_BRAND_URL,
  INSTAGRAM_BRAND_USERNAME,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/constants';

export function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer__grid">
          <div>
            <h2 className="footer__title">
              Recreate
              <br />
              Mountain Camp.
            </h2>
            <p className="footer__meta">
              Chamonix&nbsp; · &nbsp;June 6–13, 2026&nbsp; · &nbsp;14 людей
            </p>
            <p className="footer__intro">
              Є питання? Напиши в Telegram або Instagram. Відповімо протягом 2 годин.
            </p>
          </div>
          <div>
            <div className="footer__contacts-title">Контакт</div>
            <div className="footer__contacts">
              <a href={TELEGRAM_CTA_URL} target="_blank" rel="noopener noreferrer">
                Telegram · {TELEGRAM_USERNAME}
              </a>
              <a href={INSTAGRAM_BRAND_URL} target="_blank" rel="noopener noreferrer">
                Instagram · {INSTAGRAM_BRAND_USERNAME}
              </a>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Recreate Mountain Camp</span>
          <span>Приводиш друга — кожен платить €2 500.</span>
        </div>
      </div>
    </footer>
  );
}
