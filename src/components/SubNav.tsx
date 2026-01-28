const navItems = [
  'Resort video',
  'What you get',
  'Resort details',
  'Guest reviews',
  'Reserve it now',
];

export function SubNav() {
  return (
    <nav className="bg-white py-2 sm:py-3 px-3 sm:px-4 overflow-x-auto shadow-sm scrollbar-hide">
      <ul className="flex items-center justify-start sm:justify-center gap-4 sm:gap-6 min-w-max">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-brand-700 text-xs sm:text-sm font-normal uppercase tracking-wide hover:text-primary transition-colors py-2 px-1 block min-h-[44px] flex items-center touch-manipulation"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
