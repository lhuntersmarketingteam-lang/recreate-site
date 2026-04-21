import Image from 'next/image';
import { hasMedia } from '@/lib/media';
import { ImagePlaceholder } from './ImagePlaceholder';

interface SmartImageProps {
  file: string;
  alt: string;
  label: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

/**
 * Rendert <Image> якщо файл є у /public/media (AVAILABLE_MEDIA),
 * інакше — <ImagePlaceholder> з тим самим лейблом, що в прототипі.
 */
export function SmartImage({ file, alt, label, sizes, priority, quality }: SmartImageProps) {
  if (!hasMedia(file)) {
    return <ImagePlaceholder label={label} />;
  }

  return (
    <Image
      src={`/media/${file}`}
      alt={alt}
      fill
      sizes={sizes ?? '(min-width: 1200px) 50vw, 100vw'}
      priority={priority}
      quality={quality}
      style={{ objectFit: 'cover' }}
    />
  );
}
