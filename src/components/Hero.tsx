import { Play } from 'lucide-react';
import { BookingCard } from './BookingCard';

export function Hero() {
  return (
    <section
      className="relative min-h-[600px] lg:min-h-[800px] bg-cover bg-center py-12"
      style={{ backgroundImage: 'url(section0.png)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <div className="relative">
              <img
                className="w-full max-w-xl"
                src="mexico-10.png"
                alt="Mexico destination"
              />
              <img
                className="w-full max-w-xl -mt-12"
                src="layer-0-10.png"
                alt="Resort view"
              />
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full py-2 px-4 flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
                <Play className="w-6 h-6 text-gray-800" />
                <span className="text-gray-900 font-medium text-sm">Play video</span>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  );
}
