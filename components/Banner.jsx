"use client";

import MovieContext from "@/contexts/MovieContext";
import React, { useContext } from "react";
import IMDB from "../public/images/imdb.png";
import Image from "next/image";
import Buttons from "./Buttons";

function Banner() {
  const { movie } = useContext(MovieContext);
  return (
    <header
      className="relative h-screen w-full object-contain"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="bg-gradient-to-t from-[#100F0F] via-transparent to-transparent">
        <div className="h-screen bg-gradient-to-r from-[#100F0F] via-transparent to-[#100F0F]">
          <div className="absolute top-[245px] max-w-[580px] max-h-44 px-8 ">
            <div className="mb-4 ">
              <h3 className="text-6xl font-bold text-white ">{movie?.title}</h3>
            </div>
            <div className=" flex items-center gap-1 py-4">
              <Image
                src={IMDB}
                height={40}
                width={40}
                className="object-contain"
                alt="imdb"
              />
              <p className="text-white text-sm">{movie?.vote_average} · </p>
              <p className="text-white text-sm">
                {movie?.release_date?.substring(0, 4)} ·
              </p>
              {/* <p className="text-white text-sm">9 episodes · </p> */}
              <p className="text-green-500 font-medium text-sm">
                {Math.ceil(movie?.popularity)}% match
              </p>
            </div>
            <div className="">
              <p className="text-white text-sm">{movie?.overview}</p>
            </div>
            <Buttons />
            <div className="flex gap-1 items-center text-gray-400 text-xs mt-6">
              <p className="cursor-pointer">Animation ·</p>
              <p className="cursor-pointer">Action ·</p>
              <p className="cursor-pointer">Adventure</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
