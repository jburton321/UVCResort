import { Star } from 'lucide-react';
import { Button } from './Button';
import { Gallery } from './Gallery';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: 'Maddie W',
    date: 'March 2025',
    rating: 5,
    text: "It was amazing!! We absolutely loved Agustin, Alejandra, and Nicole from Legends bar!! They were exceptional and served us with smiles and friendliness every night! We hated to leave..",
    avatar: '_67-d-0924777-f-9-fd-4-ea-51-ba-542-487-b-67-ace-3-ea-87851-c-0-d-6-f-391302-f-998-ava-1-webp0.png',
  },
  {
    name: 'Excursion26381924644',
    date: 'January 25',
    rating: 5,
    text: "Highly recommend this place. Great food all around, the beach is amazing, the staff is unbelievable. The resort is big but not overwhelming. The entertainment staff by itself is worth it. Sandy and Fermin are true legends. A trip I'll never forget.",
    avatar: '_67-d-0924777-f-9-fd-4-ea-51-ba-4-be-2853433-cd-627-e-5-efd-26-b-1-c-3-fada-1-eaae-ava-5-webp0.png',
  },
  {
    name: 'JeMaLu2018',
    date: 'June 2025',
    rating: 5,
    text: "Hyatt Zilara is the best hotel we have visited in Cancun, Playa del Carmen, Riviera Maya. Above and beyond service, excellent resort location, beautiful resort grounds, fantastic beach, top notch food and premium beverages. 24 hour room service. Minutes to 5th Avenue Playa del Carmen shopping and beach.",
    avatar: '_67-d-0924777-f-9-fd-4-ea-51-ba-4-de-2853575-a-86629-f-1-c-31-f-4-c-2-c-210419754-ava-4-webp0.png',
  },
];

const galleryImages = [
  'resort-photo-11.png',
  'resort-photo-21.png',
  'resort-photo-31.png',
  'resort-photo-41.png',
  'resort-photo-51.png',
  'link-dialog-open-lightbox13.png',
  'link-dialog-open-lightbox14.png',
  'link-dialog-open-lightbox15.png',
];

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <article
      className="bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col h-full w-full sm:max-w-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-3 mb-4 sm:mb-6">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 ring-2 ring-transparent group-hover:ring-accent transition-all duration-300"
        />
        <div className="min-w-0">
          <h4 className="font-bold text-sm text-gray-900 truncate">{review.name}</h4>
          <p className="text-gray-500 text-xs">{review.date}</p>
        </div>
      </div>

      <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-accent text-accent transition-transform duration-300 group-hover:scale-110"
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>

      <p className="text-gray-800 text-xs sm:text-sm leading-relaxed flex-1">
        {review.text}
      </p>

      <div className="mt-4 sm:mt-6">
        <img
          src="_67-d-0924777-f-9-fd-4-ea-51-ba-47-f-tripadvisor-svg0.svg"
          alt="TripAdvisor"
          className="h-4 sm:h-5 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center uppercase mb-8 sm:mb-12 md:mb-16">
          Guest Reviews
        </h2>

        <Gallery images={galleryImages} className="mb-8 sm:mb-10 md:mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center px-2">
          <Button className="w-full sm:w-auto sm:min-w-[300px] md:min-w-[400px] lg:max-w-3xl">Reserve Now</Button>
        </div>
      </div>
    </section>
  );
}
