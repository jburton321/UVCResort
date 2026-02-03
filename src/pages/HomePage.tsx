import {
  Hero,
  SubNav,
  Gallery,
  AboutPackage,
  ParadiseSection,
  Amenities,
  AmenitiesGrid,
  Testimonials,
  MapSection,
} from '../components';

const galleryImages = [
  'home/resort-photo-10.png',
  'home/resort-photo-20.png',
  'home/resort-photo-30.png',
  'home/resort-photo-40.png',
  'home/resort-photo-50.png',
  'home/link-dialog-open-lightbox5.png',
  'home/link-dialog-open-lightbox6.png',
  'home/link-dialog-open-lightbox7.png',
];

const locationGalleryImages = [
  { src: 'home/resort-photo-10.png', label: 'Puerto Morelos' },
  { src: 'home/resort-photo-20.png', label: 'Downtown Playa del Carmen' },
  { src: 'home/resort-photo-30.png', label: 'El Camaleón Golf Course' },
  { src: 'home/resort-photo-40.png', label: 'Xcaret Park' },
  { src: 'home/resort-photo-50.png', label: 'Tulum Ruins' },
  { src: 'home/link-dialog-open-lightbox5.png', label: 'Cenote Azul' },
];

export function HomePage() {
  return (
    <>
      <Hero />
      <SubNav />
      <section id="resort-video">
        <Gallery images={galleryImages} />
      </section>
      <section id="what-you-get">
        <AboutPackage />
        <ParadiseSection />
      </section>
      <section id="resort-details">
        <Amenities />
        <div className="relative hidden sm:block">
          <img
            className="w-full h-auto"
            src="home/banner.png"
            alt="Save Now Travel Later banner"
          />
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[97px] z-50 w-[40%] max-w-md"
            src="home/tag.png"
            alt="Special offer tag"
          />
        </div>
        <AmenitiesGrid />
      </section>
      <section id="guest-reviews">
        <Testimonials />
      </section>
      <section id="reserve-now">
        <MapSection>
          <Gallery images={locationGalleryImages} className="bg-transparent" />
        </MapSection>
      </section>
      <div style={{ backgroundColor: '#F2F4F6' }}>
        <img
          className="w-full h-32 sm:h-40 md:h-56 object-cover"
          src="home/home-bttm.png"
          alt="Beach scene"
        />
      </div>
    </>
  );
}
