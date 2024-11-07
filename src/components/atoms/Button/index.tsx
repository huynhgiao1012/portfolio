import type { FC } from "react";

import { cn } from "@src/utils/common";

interface Props {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const Button: FC<Props> = ({ className = "", label, onClick, type }) => {
  return (
    <button
      className={cn(
        "group relative px-7 py-2.5 text-[0.75rem] text-white",
        "z-0 overflow-hidden border-[0.125rem] border-orange-500",
        className
      )}
      type={type}
      onClick={onClick}
    >
      <span className="absolute top-1/2 z-[-1] h-0 w-64 origin-center -translate-x-20 rotate-45 bg-orange-500 transition-all duration-300 ease-in-out group-hover:h-64 group-hover:-translate-y-32"></span>
      <span className="relative z-[-1] bg-orange-500 transition duration-300 ease-in-out group-hover:text-white"></span>
      {label}
    </button>
  );
};

export default Button;
