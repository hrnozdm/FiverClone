import React from "react";
import { gigs } from "../../data";
import { FaRegStar } from "react-icons/fa";

const Gigs = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="mt-10 mb-10 flex justify-between items-center">
        <div className="left flex items-center space-x-4">
          <label htmlFor="">Sırala</label>
          <input
            type="text"
            className="border outline-none text-black"
            placeholder="Min"
          />
          <input
            type="text"
            className="border outline-none text-black"
            placeholder="Max"
          />
          <button className="bg-green-900 text-white px-3  rounded-lg text-xl">
            Ara
          </button>
        </div>
        <div className="right flex items-center cursor-pointer  border">
          <select className="block w-full bg-gray-200 outline-none  rounded-md">
            <option value="option1">Artan</option>
            <option value="option2">Azalan</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gigs.map((gig) => (
          <div key={gig.id} className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={gig.img}
                alt=""
                className="rounded-md mx-auto"
                width={120}
                height={80}
              />
            </div>
            <p className="text-xl font-semibold mb-2">{gig.username}</p>
            <p className="text-gray-600 mb-4">{gig.desc}</p>
            <div className="flex items-center mb-4">
              {Array.from({ length: Number(gig.star) }, (_, index) => (
                <FaRegStar key={index} className="text-yellow-500" />
              ))}

              <span className="ml-4 text-gray-600">${gig.price}</span>
            </div>
            <div className="flex items-center">
              <img
                src={gig.pp}
                alt=""
                className="rounded-full"
                width={20}
                height={20}
              />
              <p className="ml-2 text-gray-600">Posted by {gig.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gigs;
