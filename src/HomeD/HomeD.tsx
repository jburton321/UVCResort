import { ButtonStateSmall } from "../ButtonStateSmall/ButtonStateSmall";
import { FooterContainer } from "../FooterContainer/FooterContainer";
import { ButtonStateDefault } from "../ButtonStateDefault/ButtonStateDefault";
import { Group6095 } from "../Group6095/Group6095";
import { Frame37708 } from "../Frame37708/Frame37708";

export interface IHomeDProps {
  className?: string;
}

export const HomeD = ({ className, ...props }: IHomeDProps): JSX.Element => {
  return (
    <div
      className={
        "bg-color-white-solid flex flex-col gap-0 items-center justify-start relative overflow-hidden " +
        className
      }
    >
      <div
        className="bg-color-white-solid pt-3 pb-3 flex flex-row gap-0 items-center justify-center self-stretch shrink-0 relative"
        style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex flex-row gap-item-spacing-38317 items-center justify-start shrink-0 w-[1200px] max-w-width-1200 relative">
          <div className="p-2.5 flex flex-col gap-2.5 items-start justify-start shrink-0 w-[197px] relative">
            <img
              className="border-solid border-[transparent] border self-stretch shrink-0 h-[23px] relative"
              style={{ objectFit: "cover" }}
              src="vacation-vip-full-color-horiz0.png"
            />
          </div>
          <div className="flex flex-row gap-item-spacing-32 items-center justify-start shrink-0 relative">
            <div className="flex flex-row gap-item-spacing-s items-start justify-center shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[45.56px] relative">
                <div className="text-[#d2586b] text-left font-exploria-poconos-99webflowio-semantic-link-upper-font-family text-exploria-poconos-99webflowio-semantic-link-upper-font-size leading-exploria-poconos-99webflowio-semantic-link-upper-line-height font-exploria-poconos-99webflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-start">
                  Home{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[145.31px] relative">
                <div className="text-color-grey-13 text-left font-exploria-poconos-99webflowio-semantic-link-upper-font-family text-exploria-poconos-99webflowio-semantic-link-upper-font-size leading-exploria-poconos-99webflowio-semantic-link-upper-line-height font-exploria-poconos-99webflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-start">
                  ACCOMMODATIONS{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[80.77px] relative">
                <div className="text-color-grey-13 text-left font-exploria-poconos-99webflowio-semantic-link-upper-font-family text-exploria-poconos-99webflowio-semantic-link-upper-font-size leading-exploria-poconos-99webflowio-semantic-link-upper-line-height font-exploria-poconos-99webflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-start">
                  Amenities{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[108.44px] relative">
                <div className="text-color-grey-13 text-left font-exploria-poconos-99webflowio-semantic-link-upper-font-family text-exploria-poconos-99webflowio-semantic-link-upper-font-size leading-exploria-poconos-99webflowio-semantic-link-upper-line-height font-exploria-poconos-99webflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-start">
                  THINGS TO DO{" "}
                </div>
              </div>
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[108.44px] relative">
                <div className="text-color-grey-13 text-left font-exploria-poconos-99webflowio-semantic-link-upper-font-family text-exploria-poconos-99webflowio-semantic-link-upper-font-size leading-exploria-poconos-99webflowio-semantic-link-upper-line-height font-exploria-poconos-99webflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-start">
                  ALL-INCLUSIVE{" "}
                </div>
              </div>
            </div>
            <ButtonStateSmall
              state="small"
              className="!shrink-0"
            ></ButtonStateSmall>
          </div>
        </div>
      </div>
      <div
        className="pt-12 pb-12 flex flex-row gap-0 items-center justify-center shrink-0 w-[1920px] h-[800px] max-w-width-1920 max-h-[800px] relative overflow-hidden"
        style={{
          background:
            "linear-gradient(155.83deg, rgba(0, 0, 0, 0.15) 0%,rgba(0, 0, 0, 0.00) 100%)",
          background: "url(section0.png) center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FooterContainer
          text="Normal Rate: $5,600"
          text2="$299*"
          text3="*Pay $600 at the time of booking for all 5-days/4-nights"
          text4="84%OFF!"
          text5="Deluxe Room for two adults at the5-Star Hyatt Zilara Riviera Maya"
          className="!shrink-0 !w-[390px] !h-[757px] !absolute !left-[1147px] !top-[21px]"
        ></FooterContainer>
        <div className="flex flex-col items-start justify-start shrink-0 w-[614.5px] absolute left-[440px] top-[92px]">
          <img
            className="shrink-0 w-[596px] h-[396.48px] relative"
            style={{ objectFit: "cover", aspectRatio: "596/396.48" }}
            src="mexico-10.png"
          />
          <img
            className="self-stretch shrink-0 h-[359.29px] relative"
            style={{
              margin: "-52px 0 0 0",
              objectFit: "cover",
              aspectRatio: "614.5/359.29",
            }}
            src="layer-0-10.png"
          />
          <div
            className="bg-[#ffffff] rounded-[40px] p-2 flex flex-row gap-2 items-center justify-center shrink-0 absolute left-[253.5px] top-[614px]"
            style={{ margin: "-52px 0 0 0", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 max-w-width-14506 relative overflow-hidden">
              <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-6 h-6 relative overflow-hidden">
                <div className="shrink-0 w-6 h-6 relative overflow-hidden">
                  <img
                    className="h-[auto] absolute left-0 top-0 overflow-visible"
                    src="mask-group0.svg"
                  />
                </div>
              </div>
            </div>
            <div className="text-neutral-950 text-left font-['Roboto-Medium',_sans-serif] text-sm leading-font-size-16 font-medium relative flex items-center justify-start">
              Play video{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-color-white-solid p-4 flex flex-row gap-item-spacing-s items-center justify-center self-stretch shrink-0 h-[46px] relative"
        style={{ overflowX: "auto" }}
      >
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#000000] text-left font-exploria-poconos-99webflowio-semantic-link-upper-font-family text-exploria-poconos-99webflowio-semantic-link-upper-font-size leading-exploria-poconos-99webflowio-semantic-link-upper-line-height font-exploria-poconos-99webflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-start">
            Resort video{" "}
          </div>
        </div>
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#000000] text-left font-exploria-poconos-99webflowio-semantic-link-upper-font-family text-exploria-poconos-99webflowio-semantic-link-upper-font-size leading-exploria-poconos-99webflowio-semantic-link-upper-line-height font-exploria-poconos-99webflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-start">
            What you get{" "}
          </div>
        </div>
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#000000] text-left font-exploria-poconos-99webflowio-semantic-link-upper-font-family text-exploria-poconos-99webflowio-semantic-link-upper-font-size leading-exploria-poconos-99webflowio-semantic-link-upper-line-height font-exploria-poconos-99webflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-start">
            Resort details{" "}
          </div>
        </div>
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#000000] text-left font-exploria-poconos-99webflowio-semantic-link-upper-font-family text-exploria-poconos-99webflowio-semantic-link-upper-font-size leading-exploria-poconos-99webflowio-semantic-link-upper-line-height font-exploria-poconos-99webflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-start">
            Guest reviews{" "}
          </div>
        </div>
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
          <div className="text-[#000000] text-left font-exploria-poconos-99webflowio-semantic-link-upper-font-family text-exploria-poconos-99webflowio-semantic-link-upper-font-size leading-exploria-poconos-99webflowio-semantic-link-upper-line-height font-exploria-poconos-99webflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-start">
            Reserve it now{" "}
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] flex flex-col gap-0 items-start justify-center self-stretch shrink-0 relative">
        <div className="bg-[#f3f3f3] self-stretch shrink-0 h-80 relative overflow-[auto]">
          <div className="flex flex-row gap-line-height-16 items-center justify-start w-[1920px] absolute left-4 bottom-4 top-4">
            <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
              <img
                className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="resort-photo-10.png"
              />
            </div>
            <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
              <img
                className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="resort-photo-20.png"
              />
            </div>
            <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
              <img
                className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="resort-photo-30.png"
              />
            </div>
            <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
              <img
                className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="resort-photo-40.png"
              />
            </div>
            <div
              className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden"
              style={{
                background: "url(link-dialog-open-lightbox4.png) center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                style={{ objectFit: "cover" }}
                src="resort-photo-50.png"
              />
            </div>
            <img
              className="rounded-2xl shrink-0 w-96 h-72 min-w-width-384 max-w-width-2784 relative overflow-hidden"
              style={{ objectFit: "cover" }}
              src="link-dialog-open-lightbox5.png"
            />
            <img
              className="rounded-2xl shrink-0 w-96 h-72 min-w-width-384 max-w-width-2784 relative overflow-hidden"
              style={{ objectFit: "cover" }}
              src="link-dialog-open-lightbox6.png"
            />
            <img
              className="rounded-2xl shrink-0 w-96 h-72 min-w-width-384 max-w-width-2784 relative overflow-hidden"
              style={{ objectFit: "cover" }}
              src="link-dialog-open-lightbox7.png"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between shrink-0 w-[1920px] absolute left-0 top-32">
          <div
            className="bg-color-black-30 rounded-[32px] border-solid border-color-white-solid border-2 p-0.5 flex flex-col gap-0 items-center justify-center shrink-0 w-16 h-16 relative"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-12 max-w-width-64 relative overflow-hidden">
              <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-12 h-12 relative overflow-hidden">
                <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                  <img
                    className="h-[auto] absolute left-0 top-0 overflow-visible"
                    src="mask-group1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-color-black-30 rounded-[32px] border-solid border-color-white-solid border-2 p-0.5 flex flex-col gap-0 items-center justify-center shrink-0 w-16 h-16 relative"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-12 max-w-width-64 relative overflow-hidden">
              <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-12 h-12 relative overflow-hidden">
                <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                  <img
                    className="h-[auto] absolute left-0 top-0 overflow-visible"
                    src="mask-group2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] pt-20 pr-10 pb-20 pl-10 flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
        <div className="rounded-2xl p-8 flex flex-col gap-[58px] items-center justify-center w-[100%] shrink-0 max-w-width-920 relative">
          <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
            <div
              className="text-color-azure-17 text-center font-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-2-upper-font-family text-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-2-upper-font-size leading-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-2-upper-line-height font-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-2-upper-font-weight uppercase relative flex items-center justify-center"
              style={{
                letterSpacing:
                  "var(--bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-2-upper-letter-spacing, -0.8px)",
              }}
            >
              ABOUT THIS PACKAGE{" "}
            </div>
          </div>
          <div className="flex flex-row gap-font-size-32 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-8 items-start justify-start flex-1 relative">
              <div className="bg-[#2a323b] border-solid border-[#2a323b] border pt-3 pr-5 pb-3 pl-5 flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
                  <div className="text-[#ffffff] text-center font-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-3-upper-font-family text-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-3-upper-font-size leading-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-3-upper-line-height font-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-3-upper-font-weight uppercase relative self-stretch flex items-center justify-center">
                    What you get{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-row gap-item-spacing-10 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-2.5 items-start justify-center shrink-0 relative">
                    <div className="flex flex-col gap-0 items-start justify-start shrink-0 max-w-width-444 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-6 h-6 relative overflow-hidden">
                        <img
                          className="shrink-0 w-6 h-6 relative overflow-visible"
                          style={{ aspectRatio: "1" }}
                          src="award-star0.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
                    <div className="text-color-grey-15 text-left font-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-font-family text-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-font-size leading-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-line-height font-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-font-weight relative self-stretch flex items-center justify-start">
                      <span>
                        <span className="_5-days-4-nights-in-a-deluxe-room-for-two-adults-at-the-5-star-hyatt-zilara-riviera-maya-for-only-299-today-pay-the-remaining-600-when-you-book-your-vacation-dates-span">
                          5-Days/4-Nights in a Deluxe Room
                        </span>
                        <span className="_5-days-4-nights-in-a-deluxe-room-for-two-adults-at-the-5-star-hyatt-zilara-riviera-maya-for-only-299-today-pay-the-remaining-600-when-you-book-your-vacation-dates-span2">
                          for two adults at the 5-Star Hyatt Zilara Riviera Maya
                          for only $299 today. Pay the remaining $600 when you
                          book your vacation dates.
                        </span>
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-item-spacing-10 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-2.5 items-start justify-center shrink-0 relative">
                    <div className="flex flex-col gap-0 items-start justify-start shrink-0 max-w-width-444 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-6 h-6 relative overflow-hidden">
                        <img
                          className="shrink-0 w-6 h-6 relative overflow-visible"
                          style={{ aspectRatio: "1" }}
                          src="local-bar0.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
                    <div className="text-color-grey-15 text-left font-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-font-family text-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-font-size leading-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-line-height font-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-font-weight relative self-stretch flex items-center justify-start">
                      <span>
                        <span className="premium-all-inclusive-access-unlimited-gourmet-la-carte-dining-top-shelf-spirits-24-hour-room-service-span">
                          PREMIUM All-Inclusive Access:
                        </span>
                        <span className="premium-all-inclusive-access-unlimited-gourmet-la-carte-dining-top-shelf-spirits-24-hour-room-service-span2">
                          Unlimited gourmet à la carte dining, top-shelf spirits
                          &amp; 24-hour room service.
                        </span>
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-item-spacing-10 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-2.5 items-start justify-center shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="car-lock0.svg"
                    />
                  </div>
                  <div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
                    <div className="text-color-grey-15 text-left font-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-font-family text-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-font-size leading-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-line-height font-bgv-waterpark-wisconsin-dellswebflowio-roboto-regular-font-weight relative self-stretch flex items-center justify-start">
                      <span>
                        <span className="private-airport-transfers-complimentary-round-trip-ride-span">
                          Private Airport Transfers:
                        </span>
                        <span className="private-airport-transfers-complimentary-round-trip-ride-span2">
                          Complimentary round-trip ride
                        </span>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-font-size-32 items-start justify-start flex-1 relative">
              <div className="bg-[#7535ad] pt-3 pr-5 pb-3 pl-5 flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
                  <div className="text-[#ffffff] text-center font-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-3-upper-font-family text-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-3-upper-font-size leading-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-3-upper-line-height font-bgv-waterpark-wisconsin-dellswebflowio-semantic-heading-3-upper-font-weight uppercase relative self-stretch flex items-center justify-center">
                    Why you get it{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-item-spacing-10 items-start justify-start self-stretch shrink-0 relative">
                <img
                  className="shrink-0 w-6 h-6 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="hotel-class0.svg"
                />
                <div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
                  <div className="text-color-grey-15 text-left font-font-family-font-1 text-radius-16 leading-line-height-256 font-font-weight-400 relative self-stretch flex items-center justify-start">
                    <span>
                      <span className="the-only-thing-you-need-to-do-to-unlock-this-incredible-price-is-attend-a-relaxed-120-minute-tour-of-the-stunning-hyatt-zilara-riviera-maya-think-of-it-as-your-exclusive-vip-pass-you-ll-get-to-see-every-amenity-every-oceanfront-bar-and-every-luxury-detail-of-the-resort-all-while-learning-about-the-deep-future-travel-savings-offered-by-unlimited-vacation-club-span">
                        The only thing you need to do to unlock this Incredible
                        price is
                      </span>
                      <span className="the-only-thing-you-need-to-do-to-unlock-this-incredible-price-is-attend-a-relaxed-120-minute-tour-of-the-stunning-hyatt-zilara-riviera-maya-think-of-it-as-your-exclusive-vip-pass-you-ll-get-to-see-every-amenity-every-oceanfront-bar-and-every-luxury-detail-of-the-resort-all-while-learning-about-the-deep-future-travel-savings-offered-by-unlimited-vacation-club-span2">
                        attend a relaxed 120-Minute Tour of the stunning Hyatt
                        Zilara Riviera Maya.
                      </span>
                      <span className="the-only-thing-you-need-to-do-to-unlock-this-incredible-price-is-attend-a-relaxed-120-minute-tour-of-the-stunning-hyatt-zilara-riviera-maya-think-of-it-as-your-exclusive-vip-pass-you-ll-get-to-see-every-amenity-every-oceanfront-bar-and-every-luxury-detail-of-the-resort-all-while-learning-about-the-deep-future-travel-savings-offered-by-unlimited-vacation-club-span3">
                        T
                      </span>
                      <span className="the-only-thing-you-need-to-do-to-unlock-this-incredible-price-is-attend-a-relaxed-120-minute-tour-of-the-stunning-hyatt-zilara-riviera-maya-think-of-it-as-your-exclusive-vip-pass-you-ll-get-to-see-every-amenity-every-oceanfront-bar-and-every-luxury-detail-of-the-resort-all-while-learning-about-the-deep-future-travel-savings-offered-by-unlimited-vacation-club-span">
                        hink of it as your exclusive VIP pass! You’ll get to see
                        every amenity, every oceanfront bar, and every luxury
                        detail of the resort, all while learning about the deep
                        future travel savings offered by Unlimited Vacation
                        Club.
                      </span>
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ButtonStateDefault className="!w-[100%] !shrink-0"></ButtonStateDefault>
        </div>
      </div>
      <div className="shrink-0 w-[1920px] h-[1152.85px] static">
        <div
          className="pt-[60px] flex flex-col gap-[27px] items-center justify-center w-[1920px] absolute left-0 top-[1993px]"
          style={{
            background: "url(section-wrapper0.png) center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col gap-[21px] items-center justify-center shrink-0 relative">
            <Group6095
              text="Zilara Riviera Maya is Just $299 Today for Two AdultsYour 5-Day All-Inclusive Luxury Escape to Hyatt "
              className="!shrink-0 !w-[811px]"
            ></Group6095>
            <Frame37708
              text="84%"
              className="!shrink-0 !w-[403px]"
            ></Frame37708>
          </div>
          <div className="bg-[#2b343c] pb-[60px] flex flex-col gap-[27px] items-center justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-8 items-center justify-start shrink-0 w-[1211px] relative">
              <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
                <div className="text-[#ffffff] text-center font-font-family-font-1 text-item-spacing-s leading-line-height-288 font-extrabold uppercase relative self-stretch flex items-center justify-center">
                  Ultimate Adults-Only Paradise{" "}
                </div>
                <div className="text-[#ffffff] text-center font-font-family-font-1 text-xl leading-line-height-256 font-normal relative self-stretch flex items-center justify-center">
                  Discover true beachfront bliss on a pristine white-sand beach,
                  creating the perfect backdrop for romance and relaxation. The
                  Premium All-Inclusive experience offers specialty gourmet à la
                  carte dining nightly; no reservations needed, for a
                  world-class culinary adventure. Enjoy seamless service from
                  the moment you arrive with a private Amstar transfer, 24-hour
                  room service, and an award-winning staff ensuring you are
                  pampered at every turn.{" "}
                </div>
              </div>
            </div>
            <div
              className="shrink-0 w-[471px] h-[37.85px] relative overflow-hidden"
              style={{
                transformOrigin: "0 0",
                transform: "rotate(-180deg) scale(1, 1)",
              }}
            >
              <img
                className="w-[3.51%] h-[71.39%] absolute right-[48.25%] left-[48.24%] bottom-[28.61%] top-[0%] overflow-visible"
                src="vector0.svg"
              />
              <img
                className="w-[47.72%] h-[68.49%] absolute right-[52.28%] left-[0%] bottom-[0.08%] top-[31.43%] overflow-visible"
                src="group0.svg"
              />
              <img
                className="w-[47.72%] h-[68.77%] absolute right-[0%] left-[52.28%] bottom-[-0.05%] top-[31.27%] overflow-visible"
                src="group1.svg"
              />
              <img
                className="w-[17.53%] h-[2.26%] absolute right-[41.23%] left-[41.23%] bottom-[23.72%] top-[74.01%] overflow-visible"
                src="vector1.svg"
              />
              <img
                className="h-[auto] absolute left-[222.9px] top-[2.66px] overflow-visible"
                src="group2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2b343c] pb-[60px] flex flex-col gap-[27px] items-center justify-start self-stretch shrink-0 relative">
        <div className="flex flex-col gap-8 items-center justify-start shrink-0 w-[1211px] relative">
          <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
            <div className="text-[#ffffff] text-center font-font-family-font-1 text-item-spacing-s leading-line-height-288 font-extrabold uppercase relative self-stretch flex items-center justify-center">
              Ultimate Adults-Only Paradise{" "}
            </div>
            <div className="text-[#ffffff] text-center font-font-family-font-1 text-xl leading-line-height-256 font-normal relative self-stretch flex items-center justify-center">
              Discover true beachfront bliss on a pristine white-sand beach,
              creating the perfect backdrop for romance and relaxation. The
              Premium All-Inclusive experience offers specialty gourmet à la
              carte dining nightly; no reservations needed, for a world-class
              culinary adventure. Enjoy seamless service from the moment you
              arrive with a private Amstar transfer, 24-hour room service, and
              an award-winning staff ensuring you are pampered at every turn.{" "}
            </div>
          </div>
        </div>
        <div
          className="shrink-0 w-[471px] h-[37.85px] relative overflow-hidden"
          style={{
            transformOrigin: "0 0",
            transform: "rotate(-180deg) scale(1, 1)",
          }}
        >
          <img
            className="w-[3.51%] h-[71.39%] absolute right-[48.25%] left-[48.24%] bottom-[28.61%] top-[0%] overflow-visible"
            src="vector2.svg"
          />
          <img
            className="w-[47.72%] h-[68.49%] absolute right-[52.28%] left-[0%] bottom-[0.08%] top-[31.43%] overflow-visible"
            src="group3.svg"
          />
          <img
            className="w-[47.72%] h-[68.77%] absolute right-[0%] left-[52.28%] bottom-[-0.05%] top-[31.27%] overflow-visible"
            src="group4.svg"
          />
          <img
            className="w-[17.53%] h-[2.26%] absolute right-[41.23%] left-[41.23%] bottom-[23.72%] top-[74.01%] overflow-visible"
            src="vector3.svg"
          />
          <img
            className="h-[auto] absolute left-[222.9px] top-[2.66px] overflow-visible"
            src="group5.svg"
          />
        </div>
      </div>
      <div className="bg-[#28313a] pt-[100px] pr-10 pb-[100px] pl-10 flex flex-col gap-0 items-center justify-center self-stretch shrink-0 relative">
        <div className="flex flex-col gap-item-spacing-xl items-center justify-start shrink-0 relative">
          <div className="flex flex-row gap-item-spacing-xl items-start justify-center shrink-0 relative">
            <div className="flex flex-col gap-item-spacing-3213 items-start justify-start shrink-0 relative">
              <div className="text-[#ffffff] text-left font-exploria-poconos-99webflowio-semantic-heading-4-font-family text-exploria-poconos-99webflowio-semantic-heading-4-font-size leading-exploria-poconos-99webflowio-semantic-heading-4-line-height font-exploria-poconos-99webflowio-semantic-heading-4-font-weight relative flex items-center justify-start">
                Featured Amenities{" "}
              </div>
              <div className="flex flex-row gap-item-spacing-s items-start justify-start shrink-0 relative">
                <div className="flex flex-col gap-item-spacing-xs items-start justify-start shrink-0 relative">
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-[25px] h-[25px] relative overflow-visible"
                      src="concierge-bell0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Four restaurants &amp; five bars and lounges{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-[25px] h-[25px] relative overflow-visible"
                      src="concierge-bell1.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      24-hour room service{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="pool0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Outdoor pool{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-[25px] h-[19.44px] relative overflow-visible"
                      src="vector4.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Zen Spa{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="deck0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Minibar (refreshed daily){" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-item-spacing-xs items-start justify-start shrink-0 relative">
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-[25px] h-[17.5px] relative overflow-visible"
                      src="vector5.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Nespresso coffee{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-[25px] h-[25px] relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="deck1.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Bathrobes and slippers{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-[25px] h-[25px] relative overflow-visible"
                      src="tv0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      55” flat-screen HDTV{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="exercise0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      State-of-the-art fitness center{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="wifi0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Complimentary Wi-Fi{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-item-spacing-3213 items-start justify-start shrink-0 relative">
              <div className="text-[#ffffff] text-left font-exploria-poconos-99webflowio-semantic-heading-3-font-family text-exploria-poconos-99webflowio-semantic-heading-3-font-size leading-exploria-poconos-99webflowio-semantic-heading-3-line-height font-exploria-poconos-99webflowio-semantic-heading-3-font-weight relative flex items-center justify-start">
                Nearby Attractions{" "}
              </div>
              <div className="flex flex-row gap-item-spacing-s items-start justify-start shrink-0 relative">
                <div className="flex flex-col gap-item-spacing-xs items-start justify-start shrink-0 relative">
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="planet0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Downtown Playa del Carmen Nightlife{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="directions-boat0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Tulum Experience{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="attractions0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Night Out in Cancún{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="local-mall0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Specialty Tequila/Mixology{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="water-lux0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Gourmet International Dining{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-item-spacing-xs items-start justify-start shrink-0 relative">
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="rest-area0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Xcaret Park Evening Shows{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="kayaking0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Lounge Scene in Puerto Morelos{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-[25px] h-[25px] relative overflow-visible"
                      src="water0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Scuba Diving at Palancar Reef{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-6 h-6 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="poker-chip0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      Cenote Route Adventure{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-6 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-[25px] h-[25px] relative overflow-visible"
                      src="golf-ball0.svg"
                    />
                    <div className="text-white text-left font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-start">
                      El Camaleón Golf Course{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ButtonStateDefault className="!w-[100%] !shrink-0"></ButtonStateDefault>
        </div>
      </div>
      <img
        className="flex flex-col gap-2 items-center justify-start self-stretch shrink-0 h-[363px] relative overflow-visible"
        src="frame-19840779510.svg"
      />
      <div className="flex flex-col gap-9 items-center justify-start shrink-0 relative">
        <img
          className="shrink-0 w-[358px] h-[56.84px] relative"
          style={{ objectFit: "cover", aspectRatio: "358/56.84" }}
          src="image-30.png"
        />
        <div
          className="text-[#0d1f48] text-center font-['Roboto-Black',_sans-serif] text-[28px] font-black uppercase relative w-[676px] h-[60px]"
          style={{ letterSpacing: "-0.01em" }}
        >
          Explore THE AMENITIES AT
          <br />
          Hyatt Zilara Riviera Maya{" "}
        </div>
        <div
          className="text-[#071330] text-center font-['Roboto-Regular',_sans-serif] text-lg leading-[27px] font-normal relative w-[796px] h-16"
          style={{ letterSpacing: "-0.025em" }}
        >
          Relax on pristine beaches, enjoy delicious cuisine, and create
          unforgettable memories together. With a range of amenities designed
          for couples, you&#039;ll find the ideal setting for your next
          adventure.{" "}
        </div>
        <div className="shrink-0 w-[1096px] h-[489px] static">
          <img
            className="rounded-[10px] w-64 h-[184px] absolute left-0 top-[288.84px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(1, 84, 169, 0.40) 0%,rgba(0, 121, 243, 0.00) 100%)",
              objectFit: "cover",
            }}
            src="image0.png"
          />
          <img
            className="rounded-[10px] w-64 h-[184px] absolute left-0 top-[556.84px]"
            style={{ objectFit: "cover" }}
            src="image1.png"
          />
          <div className="text-[#000000] text-center font-['Roboto-Medium',_sans-serif] text-base leading-none font-medium absolute left-8 top-[490.84px] w-[187px]">
            BEACHFRONT ACCESS{" "}
          </div>
          <div className="text-[#000000] text-center font-['Roboto-Medium',_sans-serif] text-base leading-none font-medium uppercase absolute left-0 top-[758.84px] w-64">
            Swimming Pool - Outdoor{" "}
          </div>
          <div className="text-[#000000] text-center font-['Roboto-Medium',_sans-serif] text-base leading-none font-medium uppercase absolute left-[280px] top-[490.84px] w-[254px]">
            Tennis Court{" "}
          </div>
          <div className="text-[#000000] text-center font-['Roboto-Medium',_sans-serif] text-base leading-none font-medium absolute left-[560px] top-[761.84px] w-[257px]">
            PREMIUM COCKTAILS{" "}
          </div>
          <div className="text-[#000000] text-center font-['Roboto-Medium',_sans-serif] text-base leading-none font-medium uppercase absolute left-[840px] top-[490.84px] w-64">
            Hot Tub or Spa
            <br />{" "}
          </div>
          <div className="text-[#000000] text-center font-['Roboto-Medium',_sans-serif] text-base leading-none font-medium absolute left-[840px] top-[758.87px] w-64">
            ONSITE DINING{" "}
          </div>
          <img
            className="rounded-[10px] w-64 h-[184px] absolute left-[280px] top-[288.84px]"
            style={{ objectFit: "cover" }}
            src="image2.png"
          />
          <img
            className="rounded-[10px] w-64 h-[184px] absolute left-[280px] top-[556.84px]"
            style={{ objectFit: "cover" }}
            src="image3.png"
          />
          <img
            className="rounded-[10px] w-64 h-[184px] absolute left-[560px] top-[288.84px]"
            style={{ objectFit: "cover" }}
            src="image4.png"
          />
          <img
            className="rounded-[10px] w-64 h-[184px] absolute left-[560px] top-[556.84px]"
            style={{ objectFit: "cover" }}
            src="image5.png"
          />
          <img
            className="rounded-[10px] w-64 h-[184px] absolute left-[840px] top-[288.87px]"
            style={{ objectFit: "cover" }}
            src="image6.png"
          />
          <img
            className="rounded-[10px] w-64 h-[184px] absolute left-[840px] top-[556.84px]"
            style={{ objectFit: "cover" }}
            src="image7.png"
          />
        </div>
        <div className="text-[#000000] text-center font-['Roboto-Medium',_sans-serif] text-base leading-none font-medium absolute left-[560px] top-[489.98px] w-[254px]">
          OUTDOOR ADVENTURES{" "}
        </div>
        <div className="text-[#000000] text-center font-['Roboto-Medium',_sans-serif] text-base leading-none font-medium absolute left-[280px] top-[754.98px] w-[254px]">
          FITNESS CENTER{" "}
        </div>
      </div>
      <div className="bg-[#ffffff] pt-[104px] pb-[104px] flex flex-col gap-item-spacing-80 items-center justify-center self-stretch shrink-0 relative">
        <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
          <div className="text-color-grey-15 text-center font-orlando-7685webflowio-semantic-heading-2-upper-font-family text-orlando-7685webflowio-semantic-heading-2-upper-font-size leading-orlando-7685webflowio-semantic-heading-2-upper-line-height font-orlando-7685webflowio-semantic-heading-2-upper-font-weight uppercase relative flex items-center justify-center">
            Guest Reviews{" "}
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center self-stretch shrink-0 h-[726px] relative">
          <div className="bg-[#ffffff] flex flex-col gap-0 items-start justify-center shrink-0 w-[1920px] relative">
            <div className="bg-[#f3f3f3] self-stretch shrink-0 h-80 relative overflow-[auto]">
              <div className="flex flex-row gap-line-height-16 items-center justify-start w-[1920px] absolute left-4 bottom-4 top-4">
                <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
                  <img
                    className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                    style={{ objectFit: "cover" }}
                    src="resort-photo-11.png"
                  />
                </div>
                <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
                  <img
                    className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                    style={{ objectFit: "cover" }}
                    src="resort-photo-21.png"
                  />
                </div>
                <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
                  <img
                    className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                    style={{ objectFit: "cover" }}
                    src="resort-photo-31.png"
                  />
                </div>
                <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
                  <img
                    className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                    style={{ objectFit: "cover" }}
                    src="resort-photo-41.png"
                  />
                </div>
                <div
                  className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden"
                  style={{
                    background: "url(link-dialog-open-lightbox12.png) center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img
                    className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                    style={{ objectFit: "cover" }}
                    src="resort-photo-51.png"
                  />
                </div>
                <img
                  className="rounded-2xl shrink-0 w-96 h-72 min-w-width-384 max-w-width-2784 relative overflow-hidden"
                  style={{ objectFit: "cover" }}
                  src="link-dialog-open-lightbox13.png"
                />
                <img
                  className="rounded-2xl shrink-0 w-96 h-72 min-w-width-384 max-w-width-2784 relative overflow-hidden"
                  style={{ objectFit: "cover" }}
                  src="link-dialog-open-lightbox14.png"
                />
                <img
                  className="rounded-2xl shrink-0 w-96 h-72 min-w-width-384 max-w-width-2784 relative overflow-hidden"
                  style={{ objectFit: "cover" }}
                  src="link-dialog-open-lightbox15.png"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between shrink-0 w-[1920px] absolute left-0 top-32">
              <div
                className="bg-color-black-30 rounded-[32px] border-solid border-color-white-solid border-2 p-0.5 flex flex-col gap-0 items-center justify-center shrink-0 w-16 h-16 relative"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-12 max-w-width-64 relative overflow-hidden">
                  <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-12 h-12 relative overflow-hidden">
                    <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                      <img
                        className="h-[auto] absolute left-0 top-0 overflow-visible"
                        src="mask-group3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-color-black-30 rounded-[32px] border-solid border-color-white-solid border-2 p-0.5 flex flex-col gap-0 items-center justify-center shrink-0 w-16 h-16 relative"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-12 max-w-width-64 relative overflow-hidden">
                  <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-12 h-12 relative overflow-hidden">
                    <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                      <img
                        className="h-[auto] absolute left-0 top-0 overflow-visible"
                        src="mask-group4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-[464px] pl-[464px] flex flex-row gap-[34px] items-center justify-center self-stretch shrink-0 relative">
            <div className="bg-color-grey-95 rounded-2xl p-6 flex flex-col gap-item-spacing-s items-start justify-start self-stretch shrink-0 max-w-width-320 relative">
              <div className="flex flex-col items-start justify-between shrink-0 w-[272px] h-[374px] relative">
                <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-item-spacing-12 items-start justify-start self-stretch shrink-0 relative">
                    <img
                      className="rounded-[20px] shrink-0 w-10 h-10 max-w-width-272 relative overflow-hidden"
                      style={{ objectFit: "cover" }}
                      src="_67-d-0924777-f-9-fd-4-ea-51-ba-542-487-b-67-ace-3-ea-87851-c-0-d-6-f-391302-f-998-ava-1-webp0.png"
                    />
                    <div className="flex flex-col gap-item-spacing-6 items-start justify-center self-stretch flex-1 relative">
                      <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                        <div
                          className="text-color-grey-5 text-left font-orlando-7685webflowio-roboto-bold-font-family text-orlando-7685webflowio-roboto-bold-font-size leading-orlando-7685webflowio-roboto-bold-line-height font-orlando-7685webflowio-roboto-bold-font-weight relative self-stretch flex items-center justify-start"
                          style={{
                            letterSpacing:
                              "var(--orlando-7685webflowio-roboto-bold-letter-spacing, 0.2px)",
                          }}
                        >
                          Maddie W{" "}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                        <div
                          className="text-color-grey-50 text-left font-orlando-7685webflowio-roboto-regular-font-family text-orlando-7685webflowio-roboto-regular-font-size leading-orlando-7685webflowio-roboto-regular-line-height font-orlando-7685webflowio-roboto-regular-font-weight relative self-stretch flex items-center justify-start"
                          style={{
                            letterSpacing:
                              "var(--orlando-7685webflowio-roboto-regular-letter-spacing, 0.3px)",
                          }}
                        >
                          March 2025{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-xxxs items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg0.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg2.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg3.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg4.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                    <div className="text-color-grey-15 text-left font-orlando-7685webflowio-roboto-regular-font-family text-orlando-7685webflowio-roboto-regular-font-size leading-orlando-7685webflowio-roboto-regular-line-height font-orlando-7685webflowio-roboto-regular-font-weight relative w-[272px] flex items-center justify-start">
                      It was amazing!! We absolutely loved Agustin, Alejandra,
                      and Nicole from Legends bar!! They were exceptional and
                      served us with smiles and friendliness every night! We
                      hated to leave..{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-0 items-start justify-start shrink-0 max-w-width-272 relative overflow-hidden">
                    <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[110px] h-[22px] relative overflow-hidden">
                      <img
                        className="shrink-0 w-[110px] h-[22px] relative overflow-visible"
                        src="_67-d-0924777-f-9-fd-4-ea-51-ba-47-f-tripadvisor-svg0.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-color-grey-95 rounded-2xl self-stretch shrink-0 w-80 relative">
              <div className="flex flex-col items-start justify-between w-[272px] h-[374px] absolute left-6 top-[24.11px]">
                <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-item-spacing-12 items-start justify-start self-stretch shrink-0 relative">
                    <img
                      className="rounded-[20px] shrink-0 w-10 h-10 max-w-width-272 relative overflow-hidden"
                      style={{ objectFit: "cover" }}
                      src="_67-d-0924777-f-9-fd-4-ea-51-ba-4-be-2853433-cd-627-e-5-efd-26-b-1-c-3-fada-1-eaae-ava-5-webp0.png"
                    />
                    <div className="flex flex-col gap-item-spacing-6 items-start justify-center self-stretch flex-1 relative">
                      <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                        <div
                          className="text-color-grey-5 text-left font-orlando-7685webflowio-roboto-bold-font-family text-orlando-7685webflowio-roboto-bold-font-size leading-orlando-7685webflowio-roboto-bold-line-height font-orlando-7685webflowio-roboto-bold-font-weight relative self-stretch flex items-center justify-start"
                          style={{
                            letterSpacing:
                              "var(--orlando-7685webflowio-roboto-bold-letter-spacing, 0.2px)",
                          }}
                        >
                          Excursion26381924644{" "}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                        <div
                          className="text-color-grey-50 text-left font-orlando-7685webflowio-roboto-regular-font-family text-orlando-7685webflowio-roboto-regular-font-size leading-orlando-7685webflowio-roboto-regular-line-height font-orlando-7685webflowio-roboto-regular-font-weight relative self-stretch flex items-center justify-start"
                          style={{
                            letterSpacing:
                              "var(--orlando-7685webflowio-roboto-regular-letter-spacing, 0.3px)",
                          }}
                        >
                          January 25{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-xxxs items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg5.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg6.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg7.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg8.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg9.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                    <div className="text-color-grey-15 text-left font-orlando-7685webflowio-roboto-regular-font-family text-orlando-7685webflowio-roboto-regular-font-size leading-orlando-7685webflowio-roboto-regular-line-height font-orlando-7685webflowio-roboto-regular-font-weight relative self-stretch flex items-center justify-start">
                      Highly recommend this place. Great food all around, the
                      beach is amazing, the staff is unbelievable. The resort is
                      big but not overwhelming. The entertainment staff by
                      itself is worth it. Sandy and Fermin are true legends. A
                      trip I&#039;ll never forget.{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-0 items-start justify-start shrink-0 max-w-width-272 relative overflow-hidden">
                    <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[110px] h-[22px] relative overflow-hidden">
                      <img
                        className="shrink-0 w-[110px] h-[22px] relative overflow-visible"
                        src="_67-d-0924777-f-9-fd-4-ea-51-ba-47-f-tripadvisor-svg1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-color-grey-95 rounded-2xl self-stretch shrink-0 w-80 relative">
              <div className="flex flex-col items-start justify-between w-[272px] h-[374px] absolute left-6 top-[24.11px]">
                <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-item-spacing-12 items-start justify-start self-stretch shrink-0 relative">
                    <img
                      className="rounded-[20px] shrink-0 w-10 h-10 max-w-width-272 relative overflow-hidden"
                      style={{ objectFit: "cover" }}
                      src="_67-d-0924777-f-9-fd-4-ea-51-ba-4-de-2853575-a-86629-f-1-c-31-f-4-c-2-c-210419754-ava-4-webp0.png"
                    />
                    <div className="flex flex-col gap-item-spacing-6 items-start justify-center self-stretch flex-1 relative">
                      <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                        <div
                          className="text-color-grey-5 text-left font-orlando-7685webflowio-roboto-bold-font-family text-orlando-7685webflowio-roboto-bold-font-size leading-orlando-7685webflowio-roboto-bold-line-height font-orlando-7685webflowio-roboto-bold-font-weight relative self-stretch flex items-center justify-start"
                          style={{
                            letterSpacing:
                              "var(--orlando-7685webflowio-roboto-bold-letter-spacing, 0.2px)",
                          }}
                        >
                          JeMaLu2018{" "}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                        <div
                          className="text-color-grey-50 text-left font-orlando-7685webflowio-roboto-regular-font-family text-orlando-7685webflowio-roboto-regular-font-size leading-orlando-7685webflowio-roboto-regular-line-height font-orlando-7685webflowio-roboto-regular-font-weight relative self-stretch flex items-center justify-start"
                          style={{
                            letterSpacing:
                              "var(--orlando-7685webflowio-roboto-regular-letter-spacing, 0.3px)",
                          }}
                        >
                          June 2025{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-item-spacing-xxxs items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg10.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg11.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg12.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg13.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 max-w-width-272 relative overflow-hidden">
                      <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[17px] h-4 relative overflow-hidden">
                        <img
                          className="shrink-0 w-[17px] h-4 relative overflow-visible"
                          src="_67-d-0924777-f-9-fd-4-ea-51-ba-470-rating-star-svg14.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                    <div className="text-color-grey-15 text-left font-orlando-7685webflowio-roboto-regular-font-family text-orlando-7685webflowio-roboto-regular-font-size leading-orlando-7685webflowio-roboto-regular-line-height font-orlando-7685webflowio-roboto-regular-font-weight relative self-stretch flex items-center justify-start">
                      Hyatt Zilara is the best hotel we have visited in Cancun,
                      Playa del Carmen, Riviera Maya. Above and beyond service,
                      excellent resort location, beautiful resort grounds,
                      fantastic beach, top notch food and premium beverages. 24
                      hour room service. Minutes to 5th Avenue Playa del Carmen
                      shopping and beach.{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-0 items-start justify-start shrink-0 max-w-width-272 relative overflow-hidden">
                    <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-[110px] h-[22px] relative overflow-hidden">
                      <img
                        className="shrink-0 w-[110px] h-[22px] relative overflow-visible"
                        src="_67-d-0924777-f-9-fd-4-ea-51-ba-47-f-tripadvisor-svg2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonStateDefault className="!w-[100%] !shrink-0"></ButtonStateDefault>
      </div>
      <div
        className="pt-20 pb-20 flex flex-col gap-[55px] items-center justify-center self-stretch shrink-0 h-[1275px] relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to left, #f3f3f3, #f3f3f3), linear-gradient(to left, #fff6f9, #fff6f9)",
        }}
      >
        <div
          className="bg-[#ffffff] rounded-2xl p-8 flex flex-col gap-8 items-center justify-center shrink-0 w-[1200px] relative"
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex flex-col gap-8 items-center justify-center shrink-0 w-[994px] relative">
            <div
              className="text-[#000000] text-center font-['Roboto-ExtraBold',_sans-serif] text-[40px] leading-none font-extrabold relative self-stretch"
              style={{ letterSpacing: "-0.01em" }}
            >
              Discover Adult-Only Luxury in the ❤️
              <br /> of the Mayan Coast Riviera Cancun.{" "}
            </div>
            <div className="text-[#000000] text-center font-['Roboto-Regular',_sans-serif] text-xl leading-[120%] font-normal relative w-[800px]">
              Carretera Federal 387, Km 299 Solidaridad, Riviera Maya, QR,
              77710, Mexico{" "}
            </div>
          </div>
          <div className="shrink-0 w-[1098px] h-[596px] static">
            <img
              className="rounded-[17.07px] w-[1098px] h-[596px] absolute left-[51px] top-[200px]"
              style={{ objectFit: "cover", aspectRatio: "1098/596" }}
              src="image8.png"
            />
          </div>
          <div className="bg-[#ffffff] pt-[119px] pb-[119px] flex flex-col gap-2 items-start justify-center shrink-0 w-[1136px] h-80 relative">
            <div className="rounded-[22px] shrink-0 w-[1136px] h-80 absolute left-0 top-[0.02px] overflow-[auto]">
              <div className="flex flex-row gap-line-height-16 items-center justify-center absolute left-4 bottom-[15.54px] top-[16.46484375px]">
                <div className="rounded-2xl flex flex-col gap-0 items-center justify-end shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
                  <div
                    className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%,rgba(0, 0, 0, 0.75) 100%)",
                      background: "url(resort-photo-12.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="text-color-white-solid text-left font-orlando-7685webflowio-roboto-bold-font-family text-orlando-7685webflowio-roboto-bold-font-size leading-orlando-7685webflowio-roboto-bold-line-height font-orlando-7685webflowio-roboto-bold-font-weight absolute left-[118px] top-[254.9px] flex items-center justify-start"
                      style={{
                        letterSpacing:
                          "var(--orlando-7685webflowio-roboto-bold-letter-spacing, 0.2px)",
                      }}
                    >
                      Puerto Morelos{" "}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
                  <div
                    className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%,rgba(0, 0, 0, 0.75) 100%)",
                      background: "url(resort-photo-22.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="text-color-white-solid text-left font-orlando-7685webflowio-roboto-bold-font-family text-orlando-7685webflowio-roboto-bold-font-size leading-orlando-7685webflowio-roboto-bold-line-height font-orlando-7685webflowio-roboto-bold-font-weight absolute left-[118px] top-[254.9px] flex items-center justify-start"
                      style={{
                        letterSpacing:
                          "var(--orlando-7685webflowio-roboto-bold-letter-spacing, 0.2px)",
                      }}
                    >
                      Downtown Playa del Carmen{" "}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
                  <div
                    className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%,rgba(0, 0, 0, 0.75) 100%)",
                      background: "url(resort-photo-32.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="text-color-white-solid text-left font-orlando-7685webflowio-roboto-bold-font-family text-orlando-7685webflowio-roboto-bold-font-size leading-orlando-7685webflowio-roboto-bold-line-height font-orlando-7685webflowio-roboto-bold-font-weight absolute left-[118px] top-[254.9px] flex items-center justify-start"
                      style={{
                        letterSpacing:
                          "var(--orlando-7685webflowio-roboto-bold-letter-spacing, 0.2px)",
                      }}
                    >
                      El Camaleón Golf Course{" "}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 min-w-width-384 max-w-width-2784 relative overflow-hidden">
                  <div
                    className="shrink-0 w-96 h-72 max-w-width-384 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%,rgba(0, 0, 0, 0.75) 100%)",
                      background: "url(resort-photo-33.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="text-color-white-solid text-left font-orlando-7685webflowio-roboto-bold-font-family text-orlando-7685webflowio-roboto-bold-font-size leading-orlando-7685webflowio-roboto-bold-line-height font-orlando-7685webflowio-roboto-bold-font-weight absolute left-[118px] top-[254.9px] flex items-center justify-start"
                      style={{
                        letterSpacing:
                          "var(--orlando-7685webflowio-roboto-bold-letter-spacing, 0.2px)",
                      }}
                    >
                      Xcaret Park (Eco-Park){" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between shrink-0 w-[1136px] relative">
              <div
                className="bg-color-black-30 rounded-[32px] border-solid border-color-white-solid border-2 p-0.5 flex flex-col gap-0 items-center justify-center shrink-0 w-16 h-16 relative"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-12 max-w-width-64 relative overflow-hidden">
                  <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-12 h-12 relative overflow-hidden">
                    <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                      <img
                        className="h-[auto] absolute left-0 top-[0.1px] overflow-visible"
                        src="mask-group5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-color-black-30 rounded-[32px] border-solid border-color-white-solid border-2 p-0.5 flex flex-col gap-0 items-center justify-center shrink-0 w-16 h-16 relative"
                style={{
                  transformOrigin: "0 0",
                  transform: "rotate(-180deg) scale(1, 1)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-12 max-w-width-64 relative overflow-hidden">
                  <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-12 h-12 relative overflow-hidden">
                    <div className="shrink-0 w-12 h-12 relative overflow-hidden">
                      <img
                        className="h-[auto] absolute left-0 top-[-0.1px] overflow-visible"
                        src="mask-group6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonStateDefault className="!pt-3.5 !pb-3.5 !shrink-0 !w-[1200px]"></ButtonStateDefault>
      </div>
      <img
        className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 h-56 relative"
        style={{
          background: "linear-gradient(to left, #f3f3f3, #f3f3f3)",
          objectFit: "cover",
        }}
        src="frame-19840779511.png"
      />
      <div className="bg-[#2a323b] pt-10 pr-[54px] pb-10 pl-[54px] flex flex-col gap-5 items-center justify-center shrink-0 w-[1920px] h-[338px] relative">
        <div className="shrink-0 w-[140px] h-[18.19px] relative overflow-hidden">
          <img
            className="h-[auto] absolute left-[1.01px] top-0 overflow-visible"
            src="layer-20.svg"
          />
        </div>
        <div className="text-neutral-white text-center font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative w-[100%] max-w-[1200px] flex items-center justify-center">
          THIS ADVERTISING MATERIAL IS BEING USED FOR THE PURPOSE OF SOLICITING
          SALES OF TIMESHARE INTERESTS OR PLANS{" "}
        </div>
        <div className="bg-[#ffffff] rounded-[6.71px] pt-0.5 pr-3 pb-0.5 pl-0.5 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
          <img
            className="shrink-0 w-24 h-9 relative overflow-visible"
            src="group6.svg"
          />
          <div className="flex flex-col gap-[2.88px] items-center justify-start shrink-0 relative">
            <div className="text-[#000000] text-center font-['Inter-Bold',_sans-serif] text-[7px] leading-none font-bold relative">
              BBB Rating: A{" "}
            </div>
            <div className="text-[#000000] text-center font-['Inter-Regular',_sans-serif] text-[6px] leading-none font-normal relative">
              As of 8/25/2025
              <br />
              Click for Profile{" "}
            </div>
          </div>
        </div>
        <div className="text-neutral-white text-center font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative w-[100%] max-w-[1200px] flex items-center justify-center">
          Sogno Tours, LLC d/b/a VacationVIP.com{" "}
        </div>
        <div className="flex flex-col gap-0 items-center justify-start w-[100%] shrink-0 max-w-width-106752 relative">
          <div className="text-[#ffffff] text-center font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative self-stretch flex items-center justify-center">
            9900 Lake Ellenor Drive Suite 300, Orlando, FL 32809{" "}
          </div>
        </div>
        <div className="flex flex-row gap-item-spacing-10 items-center justify-center shrink-0 relative">
          <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
            <div className="text-neutral-white text-center font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-center">
              Copyright © 2026{" "}
            </div>
          </div>
          <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
            <div className="text-neutral-white text-center font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-center">
              |{" "}
            </div>
          </div>
          <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
            <div className="text-neutral-white text-center font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative flex items-center justify-center">
              All Rights Reserved.{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0 items-center justify-start w-[100%] shrink-0 max-w-width-106752 relative">
          <div className="text-[#ffffff] text-center font-exploria-poconos-99webflowio-roboto-regular-font-family text-exploria-poconos-99webflowio-roboto-regular-font-size leading-exploria-poconos-99webflowio-roboto-regular-line-height font-exploria-poconos-99webflowio-roboto-regular-font-weight relative self-stretch flex items-center justify-center">
            SOT: Florida: ST44683 | Washington: 605354522 | California:
            2156600-50 | Hawaii: 7531{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
