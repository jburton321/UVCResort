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
            <div className="flex flex-col items-center lg:items-start order-1">
              <img
                className="hero-sticker-element"
                src="mexico-10.png"
                alt="Mexico destination"
                loading="eager"
              />
            </div>
            <div className="w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] lg:w-auto -mx-4 md:-mx-6 lg:mx-0 order-2">
              <BookingCard />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 lg:left-[calc(50%-720px+2rem)] z-10">
          <img
            className="hero-couple-element"
            src="layer-0-10.png"
            alt="Couple enjoying resort"
            loading="eager"
          />
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute bottom-[12%] left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
          >
            <span className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full group-hover:bg-amber-600 transition-colors">
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            </span>
            <span className="text-gray-900 font-semibold text-lg pr-1">Play video</span>
          </button>
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
