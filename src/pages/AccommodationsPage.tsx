import { Tv, Coffee, Wine, Shirt, Lock } from 'lucide-react';
import { Gallery } from '../components/Gallery';
import { Button } from '../components/Button';
import { MapSection } from '../components/MapSection';

const roomFeatures = [
  { icon: Tv, label: '55" flat-screen HDTV' },
  { icon: Coffee, label: 'Nespresso coffee/tea maker' },
  { icon: Wine, label: 'Minibar (refreshed daily)' },
  { icon: 'hairdryer', label: 'Hair dryer' },
  { icon: Shirt, label: 'Bathrobes and slippers' },
  { icon: Lock, label: 'In-room safe' },
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

function HairDryerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 6C21 4.9 20.1 4 19 4H17V2H15V4H14C12.9 4 12 4.9 12 6V10C12 11.1 12.9 12 14 12H15V22H17V12H19C20.1 12 21 11.1 21 10V6ZM19 10H14V6H19V10ZM5 6C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H9C10.1 22 11 21.1 11 20V8C11 6.9 10.1 6 9 6H5ZM9 20H5V8H9V20Z" fill="currentColor"/>
    </svg>
  );
}

export function AccommodationsPage() {
  return (
    <>
      <section
        className="relative py-12 md:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(section0.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Accommodations
                </h1>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                  <span className="font-semibold">Your VIP package includes 5 Days and 4 Nights in a luxurious, finely appointed Deluxe Room.</span>{' '}
                  This isn't just a hotel room, it's your private sanctuary designed just for you to decompress, disconnect, and recharge. Experience the absolute best in adults-only luxury, crafted for couples and complete relaxation.
                </p>
                <Button className="self-start">RESERVE NOW</Button>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-[#7535ad] py-4 px-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold">Room Features:</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {roomFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        {feature.icon === 'hairdryer' ? (
                          <HairDryerIcon className="w-6 h-6 text-gray-700 flex-shrink-0" />
                        ) : (
                          <feature.icon className="w-6 h-6 text-gray-700 flex-shrink-0" />
                        )}
                        <span className="text-gray-800">{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-12 bg-gray-100 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#00c0d5] flex items-center justify-center">
                      <span className="text-white text-3xl sm:text-4xl font-black">84%</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#ffd174] rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">OFF</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    Luxury All-Inclusive<br className="hidden sm:block" /> Riviera Cancun Vacation
                  </h4>
                  <div className="space-y-1 text-sm text-gray-800">
                    <div className="flex items-start gap-2 justify-center lg:justify-start">
                      <img src="bed0.svg" alt="" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="font-bold">Deluxe Room for two adults at the 5-Star Hyatt Zilara Riviera Maya</span>
                    </div>
                    <div className="flex items-start gap-2 justify-center lg:justify-start">
                      <img src="local-bar0.svg" alt="" className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-semibold">Unlimited-Luxury, Where Everything's Included:</span>{' '}
                        Unlimited Dining, Drinks, Wifi, Entertainment, Resort & Beach Amenities!
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#ffd174] rounded-xl py-5 px-8 text-center min-w-[200px]">
                  <div className="text-sm font-bold uppercase text-gray-800 mb-2">Offer expires:</div>
                  <div className="flex items-center justify-center gap-1 text-gray-900">
                    <div className="text-center">
                      <div className="text-2xl font-bold">00</div>
                      <div className="text-xs uppercase text-gray-600">hr</div>
                    </div>
                    <span className="text-2xl font-bold">:</span>
                    <div className="text-center">
                      <div className="text-2xl font-bold">44</div>
                      <div className="text-xs uppercase text-gray-600">min</div>
                    </div>
                    <span className="text-2xl font-bold">:</span>
                    <div className="text-center">
                      <div className="text-2xl font-bold">58</div>
                      <div className="text-xs uppercase text-gray-600">sec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery images={accommodationsGallery} />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src="accommodations/resort-photo-11.png"
                alt="Finely Appointed Luxury Room"
                className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Finely Appointed Luxury - Your Deluxe Room
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">This 474-square-foot Deluxe Room opens to mangrove views from a furnished balcony.</span>{' '}
                Inside, a king-size bed with premium bedding anchors the space, paired with a clean, modern layout that feels open and comfortable. The marble bathroom features double vanities and a spacious rain shower, finished with high-quality bath amenities. Thoughtful design and calm surroundings make this room feel private and inviting.
              </p>
              <Button>RESERVE NOW</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src="accommodations/resort-photo-21.png"
                alt="Ultimate Convenience Amenities"
                className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ultimate Convenience &<br />Resort Amenities
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">Your room is set up to make everything feel easy.</span>{' '}
                Premium amenities and dedicated butler service support a smooth stay, while fine dining, the spa, and the beach are all close by. Inside, the space includes individual climate control, blackout curtains, complimentary high-speed Wi-Fi, an iron and ironing board, and 24-hour room service. Everything you need is here in place.
              </p>
              <Button>RESERVE NOW</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src="accommodations/resort-photo-31.png"
                alt="Suite with Private Balcony"
                className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Suite featuring Private<br />Patio/Balcony
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">Suites include a private furnished balcony or patio and comfortable living space that lets you move freely between restful and social areas.</span>{' '}
                In select suites, special touches like butler service and private plunge pools are included. With prime positioning near the beach and dining venues, you're perfectly placed to enjoy every part of your resort experience.
              </p>
              <Button>RESERVE NOW</Button>
            </div>
          </div>
        </div>
      </section>

      <MapSection />

      <img
        className="w-full h-auto"
        src="frame-19840779510.svg"
        alt="Decorative divider"
      />
    </>
  );
}
