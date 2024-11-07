import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { ComponentPropsWithoutRef, ElementType } from "react";

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
      <div className="hover relative overflow-hidden">
        <Image src={image} alt="Image" />
        <div
          className={cn(
            "overlay absolute top-0 size-full bg-white/[0.95]",
            "flex items-center justify-center"
          )}
        >
          <p className="font-bold text-dark">{title}</p>
        </div>
      </div>
    </Component>
  );
}

export default PortfolioItem;
