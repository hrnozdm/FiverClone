import { useQuery } from '@tanstack/react-query';
import React from 'react';
import api from '../../api/api';

const Reviews = ({ gigId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['Reviews', gigId],
    queryFn: async () => {
      try {
        const response = await api.get(`getReviews/${gigId}`);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  });

  if (isPending) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error.message}</div>;
  }

  return (
    <div>
      <div className="reviews mt-5">
        
        {data.reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white rounded-lg shadow-md p-4 mb-4"
          >
           
            <div>
              <p className="text-lg font-semibold mb-2">Yorum: {review.desc}</p>
              <p>Yıldız: {review.star}</p>
              <p>Oluşturulma Tarihi: {review.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
