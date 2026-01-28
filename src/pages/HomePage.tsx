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
  'resort-photo-10.png',
  'resort-photo-20.png',
  'resort-photo-30.png',
  'resort-photo-40.png',
  'resort-photo-50.png',
  'link-dialog-open-lightbox5.png',
  'link-dialog-open-lightbox6.png',
  'link-dialog-open-lightbox7.png',
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
      <img
        className="w-full h-auto hidden sm:block"
        src="frame-19840779510.svg"
        alt="Decorative divider"
      />
      <AmenitiesGrid />
      <Testimonials />
      <MapSection />
      <img
        className="w-full h-32 sm:h-40 md:h-56 object-cover"
        src="frame-19840779511.png"
        alt="Beach scene"
      />
    </>
  );
}
