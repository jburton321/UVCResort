interface PriceBadgeProps {
  className?: string;
  width?: number;
}

export function PriceBadge({ className = "", width = 320 }: PriceBadgeProps) {
  return (
    <img
      src="price-badge.png"
      alt="5-Days $299 Per Package - Save 84%"
      className={className}
      style={{ width: `${width}px`, height: 'auto' }}
    />
  );
}
