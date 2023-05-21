"use client";

import React, { useEffect, useState } from "react";
import Poster from "../../public/images/poster.jpg";
import IMDB from "../../public/images/imdb.png";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import axios from "../../axios";

function ForYou({ title, fetchUrl }) {
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

  console.log(movies);

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-white text-lg">{title}</h3>
        <div className="cursor-pointer">
          <p className="text-sm text-slate-500">Explore All</p>
        </div>
      </div>

      <div className="flex items-center overflow-scroll scrollbar-hide h-[230px] w-full">
        <div className="flex space-x-4 items-center">
          {movies.map((movie) => (
            <div
              key={movie?.id}
              className="relative hover:scale-105 transition ease-in-out duration-150 flex items-center w-[270px] h-[190px] cursor-pointer "
            >
              <div className="absolute w-[270px] h-[190px]">
                <Image
                  src={`${baseUrl}${movie?.backdrop_path}`}
                  alt="backdrop"
                  height={190}
                  width={270}
                  className="h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-2 absolute w-full h-full">
                <div className=" ">
                  <div className="mt-20 flex items-center justify-between">
                    <div className="max-w-[160px]">
                      <p className="text-white font-semibold leading-5 text-sm">
                        {movie?.title || movie?.name}
                      </p>
                    </div>
                    <div className="bg-white h-5 w-5 bg-opacity-20 rounded-full cursor-pointer">
                      <PlusSmallIcon className="h-5 w-5 text-white " />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[150px]">
                  <div className="flex items-center gap-2 ">
                    <Image
                      src={IMDB}
                      height={40}
                      width={40}
                      className="object-contain"
                      alt="imdb"
                    />
                    <p className="text-white text-xs">
                      {movie?.vote_average?.toFixed(1)} ·
                    </p>
                    <p className="text-white text-xs">
                      {movie?.release_date?.substring(0, 4)} ·
                    </p>
                    <p className="text-white text-xs">2h 20m · </p>
                    <p className="text-green-500 font-semibold text-xs">
                      87% match
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ForYou;
