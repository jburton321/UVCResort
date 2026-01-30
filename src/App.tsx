import "./styles.css";
import "./tailwind.css";
import { Header, Footer, MobileStickyCTA } from "./components";
import { RouterProvider, useRouter } from "./context/RouterContext";
import { HomePage } from "./pages/HomePage";
import { AccommodationsPage } from "./pages/AccommodationsPage";
import { AmenitiesPage } from "./pages/AmenitiesPage";
import { ThingsToDoPage } from "./pages/ThingsToDoPage";

function AppContent() {
  const { currentPage } = useRouter();

  return (
    <div className="bg-white min-h-screen pb-20 lg:pb-0">
      <Header />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'accommodations' && <AccommodationsPage />}
        {currentPage === 'amenities' && <AmenitiesPage />}
        {currentPage === 'things-to-do' && <ThingsToDoPage />}
        {currentPage === 'all-inclusive' && (
          <div className="py-20 text-center">
            <h1 className="text-4xl font-bold">All-Inclusive Page</h1>
            <p className="text-gray-600 mt-4">Coming soon...</p>
          </div>
        )}
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
