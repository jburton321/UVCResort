import { ButtonStateDefault } from '../components/amenities/ButtonStateDefault';
import { BannerProperty1Desktop } from '../components/amenities/BannerProperty1Desktop';

export function ThingsToDoPage() {
  return (
    <div className="bg-[#f5f5f5] flex flex-col gap-0 items-start justify-start relative">
      <div className="bg-color-grey-96 pt-12 pr-4 md:pr-10 pb-12 pl-4 md:pl-10 flex flex-col gap-0 items-center justify-center w-[100%] shrink-0 max-w-width-1920 relative">
        <div
          className="bg-color-white-solid rounded-[32px] pt-[47px] pr-4 md:pr-12 pb-[47px] pl-4 md:pl-12 flex flex-col gap-12 items-center justify-start shrink-0 w-full max-w-width-1200 relative overflow-hidden"
          style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.30)" }}
        >
          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-8 items-start justify-start flex-1 relative">
              <div className="flex flex-col gap-8 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Explore Like a Local{" "}
                </div>
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[16px] leading-[24px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      The Hyatt Zilara Riviera Maya is your gateway to Riviera
                      Cancun's best!
                    </span>
                    <span>
                      {" "}You're perfectly positioned to explore epic history,
                      stunning nature, and vibrant local life. Feel the ancient
                      energy of the Mayan civilization beneath your feet.
                    </span>
                  </span>{" "}
                </div>
              </div>
              <ButtonStateDefault className="!w-[100%] !shrink-0" />
            </div>
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="things-to-do/things-to-do-photo-10.png"
            />
          </div>
          <BannerProperty1Desktop
            text="84%"
            className="!shrink-0 !w-full lg:!w-[1104px]"
          />
          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-center justify-start self-stretch shrink-0 relative">
            <img
              className="rounded-2xl flex-1 w-full lg:w-auto h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="things-to-do/things-to-do-photo-11.png"
            />
            <div className="flex flex-col gap-item-spacing-s items-start justify-start flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Downtown Playa del Carmen Nightlife{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[16px] leading-[24px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      The famous Quinta Avenida (5th Avenue) is the Riviera
                      Maya's evening hot spot, located just a quick, easy
                      transfer from the resort.
                    </span>
                    <span>
                      {" "}This vibrant, pedestrian street is the place to be for
                      high-energy entertainment, featuring everything from
                      bustling dance clubs to sophisticated rooftop lounges.
                    </span>
                  </span>{" "}
                </div>
              </div>
              <ButtonStateDefault className="!w-[100%] !shrink-0" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-center justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-item-spacing-s items-start justify-start shrink-0 flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Specialty Tequila &amp; Mixology Scene{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[15.875px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Beyond the main clubs in Playa del Carmen, you can
                      experience authentic Mexican mixology. Seek out
                      specialized Tequilerias and craft cocktail bars that focus
                      on premium spirits like Tequila and Mezcal.
                    </span>
                    <span>
                      {" "}Expert bartenders use unique, local ingredients to elevate
                      your tasting experience.
                    </span>
                  </span>{" "}
                </div>
              </div>
              <ButtonStateDefault className="!w-[100%] !shrink-0" />
            </div>
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="things-to-do/things-to-do-photo-12.png"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-center justify-start self-stretch shrink-0 relative">
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="things-to-do/things-to-do-photo-13.png"
            />
            <div className="flex flex-col gap-item-spacing-s items-start justify-start shrink-0 flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Chichén Itzá:
                  <br />
                  New Wonder of the World{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[15.875px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      This is the ultimate bucket-list must-do and an
                      unforgettable cultural journey.
                    </span>
                    <span>
                      {" "}Visit one of the New Seven Wonders of the World to marvel
                      at the sheer scale and architectural genius of El Castillo
                      pyramid. This UNESCO World Heritage Site offers deep
                      historical insight into the ancient Mayan civilization.
                    </span>
                  </span>{" "}
                </div>
              </div>
              <ButtonStateDefault className="!w-[100%] !shrink-0" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-center justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-item-spacing-s items-start justify-start shrink-0 flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Tulum Ruins{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[15.875px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Capture the ultimate, postcard-perfect photo opportunity
                      at the Tulum Ruins.
                    </span>
                    <span>
                      {" "}These iconic Mayan structures are dramatically set atop a
                      12-meter (39 ft) cliff, offering unmatched, breathtaking
                      views of the turquoise Caribbean Sea. It's a
                      fascinating blend of history and stunning natural scenery.
                    </span>
                  </span>{" "}
                </div>
              </div>
              <ButtonStateDefault className="!w-[100%] !shrink-0" />
            </div>
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="things-to-do/things-to-do-photo-14.png"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-center justify-start self-stretch shrink-0 relative">
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="things-to-do/things-to-do-photo-15.png"
            />
            <div className="flex flex-col gap-item-spacing-s items-start justify-start shrink-0 flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Cenotes: The Sacred Natural Sinkholes{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[16px] leading-[24px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Swimming in a cenote a sacred natural sinkhole is a truly
                      one-of-a-kind, refreshing experience and a journey into
                      the Mayan underworld.
                    </span>
                    <span>
                      {" "}These natural pools are filled with cool, crystal-clear
                      water, perfect for a relaxing float in an environment
                      surrounded by ancient formations.
                    </span>
                  </span>{" "}
                </div>
              </div>
              <ButtonStateDefault className="!w-[100%] !shrink-0" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-center justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-item-spacing-s items-start justify-start shrink-0 flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Xcaret Eco-Archaeological Park: Adventure{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[15.875px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      Spend a full day exploring a spectacular mix of nature,
                      history, and pure fun.
                    </span>
                    <span>
                      {" "}At Xcaret, you can glide through cool underground rivers,
                      wander jungle trails, and snorkel in natural lagoons. The
                      park provides an all-day adventure experience unlike any
                      other.
                    </span>
                  </span>{" "}
                </div>
              </div>
              <ButtonStateDefault className="!w-[100%] !shrink-0" />
            </div>
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="things-to-do/things-to-do-photo-16.png"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-item-spacing-l items-center justify-start self-stretch shrink-0 relative">
            <img
              className="rounded-2xl shrink-0 w-full lg:w-[528px] h-[280px] sm:h-[340px] lg:h-[396px] max-w-width-1104 relative overflow-hidden object-cover"
              src="things-to-do/things-to-do-photo-17.png"
            />
            <div className="flex flex-col gap-item-spacing-s items-start justify-start shrink-0 flex-1 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-grey-20 text-left font-roboto text-[24px] md:text-[32px] leading-[35.2px] font-bold relative self-stretch flex items-center justify-start">
                  Playa del Carmen Day
                  <br />
                  Scene (5th Ave){" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-color-black-solid text-left font-roboto text-[15px] md:text-[15.875px] leading-[22.4px] font-normal relative self-stretch flex items-center justify-start">
                  <span>
                    <span className="font-semibold">
                      The famous 5th Avenue in Playa del Carmen isn't just
                      for nightlife.
                    </span>
                    <span>
                      {" "}During the day, it's a vibrant pedestrian street
                      perfect for shopping, grabbing authentic handmade
                      souvenirs, and finding unique cafes and bars to relax
                      before the evening action starts.
                    </span>
                  </span>{" "}
                </div>
              </div>
              <ButtonStateDefault className="!w-[100%] !shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
