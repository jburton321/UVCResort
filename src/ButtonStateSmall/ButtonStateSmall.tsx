export interface IButtonStateSmallProps {
  text?: string;
  state?:
    | "default"
    | "secondary"
    | "hover"
    | "inactive"
    | "small"
    | "small-hover";
  className?: string;
}

export const ButtonStateSmall = ({
  text = "RESERVE NOW",
  state = "default",
  className,
  ...props
}: IButtonStateSmallProps): JSX.Element => {
  const variantsClassName = "state-" + state;

  return (
    <div
      className={
        "bg-[#7535ad] rounded-[26px] pt-1 pr-3 pb-1 pl-3 flex flex-row gap-0 items-center justify-center w-[132px] relative " +
        className +
        " " +
        variantsClassName
      }
    >
      <div
        className="text-[#ffffff] text-center font-font-family-font-1 text-xs leading-line-height-208 font-bold uppercase relative flex items-center justify-center"
        style={{ letterSpacing: "var(--letter-spacing-05, 0.5px)" }}
      >
        reserve now{" "}
      </div>
    </div>
  );
};
