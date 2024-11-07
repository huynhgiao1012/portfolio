import type { FC, ReactNode } from "react";

import { cn } from "@src/utils/common";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ className = "", children }) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 h-[calc(100vh-3.125rem)] w-full bg-dark md:left-1/2 md:top-1/2 md:h-[95%] md:w-4/5 md:-translate-x-1/2 md:-translate-y-1/2",
        "px-[3.125rem] pb-[3.75rem] pt-5 sm:before:h-0.5 sm:before:w-[6.25rem] sm:after:h-[6.25rem] sm:after:w-0.5",
        "before:content-[''] sm:before:absolute sm:before:left-5 sm:before:top-5 sm:before:bg-orange-500",
        "sm:after:absolute sm:after:left-5 sm:after:top-5 sm:after:bg-orange-500 sm:after:content-['']",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
