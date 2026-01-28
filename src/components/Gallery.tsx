import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: string[];
  className?: string;
}

export function Gallery({ images, className = '' }: GalleryProps) {
  return (
    <section className={`bg-gray-100 relative ${className}`}>
      <div className="overflow-x-auto py-4">
        <div className="flex gap-4 px-4 min-w-max">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shrink-0"
            >
              <img
                src={src}
                alt={`Resort photo ${index + 1}`}
                className="w-96 h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/30 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/30 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </section>
  );
}
