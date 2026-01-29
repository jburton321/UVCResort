import { Zap, Bed, Wine, Eye } from 'lucide-react';
import { Button } from './Button';
import { useCountdown } from '../hooks/useCountdown';

interface BookingCardProps {
  normalRate?: string;
  salePrice?: string;
  roomDescription?: string;
}

export function BookingCard({
  normalRate = '$5,600',
  salePrice = '$299*',
  roomDescription = 'Deluxe Room for two adults at the 5-Star Hyatt Zilara Riviera Maya',
}: BookingCardProps) {
  const { hours, minutes, seconds, isExpired } = useCountdown(45);

  return (
    <aside className="bg-white rounded-2xl shadow-xl w-full max-w-none lg:max-w-sm overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-shadow duration-500">
      <div className="bg-[#FFD174] px-2 sm:px-3 py-2.5 flex items-center justify-center gap-2">
        <Zap className="w-4 h-5 text-red-600 animate-pulse" />
        <span className="text-slate-900 font-bold text-sm sm:text-base uppercase">
          {isExpired ? 'Offer expired' : 'Offer expires:'}
        </span>
        {!isExpired && (
          <div className="flex items-center gap-0.5 font-bold text-red-600 text-lg sm:text-xl tabular-nums">
            <span className="min-w-[28px] text-center">{hours}</span>
            <span className="animate-pulse">:</span>
            <span className="min-w-[28px] text-center">{minutes}</span>
            <span className="animate-pulse">:</span>
            <span className="min-w-[28px] text-center">{seconds}</span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
        <img
          className="h-10 sm:h-14 w-auto mx-auto transition-transform duration-300 hover:scale-105"
          src="image-30.png"
          alt="Hyatt Zilara"
        />

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex-1 h-0.5 bg-slate-800"></div>
          <span className="text-slate-800 font-bold text-base sm:text-lg whitespace-nowrap">5-Days / 4-Nights</span>
          <div className="flex-1 h-0.5 bg-slate-800"></div>
        </div>

        <h3 className="text-slate-800 font-bold text-xl sm:text-2xl text-center leading-tight">
          Luxury All-Inclusive<br />Riviera Cancun Vacation
        </h3>
      </div>

      <div className="bg-gray-100 py-3 sm:py-4 px-3 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="bg-primary text-white font-bold text-lg sm:text-2xl py-3 sm:py-4 px-2 sm:px-4 rounded-xl text-center leading-tight shadow-lg animate-bounce-subtle">
            <div>84%</div>
            <div>OFF!</div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-600 text-xs sm:text-sm">
              Normal Rate: <span className="line-through font-bold text-red-600">{normalRate}</span>
            </p>
            <p className="text-slate-800 font-bold text-3xl sm:text-5xl">{salePrice}</p>
          </div>
          <div className="text-slate-800 font-bold text-right shrink-0">
            <span className="text-base sm:text-xl">TODAY!</span>
            <span className="block text-[10px] sm:text-xs">PER COUPLE</span>
          </div>
        </div>
        <p className="text-slate-800 font-bold text-[0.8rem] text-center mt-3">
          *Pay $600 at the time of booking for all 5-days/4-nights
        </p>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <Bed className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="text-black font-bold text-sm sm:text-base">{roomDescription}</p>
        </div>

        <div className="flex items-start gap-2">
          <Wine className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="text-black text-sm sm:text-base">
            <span className="font-bold">Unlimited-Luxury, Where Everything's Included:</span>{' '}
            Unlimited Dining, Drinks, Wifi, Entertainment, Resort & Beach Amenities!
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-8 pb-4">
        <Button className="w-full min-h-[48px] touch-manipulation">Reserve Now</Button>
      </div>

      <div className="flex items-center justify-center gap-3 sm:gap-4 py-4 sm:py-5 px-4">
        <img src="trust.png" alt="Secure Transaction Badge" className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 hover:scale-110" />
        <img src="vector0.svg" alt="Trust badge" className="h-10 sm:h-14 w-auto transition-transform duration-300 hover:scale-110" />
        <img src="vector31.svg" alt="Trust badge" className="h-10 sm:h-14 w-auto transition-transform duration-300 hover:scale-110" />
      </div>

      <div className="bg-brand-900 px-3 sm:px-4 py-2 flex items-center justify-between gap-2">
        <p className="text-white text-xs sm:text-sm text-center flex-1">
          This offer is getting a lot of attention.<br />
          Viewed 181 times in the past hour!
        </p>
        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0 animate-pulse" />
      </div>
    </aside>
  );
}
