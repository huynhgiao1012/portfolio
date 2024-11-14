import { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

type UseCarouselType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useCarousel = (
  emblaApi: EmblaCarouselType | undefined
): UseCarouselType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((instance: EmblaCarouselType) => {
    setScrollSnaps(instance.scrollSnapList());
  }, []);

  const onSelect = useCallback((instance: EmblaCarouselType) => {
    setSelectedIndex(instance.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
