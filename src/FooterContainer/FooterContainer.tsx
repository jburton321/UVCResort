
    
import {ButtonStateDefault2} from '../ButtonStateDefault2/ButtonStateDefault2';
import {FooterBannerContainer} from '../FooterBannerContainer/FooterBannerContainer';

    export interface IFooterContainerProps {
    text?: string;
text2?: string;
text3?: string;
text4?: string;
text5?: string;
    className?: string;
    
    }

    export const FooterContainer = ({
text="Normal Rate: $5,600",
text2="$299*",
text3="*Pay $600 at the time of booking for all 5-days/4-nights",
text4="84% OFF!",
text5="Deluxe Room for two adults at the 5-Star Hyatt Zilara Riviera Maya", 
 className,  ...props}: IFooterContainerProps ): JSX.Element => { 
    
    return(
<div className={"flex flex-row gap-item-spacing-xl items-center justify-center h-[714px] relative " + className}  >
 <div className="bg-color-white-solid rounded-[20px] flex flex-col gap-0 items-start justify-center shrink-0 w-[390px] min-w-width-340 relative overflow-hidden"  style={{ backdropFilter: "blur(10px)" }}>
 <div className="bg-yellow-200 pt-2 pr-3 pb-2 pl-3 flex flex-row gap-item-spacing-10 items-center justify-center self-stretch shrink-0 relative"  >
 <div className="flex flex-col gap-0 items-start justify-start shrink-0 max-w-width-390 relative overflow-hidden"  >
 <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-3.5 h-[19px] relative overflow-hidden"  >
 <img className="shrink-0 w-3.5 h-[19px] relative overflow-visible"   src="_67-d-1-d-1794-aad-1-f-2-f-82-ae-2-d-23-flash-icon-svg0.svg" />
</div>
</div><div className="flex flex-col gap-0 items-start justify-start shrink-0 relative"  >
 <div className="text-black text-left font-['Inter-Bold',_sans-serif] text-font-size-20 leading-font-size-20 font-font-weight-700 uppercase relative flex items-center justify-start"  >
Offer expires: </div>
</div><div className="flex flex-row gap-item-spacing-xxs items-center justify-center shrink-0 relative"  >
 <div className="flex flex-col gap-0 items-center justify-center shrink-0 relative"  >
 <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative"  >
 <div className="text-orange-800 text-left font-['Inter-Bold',_sans-serif] text-[17.578125px] leading-line-height-18 font-font-weight-700 relative flex items-center justify-start"  >
00 </div>
</div><div className="flex flex-col gap-0 items-start justify-start shrink-0 relative"  >
 <div className="text-black text-left font-['Inter-Regular',_sans-serif] text-item-spacing-10 leading-item-spacing-10 font-font-weight-400 uppercase relative flex items-center justify-start"  >
hr </div>
</div>
</div><div className="flex flex-col gap-0 items-start justify-start shrink-0 relative"  >
 <div className="text-orange-800 text-left font-['Inter-Bold',_sans-serif] text-line-height-18 leading-line-height-18 font-font-weight-700 relative flex items-center justify-start"  >
: </div>
</div><div className="flex flex-col gap-0 items-center justify-center shrink-0 relative"  >
 <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative"  >
 <div className="text-orange-800 text-left font-['Inter-Bold',_sans-serif] text-[17.578125px] leading-line-height-18 font-font-weight-700 relative flex items-center justify-start"  >
44 </div>
</div><div className="flex flex-col gap-0 items-start justify-start shrink-0 relative"  >
 <div className="text-black text-left font-['Inter-Regular',_sans-serif] text-[9.84375px] leading-item-spacing-10 font-font-weight-400 uppercase relative flex items-center justify-start"  >
min </div>
</div>
</div><div className="flex flex-col gap-0 items-start justify-start shrink-0 relative"  >
 <div className="text-orange-800 text-left font-['Inter-Bold',_sans-serif] text-line-height-18 leading-line-height-18 font-font-weight-700 relative flex items-center justify-start"  >
: </div>
</div><div className="flex flex-col gap-0 items-center justify-center shrink-0 relative"  >
 <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative"  >
 <div className="text-orange-800 text-left font-['Inter-Bold',_sans-serif] text-[17.578125px] leading-line-height-18 font-font-weight-700 relative flex items-center justify-start"  >
54 </div>
</div><div className="flex flex-col gap-0 items-start justify-start shrink-0 relative"  >
 <div className="text-black text-left font-['Inter-Regular',_sans-serif] text-item-spacing-10 leading-item-spacing-10 font-font-weight-400 uppercase relative flex items-center justify-start"  >
sec </div>
</div>
</div>
</div>
</div><div className="pt-6 pb-6 flex flex-col gap-[15px] items-center justify-center self-stretch shrink-0 relative"  >
 <div className="pr-4 pl-4 flex flex-col gap-item-spacing-148 items-start justify-center self-stretch shrink-0 h-[147px] relative"  >
 <img className="self-stretch shrink-0 h-[56.84px] relative" style={{ objectFit: "cover", aspectRatio: "358/56.84" }}  src="image-30.png" /><div className="pr-4 pl-4 flex flex-row gap-item-spacing-12 items-center justify-center self-stretch shrink-0 relative"  >
 <div className="bg-color-azure-17 flex-1 h-0.5 relative"  >
 </div><div className="text-color-azure-17 text-center font-['Inter-Bold',_sans-serif] text-[17.859375px] leading-line-height-18 font-font-weight-700 relative flex items-center justify-center"  >
5-Days /4-Nights </div><div className="bg-color-azure-17 flex-1 h-0.5 relative"  >
 </div>
</div><div className="text-color-azure-17 text-center font-['Inter-Bold',_sans-serif] text-[26px] leading-line-height-336 font-font-weight-700 relative self-stretch flex items-center justify-center"  style={{ letterSpacing: "var(--letter-spacing-05, -0.5px)" }}>
Luxury All-Inclusive<br/>Riviera Cancun Vacation </div>
</div><div className="bg-[#f3f3f3] pt-[15px] pb-[15px] flex flex-col gap-0 items-center justify-center self-stretch shrink-0 relative"  >
 <div className="shrink-0 w-[390px] h-[100px] relative"  >
 <div className="flex flex-row gap-item-spacing-6 items-center justify-center absolute left-[120px] top-[2.49px]"  >
 <div className="text-left font-['Inter-Bold',_sans-serif] text-radius-16 leading-radius-16 font-font-weight-700 relative flex items-center justify-start"  >
{text} </div>
</div><div className="text-color-azure-17 text-left absolute left-[120px] top-[18.49px]"  >
{text2} </div><div className="text-color-azure-17 text-left absolute left-[285px] top-[30.7px] w-[85px] h-[57px] flex items-center justify-start"  >
<span><span className="today-per-couple-span">
      TODAY!<br/>
      </span><span className="today-per-couple-span2">
      PER COUPLE
      </span></span> </div><div className="bg-[#7535ad] rounded-tr-xl rounded-br-xl pt-[15.1px] pr-6 pb-4 pl-4 flex flex-row gap-0 items-center justify-start absolute left-0 top-[0.49px]"  >
 <div className="flex flex-col gap-2 items-center justify-start shrink-0 relative"  >
 <div className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-[28px] leading-none font-bold uppercase relative flex items-center justify-start"  >
{text4} </div>
</div>
</div>
</div><div className="text-color-azure-17 text-left font-['Inter-Bold',_sans-serif] text-[13px] leading-radius-16 font-font-weight-700 relative flex items-center justify-start"  >
{text3} </div>
</div><div className="pt-2 pr-6 pb-2 pl-6 flex flex-col gap-3 items-center justify-center self-stretch shrink-0 h-[141px] relative"  >
 <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative"  >
 <div className="shrink-0 w-[18px] h-5 relative overflow-hidden"  >
 <img className="w-[133.33%] h-[120%] absolute right-[-16.67%] left-[-16.67%] bottom-[-10%] top-[-10%] overflow-visible" style={{ aspectRatio: "1" }}  src="bed0.svg" />
</div><div className="text-[#000000] text-left font-['Inter-Bold',_sans-serif] text-base leading-line-height-208 font-bold relative flex-1 flex items-center justify-start"  >
{text5} </div>
</div><div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative"  >
 <img className="shrink-0 w-[18px] h-[18px] relative overflow-visible" style={{ aspectRatio: "1" }}  src="local-bar0.svg" /><div className="text-[#000000] text-left font-['-',_sans-serif] text-base leading-line-height-208 font-font-weight-400 relative flex-1 flex items-center justify-start"  >
<span><span className="unlimited-luxury-where-everything-s-included-unlimited-dining-drinks-wifi-entertainment-resort-beach-amenities-span">
      Unlimited-Luxury, Where Everything’s Included:
      </span><span className="unlimited-luxury-where-everything-s-included-unlimited-dining-drinks-wifi-entertainment-resort-beach-amenities-span2">
       Unlimited Dining, Drinks, <br/>Wifi, Entertainment, Resort &amp; Beach Amenities!
      </span></span> </div>
</div>
</div><div className="pr-8 pl-8 flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative"  >
 <ButtonStateDefault2 className='!w-[100%] !shrink-0'>

</ButtonStateDefault2>
</div><FooterBannerContainer className='!shrink-0'>

</FooterBannerContainer>
</div><div className="bg-[#06163a] pt-[9.4px] pr-4 pb-2.5 pl-4 flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative"  >
 <div className="flex flex-col gap-0 items-center justify-start flex-1 relative"  >
 <div className="text-[#ffffff] text-center font-['Inter-Regular',_sans-serif] text-[13.671875px] leading-line-height-168 font-normal relative self-stretch flex items-center justify-center"  >
This offer is getting a lot of attention.<br/>Viewed 181 times in the past hour! </div>
</div><div className="flex flex-col gap-0 items-start justify-start shrink-0 h-[23.91px] max-w-width-1920 relative overflow-hidden"  >
 <div className="flex flex-col gap-0 items-center justify-center shrink-0 w-6 h-6 relative overflow-hidden"  >
 <div className="shrink-0 w-6 h-6 relative overflow-hidden"  >
 <img className="h-[auto] absolute left-0 top-0 overflow-visible"   src="mask-group0.svg" />
</div>
</div>
</div>
</div>
</div>
</div>
)}