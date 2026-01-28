import { useState } from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl';
import { MapPin, Navigation, Clock, AlertCircle } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const hasValidToken = MAPBOX_TOKEN && !MAPBOX_TOKEN.includes('your_mapbox_token');

const locations = [
  {
    id: 'hyatt',
    name: 'Hyatt Zilara',
    subtitle: 'Carretera Federal, Cancun - Chetumal Km 340',
    coordinates: [-87.0198, 20.6976] as [number, number],
    isMain: true,
  },
  {
    id: 'puerto-morelos',
    name: 'Puerto Morelos',
    subtitle: '15-20 minutes',
    coordinates: [-86.8756, 20.8475] as [number, number],
    isMain: false,
  },
  {
    id: 'playa-del-carmen',
    name: 'Downtown Playa del Carmen',
    subtitle: '15-20 minutes',
    coordinates: [-87.0739, 20.6282] as [number, number],
    isMain: false,
  },
  {
    id: 'golf-course',
    name: 'El Camaleón Golf Course',
    subtitle: '5-10 minutes',
    coordinates: [-87.0255, 20.6845] as [number, number],
    isMain: false,
  },
  {
    id: 'xcaret',
    name: 'Xcaret Park',
    subtitle: '15-20 minutes',
    coordinates: [-87.1197, 20.5775] as [number, number],
    isMain: false,
  },
];

const routeCoordinates = [
  [-86.8756, 20.8475],
  [-87.0198, 20.6976],
  [-87.0255, 20.6845],
  [-87.0739, 20.6282],
  [-87.1197, 20.5775],
];

const routeGeoJSON = {
  type: 'Feature' as const,
  properties: {},
  geometry: {
    type: 'LineString' as const,
    coordinates: routeCoordinates,
  },
};

const routeLayer = {
  id: 'route',
  type: 'line' as const,
  paint: {
    'line-color': '#2563eb',
    'line-width': 4,
    'line-opacity': 0.8,
  },
};

function StaticMapFallback() {
  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0ea5e9" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <path
          d="M 650 80 Q 500 200, 480 280 Q 460 350, 350 420 Q 280 470, 180 520"
          fill="none"
          stroke="#2563eb"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="0"
          opacity="0.7"
        />
        <circle cx="650" cy="80" r="12" fill="#f97316" stroke="white" strokeWidth="3" />
        <circle cx="480" cy="280" r="16" fill="#2563eb" stroke="white" strokeWidth="4" />
        <circle cx="420" cy="340" r="10" fill="#f97316" stroke="white" strokeWidth="3" />
        <circle cx="320" cy="430" r="10" fill="#f97316" stroke="white" strokeWidth="3" />
        <circle cx="180" cy="520" r="10" fill="#f97316" stroke="white" strokeWidth="3" />
      </svg>

      <div className="absolute top-[60px] right-[80px] transform translate-x-1/2">
        <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-200">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="font-semibold text-sm text-gray-900">Puerto Morelos</span>
          </div>
          <p className="text-xs text-gray-500 mt-1 ml-6">15-20 minutes</p>
        </div>
      </div>

      <div className="absolute top-[240px] left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-2xl shadow-2xl p-5 border-2 border-blue-500 w-[260px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base text-gray-900">Hyatt Zilara</h3>
              <div className="w-12 h-1 bg-blue-500 rounded-full mt-1"></div>
            </div>
          </div>
          <p className="text-xs text-gray-600">Carretera Federal, Cancun - Chetumal Km 340</p>
        </div>
      </div>

      <div className="absolute top-[320px] left-[340px]">
        <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-200">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="font-semibold text-sm text-gray-900">El Camaleón Golf</span>
          </div>
          <p className="text-xs text-gray-500 mt-1 ml-6">5-10 minutes</p>
        </div>
      </div>

      <div className="absolute bottom-[180px] left-[200px]">
        <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-200">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="font-semibold text-sm text-gray-900">Playa del Carmen</span>
          </div>
          <p className="text-xs text-gray-500 mt-1 ml-6">15-20 minutes</p>
        </div>
      </div>

      <div className="absolute bottom-[60px] left-[80px]">
        <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-200">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="font-semibold text-sm text-gray-900">Xcaret Park</span>
          </div>
          <p className="text-xs text-gray-500 mt-1 ml-6">15-20 minutes</p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
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

      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-lg shadow-lg p-4 max-w-[280px]">
        <div className="flex items-center gap-2 mb-2">
          <Navigation className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-bold text-gray-900">Riviera Maya</h3>
        </div>
        <p className="text-xs text-gray-600">
          All destinations within 20 minutes of your resort
        </p>
      </div>

      {!hasValidToken && (
        <div className="absolute top-4 right-4 bg-amber-50 border border-amber-200 rounded-lg shadow-lg p-3 max-w-[220px]">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-amber-800">Static Preview</p>
              <p className="text-xs text-amber-600 mt-1">Add Mapbox token for interactive map</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InteractiveMap() {
  const [viewState, setViewState] = useState({
    longitude: -87.0198,
    latitude: 20.6976,
    zoom: 10.5,
  });

  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        attributionControl={false}
        dragRotate={false}
        touchZoomRotate={false}
      >
        <Source id="route" type="geojson" data={routeGeoJSON}>
          <Layer {...routeLayer} />
        </Source>

        {locations.map((location) => (
          <Marker
            key={location.id}
            longitude={location.coordinates[0]}
            latitude={location.coordinates[1]}
            anchor="bottom"
          >
            {location.isMain ? (
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-5 w-[260px] border-2 border-blue-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-gray-900">
                        {location.name}
                      </h3>
                      <div className="w-12 h-1 bg-blue-500 rounded-full mt-1"></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {location.subtitle}
                  </p>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ) : (
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <h4 className="font-semibold text-sm text-gray-900 whitespace-nowrap">
                      {location.name}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 ml-6">{location.subtitle}</p>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-md"></div>
              </div>
            )}
          </Marker>
        ))}
      </Map>

      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
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

      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-lg shadow-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Navigation className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-bold text-gray-900">Explore the Area</h3>
        </div>
        <p className="text-xs text-gray-600">
          All locations within 20 minutes of your resort
        </p>
      </div>
    </div>
  );
}

export function MapSection() {
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

        {hasValidToken ? <InteractiveMap /> : <StaticMapFallback />}

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
