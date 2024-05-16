import React from 'react'
import Title from './Title';

export default function Clien() {

    const schools = 
    [
      {
        Logo:"assets/chimecal.jpeg",
        Label:""
      },
      {
        Logo:"assets/elind.jpeg",
        Label:""
      },
      {
        Logo:"assets/hospital.jpeg",
        Label:""
      },
      {
        Logo:"assets/motor.jpeg",
        Label:""
      },
      {
        Logo:"assets/service.jpeg",
        Label:""
      },
    ];

  return (
    <div className=" py-10">
      <Title text="Client " className="flex flex-col items-center justify-center -rotate-6 " />
      <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Our Clients</h1>
      <div className="grid grid-cols-3 gap-4">
        {schools.map((school, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={school.Logo} alt={school.Label} className="w-32 h-32 object-contain" />
          </div>
        ))}
      </div>
    </div>  
    </div>
  )
}
