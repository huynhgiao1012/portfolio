import { type FC, useState } from "react";

import {
  animated,
  useChain,
  useSpringRef,
  useTransition,
} from "@react-spring/web";
import Card from "@src/components/atoms/Card";
import PortfolioItem from "@src/components/atoms/PortfolioItem";
import Title from "@src/components/atoms/Title";
import PortfolioModal from "@src/components/molecules/PortfolioModal";
import { PORTFOLIO } from "@src/constants/portfolio";
import { useDirectionAwareHover } from "@src/hooks/useDirectionAwareHover";
import { cn } from "@src/utils/common";

interface Props {
  className?: string;
}

const Portfolio: FC<Props> = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

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
          <PortfolioItem
            as={animated.div}
            style={{
              width: "100%",
              height: "100%",
              ...style,
            }}
            image={item.img}
            title={item.label}
            onClick={() => {
              setOpen(!open);
              setId(item.id);
            }}
          />
        ))}
      </animated.div>
      <PortfolioModal
        id={id}
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </Card>
  );
};

export default Portfolio;
