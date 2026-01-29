const amenities = [
  { image: 'image0.png', label: 'BEACHFRONT ACCESS' },
  { image: 'image2.png', label: 'TENNIS COURT' },
  { image: 'image4.png', label: 'OUTDOOR ADVENTURES' },
  { image: 'image6.png', label: 'HOT TUB OR SPA' },
  { image: 'image1.png', label: 'SWIMMING POOL - OUTDOOR' },
  { image: 'image3.png', label: 'FITNESS CENTER' },
  { image: 'image5.png', label: 'PREMIUM COCKTAILS' },
  { image: 'image7.png', label: 'ONSITE DINING' },
];

export function AmenitiesGrid() {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-content mx-auto text-center">
        <img
          className="h-10 sm:h-12 md:h-14 mx-auto mb-6 sm:mb-8"
          src="image-30.png"
          alt="Hyatt Zilara"
        />

        <h2 className="text-slate-800 text-xl sm:text-2xl md:text-3xl font-black uppercase mb-3 sm:mb-4 px-2">
          Explore THE AMENITIES AT<br />
          Hyatt Zilara Riviera Maya
        </h2>

        <p className="text-gray-800 text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
          Relax on pristine beaches, enjoy delicious cuisine, and create unforgettable memories together. With a range of amenities designed for couples, you'll find the ideal setting for your next adventure.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center gap-2 sm:gap-3">
              <img
                src={amenity.image}
                alt={amenity.label}
                className="w-full h-28 sm:h-36 md:h-44 object-cover rounded-lg"
              />
              <span className="text-black text-xs sm:text-sm font-medium uppercase text-center leading-tight">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
