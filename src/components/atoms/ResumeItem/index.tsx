import type { FC } from "react";

import { cn } from "@src/utils/common";

interface Props {
  time: string;
  label: string;
  place: string;
  content: string;
  className?: string;
}

const ResumeItem: FC<Props> = ({
  className = "",
  time,
  label,
  place,
  content,
}) => {
  return (
    <div
      className={cn("border-l-[0.0313rem] border-l-white/[0.12]", className)}
    >
      <span className="bg-orange-500 py-[0.3125rem] pl-5 pr-[0.3125rem] text-end text-[0.875rem] text-white">
        {time}
      </span>
      <div className="pb-5 pl-5">
        <h4 className="mt-2.5 font-bold text-white">{label}</h4>
        <span className="mb-1 text-[0.75rem] text-gray-300">{place}</span>
        <p className="mb-2.5 text-[0.875rem] text-gray-100">{content}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
