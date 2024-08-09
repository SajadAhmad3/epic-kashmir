"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./SliderBtn";
import { DotButton, useDotButton } from "./Dots";
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

type CarouselProps = {
  children: React.ReactNode;
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  variant?: "home" | "workout";
};

export default function Slider({
  children,
  options,
  plugins = [],
  variant = "home",
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    ...plugins,
    WheelGesturesPlugin(),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="flex w-full max-w-full flex-col">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className={`flex touch-pan-y touch-pinch-zoom ${
            variant === "home"
              ? scrollSnaps.length > 3
                ? "ml-0 lg:ml-[-32px]"
                : "ml-0 lg:ml-12"
              : "ml-0 lg:mx-12"
          }`}
        >
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <div
                className={`flex min-w-0 flex-none pl-4 sm:pl-8 ${
                  index === 0 ? "pl-4 sm:pl-8" : ""
                } ${index === children.length - 1 ? "pr-4 sm:pr-8" : ""}`}
                key={index}
              >
                {child}
              </div>
            ))
          ) : (
            <div className="min-w-0 flex-none pl-4 sm:pl-8">{children}</div>
          )}
        </div>
      </div>
      <div
        className={`mt-10 hidden flex-1 items-center justify-center gap-8 ${
          scrollSnaps.length > 1 ? "sm:flex" : "sm:hidden"
        }`}
      >
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="flex flex-wrap items-center justify-center gap-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
}
