import { Zap, Bed, Wine, Eye } from 'lucide-react';
import { Button } from './Button';

interface BookingCardProps {
  normalRate?: string;
  salePrice?: string;
  discount?: string;
  roomDescription?: string;
}

export function BookingCard({
  normalRate = '$5,600',
  salePrice = '$299*',
  discount = '84% OFF!',
  roomDescription = 'Deluxe Room for two adults at the 5-Star Hyatt Zilara Riviera Maya',
}: BookingCardProps) {
  return (
    <aside className="bg-white rounded-2xl shadow-xl w-full max-w-[340px] sm:max-w-sm overflow-hidden backdrop-blur-sm">
      <div className="bg-amber-300 px-2 sm:px-3 py-2 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        <Zap className="w-4 h-5 text-black" />
        <span className="text-black font-bold text-sm sm:text-lg uppercase">Offer expires:</span>
        <div className="flex items-center gap-1 text-orange-600 font-bold">
          <div className="text-center">
            <span className="text-base sm:text-lg">00</span>
            <span className="text-[10px] sm:text-xs text-black uppercase block">hr</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <span className="text-base sm:text-lg">44</span>
            <span className="text-[10px] sm:text-xs text-black uppercase block">min</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <span className="text-base sm:text-lg">54</span>
            <span className="text-[10px] sm:text-xs text-black uppercase block">sec</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
        <img
          className="h-10 sm:h-14 w-auto mx-auto"
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

      <div className="bg-gray-100 py-3 sm:py-4 pr-3 sm:pr-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="bg-violet-700 text-white font-bold text-lg sm:text-2xl py-3 sm:py-4 px-2 sm:px-4 rounded-r-xl text-center leading-tight">
            <div>84%</div>
            <div>OFF!</div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-600 line-through text-xs sm:text-sm">Normal Rate: {normalRate}</p>
            <p className="text-slate-800 font-bold text-3xl sm:text-5xl">{salePrice}</p>
          </div>
          <div className="text-slate-800 font-bold text-right shrink-0">
            <span className="text-base sm:text-xl">TODAY!</span>
            <span className="block text-[10px] sm:text-xs">PER COUPLE</span>
          </div>
        </div>
        <p className="text-slate-800 font-bold text-xs sm:text-sm text-center mt-2">
          *Pay $600 at the time of booking for all 5-days/4-nights
        </p>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <Bed className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
          <p className="text-black font-bold text-sm sm:text-base">{roomDescription}</p>
        </div>

        <div className="flex items-start gap-2">
          <Wine className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
          <p className="text-black text-sm sm:text-base">
            <span className="font-bold">Unlimited-Luxury, Where Everything's Included:</span>{' '}
            Unlimited Dining, Drinks, Wifi, Entertainment, Resort & Beach Amenities!
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-8 pb-4">
        <Button className="w-full min-h-[48px] touch-manipulation">Reserve Now</Button>
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-2">
        <img src="_67-d-1-d-1794-aad-1-f-2-f-82-ae-2-d-25-badge-1-svg0.svg" alt="Badge" className="w-14 h-14 sm:w-20 sm:h-20" />
        <img src="vector0.svg" alt="Trust badge" className="w-14 h-14 sm:w-20 sm:h-20" />
        <img src="vector31.svg" alt="Trust badge" className="w-14 h-14 sm:w-20 sm:h-20" />
      </div>

      <div className="bg-slate-900 px-3 sm:px-4 py-2 flex items-center justify-between gap-2">
        <p className="text-white text-xs sm:text-sm text-center flex-1">
          This offer is getting a lot of attention.<br />
          Viewed 181 times in the past hour!
        </p>
        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0" />
      </div>
    </aside>
  );
}
