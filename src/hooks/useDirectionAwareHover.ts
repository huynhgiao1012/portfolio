import { useEffect } from "react";

export const useDirectionAwareHover = (classname: string) => {
  const getHoverDirection = (event: MouseEvent): string => {
    const directions: string[] = ["top", "right", "bottom", "left"];
    const item = event.currentTarget as HTMLElement;

    const w = item.offsetWidth;
    const h = item.offsetHeight;

    const x =
      (event.clientX - item.getBoundingClientRect().left - w / 2) *
      (w > h ? h / w : 1);
    const y =
      (event.clientY - item.getBoundingClientRect().top - h / 2) *
      (h > w ? w / h : 1);

    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return directions[d];
  };

  useEffect(() => {
    const items = document.getElementsByClassName(`${classname}`);

    Array.from(items).forEach((item) =>
      ["mouseenter", "mouseleave"].forEach((eventname: string) => {
        item.addEventListener(eventname, (e) => {
          const dir = getHoverDirection(e as MouseEvent);
          item.classList.remove(
            "mouseenter",
            "mouseleave",
            "top",
            "right",
            "bottom",
            "left"
          );
          item.classList.add(e.type, dir);
        });
      })
    );

    return () => {
      Array.from(items).forEach((item) => {
        ["mouseenter", "mouseleave"].forEach((eventname: string) => {
          item.removeEventListener(eventname, () => {});
        });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
