import type { FC } from "react";

import { cn } from "@src/utils/common";

interface Props {
  text: string;
  className?: string;
}

const SubTitle: FC<Props> = ({ className = "", text }) => {
  return (
    <div
      className={cn(
        "relative mb-4 font-bold text-white before:absolute before:content-['']",
        "before:-left-2 before:h-full before:w-0.5 before:bg-orange-500",
        className
      )}
    >
      {text}
    </div>
  );
};

export default SubTitle;
