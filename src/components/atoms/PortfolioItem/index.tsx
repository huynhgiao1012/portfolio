import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { EyeIcon } from "@heroicons/react/24/outline";
import { cn } from "@src/utils/common";

interface Props<T extends ElementType> {
  as?: T;
  image: StaticImageData;
  title: string;
  className?: string;
}
function PortfolioItem<T extends ElementType = "div">(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) {
  const { image, title, as: Component = "div", ...rest } = props;
  return (
    <Component {...rest}>
      <div className="hover relative size-full overflow-hidden">
        <Image src={image} alt="Image" className="size-full" />
        <div
          className={cn(
            "overlay absolute top-0 size-full bg-dark/[0.6]",
            "flex cursor-pointer flex-col items-center justify-center"
          )}
        >
          <p className="text-center text-[1.125rem] font-bold text-white">
            {title}
          </p>
          <EyeIcon className="size-6 text-white" />
        </div>
      </div>
    </Component>
  );
}

export default PortfolioItem;
