import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';

const navLinks = [
  { label: 'Home', active: true },
  { label: 'Accommodations', active: false },
  { label: 'Amenities', active: false },
  { label: 'Things To Do', active: false },
  { label: 'All-Inclusive', active: false },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="p-1 sm:p-2">
            <img
              className="h-5 sm:h-6 w-auto"
              src="vacation-vip-full-color-horiz0.png"
              alt="VacationVIP Logo"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    className={`text-sm font-normal uppercase tracking-wide transition-colors py-2 ${
                      link.active
                        ? 'text-primary font-semibold'
                        : 'text-brand-700 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="small">reserve now</Button>
          </nav>

          <button
            className="lg:hidden p-3 -mr-2 min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    className={`block py-4 px-2 text-base font-normal uppercase tracking-wide min-h-[48px] flex items-center touch-manipulation active:bg-gray-100 ${
                      link.active ? 'text-primary font-semibold' : 'text-brand-700'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-2">
              <Button variant="small" className="w-full min-h-[48px]">reserve now</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
