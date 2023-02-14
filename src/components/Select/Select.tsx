import { asClasses } from "@/utils";
import { SelectHTMLAttributes } from "react";
import Spin from "../Spin/Spin";

export type Option = {
  key: string;
  value: string;
};

export type SelectProps = {
  options: Option[];
  loading?: boolean;
  className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

const containerStyle = asClasses([
  "flex",
  "items-center",
  "overflow-hidden",
  "rounded-lg",
  "border",
  "border-solid",
  "border-primary",
  "py-1",
  "px-2",
]);

function Select({ options, loading, className, ...props }: SelectProps) {
  return (
    <div className={containerStyle}>
      {loading ? (
        <Spin />
      ) : (
        <select
          data-testid="select"
          className="w-full focus:outline-none"
          {...props}
        >
          {options.map(({ key, value }) => (
            <option key={key} value={value}>
              {key}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Select;
