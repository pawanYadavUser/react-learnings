import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Featured() {
  const sliders = [
    {
      url: "https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419428_1280.jpg",
    },
    {
      url: "https://static.vecteezy.com/system/resources/previews/022/994/042/non_2x/the-pepperoni-pizza-and-a-piece-of-streched-cheese-pizza-with-ai-generated-free-photo.jpg",
    },
    {
      url: "https://images.pexels.com/photos/30649007/pexels-photo-30649007/free-photo-of-crispy-french-fries-with-ketchup-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveSlider = (sliderIndex) => {
    setCurrentIndex(sliderIndex);
  };

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      >
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl
        rounded-full p-2 bg-orange-700 text-white cursor-pointer"
        >
          <BsChevronCompactLeft onClick={prevSlider} />
        </div>
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl
        rounded-full p-2 bg-orange-700 text-white cursor-pointer"
        >
          <BsChevronCompactRight onClick={nextSlider} />
        </div>
        <div className="flex justify-center space-x-10 py-2 absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-white drop-shadow-lg">
          {sliders.map((sliderItems, sliderIndex) => (
            <div
              key={sliderIndex}
              className="text-2xl cursor-pointer "
              onClick={() => moveSlider(sliderIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
