import type { FC } from "react";

import { cn } from "@src/utils/common";

interface Props {
  title: string;
  description: string;
  className?: string;
}

const Title: FC<Props> = ({ className = "", title, description }) => {
  return (
    <div className={cn("mb-10 flex items-center justify-center", className)}>
      <div className="flex flex-col items-center sm:items-end">
        <h1 className="text-[3.125rem] font-bold text-gray-500">{title}</h1>
        <h5 className="bg-orange-500 px-2.5 font-extralight text-white">
          {description}
        </h5>
      </div>
    </div>
  );
};

export default Title;
