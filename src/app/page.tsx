"use client";

import { useState } from 'react';

const data = [
  { name: 'Jan', Sales: 4000, Revenue: 2400 },
  { name: 'Feb', Sales: 3000, Revenue: 1398 },
  { name: 'Mar', Sales: 2000, Revenue: 9800 },
  { name: 'Apr', Sales: 2780, Revenue: 3908 },
  { name: 'May', Sales: 1890, Revenue: 4800 },
  { name: 'Jun', Sales: 2390, Revenue: 3800 },
  { name: 'Jul', Sales: 3490, Revenue: 4300 },
];

const maxValue = Math.max(...data.map(item => Math.max(item.Sales, item.Revenue)));

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-10">Business Dashboard</h1>
      <div className="flex justify-center items-end space-x-2 h-64 bg-gray-100 p-4">
        {data.map((item, index) => (
          <div key={index} className={`cursor-pointer h-${50 * item.Sales / maxValue} w-10 bg-blue-500`} onClick={() => handleClick(index)} title={`Sales: ${item.Sales}`}>
            <span className="text-xs">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center items-end space-x-2 h-64 bg-gray-200 p-4">
        {data.map((item, index) => (
          <div key={index} className={`cursor-pointer h-${50 * item.Revenue / maxValue} w-10 bg-green-500`} onClick={() => handleClick(index)} title={`Revenue: ${item.Revenue}`}>
            <span className="text-xs">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}