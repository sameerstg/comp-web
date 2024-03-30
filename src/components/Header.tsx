"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      name: "Services",
      url: "/services",
    },
    {
      id: 4,
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    //    header {
    //         position: relative;
    //         display: flex;
    //         align-items: center;
    //         justify-content: space-between;
    //         height: 100%;
    //         padding: 0 50px;
    //     }

    // #TODO: track scroll position and add shadow to header when scrolled down
    <motion.header
      className="min-h-[70px] h-[70px] fixed top-0 w-[100%] z-10 backdrop-blur-sm backdrop-filter
    backdrop-saturate-150"
    >
      <div className="relative flex items-center justify-between h-[100%] container">
        <h1 className="text-primary text-2xl font-bold">
          <Link href="/">Thook</Link>
        </h1>
        {/* <ModeToggle /> */}
        {/* <ThemeToggle /> */}
        <nav className="flex items-center space-x-5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={`${
                pathname === item.url
                  ? "text-primary/100 font-bold underline underline-offset-8"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}

          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
}
