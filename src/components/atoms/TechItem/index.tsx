import type { FC } from "react";

import { cn } from "@src/utils/common";

interface Props {
  text: string;
  className?: string;
}

const TechItem: FC<Props> = ({ className = "", text }) => {
  return (
    <div
      className={cn("bg-white px-[0.4375rem] py-0.5 text-gray-500", className)}
    >
      {text}
    </div>
  );
};

export default TechItem;
