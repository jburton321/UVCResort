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
      <Gallery images={galleryImages} />
      <AboutPackage />
      <ParadiseSection />
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
      <Testimonials />
      <MapSection>
        <Gallery images={locationGalleryImages} className="bg-transparent" />
      </MapSection>
      <div style={{ backgroundColor: '#F2F4F6' }}>
        <img
          className="w-full h-32 sm:h-40 md:h-56 object-cover"
          src="home/frame-19840779511.png"
          alt="Beach scene"
        />
      </div>
    </>
  );
}
