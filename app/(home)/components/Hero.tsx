"use client"
import { MovingBorderBtn } from "@/components/ui/moving-border";
import { GiSupersonicArrow } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import React from "react";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between ">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold text-gray-950">
          M-One Solution, <br />
          <span>Menyediakan Layanan </span><br />
          {/* <span className="underline underline-offset-8 decoration-green-500">{" Software."}</span> */}
          <TypeAnimation sequence={[
            'Software.',
            2000,
            'Website.',
            2000,
            'Landing Page.',
            2000,
        
          ]}
          speed={50}
          className="underline underline-offset-8 decoration-green-500"
          wrapper= 'span'
          repeat={Infinity}
          
          />
        </h1>

        <p className="md:w-96 text-lg text-gray-950">{" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad aut quisquam, ratione explicabo impedit."}</p>
        <Link href={"mailto:some@gmail.com"} className="inline-block group">
          <Title text="Contact Our"/>
        </Link>
      </div>
      <div className=" relative">
        <div className="w-96 h-96 space-y-3  relative">
          <div className="flex gap-3 translate-x-8">
            <img src="/assets/example.png" alt="" />
            {/* <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div> */}
            <div className=" glow absolute top-[40%] right-1/2 -z-10"></div>
          </div>
          {/* <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div> */}
          
        </div>

        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
        <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
        <GiSupersonicArrow  className="mr-3"/>
        
          <p>  Staf Berpengalaman</p>
        </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
