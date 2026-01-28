export function ParadiseSection() {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(section-wrapper0.png)' }}
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="text-white text-3xl md:text-4xl font-semibold uppercase tracking-wide">
            5-Day/4-Night
          </span>
          <h2 className="text-black text-5xl md:text-7xl font-medium mt-4">
            BEACHFRONT
          </h2>
          <div className="text-6xl md:text-8xl font-medium leading-tight mt-2">
            <span className="text-blue-900">RIVIERA CANCUN</span>
            <br />
            <span className="text-amber-500">VACATION</span>
          </div>
          <p className="text-gray-800 text-xl md:text-2xl mt-8 max-w-3xl mx-auto leading-relaxed">
            Zilara Riviera Maya is Just $299 Today for Two Adults - Your 5-Day All-Inclusive Luxury Escape to Hyatt
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="bg-white px-4 py-2 rounded shadow">
            <span className="font-bold text-sm">ONLY</span>
          </div>
          <div className="bg-violet-700 rounded-full w-44 h-44 flex flex-col items-center justify-center border-4 border-white shadow-lg">
            <span className="text-white text-lg">5-DAYS</span>
            <span className="text-white text-5xl font-black">$299</span>
            <span className="text-white text-xs">PER PACKAGE</span>
            <span className="text-white text-xs">(All 4-Nights)</span>
          </div>
          <div className="bg-white px-4 py-2 rounded shadow">
            <span className="font-bold text-sm">SAVE</span>
            <br />
            <span className="font-black text-2xl">84%</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-16 px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-white text-2xl font-extrabold uppercase mb-10">
            Ultimate Adults-Only Paradise
          </h3>
          <p className="text-white text-xl leading-relaxed">
            Discover true beachfront bliss on a pristine white-sand beach, creating the perfect backdrop for romance and relaxation. The Premium All-Inclusive experience offers specialty gourmet à la carte dining nightly; no reservations needed, for a world-class culinary adventure. Enjoy seamless service from the moment you arrive with a private Amstar transfer, 24-hour room service, and an award-winning staff ensuring you are pampered at every turn.
          </p>
        </div>
      </div>
    </section>
  );
}
