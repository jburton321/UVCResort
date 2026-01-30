import { ButtonStateDefault } from '../components/amenities/ButtonStateDefault';
import { BannerProperty1Desktop } from '../components/amenities/BannerProperty1Desktop';
import { Footer } from '../components/Footer';

export function AllInclusivePage() {
  return (
    <div className="bg-[#f5f5f5] flex flex-col gap-0 items-start justify-start min-h-screen relative">

      <div className="bg-color-grey-96 pt-12 pr-4 md:pr-10 pb-12 pl-4 md:pl-10 flex flex-col gap-0 items-center justify-center w-full shrink-0 max-w-width-1920 relative">
        <div
          className="bg-color-white-solid rounded-[32px] p-4 sm:p-8 md:p-12 flex flex-col gap-12 items-center justify-start shrink-0 w-full max-w-width-1200 relative overflow-hidden"
          style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.30)" }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-8 items-start justify-start flex-1 relative">
              <div className="flex flex-col gap-8 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Your All-Inclusive Escape Awaits
                </div>
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[16px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Hyatt Zilara Riviera Maya offers an adults-only, all-inclusive experience designed to keep everything simple and connected.
                    </span>
                    <span>
                      {" "}Dining, drinks, service, and resort access are all part of your stay, so plans stay flexible and time stays yours. It's a straightforward way to enjoy the setting, the amenities, and the pace of the resort without added steps.
                    </span>
                  </span>
                </div>
              </div>
              <ButtonStateDefault className="!w-full !shrink-0" />
            </div>
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="/things-to-do/things-to-do-photo-10.png"
              alt="All-Inclusive Escape"
            />
          </div>

          <BannerProperty1Desktop text="84%" className="!shrink-0 !w-full" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-start self-stretch shrink-0 relative">
            <img
              className="rounded-2xl flex-1 w-full lg:w-auto h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="/things-to-do/things-to-do-photo-11.png"
              alt="Unlimited Dining"
            />
            <div className="flex flex-col gap-6 items-start justify-start flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Unlimited Dining and Drinks
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[16px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Every stay includes unlimited access to gourmet a la carte restaurants with no reservations required.
                    </span>
                    <span>
                      {" "}Enjoy a variety of global flavors alongside premium cocktails and a full selection of domestic and international spirits. Cafe options and bars across the resort make it easy to grab coffee, desserts, or drinks throughout the day and evening.
                    </span>
                  </span>
                </div>
              </div>
              <ButtonStateDefault className="!w-full !shrink-0" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-6 items-start justify-start shrink-0 flex-1 relative order-2 lg:order-1">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Resort and Beach Access Included
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[16px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Guests enjoy full access to pools, swim-up bar, beachfront spaces, fitness center, tennis court, and non-motorized water sports.
                    </span>
                    <span>
                      {" "}Daytime activities and evening entertainment are part of the experience, offering options to stay active or enjoy the resort atmosphere at your own pace.
                    </span>
                  </span>
                </div>
              </div>
              <ButtonStateDefault className="!w-full !shrink-0" />
            </div>
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover order-1 lg:order-2"
              src="/things-to-do/things-to-do-photo-12.png"
              alt="Resort and Beach Access"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-start self-stretch shrink-0 relative">
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="/things-to-do/things-to-do-photo-13.png"
              alt="Comfort and Service"
            />
            <div className="flex flex-col gap-6 items-start justify-start shrink-0 flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Comfort, Service, and Added Ease
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[16px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Your stay includes 24-hour room service, complimentary Wi-Fi, and attentive service throughout the resort.
                    </span>
                    <span>
                      {" "}Select room categories offer enhanced service options, and private airport transportation is available as part of select packages, helping the experience feel smooth right from arrival.
                    </span>
                  </span>
                </div>
              </div>
              <ButtonStateDefault className="!w-full !shrink-0" />
            </div>
          </div>
        </div>
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
