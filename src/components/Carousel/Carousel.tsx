import React, { useState, useEffect, useRef, useCallback } from "react";
import dalImg from "../../assets/images/dal.jpg";
import drungImg from "../../assets/images/drung.jpg";
import gulmargImg from "../../assets/images/gulmarg.jpg";
import gondolaImg from "../../assets/images/gondola.jpg";
import sonmargImg from "../../assets/images/sonmarg.jpg";

const data = [
    {
      source: dalImg,
      title: "Client Centric, Trusted Partners",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem. Praesentium, magni. Sunt repellendus eligendi quod illo, consectetur neque consequatur.",
      alt: "Frame1-img",
    },
    {
      source: drungImg,
      title: "Innovative Solutions",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem. Praesentium, magni. Sunt repellendus eligendi quod illo, consectetur neque consequatur.",
      alt: "Frame2-img",
    },
    {
      source: gulmargImg,
      title: "Dedicated Support",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem. Praesentium, magni. Sunt repellendus eligendi quod illo, consectetur neque consequatur.",
      alt: "Frame3-img",
    },
    {
      source: gondolaImg,
      title: "Dedicated Support",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem. Praesentium, magni. Sunt repellendus eligendi quod illo, consectetur neque consequatur.",
      alt: "Frame3-img",
    },
    {
      source: sonmargImg,
      title: "Dedicated Support",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem. Praesentium, magni. Sunt repellendus eligendi quod illo, consectetur neque consequatur.",
      alt: "Frame3-img",
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
    <div className="relative overflow-hidden m-10">
      <div className="absolute top-5 flex gap-1 w-1/2 px-5">
        {data.map((_, index) => (
          <div key={index} className="w-full">
            <div
              className={`h-1 bg-gray-300 relative overflow-hidden rounded-full z-10 ${
                index + 1 === currentIndex ? "active-progress" : ""
              }`}
            >
              <div
                className={`h-full bg-[#00A651] ${
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
              <div className="py-10 bg-gray-200">
                <div className="text-wrap max-w-[500px] px-5 pt-10">
                  <h2>{item.title}</h2>
                  <p className="text-base text-gray-600">{item.text}</p>
                </div>
              </div>
              <div className="h-[350px] relative">
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
          Left
        </button>
        <button
          onClick={goToNext}
          className="px-2 py-2 bg-white text-black rounded-full"
          disabled={isTransitioning}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Carousel;
