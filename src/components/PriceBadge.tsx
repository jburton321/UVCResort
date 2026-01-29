interface PriceBadgeProps {
  days?: string;
  price?: number;
  packageText?: string;
  subText?: string;
  savePercent?: number;
  className?: string;
}

export function PriceBadge({
  days = "5-DAYS",
  price = 299,
  packageText = "PER PACKAGE",
  subText = "(All 4-Nights)",
  savePercent = 84,
  className = "",
}: PriceBadgeProps) {
  return (
    <div className={`price-badge-wrapper ${className}`}>
      <div className="price-badge-tag-left">
        <span>ONLY</span>
      </div>

      <div className="price-badge-ribbon-right">
        <div className="price-badge-save-content">
          <div className="price-badge-save-title">SAVE</div>
          <div className="price-badge-save-value">{savePercent}%</div>
        </div>
      </div>

      <div className="price-badge-circle">
        <div className="price-badge-days">{days}</div>
        <div className="price-badge-price">
          <span className="price-badge-currency">$</span>
          {price}
        </div>
        <div className="price-badge-terms">
          {packageText}<br />
          <span style={{ fontWeight: 'normal' }}>{subText}</span>
        </div>
      </div>
    </div>
  );
}
