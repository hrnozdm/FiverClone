import { useQuery } from '@tanstack/react-query';
import React from 'react';
import api from '../../api/api';

const Orders = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ['Orders'],
    queryFn: async () => {
      try {
        const response = await api('getOrders');
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (!data || !data.order.length) {
    return null;
  }

  if (error) {
    return <div>...error</div>;
  }

  if (isPending) {
    return <div>...Yükleniyor</div>;
  }



  console.log(data);
  return (
    <div className='h-screen '>
      <table className='w-full table-auto border-collapse mt-20'>
        <thead>
          <tr>
            <th className='py-4 text-center'>
              <h2>Orders</h2>
            </th>
          </tr>
          <tr>
            <th className='py-2 px-4'>Fotoğraf</th>
            <th className='py-2 px-4'>Başlık</th>
            <th className='py-2 px-4'>Fiyat</th>
            <th className='py-2 px-4'>İletişim</th>
          </tr>
        </thead>

        <tbody >
          {data.order.map((order) => (
            <tr key={order.id} className='bg-gray-300'>
              <td className='py-2 px-4'>
                <img src={order.img} alt='' width={20} height={20} />
              </td>
              <td className='py-2 px-4'>{order.title}</td>
              <td className='py-2 px-4'>{order.price}</td>
              <td className='py-2 px-4'>İletişim geç</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
