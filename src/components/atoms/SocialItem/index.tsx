import type { FC, ReactNode } from "react";

import { cn } from "@src/utils/common";

interface Props {
  icon: ReactNode;
  className?: string;
}

const SocialItem: FC<Props> = ({ className = "", icon }) => {
  return (
    <div
      className={cn(
        "flex size-10 items-center justify-center overflow-hidden rounded border border-white",
        "before:absolute before:size-full before:bg-orange-500 before:content-['']",
        "relative cursor-pointer before:bottom-full before:left-0 hover:before:bottom-0",
        "before:z-[-1] before:transition-all before:duration-300 before:ease-in-out",
        className
      )}
    >
      {icon}
    </div>
  );
};

export default SocialItem;
