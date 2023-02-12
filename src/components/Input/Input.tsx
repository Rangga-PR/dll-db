import { InputHTMLAttributes } from "react";

export type InputProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`rounded-lg border border-solid border-primary px-2 py-1 ${className}`}
      {...props}
    />
  );
}

export default Input;
