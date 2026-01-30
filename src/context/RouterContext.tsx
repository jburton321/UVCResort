import { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'accommodations' | 'amenities' | 'things-to-do' | 'all-inclusive' | 'download';

interface RouterContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const getInitialPage = (): Page => {
    const hash = window.location.hash.replace('#', '');
    const validPages: Page[] = ['home', 'accommodations', 'amenities', 'things-to-do', 'all-inclusive', 'download'];
    return validPages.includes(hash as Page) ? (hash as Page) : 'home';
  };

  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
}
