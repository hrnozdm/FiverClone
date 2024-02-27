import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="relative bg-white p-20 rounded-md">
        <p className="text-red-500 font-semibold">{message}</p>
        <button
          className="bg-green-500 text-white py-2 px-4 absolute top-0 right-0 m-4 hover:bg-green-600 rounded-full cursor-pointer"
          onClick={onClose}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Alert;
