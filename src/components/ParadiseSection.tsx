export function ParadiseSection() {
  return (
    <section
      className="relative py-10 sm:py-12 md:py-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(section-wrapper0.png)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 sm:mb-8">
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wide">
            5-Day/4-Night
          </span>
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium mt-2 sm:mt-4">
            BEACHFRONT
          </h2>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium leading-tight mt-1 sm:mt-2">
            <span className="text-blue-900">RIVIERA CANCUN</span>
            <br />
            <span className="text-accent">VACATION</span>
          </div>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed px-2">
            Zilara Riviera Maya is Just $299 Today for Two Adults - Your 5-Day All-Inclusive Luxury Escape to Hyatt
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-white px-3 sm:px-4 py-2 rounded shadow order-2 sm:order-1">
            <span className="font-bold text-xs sm:text-sm">ONLY</span>
          </div>
          <div className="bg-primary rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 flex flex-col items-center justify-center border-4 border-white shadow-lg order-1 sm:order-2">
            <span className="text-white text-sm sm:text-base md:text-lg">5-DAYS</span>
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-black">$299</span>
            <span className="text-white text-[10px] sm:text-xs">PER PACKAGE</span>
            <span className="text-white text-[10px] sm:text-xs">(All 4-Nights)</span>
          </div>
          <div className="bg-white px-3 sm:px-4 py-2 rounded shadow order-3">
            <span className="font-bold text-xs sm:text-sm">SAVE</span>
            <br />
            <span className="font-black text-xl sm:text-2xl">84%</span>
          </div>
        </div>
      </div>

      <div className="bg-brand-800 py-10 sm:py-12 md:py-16 px-4 sm:px-6 mt-6 sm:mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-accent text-xl sm:text-2xl font-extrabold uppercase mb-6 sm:mb-8 md:mb-10">
            Ultimate Adults-Only Paradise
          </h3>
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
            Discover true beachfront bliss on a pristine white-sand beach, creating the perfect backdrop for romance and relaxation. The Premium All-Inclusive experience offers specialty gourmet à la carte dining nightly; no reservations needed, for a world-class culinary adventure. Enjoy seamless service from the moment you arrive with a private Amstar transfer, 24-hour room service, and an award-winning staff ensuring you are pampered at every turn.
          </p>
        </div>
      </div>
    </section>
  );
}
