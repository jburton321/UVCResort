export interface IButtonStateDefaultProps {
  text?: string;
  state?: "default" | "secondary" | "hover" | "inactive" | "small" | "small-hover";
  className?: string;
}

export const ButtonStateDefault = ({
  text = "RESERVE NOW",
  state = "default",
  className,
}: IButtonStateDefaultProps): JSX.Element => {
  return (
    <div
      className={
        "bg-[#7535ad] rounded-[26px] pt-3.5 pr-16 pb-3.5 pl-16 flex flex-row gap-0 items-center justify-center max-w-[1200px] relative cursor-pointer hover:bg-[#5f2a8f] transition-colors " +
        className
      }
    >
      <div
        className="text-[#ffffff] text-center font-roboto text-[16px] leading-[16px] font-bold uppercase relative flex items-center justify-center"
        style={{ letterSpacing: "0.5px" }}
      >
        {text}
      </div>
    </div>
  );
};
