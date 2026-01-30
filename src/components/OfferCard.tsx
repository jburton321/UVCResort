import { useCountdown } from '../hooks/useCountdown';
import { PriceBadge } from './PriceBadge';

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
    <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-lg">
      <div className="bg-[#FFD174] py-2 px-4 flex items-center justify-center gap-2">
        <svg className="w-4 h-4 text-[#CC0000]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2v11h3v9l7-12h-4l4-8z" />
        </svg>
        <span className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wide">
          {isExpired ? 'Offer expired' : 'Offer expires:'}
        </span>
        {!isExpired && (
          <div className="flex items-center font-bold text-[#CC0000] text-lg tabular-nums">
            <span>{hours}</span>
            <span className="mx-0.5">:</span>
            <span>{minutes}</span>
            <span className="mx-0.5">:</span>
            <span>{seconds}</span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
          <div className="flex-shrink-0">
            <PriceBadge days={days} price={price} savePercent={savePercent} />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-black text-[#1a1a1a] leading-tight mb-3">
              Luxury All-Inclusive Riviera Cancun Vacation
            </h3>

            <div className="space-y-2 text-sm text-[#333]">
              <div className="flex items-start gap-2 justify-center lg:justify-start">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#b8860b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM19 7h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z" />
                </svg>
                <span className="font-bold">{roomDescription}</span>
              </div>
              <div className="flex items-start gap-2 justify-center lg:justify-start">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#b8860b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
                </svg>
                <span>
                  <span className="font-semibold">Unlimited-Luxury, Where Everything's Included:</span>{' '}
                  Unlimited Dining, Drinks, Wifi, Entertainment, Resort & Beach Amenities!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
