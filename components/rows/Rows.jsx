import React from "react";
import ForYou from "./ForYou";
import Originals from "./Originals";
import Watching from "./Watching";
import Trending from "./Trending";
import requests from "@/Requests";

function Rows() {
  return (
    <div className="bg-[#100F0F] px-8 w-full h-full">
      <div className="bg-gradient-to-b from-[#100F0F] via-transparent to-transparent ">
        <ForYou title="For You" fetchUrl={requests.fetchTrending} />
        <Watching
          title="Continue watching"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Originals
          title="Xmulty originals"
          fetchUrl={requests.fetchNetflixOriginals}
        />
      </div>
    </div>
  );
}

export default Rows;
