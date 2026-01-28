import { MapPin, Navigation, Clock, ExternalLink } from 'lucide-react';

const locations = [
  {
    id: 'hyatt',
    name: 'Hyatt Zilara',
    subtitle: 'Carretera Federal, Cancun - Chetumal Km 340',
    coordinates: [20.6976, -87.0198] as [number, number],
    isMain: true,
  },
  {
    id: 'puerto-morelos',
    name: 'Puerto Morelos',
    subtitle: '15-20 minutes',
    coordinates: [20.8475, -86.8756] as [number, number],
    isMain: false,
  },
  {
    id: 'playa-del-carmen',
    name: 'Downtown Playa del Carmen',
    subtitle: '15-20 minutes',
    coordinates: [20.6282, -87.0739] as [number, number],
    isMain: false,
  },
  {
    id: 'golf-course',
    name: 'El Camaleón Golf Course',
    subtitle: '5-10 minutes',
    coordinates: [20.6845, -87.0255] as [number, number],
    isMain: false,
  },
  {
    id: 'xcaret',
    name: 'Xcaret Park',
    subtitle: '15-20 minutes',
    coordinates: [20.5775, -87.1197] as [number, number],
    isMain: false,
  },
];

export function MapSection() {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=-87.25%2C20.5%2C-86.8%2C20.9&layer=mapnik&marker=20.6976%2C-87.0198`;
  const fullMapUrl = `https://www.openstreetmap.org/?mlat=20.6976&mlon=-87.0198#map=11/20.7/-87.0`;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perfectly Located in Paradise
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the Riviera Maya's most iconic destinations, all within easy reach of your luxury resort.
          </p>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
          <iframe
            title="Resort Location Map"
            src={mapUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900">Your Resort</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900">Nearby Attractions</span>
            </div>
            <a
              href={fullMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View larger map
            </a>
          </div>

          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-lg shadow-lg p-4 z-10">
            <div className="flex items-center gap-2 mb-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-gray-900">Riviera Maya</h3>
            </div>
            <p className="text-xs text-gray-600">
              All destinations within 20 minutes of your resort
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.slice(1).map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm text-gray-900">{location.name}</h4>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <p className="text-xs">{location.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
