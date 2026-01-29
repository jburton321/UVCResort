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
        className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[800px] flex flex-col overflow-visible"
      >
        <div className="max-w-content mx-auto px-4 md:px-6 lg:px-8 pt-fluid-3 w-full flex-1 flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-fluid-4 flex-1">
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 xl:w-auto order-1">
              <img
                className="hero-sticker-element w-auto h-auto max-w-[200px] md:max-w-[280px] lg:max-w-none"
                src="mexico-10.png"
                alt="Mexico destination"
                loading="eager"
              />
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[800px] mt-4">
                <img
                  className="hero-couple-element w-full h-auto"
                  src="layer-0-10.png"
                  alt="Couple enjoying resort"
                  loading="eager"
                />
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute bottom-[8%] sm:bottom-[10%] md:bottom-[12%] left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group min-h-touch touch-manipulation"
                >
                  <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-amber-500 rounded-full group-hover:bg-amber-600 transition-colors">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-white ml-0.5" />
                  </span>
                  <span className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg pr-1">Play video</span>
                </button>
              </div>
            </div>
            <div className="w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] lg:w-auto -mx-4 md:-mx-6 lg:mx-0 order-2">
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
