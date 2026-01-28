import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from './Button';

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
                  <div
                    key={index}
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden shrink-0"
                  >
                    <img
                      src={place.image}
                      alt={place.label}
                      className="w-56 h-40 sm:w-72 sm:h-52 md:w-96 md:h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <span className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-xs sm:text-sm whitespace-nowrap">
                      {place.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black/30 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 active:scale-95 transition-all touch-manipulation min-w-[44px] min-h-[44px]"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </button>

            <button
              className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black/30 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 active:scale-95 transition-all touch-manipulation min-w-[44px] min-h-[44px]"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </button>
          </div>
        </article>

        <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center px-2">
          <Button className="w-full sm:w-auto sm:min-w-[300px] md:min-w-[400px] lg:max-w-5xl">Reserve Now</Button>
        </div>
      </div>
    </section>
  );
}
