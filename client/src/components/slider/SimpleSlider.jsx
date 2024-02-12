// SimpleSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import { cards } from '../../data';

const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container mt-5">
      <Slider {...settings} className="rounded-lg overflow-hidden">
        {cards.map((card) => (
          <div key={card.id} className="px-4 bg-white shadow-lg rounded-md">
            <img src={card.img} alt="" className="mb-2 w-full h-40 object-cover rounded-t-md" />
            <h1 className="text-xl font-semibold mb-2">{card.title}</h1>
            <p className="text-gray-700">{card.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
