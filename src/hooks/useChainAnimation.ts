import type { UseTransitionProps } from "@react-spring/web";
import { useChain, useSpringRef, useTransition } from "@react-spring/web";

export const useChainAnimation = <T>(
  data: Array<T>,
  customAnimation?: UseTransitionProps
) => {
  const defaultAnimation = {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    trail: 750 / data.length,
  };
  const transRef = useSpringRef();
  const transitions = useTransition(data, {
    ref: transRef,
    ...(customAnimation ?? defaultAnimation),
  });

  useChain([transRef]);

  return { transitions, transRef };
};
