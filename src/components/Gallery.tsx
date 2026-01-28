import { CarouselButton } from './CarouselButton';

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

      <CarouselButton direction="left" />
      <CarouselButton direction="right" />
    </section>
  );
}
