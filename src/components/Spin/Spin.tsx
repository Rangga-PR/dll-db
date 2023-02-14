import { asClasses } from "@/utils";

const spinStyle = asClasses([
  "border-[rgba(0, 0, 0, 0.1)]",
  "h-5",
  "w-5",
  "animate-spin",
  "rounded-full",
  "border-[0.2rem]",
  "border-solid",
  "border-t-primary",
]);

function Spin() {
  return <div className={spinStyle} data-testid="spin" />;
}

export default Spin;
