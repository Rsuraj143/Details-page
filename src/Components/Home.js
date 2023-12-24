import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "./Data";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(Data[0].image);
  const [zoomLevel, setZoomLevel] = useState(1);
  const sliderRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setZoomLevel(1); 
  };

  const handleZoomChange = (event) => {
    setZoomLevel(parseFloat(event.target.value));
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="flex gap-5 w-full px-5 md:px-20 py-10">
      <div className="w-1/5  flex flex-col items-center gap-5">
        <button
          onClick={handlePrev}
          className="font-bold text-3xl"
        >
          <IoChevronUpOutline />
        </button>
        <Slider ref={sliderRef} {...sliderSettings}>
          {Data.map((item) => (
            <div key={item.id} className="cursor-pointer sliderImg">
              <img
                className="md:w-36 w-16   border-2 border-gray-300 rounded-md mb-5"
                src={item.image}
                alt={item.id}
                onClick={() => handleImageClick(item.image)}
              />
            </div>
          ))}
        </Slider>
        <button
          onClick={handleNext}
          className="font-bold text-3xl"
        >
          <IoChevronDownOutline />
        </button>
      </div>
      <div className="w-4/5 flex flex-col justify-between items-center">
        <h2 className="font-semibold text-2xl pb-4">Product Details</h2>
        <div className="w-full overflow-hidden flex justify-center">
       <div className="w-1/2 min-h-[500px] flex items-center">
       <img
            src={selectedImage}
            alt="Selected"
            className="w-full  h-auto transform scale-0 transition-transform duration-300 ease-in-out"
            style={{ transform: `scale(${zoomLevel})` }}
          />
       </div>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Zoom Level</h3>
          <input
            type="range"
            value={zoomLevel}
            min={1}
            max={3}
            step={0.1}
            onChange={handleZoomChange}
            className="w-full md:w-[350px] lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
