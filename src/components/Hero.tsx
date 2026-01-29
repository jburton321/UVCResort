import { Play } from 'lucide-react';
import { BookingCard } from './BookingCard';
import { BackgroundSection } from './BackgroundSection';

export function Hero() {
  return (
    <BackgroundSection
      backgroundImage="section0.png"
      overlay
      overlayOpacity={30}
      className="min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-12 w-full flex-1 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 flex-1">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 xl:w-auto order-2 lg:order-1 flex-1 justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl mb-[-1px]">
              <img
                className="w-full h-auto"
                src="mexico-10.png"
                alt="Mexico destination"
              />
              <img
                className="w-full h-auto block"
                src="layer-0-10.png"
                alt="Resort view"
              />
              <button className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full py-2 sm:py-2.5 px-4 sm:px-5 flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow min-h-[44px] touch-manipulation active:scale-95">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                <span className="text-gray-900 font-medium text-sm sm:text-base">Play video</span>
              </button>
            </div>
          </div>
          <div className="w-full sm:w-auto flex justify-center lg:justify-end order-1 lg:order-2 px-2 sm:px-0">
            <BookingCard />
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
}
