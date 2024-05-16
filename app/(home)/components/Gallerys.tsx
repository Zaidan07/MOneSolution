"use client";
import React from "react";
import { SiJavascript, SiTailwindcss, SiLaravel, SiPhp } from "react-icons/si";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";

export default function Gallerys () {
  const gallerys = [
    {
      title: "Course Web ",
      tech: [SiPhp, SiTailwindcss, SiJavascript, SiLaravel],
      link: "http://smkmutuharjo.com/my/courses.php",
      cover: "/gallery1.png",
      background: "bg-indigo-500",
    },
    {
      title: "Smk Muhammadiyah 1 Sukoharjo ",
      tech: [SiTailwindcss, SiJavascript, SiLaravel],
      link: "https://smkmuh1-skh.sch.id/",
      cover: "/gallery2.png",
      background: "bg-green-500",
    },
    {
      title: "Course Web ",
      tech: [SiPhp, SiTailwindcss, SiJavascript, SiLaravel],
      link: "http://smkmutuharjo.com/my/courses.php",
      cover: "/gallery1.png",
      background: "bg-indigo-500",
    },
    {
      title: "Smk Muhammadiyah 1 Sukoharjo ",
      tech: [SiTailwindcss, SiJavascript, SiLaravel],
      link: "https://smkmuh1-skh.sch.id/",
      cover: "/gallery2.png",
      background: "bg-green-500",
    },
  ];

  return (
    <div className="py-8">
      <Title text="Gallery " className="flex flex-col items-center justify-center rotate-6 " />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {gallerys.map((gallery, index) => {
          return (
            <Link href={gallery.link} key={index}>
              <div className={cn("p-5 rounded-md", gallery.background)}>
                <DirectionAwareHover imageUrl={gallery.cover} className="w-full space-y-5 cursor-pointer">
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{gallery.title}</h1>
                    <div className="flex items-center gap-5">
                      {gallery.tech.map((Icon, index)=>{
                        return <Icon className="w-8 h-8" key={index}/>
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
