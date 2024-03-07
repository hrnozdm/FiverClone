import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../../api/api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Reviews from '../../components/reviews/Reviews';

const Gig = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ['Gig'],
    queryFn: async () => {
      try {
        const response = await api.get(`gig/allGig/${id}`);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (isPending) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error.message}</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <Slider {...sliderSettings}>
          {data.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-64 object-cover mb-6 rounded-md"
            />
          ))}
        </Slider>
        <h2 className="text-3xl font-semibold mb-4">{data.title}</h2>
        <p className="text-gray-600 mb-4">{data.desc}</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 text-lg">
            {Array.from({ length: data.starNumber }, (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 01.777.37l2.882 3.69 4.443.812a1 1 0 01.555 1.705l-3.203 3.121.755 4.419a1 1 0 01-1.455 1.055L10 15.334l-3.95 2.078a1 1 0 01-1.455-1.055l.755-4.419-3.203-3.121a1 1 0 01.555-1.705l4.443-.812L9.223 2.37A1 1 0 0110 2zm0 2a1 1 0 01.238.03l3.762.688-.678 3.978a1 1 0 01.29.964l.603 3.527-3.15-1.654a1 1 0 01-.94 0l-3.15 1.654.603-3.527a1 1 0 01.29-.964l-1.678-.307-1.678-.307L10 4.031A1 1 0 0110 4z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </span>
          <span className="ml-2 text-gray-600">({data.totalStars} Değerlendirme)</span>
        </div>
        <p className="text-gray-600 mb-4">
          Kategori: {data.cat} | Fiyat: ${data.price} | Teslim Süresi: {data.deliveryTime}
        </p>
        <p className="text-gray-600 mb-4">Satış: {data.sales}</p>
        <p className="text-gray-600 mb-4">
          Öne Çıkan Özellikler:
          <ul className="list-disc ml-6">
            {data.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </p>
        <p className="text-gray-600">
          Güncellenme Tarihi: {new Date(data.updatedAt).toLocaleDateString()}
        </p>
        <div className="mt-6">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Hemen Satın Al
          </button>
        </div>
      </div>

      <Reviews gigId={id}/>
    </div>
  );
};

export default Gig;
