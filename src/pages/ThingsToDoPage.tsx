import { MapPin, Wine, Landmark, Mountain, Droplets, TreePalm, Sun, Music } from 'lucide-react';
import { Gallery } from '../components/Gallery';
import { Button } from '../components/Button';
import { SaveNowTravelLater } from '../components/SaveNowTravelLater';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';

const thingsToDoGallery = [
  'resort-photo-11.png',
  'resort-photo-21.png',
  'resort-photo-31.png',
  'resort-photo-41.png',
  'link-dialog-open-lightbox6.png',
  'link-dialog-open-lightbox7.png',
];

const thingsToDoSections = [
  {
    icon: MapPin,
    title: 'Explore Like a Local',
    description: 'Your gateway to the best of the Riviera Maya starts here. Discover ancient ruins, pristine cenotes, vibrant nightlife, and world-class dining all within easy reach of the resort.',
    highlight: 'Your gateway to the best of the Riviera Maya starts here.',
    image: 'resort-photo-11.png',
  },
  {
    icon: Music,
    title: 'Downtown Playa del Carmen Nightlife',
    description: 'Experience the electric energy of Quinta Avenida (5th Avenue) after dark. From rooftop bars and beachfront lounges to pulsing dance clubs, the nightlife scene offers something for every taste.',
    highlight: 'Experience the electric energy of Quinta Avenida (5th Avenue) after dark.',
    image: 'resort-photo-21.png',
    reverse: true,
  },
  {
    icon: Wine,
    title: 'Specialty Tequila & Mixology Scene',
    description: 'Discover craft cocktail bars and authentic tequila tastings throughout Playa del Carmen. Local mixologists blend traditional Mexican flavors with innovative techniques for unforgettable drinks.',
    highlight: 'Discover craft cocktail bars and authentic tequila tastings throughout Playa del Carmen.',
    image: 'resort-photo-31.png',
  },
  {
    icon: Landmark,
    title: 'Chichen Itza',
    description: 'Visit one of the New Seven Wonders of the World. This ancient Mayan city features the iconic El Castillo pyramid and offers a profound glimpse into one of history\'s most fascinating civilizations.',
    highlight: 'Visit one of the New Seven Wonders of the World.',
    image: 'resort-photo-41.png',
    reverse: true,
  },
  {
    icon: Mountain,
    title: 'Tulum Ruins',
    description: 'Perched on a 12-meter (39 ft) cliff overlooking the turquoise Caribbean Sea, the Tulum ruins offer breathtaking views and rich Mayan history. Combine your visit with a swim at the pristine beach below.',
    highlight: 'Perched on a 12-meter (39 ft) cliff overlooking the turquoise Caribbean Sea.',
    image: 'link-dialog-open-lightbox6.png',
  },
  {
    icon: Droplets,
    title: 'Cenotes',
    description: 'Dive into sacred natural sinkholes with crystal-clear water. These geological wonders were revered by the ancient Maya and now offer incredible swimming, snorkeling, and diving experiences.',
    highlight: 'Dive into sacred natural sinkholes with crystal-clear water.',
    image: 'link-dialog-open-lightbox7.png',
    reverse: true,
  },
  {
    icon: TreePalm,
    title: 'Xcaret Eco-Archaeological Park',
    description: 'Spend a full day exploring underground rivers, snorkeling with tropical fish, and witnessing traditional Mexican performances. This world-renowned park seamlessly blends nature, culture, and adventure.',
    highlight: 'Spend a full day exploring underground rivers, snorkeling with tropical fish.',
    image: 'resort-photo-12.png',
  },
  {
    icon: Sun,
    title: 'Playa del Carmen Day Scene',
    description: 'Stroll along Fifth Avenue during the day for boutique shopping, authentic Mexican cuisine, and vibrant street performances. The pedestrian-friendly boulevard stretches over 20 blocks of entertainment.',
    highlight: 'Stroll along Fifth Avenue during the day for boutique shopping and authentic Mexican cuisine.',
    image: 'resort-photo-22.png',
    reverse: true,
  },
];

export function ThingsToDoPage() {
  return (
    <>
      <section
        className="relative py-12 md:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(resort-photo-11.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6">
          <div className="bg-white/[0.76] backdrop-blur-xl rounded-[32px] overflow-hidden shadow-xl border border-white/50">
            <div className="p-6 sm:p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Things To Do
                </h1>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                  <span className="font-semibold">The Riviera Maya is your playground.</span>{' '}
                  From ancient Mayan ruins and sacred cenotes to vibrant nightlife and pristine beaches, discover endless adventures just minutes from your resort.
                </p>
                <Button>RESERVE NOW</Button>
              </div>
            </div>
            <AccommodationsPriceBar />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">84%</span>
            <p className="text-white text-lg md:text-xl max-w-md">
              of our guests say exploring local attractions was a highlight of their vacation
            </p>
          </div>
        </div>
      </section>

      <Gallery images={thingsToDoGallery} />

      {thingsToDoSections.map((section, index) => (
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
