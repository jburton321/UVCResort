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
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <article className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-black text-3xl md:text-4xl font-extrabold leading-tight">
              Discover Adult-Only Luxury in the <Heart className="inline w-8 h-8 text-red-500 fill-red-500" />
              <br /> of the Mayan Coast Riviera Cancun.
            </h2>
            <p className="text-black text-xl mt-4">
              Carretera Federal 387, Km 299 Solidaridad, Riviera Maya, QR, 77710, Mexico
            </p>
          </div>

          <div className="mb-8">
            <img
              src="image8.png"
              alt="Resort Map"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          <div className="relative">
            <div className="overflow-x-auto py-4">
              <div className="flex gap-4 min-w-max justify-center">
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden shrink-0"
                  >
                    <img
                      src={place.image}
                      alt={place.label}
                      className="w-96 h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-sm whitespace-nowrap">
                      {place.label}
                    </span>
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
          </div>
        </article>

        <div className="mt-12 flex justify-center">
          <Button className="w-full max-w-5xl">Reserve Now</Button>
        </div>
      </div>
    </section>
  );
}
