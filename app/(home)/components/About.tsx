import React from 'react'
import Title from './Title'

export default function About() {
  return (
    
    <div className=" py-10 ">
    <Title text="About " className="flex flex-col items-center justify-center rotate-6 " />
      <div className="max-w-lg text-lg p-8 mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10 text-gray-950">Tentang Layanan Kami</h1>
        <img src="assets/brush.png" alt="" className='relative' style={{marginTop: 20, marginBottom:-350}}  />
 
        <p className="text-gray-950 mb-4 relative ">
          Kami bertujuan untuk menghadirkan solusi perangkat lunak terbaik bagi Anda dengan pengalaman yang 
          memuaskan.Kami memadukan teknologi modern seperti React, TypeScript, dan Tailwind CSS untuk menciptakan produk
          yang cepat, aman, dan mudah digunakan.<br/>

          Kolaborasi dengan pelanggan kami sangat penting bagi kami. Kami selalu mendengarkan umpan balik Anda
          untuk terus meningkatkan produk dan layanan kami.
        </p>
      </div>
    </div>
  
  );
};

