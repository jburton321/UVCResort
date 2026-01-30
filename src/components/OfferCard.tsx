import { Bed, Wine } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

interface OfferCardProps {
  days?: string;
  price?: number;
  savePercent?: number;
  roomDescription?: string;
}

export function OfferCard({
  days = '5-DAYS',
  price = 299,
  savePercent = 84,
  roomDescription = 'Deluxe Room for two adults at the 5-Star Hyatt Zilara Riviera Maya',
}: OfferCardProps) {
  const { hours, minutes, seconds, isExpired } = useCountdown(45);

  return (
    <div className="offer-card">
      <div className="offer-card-price-section">
        <div className="offer-card-only-ribbon">
          <span>ONLY</span>
        </div>

        <div className="offer-card-save-ribbon">
          <div className="offer-card-save-content">
            <div className="offer-card-save-label">SAVE</div>
            <div className="offer-card-save-value">{savePercent}%</div>
          </div>
        </div>

        <div className="offer-card-circle">
          <div className="offer-card-days">{days}</div>
          <div className="offer-card-price">
            <span className="offer-card-currency">$</span>
            {price}
          </div>
          <div className="offer-card-terms">
            PER PACKAGE
            <span className="offer-card-sub">(All 4-Nights)</span>
          </div>
        </div>
      </div>

      <div className="offer-card-details">
        <h3 className="offer-card-title">
          Luxury All-Inclusive<br />
          Riviera Cancun Vacation
        </h3>

        <div className="offer-card-features">
          <div className="offer-card-feature">
            <Bed className="offer-card-icon" />
            <p className="offer-card-feature-text">{roomDescription}</p>
          </div>

          <div className="offer-card-feature">
            <Wine className="offer-card-icon" />
            <p className="offer-card-feature-text">
              <span className="font-bold">Unlimited-Luxury, Where Everything's Included:</span>{' '}
              Unlimited Dining, Drinks, Wifi, Entertainment, Resort & Beach Amenities!
            </p>
          </div>
        </div>
      </div>

      <div className="offer-card-timer-section">
        <div className="offer-card-expires-label">OFFER EXPIRES:</div>
        {!isExpired ? (
          <div className="offer-card-countdown">
            <div className="offer-card-time-block">
              <span className="offer-card-time-value">{hours}</span>
              <span className="offer-card-time-label">HR</span>
            </div>
            <span className="offer-card-time-separator">:</span>
            <div className="offer-card-time-block">
              <span className="offer-card-time-value">{minutes}</span>
              <span className="offer-card-time-label">MIN</span>
            </div>
            <span className="offer-card-time-separator">:</span>
            <div className="offer-card-time-block">
              <span className="offer-card-time-value">{seconds}</span>
              <span className="offer-card-time-label">SEC</span>
            </div>
          </div>
        ) : (
          <div className="offer-card-expired">EXPIRED</div>
        )}
      </div>
    </div>
  );
}
