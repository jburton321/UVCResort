import { Button } from '../components/Button';
import { SubNav } from '../components/SubNav';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';

const sections = [
  {
    title: 'Explore Like a Local',
    highlight: "The Hyatt Zilara Riviera Maya is your gateway to Riviera Cancun's best!",
    description: "You're perfectly positioned to explore epic history, stunning nature, and vibrant local life. Feel the ancient energy of the Mayan civilization beneath your feet.",
    image: 'things-to-do/things-to-do-photo-10.png',
    imageFirst: false,
  },
  {
    title: 'Downtown Playa del Carmen Nightlife',
    highlight: "The famous Quinta Avenida (5th Avenue) is the Riviera Maya's evening hot spot, located just a quick, easy transfer from the resort.",
    description: "This vibrant, pedestrian street is the place to be for high-energy entertainment, featuring everything from bustling dance clubs to sophisticated rooftop lounges.",
    image: 'things-to-do/things-to-do-photo-11.png',
    imageFirst: true,
  },
  {
    title: 'Specialty Tequila & Mixology Scene',
    highlight: "Beyond the main clubs in Playa del Carmen, you can experience authentic Mexican mixology. Seek out specialized Tequilerias and craft cocktail bars that focus on premium spirits like Tequila and Mezcal.",
    description: "Expert bartenders use unique, local ingredients to elevate your tasting experience.",
    image: 'things-to-do/things-to-do-photo-12.png',
    imageFirst: false,
  },
  {
    title: 'Chichen Itza:\nNew Wonder of the World',
    highlight: "This is the ultimate bucket-list must-do and an unforgettable cultural journey.",
    description: "Visit one of the New Seven Wonders of the World to marvel at the sheer scale and architectural genius of El Castillo pyramid. This UNESCO World Heritage Site offers deep historical insight into the ancient Mayan civilization.",
    image: 'things-to-do/things-to-do-photo-13.png',
    imageFirst: true,
  },
  {
    title: 'Tulum Ruins',
    highlight: "Capture the ultimate, postcard-perfect photo opportunity at the Tulum Ruins.",
    description: "These iconic Mayan structures are dramatically set atop a 12-meter (39 ft) cliff, offering unmatched, breathtaking views of the turquoise Caribbean Sea. It's a fascinating blend of history and stunning natural scenery.",
    image: 'things-to-do/things-to-do-photo-14.png',
    imageFirst: false,
  },
  {
    title: 'Cenotes: The Sacred Natural Sinkholes',
    highlight: "Swimming in a cenote a sacred natural sinkhole is a truly one-of-a-kind, refreshing experience and a journey into the Mayan underworld.",
    description: "These natural pools are filled with cool, crystal-clear water, perfect for a relaxing float in an environment surrounded by ancient formations.",
    image: 'things-to-do/things-to-do-photo-15.png',
    imageFirst: true,
  },
  {
    title: 'Xcaret Eco-Archaeological Park: Adventure',
    highlight: "Spend a full day exploring a spectacular mix of nature, history, and pure fun.",
    description: "At Xcaret, you can glide through cool underground rivers, wander jungle trails, and snorkel in natural lagoons. The park provides an all-day adventure experience unlike any other.",
    image: 'things-to-do/things-to-do-photo-16.png',
    imageFirst: false,
  },
  {
    title: 'Playa del Carmen Day\nScene (5th Ave)',
    highlight: "The famous 5th Avenue in Playa del Carmen isn't just for nightlife.",
    description: "During the day, it's a vibrant pedestrian street perfect for shopping, grabbing authentic handmade souvenirs, and finding unique cafes and bars to relax before the evening action starts.",
    image: 'things-to-do/things-to-do-photo-17.png',
    imageFirst: true,
  },
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
        <h2 className="text-[#333] text-left text-2xl md:text-3xl lg:text-[32px] leading-tight font-semibold whitespace-pre-line">
          {title}
        </h2>
        <p className="text-black text-left text-[15px] md:text-base leading-relaxed">
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
      alt={title.replace('\n', ' ')}
    />
  );

  return (
    <div className={`flex flex-col ${imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center w-full`}>
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
        of our guests say exploring local attractions was a highlight of their vacation
      </p>
    </div>
  );
}

export function ThingsToDoPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <SubNav />

      <div className="bg-[#f5f5f5] pt-8 md:pt-12 pb-8 md:pb-12 px-4 md:px-10 flex flex-col items-center justify-center w-full">
        <div
          className="bg-white rounded-[32px] pt-8 md:pt-12 px-4 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-8 md:gap-12 items-center justify-start w-full max-w-[1200px] overflow-hidden"
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
