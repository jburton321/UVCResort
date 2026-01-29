import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  label?: string;
}

interface GalleryProps {
  images: (string | GalleryImage)[];
  className?: string;
}

export function Gallery({ images, className = '' }: GalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const normalizedImages = images.map((img) =>
    typeof img === 'string' ? { src: img } : img
  );

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
      const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 300;
      const scrollAmount = direction === 'left' ? -cardWidth - 16 : cardWidth + 16;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={`bg-gray-100 relative ${className}`}>
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="overflow-x-auto py-4 md:py-6 scrollbar-hide scroll-smooth"
      >
        <div className="flex gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8">
          {normalizedImages.map((image, index) => (
            <div
              key={index}
              className="rounded-xl sm:rounded-2xl overflow-hidden shrink-0 relative group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.label || `Resort photo ${index + 1}`}
                className="w-[280px] h-[200px] sm:w-[320px] sm:h-[240px] md:w-[380px] md:h-[280px] lg:w-[420px] lg:h-[300px] object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              {image.label && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16 pb-4 sm:pb-5 px-4 transition-opacity duration-300">
                  <p className="text-white text-sm sm:text-base md:text-lg font-semibold text-center drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                    {image.label}
                  </p>
                </div>
              )}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 border-4 border-white/30 rounded-xl sm:rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 touch-manipulation z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 touch-manipulation z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
        </button>
      )}
    </section>
  );
}
