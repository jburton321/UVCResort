import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Resort video', href: '#resort-video' },
  { label: 'What you get', href: '#what-you-get' },
  { label: 'Resort details', href: '#resort-details' },
  { label: 'Guest reviews', href: '#guest-reviews' },
  { label: 'Reserve it now', href: '#reserve-now' },
];

export function SubNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white py-2 md:py-3 px-3 md:px-4 overflow-x-auto shadow-sm scrollbar-hide sticky top-[52px] md:top-[56px] z-40">
      <ul className="flex items-center justify-start md:justify-center gap-4 md:gap-6 min-w-max">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`text-fluid-xs md:text-fluid-sm font-normal uppercase tracking-wide transition-colors py-2 px-1 block min-h-touch flex items-center touch-manipulation ${
                activeSection === item.href.slice(1)
                  ? 'text-primary font-semibold'
                  : 'text-brand-700 hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
