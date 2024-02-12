import React from 'react';
import { gigs } from '../../data';

const Gigs = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gigs.map((gig) => (
          <div key={gig.id} className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center mb-4">
              <img src={gig.img} alt="" className="rounded-md mx-auto" width={120} height={80} />
            </div>
            <p className="text-xl font-semibold mb-2">{gig.username}</p>
            <p className="text-gray-600 mb-4">{gig.desc}</p>
            <div className="flex items-center mb-4">
              <svg className="text-yellow-500 w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14v-4l3-3m-6 0l3 3m6 0l-3-3"></path>
              </svg>
              <p>{gig.star}</p>
              <span className="ml-4 text-gray-600">${gig.price}</span>
            </div>
            <div className="flex items-center">
              <img src={gig.pp} alt="" className="rounded-full" width={20} height={20} />
              <p className="ml-2 text-gray-600">Posted by {gig.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gigs;
