import { useState } from 'react';
import { Play } from 'lucide-react';
import { BookingCard } from './BookingCard';
import { BackgroundSection } from './BackgroundSection';
import { Lightbox } from './Lightbox';

export function Hero() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <BackgroundSection
        backgroundImage="section0.png"
        overlay
        overlayOpacity={30}
        className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col overflow-visible"
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-12 w-full flex-1 flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 flex-1">
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 xl:w-auto order-1">
              <img
                className="hero-sticker-element"
                src="mexico-10.png"
                alt="Mexico destination"
              />
              <div className="relative w-[280px] sm:w-[350px] md:w-[500px] lg:w-[800px] mt-4">
                <img
                  className="hero-couple-element w-full"
                  src="layer-0-10.png"
                  alt="Couple enjoying resort"
                />
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-full group-hover:bg-amber-600 transition-colors">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white ml-0.5" />
                  </span>
                  <span className="text-gray-900 font-semibold text-base sm:text-lg pr-1">Play video</span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-auto flex justify-center lg:justify-end order-2 px-0 lg:px-0">
              <BookingCard />
            </div>
          </div>
        </div>
      </BackgroundSection>

      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        title="Resort Video"
      />
    </>
  );
}
