import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: string[];
  className?: string;
}

export function Gallery({ images, className = '' }: GalleryProps) {
  return (
    <section className={`bg-gray-100 relative ${className}`}>
      <div className="overflow-x-auto py-3 sm:py-4 scrollbar-hide">
        <div className="flex gap-3 sm:gap-4 px-3 sm:px-4 min-w-max">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-xl sm:rounded-2xl overflow-hidden shrink-0"
            >
              <img
                src={src}
                alt={`Resort photo ${index + 1}`}
                className="w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black/30 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 active:scale-95 transition-all touch-manipulation min-w-[44px] min-h-[44px]"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
      </button>

      <button
        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black/30 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 active:scale-95 transition-all touch-manipulation min-w-[44px] min-h-[44px]"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
      </button>
    </section>
  );
}
