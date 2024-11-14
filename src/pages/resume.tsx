import { type FC, type ReactNode } from "react";

import { animated } from "@react-spring/web";
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
import { useChainAnimation } from "@src/hooks/useChainAnimation";
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

  const { transitions } = useChainAnimation(RESUME_EDUCATION, {
    from: { opacity: 0, transform: "translateY(20%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    trail: 750 / RESUME_EDUCATION.length,
  });

  const { transitions: transitionBtn } = useChainAnimation([1], {
    from: { opacity: 0, transform: "translateY(20%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    trail: 750,
    delay: 500,
  });

  const { transitions: transitionsEx } = useChainAnimation(RESUME_EXPERIENCE, {
    from: { opacity: 0, transform: "translateY(-20%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    trail: 750 / RESUME_EXPERIENCE.length,
    delay: 800,
  });

  const { transitions: transitionSkill } = useChainAnimation(SKILLS, {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    trail: 750 / SKILLS.length,
    delay: 1000,
  });

  return (
    <Card className={cn("overflow-y-hidden", "motion-preset-fade", className)}>
      <Title title="Resume" description="6 Years of Experience" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div className="">
          <SubTitle text="Education" />
          {transitions((style, item) => (
            <animated.div
              style={{
                ...style,
              }}
            >
              <ResumeItem
                key=""
                time={item.time}
                label={item.label}
                place={item.place}
                content={item.content}
              />
            </animated.div>
          ))}
          {transitionBtn((style) => (
            <animated.div
              style={{
                ...style,
              }}
            >
              <Button
                label="Download CV"
                onClick={handleDownload}
                className="mt-10"
              />
            </animated.div>
          ))}
        </div>
        <div>
          <SubTitle text="Experience" />
          {transitionsEx((style, item) => (
            <animated.div
              style={{
                ...style,
              }}
            >
              <ResumeItem
                key=""
                time={item.time}
                label={item.label}
                place={item.place}
                content={item.content}
              />
            </animated.div>
          ))}
        </div>
        <div>
          <SubTitle text="Coding Skills" />
          <div className="grid grid-cols-3 gap-2">
            {transitionSkill((style, item) => (
              <animated.div
                style={{
                  ...style,
                }}
              >
                <SkillItem key="" label={item.label} image={item.icon} />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Resume;
