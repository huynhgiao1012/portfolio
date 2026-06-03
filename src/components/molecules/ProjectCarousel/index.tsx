import { type FC } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { PORTFOLIO } from "@src/constants/portfolio";
import { useCarousel } from "@src/hooks/useCarousel";
// import { useCarousel } from "@src/hooks/useCarousel";
import { cn } from "@src/utils/common";

interface Props {
  id: number;
  className?: string;
}

const ProjectCarousel: FC<Props> = ({ className = "", id }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    watchDrag: false,
    dragFree: false,
  });

  const project = PORTFOLIO.filter((item) => item.id === id)[0];
  const { onDotButtonClick, selectedIndex, scrollSnaps } =
    useCarousel(emblaApi);

  return (
    <div className={cn("project-carousel", className)}>
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container">
          {project &&
            project.projectImg.map((item, index) => (
              <div className="embla__slide" key={index}>
                <Image
                  src={item}
                  alt="Image"
                  className="size-full max-h-[90%]"
                />
              </div>
            ))}
        </div>
        <div className="absolute bottom-0 right-1/2 translate-x-1/2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "ml-2 size-2.5 rounded-full bg-orange-500/20 transition-colors",
                {
                  "bg-orange-500": selectedIndex == index,
                }
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
