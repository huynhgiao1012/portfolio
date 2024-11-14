import { type FC, type ReactNode, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  IdentificationIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Avt from "@src/assets/images/Avt.jpg";
import { useOnClickOutside } from "@src/hooks/useOnclickOutside";
import { cn } from "@src/utils/common";

interface Props {
  onClose: () => void;
  className?: string;
}
type Navigation = {
  label: string;
  key: string;
  icon: ReactNode;
  href: string;
};

const Sidebar: FC<Props> = ({ className = "", onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const NAVIGATION_LIST: Navigation[] = [
    {
      label: "Home",
      key: "home",
      icon: <HomeIcon className="size-6" />,
      href: "/",
    },
    {
      label: "About me",
      key: "about-me",
      icon: <UserCircleIcon className="size-6" />,
      href: "/about-me",
    },
    {
      label: "Resume",
      key: "resume",
      icon: <IdentificationIcon className="size-6" />,
      href: "/resume",
    },
    {
      label: "Portfolio",
      key: "portfolio",
      icon: <BriefcaseIcon className="size-6" />,
      href: "/portfolio",
    },
    {
      label: "Contact",
      key: "contact",
      href: "/contact",
      icon: <EnvelopeIcon className="size-6" />,
    },
  ];

  useOnClickOutside(asideRef, onClose);

  const handleActive = (index: number) => {
    const height = ref.current?.clientHeight;
    const span = document.getElementById("active-span");
    if (span && height) {
      span.style.top = (height / 5) * index + "px";
    }
    onClose();
  };

  return (
    <aside
      ref={asideRef}
      className={cn(
        "fixed z-10 h-screen w-[9.375rem] bg-gray-600 py-10",
        className
      )}
    >
      <div className="flex flex-col items-center gap-6">
        <Image
          src={Avt}
          alt="MyImage"
          width={80}
          height={80}
          className="border-2 border-white"
        />
        <p
          className={cn(
            "cursor-pointer text-[1.5rem] font-bold text-white hover:text-orange-500",
            "transition-all duration-300 ease-in-out"
          )}
        >
          GIAO LE
        </p>
      </div>
      <div
        ref={ref}
        className={cn(
          "relative mt-10 flex flex-col items-center",
          "transition-all duration-200 ease-in-out"
        )}
      >
        <span
          id="active-span"
          className={cn(
            "absolute right-0 top-0 h-[4.3125rem] w-[0.1875rem] bg-orange-500",
            "transition-all duration-300 ease-in-out"
          )}
        />

        {NAVIGATION_LIST.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={cn(
              "flex flex-col items-center text-white opacity-60",
              "w-full border-t border-t-white/[0.12]",
              "px-5 py-2.5 text-center hover:opacity-100",
              "transition-all duration-200 ease-in-out",
              "hover:text-orange-500",
              {
                "text-white opacity-[1]": router.asPath === item.href,
              }
            )}
            onClick={() => handleActive(index)}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
