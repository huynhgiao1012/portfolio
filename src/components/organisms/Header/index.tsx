import type { FC } from "react";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { cn } from "@src/utils/common";

interface Props {
  onClickMobileMenu: () => void;
  className?: string;
}

const Header: FC<Props> = ({ className = "", onClickMobileMenu }) => {
  return (
    <div
      className={cn(
        "z-10 flex h-[3.125rem] items-center justify-between bg-dark px-5",
        "border-b border-b-white/[0.12]",
        className
      )}
    >
      <p className="text-white">Giao Le</p>
      <Bars3Icon
        className="size-5 cursor-pointer [&>path]:stroke-orange-500"
        onClick={onClickMobileMenu}
      />
    </div>
  );
};

export default Header;
