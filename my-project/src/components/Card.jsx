import React from 'react';
import { FaPen, FaEye } from 'react-icons/fa';

const Card = ({ name, invoice }) => {
  return (
    <div className="flex justify-between m-6 items-center border-b p-3">
      <div className="w-1/3">{name}</div>
      <div className="w-1/3">{invoice}</div>
      <div className="w-1/4 flex gap-4 text-xl">
        <FaPen className="text-orange-500 cursor-pointer" />
        <FaEye className="text-black cursor-pointer" />
      </div>
    </div>
  );
};  

export default Card;
