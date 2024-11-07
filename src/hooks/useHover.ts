import { type MouseEvent, useEffect, useRef } from "react";

export const useHover = () => {
  const ref = useRef<HTMLImageElement>(null);
  const THRESHOLD = 15;
  const handleMove = (e: unknown) => {
    const { clientX, clientY, currentTarget } = e as MouseEvent;
    const { clientWidth, clientHeight } = currentTarget;
    const offsetLeft = currentTarget.getBoundingClientRect().left;
    const offsetTop = currentTarget.getBoundingClientRect().top;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    if (ref.current) {
      ref.current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }
  };

  const resetStyles = (e: unknown) => {
    if (ref.current) {
      ref.current.style.transform = `perspective(${(e as MouseEvent).currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  useEffect(() => {
    ref.current?.addEventListener("mousemove", handleMove);
    ref.current?.addEventListener("mouseleave", resetStyles);
    return () => {
      ref.current?.removeEventListener("mousemove", handleMove);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.removeEventListener("mouseleave", resetStyles);
    };
  }, []);

  return { ref };
};
