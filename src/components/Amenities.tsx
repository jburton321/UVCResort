import {
  ConciergeBell,
  Clock,
  Waves,
  Sparkles,
  Sofa,
  Coffee,
  Bath,
  Tv,
  Dumbbell,
  Wifi,
  Globe,
  Ship,
  Landmark,
  ShoppingBag,
  UtensilsCrossed,
  Trees,
  Sailboat,
  CircleDot,
  TreePine,
  CircleCheck
} from 'lucide-react';
import { Button } from './Button';

const featuredAmenities = [
  { icon: ConciergeBell, text: 'Four restaurants & five bars and lounges' },
  { icon: Clock, text: '24-hour room service' },
  { icon: Waves, text: 'Outdoor pool' },
  { icon: Sparkles, text: 'Zen Spa' },
  { icon: Sofa, text: 'Minibar (refreshed daily)' },
  { icon: Coffee, text: 'Nespresso coffee' },
  { icon: Bath, text: 'Bathrobes and slippers' },
  { icon: Tv, text: '55" flat-screen HDTV' },
  { icon: Dumbbell, text: 'State-of-the-art fitness center' },
  { icon: Wifi, text: 'Complimentary Wi-Fi' },
];

const nearbyAttractions = [
  { icon: Globe, text: 'Downtown Playa del Carmen Nightlife' },
  { icon: Ship, text: 'Tulum Experience' },
  { icon: Landmark, text: 'Night Out in Cancún' },
  { icon: ShoppingBag, text: 'Specialty Tequila/Mixology' },
  { icon: UtensilsCrossed, text: 'Gourmet International Dining' },
  { icon: Trees, text: 'Xcaret Park Evening Shows' },
  { icon: Sailboat, text: 'Lounge Scene in Puerto Morelos' },
  { icon: Waves, text: 'Scuba Diving at Palancar Reef' },
  { icon: CircleDot, text: 'Cenote Route Adventure' },
  { icon: TreePine, text: 'El Camaleón Golf Course' },
];

export function Amenities() {
  return (
    <section className="bg-gray-800 py-24 px-4 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <article>
            <h3 className="text-white text-2xl font-bold mb-8">
              Featured Amenities
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {featuredAmenities.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-6 h-6 text-white shrink-0" />
                  <span className="text-white text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h3 className="text-white text-2xl font-bold mb-8">
              Nearby Attractions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {nearbyAttractions.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-6 h-6 text-white shrink-0" />
                  <span className="text-white text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-16 flex justify-center">
          <Button className="w-full max-w-3xl">Reserve Now</Button>
        </div>
      </div>
    </section>
  );
}
