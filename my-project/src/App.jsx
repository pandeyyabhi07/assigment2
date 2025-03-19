import React from 'react';
import Card from './components/Card';
import Data from './components/Data';
import { FaDownload, FaTools } from 'react-icons/fa';
import { LuLayoutGrid } from 'react-icons/lu';
import { IoPeopleSharp } from 'react-icons/io5';
import { IoMdDocument } from 'react-icons/io';

const App = () => {
  return (
    <div className="w-full m-auto p-15 shadow-lg rounded-lg border mt-10 font-sans">
      <div className="flex justify-between items-center mb-6">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">+ Register</button>
        <button className="border px-4 py-2 rounded flex items-center gap-2">
          <FaDownload /> Export
        </button>
        <button className="border px-4 py-2 rounded flex items-center gap-2">
          <LuLayoutGrid /> Layout
        </button>
      </div>

      <div className="flex justify-between font-bold bg-gray-100 p-3">
        <div className="w-1/3 flex items-center gap-2">
          <IoPeopleSharp /> Customer
        </div>
        <div className="w-1/3 flex items-center gap-2">
          <IoMdDocument /> Last Invoice
        </div>
        <div className="w-1/4 flex items-center gap-2">
          <FaTools /> Action
        </div>
      </div>

      {Data.map((customer) => (
        <Card key={customer.id + customer.name} name={customer.name} invoice={customer.invoice} />
      ))}
    </div>
  );
};

export default App;
