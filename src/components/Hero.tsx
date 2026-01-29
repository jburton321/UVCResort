import { Play } from 'lucide-react';
import { BookingCard } from './BookingCard';
import { BackgroundSection } from './BackgroundSection';

export function Hero() {
  return (
    <BackgroundSection
      backgroundImage="section0.png"
      overlay
      overlayOpacity={30}
      className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col overflow-visible"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-12 w-full flex-1 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 flex-1">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 xl:w-auto order-2 lg:order-1">
            <img
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] h-auto"
              src="mexico-10.png"
              alt="Mexico destination"
            />
            <button className="mt-4 sm:mt-6 bg-white rounded-full py-2.5 sm:py-3 px-5 sm:px-6 flex items-center gap-2.5 shadow-lg hover:shadow-xl transition-shadow min-h-[44px] touch-manipulation active:scale-95">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              <span className="text-gray-900 font-medium text-sm sm:text-base">Play video</span>
            </button>
          </div>
          <div className="w-full sm:w-auto flex justify-center lg:justify-end order-1 lg:order-2 px-2 sm:px-0">
            <BookingCard />
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 left-4 sm:left-6 lg:left-[calc(50%-615px+32px)] w-[280px] sm:w-[350px] md:w-[500px] lg:w-[800px] h-auto pointer-events-none"
        src="layer-0-10.png"
        alt="Couple enjoying resort"
      />
    </BackgroundSection>
  );
}
