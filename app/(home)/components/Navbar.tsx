import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiYoutube } from "react-icons/si";

export default function Navbar({className}:{className?: string}) {
  const socials = [
    {
      Link: "",
      Label: "Instagram",
      Icon: SiInstagram,
    },

    {
      Link: "",
      Label: "Youtube",
      Icon: SiYoutube,
    },

    {
      Link: "",
      Label: "Facebook",
      Icon: SiFacebook,
    },
  ];

  // const nav = [
  //   {
  //     Link: "",
  //     Label: "Home",
  //   },
  //   {
  //     Link: "",
  //     Label: "Price",
  //   },
  //   {
  //     Link: "",
  //     Label: "Gallery",
  //   },
  //   {
  //     Link: "",
  //     Label: "Contact",
  //   },
  // ]

  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="text-2xl font-bold underline underline-offset decoration-blue-500 -rotate-2">
        <img src="/assets/solution-r.png" alt="logo" className="w-24"/>
        </h1>

      <div className="flex items-center gap-5 text-gray-950">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link 
            
                href={social.Link} 

                key={index} 
                
                aria-label={social.Label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
