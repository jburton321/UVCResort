import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const locations = [
  {
    id: 'hyatt',
    name: 'Hyatt Zilara',
    distance: 'Your Resort',
    time: '',
    lat: 20.6976,
    lng: -87.0198,
    isMain: true,
  },
  {
    id: 'puerto-morelos',
    name: 'Puerto Morelos',
    distance: '12-15 miles',
    time: '25-30 minutes',
    lat: 20.8475,
    lng: -86.8756,
    isMain: false,
  },
  {
    id: 'playa-del-carmen',
    name: 'Downtown Playa del Carmen',
    distance: '8-10 miles',
    time: '15-20 minutes',
    lat: 20.6282,
    lng: -87.0739,
    isMain: false,
  },
  {
    id: 'golf-course',
    name: 'El Camaleón Golf Course',
    distance: '3-5 miles',
    time: '5-10 minutes',
    lat: 20.6845,
    lng: -87.0255,
    isMain: false,
  },
  {
    id: 'xcaret',
    name: 'Xcaret Park',
    distance: '10-12 miles',
    time: '15-20 minutes',
    lat: 20.5775,
    lng: -87.1197,
    isMain: false,
  },
];

const mapBounds = {
  north: 20.92,
  south: 20.50,
  west: -87.25,
  east: -86.80,
};

function latLngToPercent(lat: number, lng: number) {
  const x = ((lng - mapBounds.west) / (mapBounds.east - mapBounds.west)) * 100;
  const y = ((mapBounds.north - lat) / (mapBounds.north - mapBounds.south)) * 100;
  return { x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) };
}

function LocationCard({ location, position }: { location: typeof locations[0]; position: 'left' | 'right' }) {
  const isMain = location.isMain;

  return (
    <div
      className={`flex items-center gap-3 bg-white rounded-lg shadow-lg px-4 py-3 whitespace-nowrap ${position === 'left' ? 'flex-row-reverse' : ''}`}
    >
      <div className={`flex-shrink-0 ${isMain ? 'text-blue-600' : 'text-orange-500'}`}>
        <svg width="32" height="40" viewBox="0 0 32 40" fill="currentColor">
          <path d="M16 0C7.164 0 0 7.164 0 16c0 12 16 24 16 24s16-12 16-24c0-8.836-7.164-16-16-16zm0 22c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
          <circle cx="16" cy="16" r="4" fill="white"/>
        </svg>
      </div>
      <div className={position === 'left' ? 'text-right' : 'text-left'}>
        <h3 className="font-bold text-gray-900 text-base leading-tight">{location.name}</h3>
        <p className="text-gray-600 text-sm">
          {isMain ? location.distance : `${location.distance} | ${location.time}`}
        </p>
      </div>
    </div>
  );
}

export function MapSection() {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${mapBounds.west}%2C${mapBounds.south}%2C${mapBounds.east}%2C${mapBounds.north}&layer=mapnik`;
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

        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
          <iframe
            title="Resort Location Map"
            src={mapUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute inset-0 pointer-events-none">
            {locations.map((location) => {
              const pos = latLngToPercent(location.lat, location.lng);
              const isLeftSide = pos.x > 50;

              return (
                <div
                  key={location.id}
                  className="absolute"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: isLeftSide
                      ? 'translate(-100%, -50%)'
                      : 'translate(0%, -50%)',
                  }}
                >
                  <LocationCard location={location} position={isLeftSide ? 'left' : 'right'} />
                </div>
              );
            })}
          </div>

          <a
            href={fullMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg px-4 py-2 z-20 flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors pointer-events-auto"
          >
            <ExternalLink className="w-4 h-4" />
            View larger map
          </a>

          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-lg shadow-lg p-4 z-20">
            <div className="flex items-center gap-2 mb-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-gray-900">Riviera Maya</h3>
            </div>
            <p className="text-xs text-gray-600">
              All destinations within 30 minutes of your resort
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
