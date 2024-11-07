import type { FC, ReactNode } from "react";

import IconCSS from "@src/assets/images/CSS.svg";
import IconHtml from "@src/assets/images/HTML.svg";
import IconJS from "@src/assets/images/JS.svg";
import IconLadle from "@src/assets/images/LADLE.svg";
import IconNext from "@src/assets/images/Next.svg";
import IconReact from "@src/assets/images/React.svg";
import IconSASS from "@src/assets/images/SASS.svg";
import IconTailwind from "@src/assets/images/Tailwind.svg";
import IconTS from "@src/assets/images/TS.svg";
import IconVue from "@src/assets/images/VUE.svg";
import Button from "@src/components/atoms/Button";
import Card from "@src/components/atoms/Card";
import ResumeItem from "@src/components/atoms/ResumeItem";
import SkillItem from "@src/components/atoms/SkillItem";
import SubTitle from "@src/components/atoms/SubTitle";
import Title from "@src/components/atoms/Title";
import { RESUME_EDUCATION, RESUME_EXPERIENCE } from "@src/constants/resume";
import { cn } from "@src/utils/common";

interface Props {
  className?: string;
}
type Skill = {
  label: string;
  icon: ReactNode;
};
const Resume: FC<Props> = ({ className = "" }) => {
  const handleDownload = () => {};

  const SKILLS: Skill[] = [
    {
      label: "Javascript",
      icon: <IconJS className="size-12" />,
    },
    {
      label: "Typescript",
      icon: <IconTS className="size-12" />,
    },
    {
      label: "ReactJS",
      icon: <IconReact className="size-12" />,
    },
    {
      label: "NextJS",
      icon: <IconNext className="size-12 invert" />,
    },
    {
      label: "Vue",
      icon: <IconVue className="size-12" />,
    },
    {
      label: "HTML",
      icon: <IconHtml className="size-12" />,
    },
    {
      label: "CSS",
      icon: <IconCSS className="size-12" />,
    },
    {
      label: "SASS",
      icon: <IconSASS className="size-12" />,
    },
    {
      label: "Tailwind",
      icon: <IconTailwind className="size-12" />,
    },
    {
      label: "Ladle",
      icon: <IconLadle className="size-12 invert" />,
    },
  ];

  return (
    <Card className={cn("overflow-y-auto", "motion-preset-fade", className)}>
      <Title title="Resume" description="6 Years of Experience" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div className="">
          <SubTitle text="Education" />
          {RESUME_EDUCATION.map((item, index) => (
            <ResumeItem
              key={index}
              time={item.time}
              label={item.label}
              place={item.place}
              content={item.content}
            />
          ))}
        </div>
        <div>
          <SubTitle text="Experience" />
          {RESUME_EXPERIENCE.map((item, index) => (
            <ResumeItem
              key={index}
              time={item.time}
              label={item.label}
              place={item.place}
              content={item.content}
            />
          ))}
        </div>
        <div>
          <SubTitle text="Coding Skills" />
          <div className="grid grid-cols-3 gap-2">
            {SKILLS.map((item, index) => (
              <SkillItem key={index} label={item.label} image={item.icon} />
            ))}
          </div>
        </div>
      </div>
      <Button label="Download CV" onClick={handleDownload} className="mt-10" />
    </Card>
  );
};

export default Resume;
