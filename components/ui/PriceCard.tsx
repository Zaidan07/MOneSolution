

import React from 'react';

interface PriceCardProps {
  title: string;
  price: number;
  features: string[];
}

const formatToRupiah = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {  }).format(price);
  };

const PriceCard: React.FC<PriceCardProps> = ({ title, price, features }) => {
  return (
    
    <div className="bg-gray-800  rounded-lg p-6 text-center px-16 py-20">
        
      <h2 className="text-xl font-semibold mb-10">{title}</h2>
      <div className="text-3xl font-bold mb-4 py-5">Rp.{formatToRupiah(price)}/bulan</div>
      <ul className="text-left">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">
        Subscribe
      </button>
    </div>
  );
};

export default PriceCard;
