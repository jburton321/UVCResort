import { Button } from './Button';

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4 z-40 lg:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-gray-600 truncate">5-Day Luxury Vacation</p>
          <p className="text-lg sm:text-xl font-bold text-slate-800">$299<span className="text-xs sm:text-sm font-normal text-gray-500">/couple</span></p>
        </div>
        <Button className="shrink-0 min-h-[48px] px-6 sm:px-8">
          Reserve
        </Button>
      </div>
    </div>
  );
}
