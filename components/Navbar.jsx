"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Avatar from "../public/images/placeholder.jpg";
import Xm from "../public/images/xm.png";

import {
  BellIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-10 w-full p-4 flex items-center justify-between ${
        show && "bg-black bg-opacity-70"
      }  transition-all h-16`}
    >
      <div>
        <Image
          alt="logo"
          src={Xm}
          height={150}
          width={150}
          className="object-contain"
        />
      </div>
      <div className="hidden md:flex md:gap-4">
        <Link href="/" className="text-sm font-medium text-gray-200">
          Home
        </Link>
        <Link href="/tshows" className="text-sm font-medium text-gray-200">
          TV Shows
        </Link>
        <Link href="/movies" className="text-sm font-medium text-gray-200">
          Movies
        </Link>
        <Link href="/new" className="text-sm font-medium text-gray-200">
          New & Popular
        </Link>
        <Link href="/mylist" className="text-sm font-medium text-gray-200">
          My List
        </Link>
        <Link href="/collections" className="text-sm font-medium text-gray-200">
          Collections
        </Link>
        <Link href="/friends" className="text-sm font-medium text-gray-200">
          Friends
        </Link>
      </div>
      <div className="flex items-center gap-[5px]">
        <div className="md:h-8 md:w-8 hidden md:flex rounded-full justify-center items-center  cursor-pointer bg-black opacity-60 p-2">
          <div>
            <BellIcon className="h-5 w-5 text-white " />
          </div>
        </div>
        <div className="h-8 w-8 cursor-pointer rounded-full bg-black opacity-60 p-2 flex justify-center items-center ">
          <div>
            <MagnifyingGlassIcon className="h-5 w-5 text-white " />
          </div>
        </div>
        <div className="hidden md:flex">
          <Image
            alt="avatar"
            src={Avatar}
            height={30}
            width={30}
            className="object-contain rounded-full cursor-pointer"
          />
        </div>

        <div
          onClick={() => {
            setMenu((prev) => !prev);
          }}
        >
          <Bars3Icon className="h-8 w-8 md:hidden cursor-pointer text-white rounded-full bg-black opacity-40 p-1" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
