import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselButtonProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  className?: string;
}

export function CarouselButton({ direction, onClick, className = '' }: CarouselButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  const position = direction === 'left' ? 'left-1 sm:left-2' : 'right-1 sm:right-2';

  return (
    <button
      onClick={onClick}
      className={`absolute ${position} top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black/30 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 active:scale-95 transition-all touch-manipulation min-w-[44px] min-h-[44px] ${className}`}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
    </button>
  );
}
