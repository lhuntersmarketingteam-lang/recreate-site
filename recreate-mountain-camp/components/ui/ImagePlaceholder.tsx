interface ImagePlaceholderProps {
  label: string;
}

export function ImagePlaceholder({ label }: ImagePlaceholderProps) {
  return (
    <div className="img-placeholder" role="img" aria-label={label}>
      {label}
    </div>
  );
}
