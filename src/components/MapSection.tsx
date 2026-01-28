import { MapPin, Navigation, Clock } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

const routeCoordinates: [number, number][] = [
  [20.8475, -86.8756],
  [20.6976, -87.0198],
  [20.6845, -87.0255],
  [20.6282, -87.0739],
  [20.5775, -87.1197],
];

const mainMarkerIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div style="
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #2563eb, #3b82f6);
      border-radius: 50%;
      border: 4px solid white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const secondaryMarkerIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div style="
      width: 28px;
      height: 28px;
      background: #f97316;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 3px 10px rgba(0,0,0,0.25);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

export function MapSection() {
  const center: [number, number] = [20.6976, -87.0198];

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

        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <MapContainer
            center={center}
            zoom={11}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            <Polyline
              positions={routeCoordinates}
              pathOptions={{
                color: '#2563eb',
                weight: 4,
                opacity: 0.8,
              }}
            />

            {locations.map((location) => (
              <Marker
                key={location.id}
                position={location.coordinates}
                icon={location.isMain ? mainMarkerIcon : secondaryMarkerIcon}
              >
                <Popup className="custom-popup">
                  <div className={`p-1 ${location.isMain ? 'min-w-[200px]' : ''}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-8 h-8 ${location.isMain ? 'bg-blue-500' : 'bg-orange-500'} rounded-lg flex items-center justify-center`}>
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900">{location.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 ml-10">{location.subtitle}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-[1000]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900">Your Resort</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900">Nearby Attractions</span>
            </div>
          </div>

          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-lg shadow-lg p-4 z-[1000]">
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
