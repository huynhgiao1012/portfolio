import { type FC } from "react";
import Image from "next/image";

import Icon from "@src/assets/images/Ava.png";
import Card from "@src/components/atoms/Card";
import Title from "@src/components/atoms/Title";
import SocialGroup from "@src/components/molecules/SocialGroup";
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
      label: "Age",
      value: "29",
    },
    {
      label: "Residence",
      value: "USA",
    },
    {
      label: "Address",
      value: "88 Some Street, Some Town",
    },
    {
      label: "Email",
      value: "email@gmail.com",
    },
    {
      label: "Phone",
      value: "+0123 123 456 789",
    },
    {
      label: "Skype",
      value: "alex.smith",
    },
    {
      label: "Freelance",
      value: "Available",
    },
  ];

  return (
    <Card
      className={cn(
        "overflow-auto motion-duration-[1.00s] motion-translate-x-in-[100%] motion-translate-y-in-[0%]",
        className
      )}
    >
      <Title title="About Me" description="Artist, Thinker, Creative Doer" />
      <div className="grid grid-cols-1 gap-[1.875rem] px-[0.9375rem] sm:grid-cols-2 md:grid-cols-3">
        <Image
          ref={ref}
          src={Icon}
          alt="MyAvt"
          className="avatar w-[12.5rem] sm:w-full"
        />
        <div className="grid gap-[1.875rem] sm:grid-cols-1 md:col-span-2 lg:grid-cols-2">
          <div className="text-white">
            <h3 className="font-bold">I am Web Designer @ Company.com</h3>
            <p className="text-justify text-[0.75rem]">
              Praesent ut tortor consectetur, semper sapien non, lacinia augue.
              Aenean arcu libero, facilisis et nisi non, tempus faucibus tortor.
              Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor.
              Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue.
            </p>
            <br />
            <p className="text-justify text-[0.75rem]">
              Duis sollicitudin, libero porttitor rutrum ultrices, turpis lorem
              fermentum justo, quis ornare augue tortor non est. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-3 text-[0.8125rem] text-white">
              {INFORMATION.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span
                    className={cn(
                      "relative font-bold after:bottom-0 after:left-0 after:h-0.5 after:w-full",
                      "after:absolute after:bg-orange-500 after:content-['']"
                    )}
                  >
                    {item.label}
                  </span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
            <SocialGroup />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AboutMe;
