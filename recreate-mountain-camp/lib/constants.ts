// Telegram deep-link з pre-filled повідомленням (із ТЗ, не змінювати).
// Декодовано: "Привіт! Цікавить Recreate Mountain Camp у Шамоні (6–13 червня).
// Розкажіть деталі, будь ласка."
export const TELEGRAM_CTA_URL =
  'https://t.me/Ilya_marketing1?text=%D0%9F%D1%80%D0%B8%D0%B2%D1%96%D1%82%21%20%D0%A6%D1%96%D0%BA%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20Recreate%20Mountain%20Camp%20%D1%83%20%D0%A8%D0%B0%D0%BC%D0%BE%D0%BD%D1%96%20%286%E2%80%9313%20%D1%87%D0%B5%D1%80%D0%B2%D0%BD%D1%8F%29.%20%D0%A0%D0%BE%D0%B7%D0%BA%D0%B0%D0%B6%D1%96%D1%82%D1%8C%20%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D1%96%2C%20%D0%B1%D1%83%D0%B4%D1%8C%20%D0%BB%D0%B0%D1%81%D0%BA%D0%B0.';

export const TELEGRAM_USERNAME = '@Ilya_marketing1';
export const TELEGRAM_PROFILE_URL = 'https://t.me/Ilya_marketing1';

export const INSTAGRAM_BRAND_URL = 'https://www.instagram.com/recreate.surfcamp';
export const INSTAGRAM_BRAND_USERNAME = '@recreate.surfcamp';

export const PHONE_DISPLAY = '+380 63 030 22 04';
export const PHONE_TEL = '+380630302204';

export const CAMP = {
  name: 'Recreate Mountain Camp',
  city: 'Chamonix',
  dates: 'June 6–13, 2026',
  startDate: '2026-06-06',
  endDate: '2026-06-13',
  people: 14,
  spotsLeft: 9,
  priceEUR: 2800,
  priceFriendEUR: 2500,
  depositEUR: 1000,
} as const;
