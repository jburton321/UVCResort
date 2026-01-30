import { Utensils, GlassWater, Waves, Dumbbell, Music, Sparkles } from 'lucide-react';
import { Gallery } from '../components/Gallery';
import { Button } from '../components/Button';
import { SaveNowTravelLater } from '../components/SaveNowTravelLater';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';

const amenitiesGallery = [
  'resort-photo-10.png',
  'resort-photo-20.png',
  'resort-photo-30.png',
  'resort-photo-40.png',
  'resort-photo-50.png',
  'link-dialog-open-lightbox5.png',
];

const amenitySections = [
  {
    icon: Sparkles,
    title: 'All-Inclusive Amenities',
    description: 'The Hyatt Zilara Riviera Maya is an expansive, adults-only resort featuring 291 oceanfront rooms spread across 70 lush acres along the Caribbean coastline. This property is designed for couples, friends, and solo travelers seeking a refined getaway with every modern convenience.',
    highlight: '291 oceanfront rooms spread across 70 lush acres along the Caribbean coastline.',
    image: 'resort-photo-10.png',
  },
  {
    icon: GlassWater,
    title: 'Luxury All-Inclusive Experience',
    description: 'Your VIP package includes unlimited access to gourmet dining, premium drinks, high-speed Wi-Fi, and daily entertainment. With 24-hour room service and a dedicated concierge team, everything you need is just a request away.',
    highlight: 'Your VIP package includes unlimited access to gourmet dining, premium drinks, high-speed Wi-Fi, and daily entertainment.',
    image: 'resort-photo-20.png',
    reverse: true,
  },
  {
    icon: Utensils,
    title: 'Gourmet Dining with Flexibility',
    description: 'Enjoy four à la carte restaurants offering international cuisines, from authentic Mexican flavors to Asian fusion and Mediterranean dishes. Casual beachside dining and elegant evening venues ensure every meal is an experience.',
    highlight: 'Four à la carte restaurants offering international cuisines.',
    image: 'resort-photo-30.png',
  },
  {
    icon: Waves,
    title: 'Pools, Beach, and Oceanfront Spaces',
    description: 'Take your pick of three sparkling pools, including an adults-only infinity pool with swim-up bar. The private beach offers pristine white sand, complimentary water sports equipment, and attentive beach service throughout the day.',
    highlight: 'Three sparkling pools, including an adults-only infinity pool with swim-up bar.',
    image: 'resort-photo-40.png',
    reverse: true,
  },
  {
    icon: Dumbbell,
    title: 'Wellness, Fitness, and Recreation',
    description: 'Rejuvenate at the Zen Spa with world-class treatments, or maintain your routine at the fully equipped fitness center. Tennis courts, yoga sessions, and nature trails offer active pursuits amid tropical surroundings.',
    highlight: 'Rejuvenate at the Zen Spa with world-class treatments.',
    image: 'resort-photo-50.png',
  },
  {
    icon: Music,
    title: 'Nightly Entertainment and Social Spaces',
    description: 'Each evening brings live music, themed parties, and spectacular shows. Gather at stylish lounges, dance under the stars, or simply enjoy cocktails while watching the sunset over the Caribbean Sea.',
    highlight: 'Live music, themed parties, and spectacular shows.',
    image: 'link-dialog-open-lightbox5.png',
    reverse: true,
  },
];

export function AmenitiesPage() {
  return (
    <>
      <section
        className="relative py-12 md:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(resort-photo-10.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6">
          <div className="bg-white/[0.76] backdrop-blur-xl rounded-[32px] overflow-hidden shadow-xl border border-white/50">
            <div className="p-6 sm:p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Amenities
                </h1>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                  <span className="font-semibold">Experience world-class amenities at the Hyatt Zilara Riviera Maya.</span>{' '}
                  From gourmet dining and pristine pools to rejuvenating spa treatments and nightly entertainment, every detail is designed to elevate your vacation to extraordinary heights.
                </p>
                <Button>RESERVE NOW</Button>
              </div>
            </div>
            <AccommodationsPriceBar />
          </div>
        </div>
      </section>

      <Gallery images={amenitiesGallery} />

      {amenitySections.map((section, index) => (
        <section
          key={section.title}
          className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
        >
          <div className="max-w-content mx-auto">
            <div className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
              <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                  <span className="font-semibold">{section.highlight}</span>{' '}
                  {section.description.replace(section.highlight, '').trim()}
                </p>
                <Button className="w-full sm:w-auto">RESERVE NOW</Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div style={{ backgroundColor: '#ffffff' }}>
        <img
          className="w-full h-auto"
          src="frame-19840779511.png"
          alt="Decorative divider"
        />
      </div>

      <SaveNowTravelLater />
    </>
  );
}
