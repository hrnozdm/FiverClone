import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState,useEffect } from 'react';
import api from '../../api/api';

const Reviews = ({ gigId }) => {

  const [review, setReview] = useState({
    desc: null,
    star: null
  });

  const handleComment = (e) => {
    const comment = e.target.value;
    setReview({ ...review, desc: comment });
  }

  const handleStar = (e) => {
    const star = e.target.value;
    setReview({ ...review, star: star })
  }

  const handleSubmit = () => {
    mutation.mutate();
  }

  const { isPending, error, data, refetch } = useQuery({
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


  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userPromises = data?.reviews?.map(async (review) => {
          const userResponse = await api.get(`/user/getUser/${review.userId}`);
          return userResponse.data;
        }) || [];
  
        const resolvedUserData = await Promise.all(userPromises);
        setUserData(resolvedUserData);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [data]);

  //    }

 

  const mutation = useMutation({
    mutationFn: async () => {
      return await api.post(`/createReview/${gigId}`, review);
    },
    onSuccess: async () => {
      await refetch();
      setReview({ desc: null, star: null })
    }
  })

  if (isPending) {
    return <div>Yükleniyor...</div>;
  }

  if (!data) {
    return null;
  }
   
   console.log(userData);
  return (
    <div>
      <div className="reviews mt-8 ">
     

        {data?.reviews?.map((review,index) => (
          <div key={index} className="mt-5 bg-white rounded-lg shadow-md p-4 mb-4">
            <div>
            
            {userData[index] && (
              <div className='flex'>
                <img src={userData[index].user.img || "/images/noavatar.jpg"} alt="" width={30} height={20}/>
                <p className='mt-2'>{userData[index].user.username}</p>
              </div>
              
            )}
              <p className="text-lg font-semibold mb-2">Yorum: {review.desc}</p>
              <div className='flex'>
                {Array.from({ length: review.star }).map((_, index) => (
                  <img key={index} src="/images/star.png" alt="" width={20} height={20} />
                ))}
              </div>
              <p className='mt-2'>Oluşturulma Tarihi: {new Date(review.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}


      </div>

      <div className='addReview mt-5 '>
        <div className='font-bold text-2xl mt-2'>Yorum Ekle</div>
        <div><textarea onChange={handleComment} className='border outline-none p-3 flex-1 w-[750px]' /></div>
        <div className='mt-3'>
          <select name="" id="" className='px-3 py-2 border outline-none' onChange={handleStar}>

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className='bg-green-600 mt-4 text-white p-3' onClick={handleSubmit}>Gönder</button>
      </div>
    </div>
  );
};

export default Reviews;
