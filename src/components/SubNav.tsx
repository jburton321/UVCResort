const navItems = [
  'Resort video',
  'What you get',
  'Resort details',
  'Guest reviews',
  'Reserve it now',
];

export function SubNav() {
  return (
    <nav className="bg-white py-3 px-4 overflow-x-auto">
      <ul className="flex items-center justify-center gap-6 min-w-max">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-black text-sm font-normal uppercase tracking-wide hover:text-rose-500 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
