import { type FC } from "react";
import type { StaticImageData } from "next/image";

import {
  animated,
  useChain,
  useSpringRef,
  useTransition,
} from "@react-spring/web";
import Img1 from "@src/assets/images/Img1.jpg";
import Img2 from "@src/assets/images/Img2.jpg";
import Img3 from "@src/assets/images/Img3.jpg";
import Img4 from "@src/assets/images/Img4.jpg";
import Img5 from "@src/assets/images/Img5.jpg";
import Img6 from "@src/assets/images/Img6.jpg";
import Img7 from "@src/assets/images/Img7.jpg";
import Img8 from "@src/assets/images/Img8.jpg";
import Img9 from "@src/assets/images/Img9.jpg";
import Card from "@src/components/atoms/Card";
import PortfolioItem from "@src/components/atoms/PortfolioItem";
import Title from "@src/components/atoms/Title";
import { useDirectionAwareHover } from "@src/hooks/useDirectionAwareHover";
import { cn } from "@src/utils/common";

interface Props {
  className?: string;
}

type PortfolioType = {
  img: StaticImageData;
};

const Portfolio: FC<Props> = ({ className = "" }) => {
  const PORTFOLIO: PortfolioType[] = [
    {
      img: Img1,
    },
    {
      img: Img2,
    },
    {
      img: Img3,
    },
    {
      img: Img4,
    },
    {
      img: Img5,
    },
    {
      img: Img6,
    },
    {
      img: Img7,
    },
    {
      img: Img8,
    },
    {
      img: Img9,
    },
  ];

  useDirectionAwareHover("hover");

  const transRef = useSpringRef();
  const transitions = useTransition(PORTFOLIO, {
    ref: transRef,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    trail: 750 / PORTFOLIO.length,
  });

  useChain([transRef]);

  return (
    <Card className={cn("motion-preset-slide-right overflow-auto", className)}>
      <Title title="Portfolio" description="My Best Works" />
      <animated.div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {transitions((style, item) => (
          // <animated.div
          //   style={{
          //     width: "100%",
          //     height: "100%",
          //     ...style,
          //   }}
          // >
          //   <PortfolioItem image={item.img} title="Project" />
          // </animated.div>
          <PortfolioItem
            as={animated.div}
            style={{
              width: "100%",
              height: "100%",
              ...style,
            }}
            image={item.img}
            title="Project"
          />
        ))}
      </animated.div>
    </Card>
  );
};

export default Portfolio;
