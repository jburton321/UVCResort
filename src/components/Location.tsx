import { useRef, useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { ImageCard } from './ImageCard';

const nearbyPlaces = [
  { image: 'resort-photo-12.png', label: 'Puerto Morelos' },
  { image: 'resort-photo-22.png', label: 'Downtown Playa del Carmen' },
  { image: 'resort-photo-32.png', label: 'El Camaleón Golf Course' },
  { image: 'resort-photo-33.png', label: 'Xcaret Park (Eco-Park)' },
];

export function Location() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div > div')?.offsetWidth || 280;
      const scrollAmount = direction === 'left' ? -cardWidth - 12 : cardWidth + 12;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-100 py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <article className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight px-2">
              Discover Adult-Only Luxury in the{' '}
              <Heart className="inline w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-red-500 fill-red-500 align-baseline" />
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              of the Mayan Coast Riviera Cancun.
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mt-3 sm:mt-4 px-2 max-w-2xl mx-auto">
              Carretera Federal 387, Km 299 Solidaridad, Riviera Maya, QR, 77710, Mexico
            </p>
          </div>

          <div className="mb-6 sm:mb-8 md:mb-10">
            <img
              src="image8.png"
              alt="Resort Map"
              className="w-full h-auto rounded-lg sm:rounded-xl md:rounded-2xl object-cover"
            />
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              onScroll={checkScrollability}
              className="overflow-x-auto py-2 sm:py-3 scrollbar-hide scroll-smooth"
            >
              <div className="flex gap-3 sm:gap-4 md:gap-5 px-1 md:justify-center">
                {nearbyPlaces.map((place, index) => (
                  <ImageCard
                    key={index}
                    src={place.image}
                    alt={place.label}
                    label={place.label}
                    overlay
                    className="shrink-0"
                    imageClassName="w-[200px] h-[140px] sm:w-[240px] sm:h-[170px] md:w-[280px] md:h-[200px] lg:w-[220px] lg:h-[160px] xl:w-[250px] xl:h-[180px]"
                  />
                ))}
              </div>
            </div>

            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 touch-manipulation z-10"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 touch-manipulation z-10"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
              </button>
            )}
          </div>
        </article>

        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center px-2">
          <Button className="w-full sm:w-auto sm:min-w-[280px] md:min-w-[320px] lg:min-w-[400px]">
            Reserve Now
          </Button>
        </div>
      </div>
    </section>
  );
}
