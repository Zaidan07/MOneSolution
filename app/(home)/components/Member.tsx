"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Title from "./Title";
const people = [
  {
    id: 1,
    name: "Rigen",
    designation: "Software Engineer",
    image: "/assets/m1.jpg",
  },
  {
    id: 2,
    name: "Alfarez",
    designation: "Product Manager",
    image: "/assets/m2.jpg",
  },
  {
    id: 3,
    name: "Wahid",
    designation: "Data Scientist",
    image: "/assets/m7.jpg",
  },
  {
    id: 4,
    name: "Nur Rohman",
    designation: "UX Designer",
    image: "/assets/m8.jpg",
  },
  {
    id: 5,
    name: "Sriwanto",
    designation: "Soap Developer",
    image: "/assets/m9.jpg",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "",
  },
];

export function Member() {
  return (
    <div className=" py-10">
      <Title text="Member " className="flex flex-col items-center justify-center rotate-6 " />
      <div className="flex flex-row items-center justify-center mb-10 w-full py-20 ">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
