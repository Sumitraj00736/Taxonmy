import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/HeroSlider.css";

function HeroSlider() {
  const slides = [
    { id: 1, icon: "assets/hero1.jpg" },
    { id: 2, icon: "assets/hero2.jpg" },
    { id: 3, icon: "assets/hero3.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (touchEndX.current - touchStartX.current > 50) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div
      className="slider-container bg-Secondary h-[250px] md:h-[500px] flex justify-center items-center px-4 sm:px-8 relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {loading ? (
        <div className="w-full max-w-7xl pl-4 pt-8 md:p-2 flex justify-center items-center">
          <div className="w-full max-w-[750px] h-[200px] md:h-[360px] bg-gray-700 animate-pulse rounded-xl"></div>
        </div>
      ) : (
        <div className="w-full max-w-7xl relative overflow-hidden h-full">
          <div className="flex justify-center items-center w-full h-full relative">
            {slides.map((slide, index) => {
              const position =
                (index - currentSlide + slides.length) % slides.length;
              let zIndex = "z-10";
              let transform = "scale-100 translate-x-0";
              let opacity = "opacity-100";

              if (position === slides.length - 1) {
                transform = "scale-75 translate-x-[-100%]";
                opacity = "opacity-50";
                zIndex = "z-0";
              } else if (position === 1) {
                transform = "scale-75 translate-x-[100%]";
                opacity = "opacity-50";
                zIndex = "z-0";
              } else if (position !== 0) {
                opacity = "opacity-0 hidden";
              }

              return (
                <div
                  key={slide.id}
                  className={`absolute w-full max-w-[800px] h-[200px] md:h-[360px] transition-all duration-500 ease-in-out flex justify-center items-center ${transform} ${opacity} ${zIndex}`}
                >
                  <img
                    src={slide.icon}
                    alt={`Slider ${slide.id}`}
                    className="w-[95%] md:w-full h-[90%] md:h-full max-w-[800px] object-cover shadow-lg"
                  />
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="absolute bottom-2 md:bottom-6 w-full flex justify-center gap-2 md:gap-3 items-center z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 transition-all duration-300 ease-in-out border border-gray-700 ${
                  currentSlide === index
                    ? "bg-white scale-150 w-6 sm:w-8 md:w-10 rounded-xl shadow-lg"
                    : "bg-gray-500 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSlider;
