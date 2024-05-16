import PriceCard from "@/components/ui/PriceCard";
import { NextPage } from "next";
import React from "react";
import Title from "./Title";

export default function Skills() {
  const plans = [
    {
      title: "Basic",
      price: 75000,
      features: ["Nama Domain 'sch.id'", "Jasa Pembuatan Web", "Gratis Hosting"],
    },
    {
      title: "Standard",
      price: 100000,
      features: ["Nama Domain 'sch.id'", "Jasa Pembuatan Web", "Gratis Hosting"],
    },
    {
      title: "Premium",
      price: 200000,
      features: ["Nama Domain 'sch.id'", "Jasa Pembuatan Web", "Gratis Hosting"],
    },
  ];

  return (
    <div className="py-20 p-5 sm:p-0 ">
      
    <Title text="Pricing" className="flex flex-col items-center justify-center rotate-6" />
    <div className="flex flex-col items-center mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((item, index) => (
          <PriceCard key={index} {...item} />
        ))}
      </div>
    </div>
  </div>
  );
}
