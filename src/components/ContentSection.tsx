import { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  description: string | ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  className?: string;
}

export function ContentSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  className = '',
}: ContentSectionProps) {
  return (
    <section className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${
            imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
          } gap-6 md:gap-8 lg:gap-12 items-center`}
        >
          <div className="w-full md:w-1/2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {title}
            </h2>
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
