import React, { useState, useEffect, useRef, useCallback } from "react";
import {ArrowLeft, ArrowRight } from 'lucide-react';
import dalImg from "../../assets/images/dal.jpg";
import drungImg from "../../assets/images/drung.jpg";
import gulmargImg from "../../assets/images/gulmarg.jpg";
import gondolaImg from "../../assets/images/gondola.jpg";
import sonmargImg from "../../assets/images/sonmarg.jpg";

const data = [
  {
    source: dalImg,
    title: "Dal Lake",
    text: "Experience the serene beauty of Dal Lake, with its picturesque views and tranquil waters.",
    alt: "Dal Lake",
  },
  {
    source: drungImg,
    title: "Drung Waterfall",
    text: "Marvel at the cascading waters of Drung Waterfall, a hidden gem in the heart of nature.",
    alt: "Drung Waterfall",
  },
  {
    source: gulmargImg,
    title: "Gulmarg",
    text: "Visit Gulmarg, a winter wonderland known for its ski resorts and beautiful landscapes.",
    alt: "Gulmarg",
  },
  {
    source: gondolaImg,
    title: "Gondola Ride",
    text: "Take a thrilling gondola ride in the mountains, offering breathtaking views from above.",
    alt: "Gondola Ride",
  },
  {
    source: sonmargImg,
    title: "Sonmarg",
    text: "Explore the meadows of Sonmarg, a paradise for nature lovers and adventure seekers.",
    alt: "Sonmarg",
  },
];

const slideDuration = 3000;

const Carousel  = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [savedWidth, setSavedWidth] = useState<number>(0);
  const transitionRef = useRef<HTMLDivElement>(null);
  const length = data.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<number>(slideDuration);

  const slideList = [data[length - 1], ...data, data[0]];

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(length);
      if (transitionRef.current) {
        transitionRef.current.style.transition = "none";
        transitionRef.current.style.transform = `translateX(-${length * 100}%)`;
      }
    } else if (currentIndex === length + 1) {
      setCurrentIndex(1);
      if (transitionRef.current) {
        transitionRef.current.style.transition = "none";
        transitionRef.current.style.transform = "translateX(-100%)";
      }
    }
  };

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setIsTransitioning(true);
    if (transitionRef.current) {
      transitionRef.current.style.transition = "transform 0.5s ease-in-out";
    }
    resetTimer();
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsTransitioning(true);
    if (transitionRef.current) {
      transitionRef.current.style.transition = "transform 0.5s ease-in-out";
    }
    resetTimer();
  }, [isTransitioning]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      goToNext();
    }, intervalRef.current);
  }, [goToNext]);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (transitionRef.current) {
      transitionRef.current.style.transition = "none";
    }

    document.querySelectorAll(".active-progress .fill").forEach((el) => {
      const element = el as HTMLElement;
      const currentWidth =
        (el.clientWidth / el.parentElement!.clientWidth) * 100;

      setSavedWidth(currentWidth);
      element.style.width = `${currentWidth}%`;
      element.classList.remove("fill");
      element.classList.add("empty");
    });
  };

  const handleMouseLeave = () => {
    intervalRef.current = slideDuration;
    resetTimer();
    if (transitionRef.current) {
      transitionRef.current.style.transition = "transform 0.5s ease-in-out";
    }

    document.querySelectorAll(".empty").forEach((el) => {
      const element = el as HTMLElement;
      element.classList.remove("empty");
      element.classList.add("fill");
    });

    document.querySelectorAll(".active-progress .fill").forEach((el) => {
      const element = el as HTMLElement;
      element.style.width = `${savedWidth}%`;
    });
  };

  useEffect(() => {
    if (transitionRef.current) {
      transitionRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  return (
    <div className="relative overflow-hidden my-5 rounded-lg mx-4 lg:mx-0 md:mx-0">
      <div className="absolute top-5 flex gap-1 w-1/2 px-5">
        {data.map((_, index) => (
          <div key={index} className="w-full">
            <div
              className={`h-1 bg-gray-300 relative overflow-hidden rounded-full z-10 ${
                index + 1 === currentIndex ? "active-progress" : ""
              }`}
            >
              <div
                className={`h-full bg-red ${
                  index + 1 === currentIndex ? "fill" : "empty"
                }`}
                style={{
                  width: index + 1 === currentIndex ? "100%" : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={transitionRef}
        onTransitionEnd={handleTransitionEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {slideList.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
              <div className="py-10 bg-gray-200 ">
                <div className="text-wrap max-w-[500px] px-5 pt-10 text-black">
                  <h2>{item.title}</h2>
                  <p className="text-base text-gray-600">{item.text}</p>
                </div>
              </div>
              <div className="h-[450px] relative">
                <img src={item.source} alt={item.alt}  className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-5 flex gap-2 mt-4 bg">
        <button
          onClick={goToPrevious}
          className="px-2 py-2 bg-white text-black rounded-full"
          disabled={isTransitioning}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={goToNext}
          className="px-2 py-2 bg-white text-black rounded-full"
          disabled={isTransitioning}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
