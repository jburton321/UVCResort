import { SubNav } from '../components/SubNav';
import { ButtonStateDefault } from '../components/amenities/ButtonStateDefault';
import { BannerProperty1Desktop } from '../components/amenities/BannerProperty1Desktop';
import { Footer } from '../components/Footer';

export function AmenitiesPage() {
  return (
    <div className="bg-color-white-solid flex flex-col gap-0 items-start justify-start min-h-screen relative">
      <SubNav />

      <div className="bg-color-grey-96 pt-12 pr-4 md:pr-10 pb-12 pl-4 md:pl-10 flex flex-col gap-0 items-center justify-center w-full shrink-0 max-w-width-1920 relative">
        <div
          className="bg-color-white-solid rounded-[32px] p-4 sm:p-8 md:p-12 flex flex-col gap-12 items-start justify-start shrink-0 w-full max-w-width-1200 relative overflow-hidden"
          style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.30)" }}
        >
          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-start justify-start shrink-0 relative w-full">
            <div className="flex flex-col items-start justify-between shrink-0 lg:h-[275px] relative flex-1 lg:flex-none lg:w-auto">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-col gap-8 items-start justify-start self-stretch shrink-0 relative">
                  <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                    All-Inclusive Amenities
                  </div>
                  <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[16px] leading-[22.4px] font-normal relative self-stretch">
                    <span>
                      <span className="font-semibold">
                        Hyatt Zilara Riviera Maya is an all-inclusive, adults-only beachfront resort
                      </span>
                      <span>
                        {" "}set across 70 acres of white sand shoreline and lush mangrove surroundings. The resort features 291 well-appointed rooms, including swim-up accommodations, designed for guests seeking comfort, privacy, and elevated service. Every stay includes access to the resort's Premium All-Inclusive experience, delivering thoughtful service, refined dining, and a seamless vacation experience centered on quality and attention to detail.
                      </span>
                    </span>
                  </div>
                </div>
                <ButtonStateDefault className="!w-full !shrink-0 mt-6" />
              </div>
            </div>
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="amenities/things-to-do-photo-10.png"
              alt="All-Inclusive Amenities"
            />
          </div>

          <BannerProperty1Desktop text="84%" className="!shrink-0 !w-full" />

          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-start justify-start shrink-0 relative w-full">
            <img
              className="rounded-2xl flex-1 w-full lg:w-auto h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="amenities/things-to-do-photo-11.png"
              alt="Luxury All-Inclusive Experience"
            />
            <div className="flex flex-col gap-item-spacing-234 items-start justify-start flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Luxury All-Inclusive Experience
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[15.875px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Your stay includes unlimited dining, drinks, Wi-Fi, entertainment, and full access to resort and beach amenities.
                    </span>
                    <span>
                      {" "}Everything is handled in one place, allowing you to focus on enjoying the setting, the service, and the pace of the resort without added decisions or extra planning.
                    </span>
                  </span>
                </div>
              </div>
              <ButtonStateDefault className="!w-full !shrink-0" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-item-spacing-l items-start justify-start shrink-0 relative w-full">
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="amenities/things-to-do-photo-12.png"
              alt="Gourmet Dining with Flexibility"
            />
            <div className="flex flex-col gap-item-spacing-234 items-start justify-start shrink-0 flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Gourmet Dining with Flexibility
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[15.875px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      The resort offers a diverse culinary program with four à la carte restaurants, a casual cafeteria, and multiple bars and lounges across the property.
                    </span>
                    <span>
                      {" "}Guests enjoy gourmet dining every evening with no reservations required, making it easy to choose what fits your mood. Options range across global cuisines, including guest-favorite Asian and hibachi experiences.
                      <br /><br />
                      A dedicated café and treats shop serves coffee, pastries, and desserts throughout the day, while bars across the resort provide unlimited access to premium cocktails and a wide selection of domestic and international spirits.
                    </span>
                  </span>
                </div>
              </div>
              <ButtonStateDefault className="!w-full !shrink-0" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-start justify-start shrink-0 relative w-full">
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="amenities/things-to-do-photo-13.png"
              alt="Pools, Beach, and Oceanfront Spaces"
            />
            <div className="flex flex-col gap-item-spacing-234 items-start justify-start shrink-0 flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Pools, Beach, and Oceanfront Spaces
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[15.875px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Spend your day by the main pool, relax at the swim-up bar, or take in ocean views from the resort's beachfront areas.
                    </span>
                    <span>
                      {" "}Swim-up rooms offer direct pool access steps from your terrace, while shaded loungers and open beach space provide plenty of room to enjoy the coast. Non-motorized water sports and beach activities are included as part of your stay.
                    </span>
                  </span>
                </div>
              </div>
              <ButtonStateDefault className="!w-full !shrink-0" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-item-spacing-l items-start justify-start shrink-0 relative w-full">
            <img
              className="rounded-2xl flex-1 w-full lg:w-auto h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="amenities/things-to-do-photo-14.png"
              alt="Wellness, Fitness, and Recreation"
            />
            <div className="flex flex-col gap-item-spacing-s items-start justify-start flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Wellness, Fitness, and Recreation
                </div>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-full lg:w-[522px] relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[16px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Guests have access to the Zen Spa, featuring a hydrotherapy circuit and a menu of specialized treatments.
                    </span>
                    <span>
                      {" "}A modern fitness center, tennis court, and guided fitness classes support an active stay, while poolside and beachfront activities keep the days engaging without feeling scheduled.
                    </span>
                  </span>
                </div>
              </div>
              <ButtonStateDefault className="!w-full !shrink-0" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-start justify-start shrink-0 relative w-full">
            <img
              className="rounded-2xl flex-1 w-full lg:w-auto h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="amenities/things-to-do-photo-15.png"
              alt="Nightly Entertainment and Social Spaces"
            />
            <div className="flex flex-col gap-item-spacing-s items-start justify-start flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Nightly Entertainment and Social Spaces
                </div>
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start shrink-0 relative w-full">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[15.625px] leading-[22.4px] font-normal relative w-full lg:w-[513.39px] flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Evenings bring live shows, themed events, and social gatherings throughout the resort.
                    </span>
                    <span>
                      {" "}Oceanfront bars and entertainment areas host performances and music that keep the energy going after sunset, offering a lively yet refined atmosphere designed for adults.
                    </span>
                  </span>
                </div>
              </div>
              <ButtonStateDefault className="!w-full !shrink-0" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[60px] md:pt-[100px] pr-4 md:pr-20 pb-[60px] md:pb-[100px] pl-4 md:pl-20 flex flex-col gap-item-spacing-80 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-color-grey-15 text-center font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative flex items-center justify-center">
            Resort Amenities Gallery
          </div>
        </div>
        <div className="flex flex-row gap-4 gap-y-[15px] items-start justify-center flex-wrap content-start shrink-0 w-full max-w-[1560px] relative">
          <div className="rounded-xl flex flex-col gap-0 items-start justify-start shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[509.33px] h-[240px] sm:h-[280px] lg:h-[339.55px] min-w-0 lg:min-w-height-400 max-w-width-1560 relative overflow-hidden">
            <img
              className="rounded-xl w-full shrink-0 h-full max-w-width-50933 relative overflow-hidden object-cover"
              src="amenities/photo-description0.png"
              alt="Resort amenity 1"
            />
          </div>
          <div className="rounded-xl flex flex-col gap-0 items-start justify-start shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[509.33px] h-[240px] sm:h-[280px] lg:h-[339.55px] min-w-0 lg:min-w-height-400 max-w-width-1560 relative overflow-hidden">
            <img
              className="rounded-xl w-full shrink-0 h-full max-w-width-50933 relative overflow-hidden object-cover"
              src="amenities/photo-description1.png"
              alt="Resort amenity 2"
            />
          </div>
          <div className="rounded-xl flex flex-col gap-0 items-start justify-start shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[509.33px] h-[240px] sm:h-[280px] lg:h-[339.55px] min-w-0 lg:min-w-height-400 max-w-width-1560 relative overflow-hidden">
            <img
              className="rounded-xl w-full shrink-0 h-full max-w-width-50933 relative overflow-hidden object-cover"
              src="amenities/photo-description2.png"
              alt="Resort amenity 3"
            />
          </div>
          <div className="rounded-xl flex flex-col gap-0 items-start justify-start shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[509.33px] h-[240px] sm:h-[280px] lg:h-[339.55px] min-w-0 lg:min-w-height-400 max-w-width-1560 relative overflow-hidden">
            <img
              className="rounded-xl w-full shrink-0 h-full max-w-width-50933 relative overflow-hidden object-cover"
              src="amenities/photo-description3.png"
              alt="Resort amenity 4"
            />
          </div>
          <div className="rounded-xl flex flex-col gap-0 items-start justify-start shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[509.33px] h-[240px] sm:h-[280px] lg:h-[339.55px] min-w-0 lg:min-w-height-400 max-w-width-1560 relative overflow-hidden">
            <img
              className="shrink-0 h-full w-full relative object-cover"
              src="amenities/hot-tub-by-building-18-and-190.png"
              alt="Resort amenity 5"
            />
          </div>
          <div className="rounded-xl flex flex-col gap-0 items-start justify-start shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[509.33px] h-[240px] sm:h-[280px] lg:h-[339.55px] min-w-0 lg:min-w-height-400 max-w-width-1560 relative overflow-hidden">
            <img
              className="rounded-xl w-full shrink-0 h-full max-w-width-50933 relative overflow-hidden object-cover"
              src="amenities/photo-description4.png"
              alt="Resort amenity 6"
            />
          </div>
        </div>
        <ButtonStateDefault className="!w-full !max-w-[400px] !shrink-0" />
      </div>

      <div className="flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative overflow-hidden">
        <div className="flex flex-col gap-0 items-center justify-center self-stretch shrink-0 relative">
          <img
            className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 h-auto relative overflow-visible"
            src="frame-19840779510.svg"
            alt="Decorative wave"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
