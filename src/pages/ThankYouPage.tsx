export interface INavbarStateDesktopProps {
  state?: "desktop" | "tablet" | "mobile";
  visibleComponent?: boolean;
  className?: string;
}

const NavbarStateDesktop = ({
  state = "desktop",
  visibleComponent = undefined,
  className,
  ...props
}: INavbarStateDesktopProps): JSX.Element => {
  const variantsClassName = "state-" + state;

  return (
    <div
      className={
        "bg-neutral-white pt-2 pr-20 pb-2 pl-20 flex flex-row items-center justify-between relative " +
        className +
        " " +
        variantsClassName
      }
      style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.20)" }}
    >
      <img
        className="border-solid border-[transparent] border shrink-0 w-[177px] h-[23px] relative"
        style={{ objectFit: "cover" }}
        src="thank-you/vacation-vip-full-color-horiz0.png"
      />
      <div className="bg-[#3579ea] rounded pt-1.5 pr-2 pb-1.5 pl-2 shrink-0 w-24 h-7 relative">
        <img
          className="w-4 h-4 absolute left-2 top-1.5 overflow-visible"
          src="thank-you/icon0.svg"
        />
        <div className="text-[#ffffff] text-left font-['-',_sans-serif] text-[13px] leading-4 font-normal absolute left-7 top-1.5">
          <span>
            <span className="like-1-9-k-span">Like </span>
            <span className="like-1-9-k-span2">1.9K</span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export interface IStickerProps {
  className?: string;
}

const Sticker = ({
  className,
  ...props
}: IStickerProps): JSX.Element => {
  return (
    <div
      className={
        "flex flex-col gap-[4.62px] items-start justify-start relative overflow-hidden " +
        className
      }
    >
      <img
        className="shrink-0 w-[1334.56px] h-[913px] relative overflow-visible"
        src="thank-you/group0.svg"
      />
      <div className="flex flex-col gap-[12.69px] items-center justify-center shrink-0 w-[1084px] h-[480px] absolute left-[125px] top-[158px]">
        <div className="text-[#ffffff] text-center font-['Poppins-Bold',_sans-serif] text-[61.77294158935547px] font-bold uppercase relative self-stretch h-[93px]">
          5-Day/4-Night{" "}
        </div>
        <div className="flex flex-col items-center justify-center self-stretch shrink-0 relative">
          <div className="text-[#000000] text-center font-['Playfair-Medium',_sans-serif] text-[84.47840118408203px] font-medium relative self-stretch">
            BEACHFRONT{" "}
          </div>
          <div
            className="text-center font-['Playfair-Medium',_sans-serif] text-[126.68162536621094px] font-medium relative self-stretch"
            style={{ margin: "-45px 0 0 0" }}
          >
            <span>
              <span className="riviera-cancun-vacation-span">
                RIVIERA CANCUN{" "}
              </span>
              <span className="riviera-cancun-vacation-span2">VACATION</span>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export interface IActionRequiredMessageStateDefaultProps {
  message?: string;
  hours?: string;
  state?: "default" | "tablet" | "mobile";
  text?: string;
  className?: string;
}

const ActionRequiredMessageStateDefault = ({
  message = "The resort requires additional details before we can confirm your travel dates.Please do NOT book your flights yet until we can speak with you!Any additional travel perks that were purchased will be distributed by your vacation agent.",
  hours = "Call Center Hours:Monday-Friday: 10 AM – 4 PM EST",
  state = "default",
  text = "undefined",
  className,
  ...props
}: IActionRequiredMessageStateDefaultProps): JSX.Element => {
  const variantsClassName = "state-" + state;

  return (
    <div
      className={
        "bg-[rgba(255,251,83,0.50)] rounded-2xl border-solid border-yellow-600 border p-6 flex flex-row gap-16 items-center justify-center relative overflow-hidden " +
        className +
        " " +
        variantsClassName
      }
      style={{ boxShadow: "0px 40px 40px -20px rgba(82, 122, 255, 0.20)" }}
    >
      <div className="flex flex-col gap-4 items-start justify-start flex-1 relative">
        <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
          <img
            className="shrink-0 w-6 h-6 relative overflow-visible"
            src="thank-you/warning0.svg"
          />
          <div
            className="text-neutral-950 text-left font-['Inter-Bold',_sans-serif] text-base leading-none font-bold uppercase relative"
            style={{ letterSpacing: "0.02em" }}
          >
            Action required{" "}
          </div>
        </div>
        <div className="text-neutral-950 text-left font-['Inter-Medium',_sans-serif] text-sm leading-[120%] font-medium relative self-stretch">
          {message}{" "}
        </div>
        <div className="text-neutral-950 text-left font-['Inter-Bold',_sans-serif] text-sm leading-[120%] font-bold relative self-stretch">
          {hours}{" "}
        </div>
      </div>
      <div className="bg-blue-ribbon-dark-blue rounded-lg pt-4 pr-6 pb-4 pl-6 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <div className="text-neutral-white text-left font-['Inter-SemiBold',_sans-serif] text-base leading-[120%] font-semibold uppercase relative">
          Call now: 800-88-gurus{" "}
        </div>
      </div>
    </div>
  );
};

export interface IFooterDesktopProps {
  className?: string;
}

const FooterDesktop = ({
  className,
  ...props
}: IFooterDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "bg-[#2a323b] pt-10 pr-[54px] pb-10 pl-[54px] flex flex-col gap-5 items-center justify-center relative " +
        className
      }
    >
      <div className="shrink-0 w-[140px] h-[18.19px] relative overflow-hidden">
        <img
          className="h-[auto] absolute left-[1.01px] top-0 overflow-visible"
          src="thank-you/layer-20.svg"
        />
      </div>
      <div className="text-neutral-white text-center font-['Roboto',_sans-serif] text-base leading-6 font-normal relative w-[100%] max-w-[1200px] flex items-center justify-center">
        THIS ADVERTISING MATERIAL IS BEING USED FOR THE PURPOSE OF SOLICITING
        SALES OF TIMESHARE INTERESTS OR PLANS{" "}
      </div>
      <div className="bg-[#ffffff] rounded-[6.71px] pt-0.5 pr-3 pb-0.5 pl-0.5 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <img
          className="shrink-0 w-24 h-9 relative overflow-visible"
          src="thank-you/group0.svg"
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
      <div className="text-neutral-white text-center font-['Roboto',_sans-serif] text-base leading-6 font-normal relative w-[100%] max-w-[1200px] flex items-center justify-center">
        Sogno Tours, LLC d/b/a VacationVIP.com{" "}
      </div>
      <div className="flex flex-col gap-0 items-center justify-start w-[100%] shrink-0 max-w-[1067.52px] relative">
        <div className="text-[#ffffff] text-center font-['Roboto',_sans-serif] text-base leading-6 font-normal relative self-stretch flex items-center justify-center">
          9900 Lake Ellenor Drive Suite 300, Orlando, FL 32809{" "}
        </div>
      </div>
      <div className="flex flex-row gap-[10px] items-center justify-center shrink-0 relative">
        <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
          <div className="text-neutral-white text-center font-['Roboto',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center">
            Copyright © 2026{" "}
          </div>
        </div>
        <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
          <div className="text-neutral-white text-center font-['Roboto',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center">
            |{" "}
          </div>
        </div>
        <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
          <div className="text-neutral-white text-center font-['Roboto',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center">
            All Rights Reserved.{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0 items-center justify-start w-[100%] shrink-0 max-w-[1067.52px] relative">
        <div className="text-[#ffffff] text-center font-['Roboto',_sans-serif] text-base leading-6 font-normal relative self-stretch flex items-center justify-center">
          SOT: Florida: ST44683 | Washington: 605354522 | California: 2156600-50
          | Hawaii: 7531{" "}
        </div>
      </div>
    </div>
  );
};

export interface IDesktopProps {
  className?: string;
}

export const ThankYouPage = ({
  className,
  ...props
}: IDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "flex flex-col gap-0 items-start justify-start min-h-[2010px] relative " +
        className
      }
    >
      <NavbarStateDesktop
        visibleComponent={false}
        className="!pt-3 !pr-20 !pb-3 !pl-20 !self-stretch !shrink-0"
      ></NavbarStateDesktop>
      <div className="bg-neutral-30 pt-10 pr-20 pb-10 pl-20 flex flex-row gap-6 items-start justify-center self-stretch shrink-0 relative">
        <div
          className="bg-neutral-white rounded-2xl flex flex-col gap-0 items-start justify-start shrink-0 w-[1280px] relative overflow-hidden"
          style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex flex-col gap-0 items-end justify-start shrink-0 w-[1280px] relative">
            <div
              className="flex flex-col gap-[15px] items-center justify-center self-stretch shrink-0 h-[280px] relative"
              style={{
                background: "url(thank-you/topper1.png) center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Sticker className="!gap-[1.24px] !shrink-0 !w-[358px]"></Sticker>
            </div>
            <div className="bg-[#2a323b] pt-4 pr-12 pb-4 pl-12 flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
              <div
                className="shrink-0 w-[123px] h-4 relative overflow-hidden"
                style={{ aspectRatio: "123/16" }}
              >
                <img
                  className="h-[auto] absolute left-[0.88px] top-0 overflow-visible"
                  src="thank-you/layer-20.svg"
                />
              </div>
              <div className="flex flex-row gap-2.5 justify-end flex-1 relative">
                <div className="text-[#ffffff] text-left font-['Inter-Medium',_sans-serif] text-base leading-none font-medium relative">
                  Total paid:{" "}
                </div>
                <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                  <div className="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-none font-semibold relative">
                    ${" "}
                  </div>
                  <div className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-xl leading-none font-bold relative">
                    299.00{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-12 flex flex-col gap-16 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
            <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[1184px] relative">
              <div
                className="text-black text-left font-['Inter-ExtraBold',_sans-serif] text-[58px] leading-[120%] font-extrabold relative self-stretch"
                style={{ letterSpacing: "-0.03em" }}
              >
                Congrats! All set!{" "}
              </div>
              <div className="text-black text-left font-['Inter-Medium',_sans-serif] text-base leading-normal font-medium relative self-stretch">
                Here are your vacation package details, bonuses and the travel
                perks you paid for.{" "}
              </div>
            </div>
            <ActionRequiredMessageStateDefault
              hours="Call Center Hours:Monday -Thursday 9 am ET - 10:30 pm ETFriday 9 am ET - 8 pm ET, or Saturday &amp;Sunday 10 am ET - 6:00 pm ET."
              text="Call now: %PHONE%"
              className="!bg-[#ffd174] !self-stretch !shrink-0"
            ></ActionRequiredMessageStateDefault>
          </div>
          <div className="border-solid border-neutral-100 border-t pt-16 pr-12 pb-12 pl-12 flex flex-col gap-8 items-start justify-end self-stretch shrink-0 h-[486px] relative">
            <div className="text-[#2a323b] text-left font-['Inter-Bold',_sans-serif] text-2xl leading-[120%] font-bold relative">
              Your Vacation Summary{" "}
            </div>
            <div className="bg-[#dfdfdf] rounded-2xl flex flex-col gap-px items-start justify-start shrink-0 w-[1184px] h-[403px] relative overflow-hidden">
              <div className="bg-[#f9f9f9] pt-8 pr-6 pb-8 pl-6 flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                  <img
                    className="shrink-0 w-6 h-6 relative overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="thank-you/luggage0.svg"
                  />
                  <div className="text-[#2a323b] text-left font-['Inter-Bold',_sans-serif] text-lg leading-[120%] font-bold relative">
                    Vacation package{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      src="thank-you/assignment-turned-in0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Purchaser Name:{" "}
                    </div>
                    <div
                      className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-sm leading-normal font-medium relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      {"{{purchaser.fullname}}"}{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      src="thank-you/assignment-turned-in1.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Purchaser Email:{" "}
                    </div>
                    <div
                      className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-sm leading-normal font-medium relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      {"{{email}}"}{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      src="thank-you/assignment-turned-in2.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Purchase Date:{" "}
                    </div>
                    <div
                      className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-sm leading-normal font-medium relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      mm/dd/yyyy{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      src="thank-you/assignment-turned-in3.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Receipt No:{" "}
                    </div>
                    <div
                      className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-sm leading-normal font-medium relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      1234567890{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      src="thank-you/concierge0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Accommodations:{" "}
                    </div>
                    <div
                      className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-sm leading-normal font-medium relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Hyatt Zilara Riviera Maya{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      src="thank-you/king-bed0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Unit type:{" "}
                    </div>
                    <div
                      className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-sm leading-normal font-medium relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      Standard Room{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      style={{ aspectRatio: "1" }}
                      src="thank-you/bedtime0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Number of nights:{" "}
                    </div>
                    <div
                      className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-sm leading-normal font-medium relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      4 nights{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      src="thank-you/group1.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Guests:{" "}
                    </div>
                    <div
                      className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-sm leading-normal font-medium relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      2 Adults{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      src="thank-you/calendar-month0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Preferred check-in:{" "}
                    </div>
                    <div
                      className="text-blue-link text-left font-['Inter-Bold',_sans-serif] text-sm leading-normal font-bold relative overflow-hidden"
                      style={{
                        textDecoration: "underline",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Call now to book your travel dates. %PHONE%{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      src="thank-you/calendar-month1.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Preferred check-out:{" "}
                    </div>
                    <div
                      className="text-blue-link text-left font-['Inter-Bold',_sans-serif] text-sm leading-normal font-bold relative overflow-hidden"
                      style={{
                        textDecoration: "underline",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Call now to book your travel dates. %PHONE%{" "}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                    <img
                      className="shrink-0 w-5 h-5 relative overflow-visible"
                      src="thank-you/credit-score0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-normal font-semibold relative">
                      Package Price:{" "}
                    </div>
                    <div
                      className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-sm leading-normal font-medium relative overflow-hidden"
                      style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    >
                      $299.00{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-solid border-neutral-100 border-t p-12 flex flex-row items-end justify-between self-stretch shrink-0 relative">
            <div className="text-neutral-950 text-left font-['-',_sans-serif] text-base leading-normal font-normal relative flex items-end justify-start">
              <span>
                <span className="title-8-span">
                  Call now if you have any questions:{" "}
                </span>
                <span className="title-8-span2">%PHONE%</span>
              </span>{" "}
            </div>
            <div className="text-neutral-950 text-left font-['-',_sans-serif] text-base leading-normal font-normal relative w-[377px] flex items-end justify-start">
              <span>
                <span className="title-9-span">
                  Hours of Operation:
                  <br />
                </span>
                <span className="title-9-span2">
                  Monday -Thursday 9 am ET - 10:30 pm ET
                  <br />
                  Friday 9 am ET - 8 pm ET, or Saturday &amp;
                  <br />
                  Sunday 10 am ET - 6:00 pm ET.
                </span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
      <FooterDesktop className="!self-stretch !shrink-0"></FooterDesktop>
    </div>
  );
};
