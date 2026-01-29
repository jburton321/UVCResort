import { CarouselButton } from './CarouselButton';

interface GalleryImage {
  src: string;
  label?: string;
}

interface GalleryProps {
  images: (string | GalleryImage)[];
  className?: string;
}

export function Gallery({ images, className = '' }: GalleryProps) {
  const normalizedImages = images.map((img) =>
    typeof img === 'string' ? { src: img } : img
  );

  return (
    <section className={`bg-gray-100 relative ${className}`}>
      <div className="overflow-x-auto py-3 sm:py-4 scrollbar-hide">
        <div className="flex gap-3 sm:gap-4 px-3 sm:px-4 min-w-max">
          {normalizedImages.map((image, index) => (
            <div
              key={index}
              className="rounded-xl sm:rounded-2xl overflow-hidden shrink-0 relative group"
            >
              <img
                src={image.src}
                alt={image.label || `Resort photo ${index + 1}`}
                className="w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72 object-cover"
              />
              {image.label && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-12 pb-4 px-4">
                  <p className="text-white text-base sm:text-lg font-semibold text-center">
                    {image.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <CarouselButton direction="left" />
      <CarouselButton direction="right" />
    </section>
  );
}
