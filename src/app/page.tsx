import { useState } from 'react';
"use client";

export default function Home() {
  const [sales, setSales] = useState(150);
  const [revenue, setRevenue] = useState(10500);
  const [expenses, setExpenses] = useState(5000);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6">Business Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="text-gray-700 text-lg">Sales</div>
          <div className="text-gray-900 text-3xl font-bold">{sales} Units</div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="text-gray-700 text-lg">Revenue</div>
          <div className="text-gray-900 text-3xl font-bold">${revenue}</div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="text-gray-700 text-lg">Expenses</div>
          <div className="text-gray-900 text-3xl font-bold">${expenses}</div>
        </div>
      </div>
    </div>
  );
}