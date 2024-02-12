import React from 'react';
import Slider from 'react-slick';
import { projects } from '../../data';

const ProjectSlider = () => {
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
        {projects.map((project) => (
          <div key={project.id} className="px-4 py-6 bg-white shadow-lg rounded-md">
            <img src={project.img} alt="" className="mb-4 w-full h-40 object-cover rounded-md" />
            <h1 className="text-xl font-semibold mb-2">{project.username}</h1>
            <p className="text-gray-700 mb-2">{project.cat}</p>
            <div className="flex items-center">
              <img src={project.pp} alt="" className="mr-2 w-6 h-6 rounded-full" />
              <span className="text-gray-500">{project.author}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
