import { type FC, Fragment, type ReactNode, useState } from "react";

import Header from "@src/components/organisms/Header";
import SideBar from "@src/components/organisms/SideBar";
import { cn } from "@src/utils/common";

interface Props {
  children: ReactNode;
}
const MainLayout: FC<Props> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const handleMobileMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <Fragment>
      <div className="">
        <Header
          onClickMobileMenu={handleMobileMenu}
          className="absolute left-0 top-0 w-full transition-all duration-300 ease-in-out md:top-[-3.125rem]"
        />
        <SideBar
          className={cn(
            "sidebar left-[-9.375rem] transition-all duration-300 ease-in-out md:left-0",
            {
              "left-0": isOpen,
            }
          )}
          onClose={() => setOpen(false)}
        />
        <main className="top-0 h-[calc(100vh-3.125rem)] w-full bg-cover bg-no-repeat md:absolute md:left-[9.375rem] md:h-screen md:w-[calc(100vw-9.375rem)] md:bg-bg-img">
          {children}
        </main>
      </div>
    </Fragment>
  );
};

export default MainLayout;
