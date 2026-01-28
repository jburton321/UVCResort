import { Check } from 'lucide-react';

interface FeaturedListProps {
  title: string;
  items: string[];
  className?: string;
  accentColor?: string;
}

export function FeaturedList({
  title,
  items,
  className = '',
  accentColor = 'bg-purple-700',
}: FeaturedListProps) {
  return (
    <div className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-lg ${className}`}>
      <div className={`${accentColor} py-4 px-6`}>
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center">
          {title}
        </h3>
      </div>
      <div className="bg-white/95 backdrop-blur-sm py-6 px-6 sm:px-8">
        <ul className="space-y-3 sm:space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800 text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
