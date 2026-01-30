export interface IFrame37708Props {
  text?: string;
  className?: string;
}

export const Frame37708 = ({
  text = "84%",
  className,
}: IFrame37708Props): JSX.Element => {
  return (
    <div className={"h-[194px] relative " + className}>
      <div
        className="pt-[11px] pr-[30px] pb-[11px] pl-[30px] flex flex-col gap-0 items-start justify-center w-[145px] h-[83px] absolute left-[242px] top-14"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <img
          className="shrink-0 w-[143.96px] h-[83px] absolute left-0 top-0 overflow-visible"
          src="subtract0.svg"
        />
        <div className="text-[#000000] text-left font-roboto text-[23px] leading-[23px] font-bold relative flex items-center justify-start">
          SAVE{" "}
        </div>
        <div className="text-[#000000] text-left font-roboto text-[32px] leading-8 font-black relative flex items-center justify-start">
          {text}{" "}
        </div>
      </div>
      <div
        className="bg-[#7535ad] rounded-[50%] border-solid border-[#ffffff] border-4 w-[178px] h-[178px] absolute left-[77px] top-2"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      ></div>
      <div
        className="pt-[13px] pr-[9px] pb-[13px] pl-[9px] flex flex-row gap-2 items-center justify-start w-[73px] absolute left-4 top-[97px]"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <img
          className="shrink-0 w-[71.25px] h-[42px] absolute left-[73.37px] top-[42px] overflow-visible"
          style={{ transform: "translate(-80.9px, -46px)" }}
          src="subtract1.svg"
        />
        <div className="text-[#000000] text-left font-roboto text-font-size-16 leading-font-size-16 font-bold absolute left-[26px] top-[13px] flex items-center justify-start">
          ONLY{" "}
        </div>
      </div>
      <div
        className="flex flex-row gap-0 items-start justify-start absolute left-[97px] top-[55.78px]"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="text-[#ffffff] text-left font-roboto text-[43.75px] leading-[43.75px] font-bold relative w-[26px] h-[65px] flex items-center justify-start">
          ${" "}
        </div>
        <div className="flex flex-row gap-2 items-center justify-center shrink-0 relative">
          <div
            className="text-[#ffffff] text-left font-roboto text-[70px] leading-[90.45px] font-black relative flex items-center justify-start"
            style={{ letterSpacing: "-0.05em" }}
          >
            299{" "}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-[88px] items-start justify-start w-[100px] h-[81px] absolute left-[115.96px] top-10"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div
          className="text-[#ffffff] text-center font-roboto text-[25.3px] leading-[60.51px] font-black relative self-stretch h-[16.18px] flex items-center justify-center"
          style={{ letterSpacing: "-0.02em" }}
        >
          5-DAYS{" "}
        </div>
        <div className="text-[#ffffff] text-center font-roboto text-[10px] leading-[10px] relative self-stretch h-8 flex items-center justify-center">
          <span>
            <span className="font-normal">
              PER PACKAGE <br />
            </span>
            <span className="font-normal">
              (All 4-Nights)
            </span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
