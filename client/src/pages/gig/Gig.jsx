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
          <span className="flex">
            {Array.from({ length: data.starNumber }, (_, index) => (
                 <img key={index} src="/images/star.png" alt="" width={20} height={20}/>
            ))}
          </span>
          
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
