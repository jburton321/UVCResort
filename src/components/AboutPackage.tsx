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
    <section className="bg-white py-20 px-4 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-navy-900 text-3xl font-bold uppercase tracking-tight">
            About This Package
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="flex flex-col gap-8">
            <header className="bg-gray-800 py-3 px-5">
              <h3 className="text-white text-xl font-bold text-center uppercase">
                What you get
              </h3>
            </header>

            <div className="flex flex-col gap-4">
              {whatYouGet.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <item.icon className="w-6 h-6 text-gray-600 shrink-0 mt-1" />
                  <p className="text-gray-800 text-base leading-relaxed">
                    <span className="font-bold">{item.title}</span>{' '}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="flex flex-col gap-8">
            <header className="bg-violet-700 py-3 px-5">
              <h3 className="text-white text-xl font-bold text-center uppercase">
                Why you get it
              </h3>
            </header>

            <div className="flex gap-3">
              <Star className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <p className="text-gray-800 text-base leading-relaxed">
                {whyYouGetIt.split('attend a relaxed 120-Minute Tour')[0]}
                <span className="font-bold">attend a relaxed 120-Minute Tour</span>
                {whyYouGetIt.split('attend a relaxed 120-Minute Tour')[1]}
              </p>
            </div>
          </article>
        </div>

        <div className="mt-14 flex justify-center">
          <Button className="w-full max-w-3xl">Reserve Now</Button>
        </div>
      </div>
    </section>
  );
}
