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
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <img
          className="h-14 mx-auto mb-8"
          src="image-30.png"
          alt="Hyatt Zilara"
        />

        <h2 className="text-navy-900 text-2xl md:text-3xl font-black uppercase mb-4">
          Explore THE AMENITIES AT<br />
          Hyatt Zilara Riviera Maya
        </h2>

        <p className="text-gray-800 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Relax on pristine beaches, enjoy delicious cuisine, and create unforgettable memories together. With a range of amenities designed for couples, you'll find the ideal setting for your next adventure.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <img
                src={amenity.image}
                alt={amenity.label}
                className="w-full h-44 object-cover rounded-lg"
              />
              <span className="text-black text-sm font-medium uppercase">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
