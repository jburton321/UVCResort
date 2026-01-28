import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Navigation, ExternalLink } from 'lucide-react';
import { renderToString } from 'react-dom/server';
import 'leaflet/dist/leaflet.css';

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

function createLocationIcon(location: typeof locations[0]) {
  const isMain = location.isMain;
  const color = isMain ? '#2563eb' : '#f97316';

  const html = `
    <div style="position: relative; transform: translate(-16px, -40px);">
      <svg width="32" height="40" viewBox="0 0 32 40" fill="${color}">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 12 16 24 16 24s16-12 16-24c0-8.836-7.164-16-16-16zm0 22c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
        <circle cx="16" cy="16" r="4" fill="white"/>
      </svg>
    </div>
  `;

  return divIcon({
    html,
    className: 'custom-location-marker',
    iconSize: [32, 40],
    iconAnchor: [16, 40],
  });
}

function LocationTooltip({ location }: { location: typeof locations[0] }) {
  const isMain = location.isMain;

  return (
    <div className="flex items-center gap-3 bg-white rounded-lg shadow-lg px-4 py-3 whitespace-nowrap border-0 m-0 min-w-[200px]">
      <div className={`flex-shrink-0 ${isMain ? 'text-blue-600' : 'text-orange-500'}`}>
        <svg width="32" height="40" viewBox="0 0 32 40" fill="currentColor">
          <path d="M16 0C7.164 0 0 7.164 0 16c0 12 16 24 16 24s16-12 16-24c0-8.836-7.164-16-16-16zm0 22c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
          <circle cx="16" cy="16" r="4" fill="white"/>
        </svg>
      </div>
      <div className="text-left">
        <h3 className="font-bold text-gray-900 text-base leading-tight">{location.name}</h3>
        <p className="text-gray-600 text-sm">
          {isMain ? location.distance : `${location.distance} | ${location.time}`}
        </p>
      </div>
    </div>
  );
}

export function MapSection() {
  const center: [number, number] = [20.7, -87.0];
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

        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
          <MapContainer
            center={center}
            zoom={11}
            scrollWheelZoom={true}
            className="w-full h-full"
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lng]}
                icon={createLocationIcon(location)}
              >
                <Popup
                  closeButton={false}
                  autoClose={false}
                  closeOnClick={false}
                  className="custom-popup"
                  permanent={true}
                  offset={[0, -40]}
                >
                  <LocationTooltip location={location} />
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <a
            href={fullMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg px-4 py-2 z-[1000] flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View larger map
          </a>

          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-lg shadow-lg p-4 z-[1000]">
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
