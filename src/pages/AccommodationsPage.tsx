import { Gallery } from '../components/Gallery';
import { ContentSection } from '../components/ContentSection';
import { FeaturedList } from '../components/FeaturedList';
import { BackgroundSection } from '../components/BackgroundSection';

const roomFeatures = [
  '55" flat-screen HDTV',
  'Nespresso coffee/tea maker',
  'Daily-refreshed minibar',
  'Hair dryer',
  'Bathrobes and slippers',
  'In-room safe',
];

const accommodationsGallery = [
  'accommodations/resort-photo-10.png',
  'accommodations/resort-photo-20.png',
  'accommodations/resort-photo-30.png',
  'accommodations/resort-photo-40.png',
  'accommodations/resort-photo-50.png',
  'accommodations/link-dialog-open-lightbox4.png',
  'accommodations/link-dialog-open-lightbox5.png',
  'accommodations/link-dialog-open-lightbox6.png',
];

export function AccommodationsPage() {
  return (
    <>
      <BackgroundSection
        imageSrc="section0.png"
        overlayOpacity={0.4}
        className="py-16 sm:py-20 md:py-24"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 tracking-tight">
            ACCOMMODATIONS
          </h1>
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
            <p className="text-gray-900 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4">
              Your VIP package includes <span className="font-bold">5 Days and 4 Nights</span> in a
              luxurious, finely appointed <span className="font-bold">Deluxe Room</span>
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              Experience adults-only luxury designed exclusively for couples seeking romance and
              relaxation in paradise.
            </p>
          </div>
        </div>
      </BackgroundSection>

      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <FeaturedList
            title="Your Deluxe Room Features"
            items={roomFeatures}
            accentColor="bg-purple-700"
          />
        </div>
      </section>

      <Gallery images={accommodationsGallery} />

      <ContentSection
        title="Finely Appointed Luxury"
        description={
          <>
            <p className="mb-4">
              Discover your private oasis in our{' '}
              <span className="font-semibold">474-square-foot Deluxe Room</span>, perfectly
              designed for adult couples. Wake up to stunning mangrove views from your private
              balcony or patio.
            </p>
            <p>
              Each room features a plush king bed with premium linens, a sophisticated marble
              bathroom with double vanities, and an indulgent rain shower. Modern elegance meets
              tropical tranquility in every detail.
            </p>
          </>
        }
        imageSrc="accommodations/resort-photo-10.png"
        imageAlt="Luxurious Deluxe Room"
        imagePosition="left"
      />

      <ContentSection
        title="Ultimate Convenience"
        description={
          <>
            <p className="mb-4">
              Your comfort is our priority. Every Deluxe Room includes individual climate control,
              blackout curtains for restful sleep, and complimentary high-speed Wi-Fi to stay
              connected.
            </p>
            <p>
              Additional amenities include an iron and ironing board, and 24-hour room service for
              those moments when you prefer to dine in the privacy of your room.
            </p>
          </>
        }
        imageSrc="accommodations/resort-photo-30.png"
        imageAlt="Room Amenities"
        imagePosition="right"
        className="bg-gray-50"
      />

      <ContentSection
        title="Suite Features & Service"
        description={
          <>
            <p className="mb-4">
              Relax on your private furnished balcony or patio, the perfect spot for morning coffee
              or evening cocktails. Upgrade to butler service for a truly personalized experience.
            </p>
            <p>
              Positioned just steps from pristine beaches and world-class dining venues, your room
              serves as an ideal base for exploring all the resort has to offer.
            </p>
          </>
        }
        imageSrc="accommodations/resort-photo-50.png"
        imageAlt="Private Balcony View"
        imagePosition="left"
      />
    </>
  );
}
