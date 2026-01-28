import "./styles.css";
import "./tailwind.css";
import {
  Header,
  Hero,
  SubNav,
  Gallery,
  AboutPackage,
  ParadiseSection,
  Amenities,
  AmenitiesGrid,
  Testimonials,
  Location,
  Footer,
} from "./components";

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

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <SubNav />
        <Gallery images={galleryImages} />
        <AboutPackage />
        <ParadiseSection />
        <Amenities />
        <img
          className="w-full h-auto"
          src="frame-19840779510.svg"
          alt="Decorative divider"
        />
        <AmenitiesGrid />
        <Testimonials />
        <Location />
        <img
          className="w-full h-56 object-cover"
          src="frame-19840779511.png"
          alt="Beach scene"
        />
      </main>
      <Footer />
    </div>
  );
}
