import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import { useResizeObserver } from "@src/hooks/useResizeObserver";
import { cn } from "@src/utils/common";

export const useScrollbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [needScrolling, setNeedScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);

  const containerCSS: CSSProperties = {
    height: `${containerHeight}px`,
  };

  const thumbCSS: CSSProperties = {
    height: `${thumbHeight}px`,
    top: `${scrollPosition}px`,
  };

  const handleScroll = () => {
    if (ref.current) {
      const ratioScroll =
        ref.current.scrollTop /
        (ref.current.scrollHeight - ref.current.clientHeight);
      setScrollPosition(ratioScroll * (containerHeight - thumbHeight));
    }

    setIsScrolling(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  useEffect(() => {
    if (ref.current) {
      const containerCaculatedHeight = ref.current.clientHeight;
      const thumbCalculatedHeight =
        (ref.current.clientHeight / ref.current.scrollHeight) *
        ref.current.clientHeight;
      setContainerHeight(containerCaculatedHeight - 15);
      setThumbHeight(thumbCalculatedHeight);
      setNeedScrolling(containerCaculatedHeight === thumbCalculatedHeight);
    }
  }, []);

  const { width = 0, height = 0 } = useResizeObserver({
    ref,
  });

  useEffect(() => {
    if (ref.current) {
      setScrollPosition(ref.current.scrollTop);
    }
  }, [width, height]);

  const CustomScrollbar = () => {
    return (
      <div
        className={cn(
          "absolute right-1 top-1/2 w-0.5 -translate-y-1/2 bg-white",
          {
            "opacity-0": needScrolling,
          }
        )}
        style={containerCSS}
      >
        <div
          className={cn(
            "absolute left-1/2 w-1 -translate-x-1/2 rounded-md",
            "transition duration-500 ease-in-out",
            isScrolling ? "bg-white" : "bg-orange-500"
          )}
          style={thumbCSS}
        />
      </div>
    );
  };
  return {
    CustomScrollbar,
    handleScroll,
    ref,
  };
};
