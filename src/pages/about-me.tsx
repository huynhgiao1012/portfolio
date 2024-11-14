import { type FC } from "react";
import Image from "next/image";

import { animated } from "@react-spring/web";
import Icon from "@src/assets/images/Ava.png";
import Card from "@src/components/atoms/Card";
import Title from "@src/components/atoms/Title";
import SocialGroup from "@src/components/molecules/SocialGroup";
import { useChainAnimation } from "@src/hooks/useChainAnimation";
import { useHover } from "@src/hooks/useHover";
import { cn } from "@src/utils/common";

interface Props {
  className?: string;
}

type Info = {
  label: string;
  value: string;
};

const AboutMe: FC<Props> = ({ className = "" }) => {
  const { ref } = useHover();

  const INFORMATION: Info[] = [
    {
      label: "Residence",
      value: "Ho Chi Minh City, Vietnam",
    },
    {
      label: "Email",
      value: "huynhgiaolethi0@gmail.com",
    },
    {
      label: "Freelance",
      value: "Available",
    },
  ];

  const { transitions } = useChainAnimation([1], {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    trail: 750,
    delay: 500,
  });

  const { transitions: transition2 } = useChainAnimation([1], {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    trail: 750,
    delay: 800,
  });

  const { transitions: transition3 } = useChainAnimation([1], {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    trail: 750,
    delay: 1000,
  });

  return (
    <Card
      className={cn(
        "overflow-auto motion-duration-[1.00s] motion-translate-x-in-[100%] motion-translate-y-in-[0%]",
        className
      )}
    >
      <Title title="About Me" description="Artist, Thinker, Creative Doer" />
      <div className="grid grid-cols-1 gap-[1.875rem] px-[0.9375rem] sm:grid-cols-2 md:grid-cols-3">
        {transitions((style) => (
          <animated.div
            style={{
              ...style,
            }}
          >
            <Image
              ref={ref}
              src={Icon}
              alt="MyAvt"
              className="avatar w-[12.5rem] sm:w-full"
            />
          </animated.div>
        ))}
        <div className="grid gap-[1.875rem] sm:grid-cols-1 md:col-span-2 lg:grid-cols-2">
          {transition2((style) => (
            <animated.div
              style={{
                ...style,
              }}
              className="text-white"
            >
              <h3 className="font-bold">I am Frontend Developer</h3>
              <br />
              <p className="text-justify text-[0.75rem]">
                As a student in Computer Science, I have had certain experiences
                developing a website or a mobile application through some
                projects that I have carried out during my time in university
                and internship.
              </p>
              <br />
              <p className="text-justify text-[0.75rem]">
                Therefore, I desire to find a job that helps me improve my
                professional skills while putting my acquired skills and
                training into activities that benefit the hiring company.
                Personally, I can self-study and have some soft skills that
                enable me to work well in a team.
              </p>
            </animated.div>
          ))}
          {transition3((style) => (
            <animated.div
              style={{
                ...style,
              }}
            >
              <div>
                <ul className="flex flex-col gap-3 text-[0.8125rem] text-white">
                  {INFORMATION.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className={cn(
                          "relative font-bold after:bottom-0 after:left-0 after:h-0.5 after:w-full",
                          "after:absolute after:bg-orange-500 after:content-['']"
                        )}
                      >
                        {item.label}
                      </div>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
                <SocialGroup />
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AboutMe;
