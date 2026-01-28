import { Award, Wine, Car, Star } from 'lucide-react';
import { Button } from './Button';

const whatYouGet = [
  {
    icon: Award,
    title: '5-Days/4-Nights in a Deluxe Room',
    description: 'for two adults at the 5-Star Hyatt Zilara Riviera Maya for only $299 today. Pay the remaining $600 when you book your vacation dates.',
  },
  {
    icon: Wine,
    title: 'PREMIUM All-Inclusive Access:',
    description: 'Unlimited gourmet à la carte dining, top-shelf spirits & 24-hour room service.',
  },
  {
    icon: Car,
    title: 'Private Airport Transfers:',
    description: 'Complimentary round-trip ride',
  },
];

const whyYouGetIt = `The only thing you need to do to unlock this Incredible price is attend a relaxed 120-Minute Tour of the stunning Hyatt Zilara Riviera Maya. Think of it as your exclusive VIP pass! You'll get to see every amenity, every oceanfront bar, and every luxury detail of the resort, all while learning about the deep future travel savings offered by Unlimited Vacation Club.`;

export function AboutPackage() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-slate-800 text-2xl sm:text-3xl font-bold uppercase tracking-tight">
            About This Package
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <article className="flex flex-col gap-5 sm:gap-8">
            <header className="bg-brand-800 py-2.5 sm:py-3 px-4 sm:px-5 shadow-md">
              <h3 className="text-white text-lg sm:text-xl font-bold text-center uppercase">
                What you get
              </h3>
            </header>

            <div className="flex flex-col gap-3 sm:gap-4 px-1">
              {whatYouGet.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0 mt-0.5" />
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    <span className="font-bold">{item.title}</span>{' '}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="flex flex-col gap-5 sm:gap-8">
            <header className="bg-primary py-2.5 sm:py-3 px-4 sm:px-5 shadow-md">
              <h3 className="text-white text-lg sm:text-xl font-bold text-center uppercase">
                Why you get it
              </h3>
            </header>

            <div className="flex gap-3 px-1">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0 mt-0.5" />
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                {whyYouGetIt.split('attend a relaxed 120-Minute Tour')[0]}
                <span className="font-bold">attend a relaxed 120-Minute Tour</span>
                {whyYouGetIt.split('attend a relaxed 120-Minute Tour')[1]}
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-14 flex justify-center px-2">
          <Button className="w-full sm:w-auto sm:min-w-[300px] md:min-w-[400px] lg:max-w-3xl">Reserve Now</Button>
        </div>
      </div>
    </section>
  );
}
