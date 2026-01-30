import { Button } from '../components/Button';
import { SubNav } from '../components/SubNav';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';

const sections = [
  {
    title: 'All-Inclusive Amenities',
    highlight: 'Hyatt Zilara Riviera Maya is an all-inclusive, adults-only beachfront resort',
    description: "set across 70 acres of white sand shoreline and lush mangrove surroundings. The resort features 291 well-appointed rooms, including swim-up accommodations, designed for guests seeking comfort, privacy, and elevated service. Every stay includes access to the resort's Premium All-Inclusive experience, delivering thoughtful service, refined dining, and a seamless vacation experience centered on quality and attention to detail.",
    image: 'amenities/things-to-do-photo-10.png',
    imageFirst: false,
  },
  {
    title: 'Luxury All-Inclusive Experience',
    highlight: 'Your stay includes unlimited dining, drinks, Wi-Fi, entertainment, and full access to resort and beach amenities.',
    description: 'Everything is handled in one place, allowing you to focus on enjoying the setting, the service, and the pace of the resort without added decisions or extra planning.',
    image: 'amenities/things-to-do-photo-11.png',
    imageFirst: true,
  },
  {
    title: 'Gourmet Dining with Flexibility',
    highlight: 'The resort offers a diverse culinary program with four à la carte restaurants, a casual cafeteria, and multiple bars and lounges across the property.',
    description: "Guests enjoy gourmet dining every evening with no reservations required, making it easy to choose what fits your mood. Options range across global cuisines, including guest-favorite Asian and hibachi experiences.\n\nA dedicated café and treats shop serves coffee, pastries, and desserts throughout the day, while bars across the resort provide unlimited access to premium cocktails and a wide selection of domestic and international spirits.",
    image: 'amenities/things-to-do-photo-12.png',
    imageFirst: false,
  },
  {
    title: 'Pools, Beach, and Oceanfront Spaces',
    highlight: "Spend your day by the main pool, relax at the swim-up bar, or take in ocean views from the resort's beachfront areas.",
    description: 'Swim-up rooms offer direct pool access steps from your terrace, while shaded loungers and open beach space provide plenty of room to enjoy the coast. Non-motorized water sports and beach activities are included as part of your stay.',
    image: 'amenities/things-to-do-photo-13.png',
    imageFirst: true,
  },
  {
    title: 'Wellness, Fitness, and Recreation',
    highlight: 'Guests have access to the Zen Spa, featuring a hydrotherapy circuit and a menu of specialized treatments.',
    description: 'A modern fitness center, tennis court, and guided fitness classes support an active stay, while poolside and beachfront activities keep the days engaging without feeling scheduled.',
    image: 'amenities/things-to-do-photo-14.png',
    imageFirst: false,
  },
  {
    title: 'Nightly Entertainment and Social Spaces',
    highlight: 'Evenings bring live shows, themed events, and social gatherings throughout the resort.',
    description: 'Oceanfront bars and entertainment areas host performances and music that keep the energy going after sunset, offering a lively yet refined atmosphere designed for adults.',
    image: 'amenities/things-to-do-photo-15.png',
    imageFirst: true,
  },
];

const galleryImages = [
  'amenities/photo-description0.png',
  'amenities/photo-description1.png',
  'amenities/photo-description2.png',
  'amenities/photo-description3.png',
  'amenities/hot-tub-by-building-18-and-190.png',
  'amenities/photo-description4.png',
];

function ContentSection({
  title,
  highlight,
  description,
  image,
  imageFirst
}: {
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageFirst: boolean;
}) {
  const textContent = (
    <div className="flex flex-col gap-8 items-start justify-start flex-1">
      <div className="flex flex-col gap-8 items-start justify-start w-full">
        <h2 className="text-[#333] text-left text-2xl md:text-3xl lg:text-[32px] leading-tight font-semibold">
          {title}
        </h2>
        <p className="text-black text-left text-[15px] md:text-base leading-relaxed whitespace-pre-line">
          <span className="font-semibold">{highlight}</span>
          {' '}{description}
        </p>
      </div>
      <Button className="w-full">RESERVE NOW</Button>
    </div>
  );

  const imageContent = (
    <img
      className="rounded-2xl w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] object-cover flex-shrink-0"
      src={image}
      alt={title}
    />
  );

  return (
    <div className={`flex flex-col ${imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start w-full`}>
      {imageFirst ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
}

function Banner() {
  return (
    <div className="w-full bg-primary rounded-2xl py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
      <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">84%</span>
      <p className="text-white text-center md:text-left text-base md:text-lg max-w-md">
        of our guests say the all-inclusive experience exceeded their expectations
      </p>
    </div>
  );
}

function GallerySection() {
  return (
    <div className="py-16 md:py-24 px-4 md:px-20 flex flex-col gap-12 md:gap-20 items-center justify-center w-full">
      <h2 className="text-[#262626] text-center text-2xl md:text-3xl lg:text-[32px] font-semibold">
        Resort Amenities Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1560px]">
        {galleryImages.map((image, index) => (
          <div key={index} className="rounded-xl overflow-hidden">
            <img
              className="w-full h-[220px] sm:h-[280px] lg:h-[340px] object-cover"
              src={image}
              alt={`Resort amenity ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <Button className="w-full max-w-md">RESERVE NOW</Button>
    </div>
  );
}

export function AmenitiesPage() {
  return (
    <div className="bg-white min-h-screen">
      <SubNav />

      <div className="bg-[#f5f5f5] pt-8 md:pt-12 pb-8 md:pb-12 px-4 md:px-10 flex flex-col items-center justify-center w-full">
        <div
          className="bg-white rounded-[32px] p-4 sm:p-8 md:p-12 flex flex-col gap-8 md:gap-12 items-start justify-start w-full max-w-[1200px] overflow-hidden"
          style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30)' }}
        >
          {sections.map((section, index) => (
            <div key={section.title} className="w-full">
              <ContentSection {...section} />
              {index === 0 && (
                <div className="mt-8 md:mt-12">
                  <Banner />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <GallerySection />

      <div className="flex flex-col items-center justify-start w-full overflow-hidden">
        <img
          className="w-full h-auto"
          src="frame-19840779510.svg"
          alt="Decorative wave"
        />
      </div>

      <AccommodationsPriceBar />
    </div>
  );
}
