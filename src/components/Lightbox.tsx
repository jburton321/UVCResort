import { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

export function Lightbox({ isOpen, onClose, videoUrl, title }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Video lightbox'}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl aspect-video animate-scale-in">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
          aria-label="Close lightbox"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="w-full h-full bg-black rounded-lg overflow-hidden shadow-2xl">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title || 'Video'}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-lg">
              Video content will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
