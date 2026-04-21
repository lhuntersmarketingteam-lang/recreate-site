// Реєстр наявних медіа-файлів у /public/media.
// Коли додаєш реальне фото — просто впиши його імʼя сюди,
// і SmartImage автоматично замінить <ImagePlaceholder> на <Image>.
//
// Імена відсутніх файлів (для довідки):
//   emotion-01-place.jpg       панорама Шамоні без людей
//   emotion-02-newexp.jpg      людина на скелі / віаферраті
//   emotion-03-contrast.jpg    деталь: камін, чай, стіл
//   emotion-05-care.jpg        інтерʼєр шале, сервірування
//   emotion-06-confidence.jpg  людина на вершині
//   activity-trail.jpg
//   activity-hiking.jpg
//   activity-climbing.jpg
//   activity-strength.jpg
//   activity-yoga.jpg
//   activity-tea.jpg
//   chef-food.jpg
//   sauna.jpg
//   care-detail.jpg
//   team-alina.jpg

export const AVAILABLE_MEDIA = new Set<string>([
  'hero-fallback.jpg',
  'hero-video.mp4',
  'immersion-photo.jpg',
  'emotion-04-people.jpg',
  'chamonix-photo.jpg',
  'activity-viaferrata.jpg',
  'villa-exterior.jpg',
  'team-illya.jpg',
]);

export function hasMedia(filename: string): boolean {
  return AVAILABLE_MEDIA.has(filename);
}
