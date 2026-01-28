import { useState } from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example';

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

export function MapSection() {
  const [viewState, setViewState] = useState({
    longitude: -87.0198,
    latitude: 20.6976,
    zoom: 10.5,
  });

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
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-[280px] transform -translate-x-1/2 border-2 border-blue-500">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">
                            {location.name}
                          </h3>
                          <div className="w-16 h-1 bg-blue-500 rounded-full mt-1"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {location.subtitle}
                      </p>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-2 border-blue-500 rotate-45"></div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="bg-white rounded-xl shadow-lg p-3 min-w-[200px] transform -translate-x-1/2 border border-gray-200 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <h4 className="font-bold text-sm text-gray-900 leading-tight">
                          {location.name}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 ml-7">{location.subtitle}</p>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white"></div>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-md"></div>
                  </div>
                )}
              </Marker>
            ))}
          </Map>

          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-bold text-gray-900">Your Resort</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-bold text-gray-900">Nearby Attractions</span>
            </div>
          </div>

          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-2">Explore the Area</h3>
            <p className="text-xs text-gray-600">
              All locations within 20 minutes of your resort
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.slice(1).map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm text-gray-900">{location.name}</h4>
              </div>
              <p className="text-xs text-gray-600">{location.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
