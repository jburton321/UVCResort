import { Frame37708 } from "./Frame37708";
import { useCountdown } from "../../hooks/useCountdown";

export interface IBannerProperty1DesktopProps {
  property1?: "desktop" | "mobile";
  text?: string;
  className?: string;
}

export const BannerProperty1Desktop = ({
  property1 = "desktop",
  text = "84%",
  className,
}: IBannerProperty1DesktopProps): JSX.Element => {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <div
      className={
        "bg-[#f3f3f3] rounded-2xl pt-6 pr-8 pb-6 pl-8 flex flex-col lg:flex-row gap-6 items-center justify-between shrink-0 relative overflow-hidden " +
        className
      }
    >
      <Frame37708 text={text} className="shrink-0 hidden lg:block" />

      <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
        <div className="text-color-grey-20 text-left font-roboto text-[20px] leading-[20px] font-bold relative self-stretch flex items-center justify-start">
          Luxury All-Inclusive Riviera Cancun Vacation
        </div>
        <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
          <img className="shrink-0 w-4 h-4" src="bed0.svg" />
          <div className="text-color-black-solid text-left font-roboto text-[14px] leading-[18px] font-normal relative flex-1 flex items-center justify-start">
            Deluxe room accommodations at the Hyatt Zilara Riviera Maya
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
          <img className="shrink-0 w-4 h-4" src="concierge-bell0.svg" />
          <div className="text-color-black-solid text-left font-roboto text-[14px] leading-[18px] font-normal relative flex-1 flex items-center justify-start">
            "Unlimited-Luxury" amenities: dining, drinks, WiFi, entertainment &amp; beach access
          </div>
        </div>
      </div>

      <div className="bg-[#ffd174] rounded-lg pt-4 pr-6 pb-4 pl-6 flex flex-col gap-1 items-center justify-center shrink-0 relative">
        <div className="text-color-azure-20 text-center font-roboto text-[12px] leading-[12px] font-normal uppercase relative">
          Offer expires:
        </div>
        <div className="flex flex-row gap-1 items-center justify-center shrink-0 relative">
          <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
            <div className="text-color-grey-20 text-center font-roboto text-[24px] leading-[28px] font-bold relative">
              {hours.toString().padStart(2, '0')}
            </div>
            <div className="text-color-azure-20 text-center font-roboto text-[10px] leading-[10px] font-normal uppercase relative">
              hr
            </div>
          </div>
          <div className="text-color-grey-20 text-center font-roboto text-[24px] leading-[28px] font-bold relative">
            :
          </div>
          <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
            <div className="text-color-grey-20 text-center font-roboto text-[24px] leading-[28px] font-bold relative">
              {minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-color-azure-20 text-center font-roboto text-[10px] leading-[10px] font-normal uppercase relative">
              min
            </div>
          </div>
          <div className="text-color-grey-20 text-center font-roboto text-[24px] leading-[28px] font-bold relative">
            :
          </div>
          <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
            <div className="text-color-grey-20 text-center font-roboto text-[24px] leading-[28px] font-bold relative">
              {seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-color-azure-20 text-center font-roboto text-[10px] leading-[10px] font-normal uppercase relative">
              sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
