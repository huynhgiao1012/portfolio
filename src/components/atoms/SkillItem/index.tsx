import type { FC, ReactNode } from "react";

import { cn } from "@src/utils/common";

interface Props {
  label: string;
  image: ReactNode;
  className?: string;
}

const SkillItem: FC<Props> = ({ className = "", label, image }) => {
  return (
    <div
      className={cn(
        "my-2 flex flex-col items-center gap-2 text-white",
        "rounded-md px-4 py-2 hover:-translate-y-1",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      {image}
      <p className="text-sm">{label}</p>
    </div>
  );
};

export default SkillItem;
