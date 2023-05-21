"use client";

import {
  ArrowDownTrayIcon,
  HandThumbUpIcon,
  PlusSmallIcon,
  PlayPauseIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

import { PlayIcon } from "@heroicons/react/24/solid";

const Buttons = () => {
  return (
    <div className="flex items-center space-x-2 mt-8">
      <div className="bg-black bg-opacity-70 p-2 rounded-full cursor-pointer">
        <HandThumbUpIcon className="h-5 w-5 text-white" />
      </div>
      <div className="bg-white py-[6px] px-2 rounded-full flex gap-1 justify-center items-center w-[120px] cursor-pointer ">
        <PlayIcon className="h-4 w-4" />
        <p className="font-medium text-sm text-black">Watch now</p>
      </div>
      <div className="bg-black opacity-70 p-2 rounded-full cursor-pointer">
        <HandThumbUpIcon className="h-5 w-5 text-white" />
      </div>
      <div className="bg-black opacity-70 p-2 rounded-full cursor-pointer">
        <PlusSmallIcon className="h-5 w-5 text-white" />
      </div>
      <div className="bg-black bg-opacity-70 p-2 rounded-full cursor-pointer">
        <BookmarkIcon className="h-5 w-5 text-white" />
      </div>
      <div className="bg-black opacity-70 p-2 rounded-full cursor-pointer">
        <PlayPauseIcon className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};

export default Buttons;
