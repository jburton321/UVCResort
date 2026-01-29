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
    <section className={`py-fluid-6 px-4 md:px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${
            imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
          } gap-fluid-4 items-center`}
        >
          <div className="w-full md:w-1/2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-xl md:rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-fluid-2xl md:text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-4 md:mb-6">
              {title}
            </h2>
            <div className="text-fluid-base md:text-fluid-lg text-gray-700 leading-relaxed">
              {description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
