export interface IButtonStateDefault2Props {
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

export const ButtonStateDefault2 = ({
  text = "RESERVE NOW",
  state = "default",
  className,
  ...props
}: IButtonStateDefault2Props): JSX.Element => {
  const variantsClassName = "state-" + state;

  return (
    <div
      className={
        "bg-[#7535ad] rounded-[26px] pt-3.5 pr-16 pb-3.5 pl-16 flex flex-row gap-0 items-center justify-center max-w-[1200px] relative " +
        className +
        " " +
        variantsClassName
      }
    >
      <div
        className="text-[#ffffff] text-center font-bgv-waterpark-wisconsin-dellswebflowio-semantic-link-upper-font-family text-bgv-waterpark-wisconsin-dellswebflowio-semantic-link-upper-font-size leading-bgv-waterpark-wisconsin-dellswebflowio-semantic-link-upper-line-height font-bgv-waterpark-wisconsin-dellswebflowio-semantic-link-upper-font-weight uppercase relative flex items-center justify-center"
        style={{
          letterSpacing:
            "var(--bgv-waterpark-wisconsin-dellswebflowio-semantic-link-upper-letter-spacing, 0.5px)",
        }}
      >
        {text}{" "}
      </div>
    </div>
  );
};
