import { Zap } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { PriceBadge } from './PriceBadge';

export function AccommodationsPriceBar() {
  const { hours, minutes, seconds, isExpired } = useCountdown(45);

  return (
    <div className="w-full bg-[#e8e8e8]/90 rounded-b-3xl">
      <div className="flex items-center px-4 py-3 gap-4">
        <div className="flex-shrink-0 w-[100px] h-[85px] overflow-visible relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 origin-left" style={{ transform: 'translateY(-50%) scale(0.28)' }}>
            <PriceBadge className="!transform-none" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-[#1a365d] text-base font-bold leading-tight mb-1">
            Luxury All-Inclusive<br />
            Riviera Cancun Vacation
          </h2>
          <div className="space-y-1">
            <div className="flex items-start gap-1.5">
              <BedIcon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#1a365d]" />
              <span className="text-[11px] text-[#1a365d] leading-tight">
                <span className="font-bold">Deluxe Room for two adults at the 5-Star Hyatt Zilara Riviera Maya</span>
              </span>
            </div>
            <div className="flex items-start gap-1.5">
              <CocktailIcon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#1a365d]" />
              <span className="text-[11px] text-[#1a365d] leading-tight">
                <span className="font-bold">Unlimited-Luxury:</span>{' '}
                Unlimited Dining, Drinks, Wifi, Entertainment & Beach Amenities!
              </span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="bg-[#FFD174] rounded-lg px-3 py-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-red-600 animate-pulse flex-shrink-0" />
            <div className="flex flex-col items-center">
              <span className="text-slate-900 font-bold text-xs uppercase tracking-wide">
                {isExpired ? 'Offer expired' : 'Offer expires:'}
              </span>
              {!isExpired && (
                <div className="flex items-center gap-0.5 font-bold text-red-600 text-xl tabular-nums">
                  <span className="min-w-[24px] text-center">{hours}</span>
                  <span className="animate-pulse">:</span>
                  <span className="min-w-[24px] text-center">{minutes}</span>
                  <span className="animate-pulse">:</span>
                  <span className="min-w-[24px] text-center">{seconds}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM19 7h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z" />
    </svg>
  );
}

function CocktailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.5 7l-2-2h13l-2 2m2 5.27L12 7.5l-5.5 4.77V18h11v-5.73M8 19c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M21 3H3v2l8 7.5V18H5v2h14v-2h-6v-5.5L21 5V3z" />
    </svg>
  );
}
