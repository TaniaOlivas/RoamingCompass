import React, { useState } from "react";

const Carousel = ({ carouselData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
        );
    };

    return (
        <div className="relative overflow-hidden max-w-2xl">
            <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselData.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-52 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
            >
                Prev
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-52 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
            >
                Next
            </button>
        </div>
    );
};

export default Carousel;
