import { Heart } from 'lucide-react';
import { Button } from './Button';
import { CarouselButton } from './CarouselButton';
import { ImageCard } from './ImageCard';

const nearbyPlaces = [
  { image: 'resort-photo-12.png', label: 'Puerto Morelos' },
  { image: 'resort-photo-22.png', label: 'Downtown Playa del Carmen' },
  { image: 'resort-photo-32.png', label: 'El Camaleón Golf Course' },
  { image: 'resort-photo-33.png', label: 'Xcaret Park (Eco-Park)' },
];

export function Location() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <article className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight px-2">
              Discover Adult-Only Luxury in the <Heart className="inline w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-500 fill-red-500" />
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              of the Mayan Coast Riviera Cancun.
            </h2>
            <p className="text-black text-sm sm:text-base md:text-xl mt-3 sm:mt-4 px-2">
              Carretera Federal 387, Km 299 Solidaridad, Riviera Maya, QR, 77710, Mexico
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <img
              src="image8.png"
              alt="Resort Map"
              className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
            />
          </div>

          <div className="relative">
            <div className="overflow-x-auto py-3 sm:py-4 scrollbar-hide">
              <div className="flex gap-3 sm:gap-4 min-w-max px-1 sm:justify-center">
                {nearbyPlaces.map((place, index) => (
                  <ImageCard
                    key={index}
                    src={place.image}
                    alt={place.label}
                    label={place.label}
                    overlay
                    className="shrink-0"
                    imageClassName="w-56 h-40 sm:w-72 sm:h-52 md:w-96 md:h-72"
                  />
                ))}
              </div>
            </div>

            <CarouselButton direction="left" className="left-0 sm:left-1" />
            <CarouselButton direction="right" className="right-0 sm:right-1" />
          </div>
        </article>

        <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center px-2">
          <Button className="w-full sm:w-auto sm:min-w-[300px] md:min-w-[400px] lg:max-w-5xl">Reserve Now</Button>
        </div>
      </div>
    </section>
  );
}
