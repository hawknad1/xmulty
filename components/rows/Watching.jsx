"use client";

import React, { useEffect, useState } from "react";
import Poster from "../../public/images/poster.jpg";
import IMDB from "../../public/images/imdb.png";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import axios from "../../axios";

function Watching({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h3 className="text-white text-lg">{title}</h3>
        <div className="cursor-pointer">
          <p className="text-sm text-slate-500">Explore All</p>
        </div>
      </div>
      <div className="flex items-center overflow-scroll scrollbar-hide h-[230px] w-full">
        <div className="flex space-x-4 items-center  [&>*:nth-child(2)]:w-[350px] [&>*:nth-child(2)]:bg-white">
          {movies.map((movie) => (
            <div
              key={movie?.id}
              className="relative  hover:scale-105 transition ease-in-out duration-150 flex items-center w-[270px] h-[190px] cursor-pointer "
            >
              <div className="absolute  w-[270px] h-[190px]">
                <Image
                  src={`${baseUrl}${movie?.backdrop_path}`}
                  alt="backdrop"
                  height={190}
                  width={270}
                  className="h-full object-cover  rounded-lg"
                />
              </div>
              <div className="p-2 absolute w-full h-full">
                <div className=" ">
                  <div className="mt-24 flex items-center justify-between">
                    <div className="max-w-[160px] ">
                      <p className="text-white font-light leading-5 text-xs">
                        Episode 3
                      </p>
                      <p className="text-white font-normal leading-5 text-base">
                        {movie?.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watching;

// flex space-x-3 items-center
