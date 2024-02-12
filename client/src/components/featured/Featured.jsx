import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Featured = () => {
  return (
    <div>
      <div className="main bg-green-900 h-[500px] flex items-center p-20 justify-around">
        <div className="left">
          <div className="title text-3xl text-white mb-5">
            <h1>İşiniz İçin En İyi Freelance Hizmetini Bulun</h1>
          </div>

          <div className="search flex items-center">
            <CiSearch className='text-white cursor-pointer' size={24}/>
            <input type="text" className="flex-1 outline-none px-2 py-2" placeholder="Ara" />
            <button type="submit" className='border  px-4 py-2 rounded-md text-white'>Ara</button>
          </div>
        </div>
        <div className="right">
            <img src="https://cdn.pixabay.com/photo/2018/05/16/19/21/working-3406785_640.jpg" alt="" width={500} height={500} className='rounded-md'/>
        </div>
      </div>
    </div>
  );
};

export default Featured;
