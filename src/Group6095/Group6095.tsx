
    


    export interface IGroup6095Props {
    text?: string;
    className?: string;
    
    }

    export const Group6095 = ({
text="Zilara Riviera Maya is Just $299 Today for Two Adults - Your 5-Day All-Inclusive Luxury Escape to Hyatt", 
 className,  ...props}: IGroup6095Props ): JSX.Element => { 
    
    return(
<div className={"h-[554px] relative " + className}  >
 <img className="h-[auto] absolute left-0 top-0 overflow-visible"   src="group0.svg" /><div className="text-[#ffffff] text-center font-['Poppins-SemiBold',_sans-serif] text-[35px] font-semibold uppercase absolute right-[24.91%] left-[24.91%] w-[50.18%] bottom-[70.53%] top-[20.62%] h-[8.84%]"  >
5-Day/4-Night </div><div className="text-[#000000] text-center font-['Playfair-Medium',_sans-serif] text-[70px] font-medium absolute right-[18.5%] left-[18%] w-[63.5%] bottom-[56.81%] top-[29.47%] h-[13.72%]"  >
BEACHFRONT </div><div className="text-center font-['Playfair-Medium',_sans-serif] text-[80px] leading-[80px] font-medium absolute right-[0.62%] left-[0.62%] w-[98.77%] bottom-[32.81%] top-[39.03%] h-[28.16%]"  >
<span><span className="riviera-cancun-vacation-span">
      RIVIERA CANCUN<br/>
      </span><span className="riviera-cancun-vacation-span2">
      VACATION
      </span></span> </div><div className="text-center font-['Poppins-Regular',_sans-serif] text-2xl leading-[30px] font-normal absolute right-[8.01%] left-[8.01%] w-[83.97%] bottom-[19.68%] top-[68.95%] h-[11.37%]"  >
{text} </div>
</div>
)}