import { type FC, useEffect, useState } from "react";
import Link from "next/link";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  GlobeAsiaAustraliaIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import BaseModal from "@src/components/atoms/BaseModal";
import SubTitle from "@src/components/atoms/SubTitle";
import TechItem from "@src/components/atoms/TechItem";
import ProjectCarousel from "@src/components/molecules/ProjectCarousel";
import { PORTFOLIO } from "@src/constants/portfolio";
import { cn } from "@src/utils/common";

interface Props {
  id: number;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const PortfolioModal: FC<Props> = ({ isOpen, onClose, id }) => {
  const [projectId, setProjectId] = useState(0);

  useEffect(() => {
    setProjectId(id);
  }, [id]);

  const project = PORTFOLIO.filter((item) => item.id === projectId)[0];

  const handlePrev = () => {
    if (projectId > 1) {
      setProjectId((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (projectId < PORTFOLIO.length) {
      setProjectId((prev) => prev + 1);
    }
  };

  if (project) {
    return (
      <BaseModal
        isOpen={isOpen}
        onClose={onClose}
        className={cn(
          "absolute bottom-0 left-1/2 top-1/2 h-[calc(100vh-3.125rem)] md:left-[55%]",
          "w-full -translate-x-1/2 -translate-y-1/2 bg-dark md:h-[95%] md:w-3/4",
          "motion-preset-expand overflow-auto px-10 py-8 "
        )}
      >
        <div className="flex cursor-pointer items-center justify-center text-white [&>svg]:size-[1.875rem]">
          <ChevronLeftIcon onClick={handlePrev} />
          <ChevronRightIcon onClick={handleNext} />
          <XMarkIcon onClick={onClose} />
        </div>
        <h1 className="my-4 text-center text-[2rem] font-bold text-white">
          {project.label}
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <ProjectCarousel id={projectId} className="sm:h-[21.875rem]" />
          </div>
          <div className="mb-8 mt-2 sm:mt-0">
            <SubTitle text="Description" />
            <ul className="flex flex-col gap-2 text-white">
              <li className="flex items-center gap-2 [&>svg]:size-5">
                <UserIcon />
                <span>Alex Smith</span>
              </li>
              <li className="flex items-center gap-2 text-orange-500 [&>svg]:size-5">
                <GlobeAsiaAustraliaIcon />
                <Link href={project.link} target="_blank">
                  {project.link}
                </Link>
              </li>
              <li className="flex items-center gap-2 [&>svg]:size-5">
                <CalendarDaysIcon />
                <span>{project.date}</span>
              </li>
            </ul>
            <p className="py-5 text-white">{project.description}</p>
            <SubTitle text="Technology" />
            <div className="flex gap-2">
              {project &&
                project.technology.map((item, index) => (
                  <TechItem key={index} text={item} />
                ))}
            </div>
          </div>
        </div>
      </BaseModal>
    );
  }
};

export default PortfolioModal;
