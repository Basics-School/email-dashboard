"use client";
import Link from "next/link";
import React from "react";
import FilterIcon from "../icons/filter-icon";
import SearchIcon from "../icons/search-icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import BackIcon from "../icons/back-icon";
import { useRouter } from "next/navigation";
import { DialogTrigger } from "../ui/dialog";
import { CommandInput } from "../ui/command";

const SearchMenu = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-4">
      <button onClick={() => router.back()}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <BackIcon className=" hidden lg:block p-px cursor-pointer rounded text-green-600 hover:bg-green-300/20 hover:text-green-300" />
            </TooltipTrigger>
            <TooltipContent className="text-xs bg-gray-700/50 border-none text-white">
              <p>go back</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </button>
      <div className=" flex  flex-row focus:ring-1 ring-offset-blue-600 border border-zinc-800 items-center px-2 rounded-md bg-zinc-900">
        <SearchIcon className={"text-gray-700 h-5 w-5"} />
        <CommandInput
          className="bg-transparent  outline-none px-3 lg:py-2 py-1 text-white"
          type="text"
          name=""
          id=""
          placeholder="Search email"
        />
        <FilterIcon
          className={
            " bg-zinc-800 p-px rounded text-green-800 hover:text-green-400 cursor-pointer"
          }
        />
      </div>
      <DialogTrigger asChild>
        <Link
          href={"/compose"}
          className="bg-white/80 hover:bg-blue-600 group h-10 cursor-pointer w-10 p-1 flex items-center justify-center rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black group-hover:text-white"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"
                opacity=".5"
              ></path>
              <path d="m17.3 2.806l-.648.65l-5.965 5.964c-.404.404-.606.606-.78.829c-.205.262-.38.547-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9l-.374 1.123a.742.742 0 0 0 .94.939l1.122-.374l1.735-.579c.542-.18.813-.27 1.068-.392c.301-.144.586-.32.848-.524c.223-.174.425-.376.83-.78l5.964-5.965l.649-.649A2.753 2.753 0 0 0 17.3 2.806Z"></path>
              <path
                d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588L8.413 13.9"
                opacity=".5"
              ></path>
            </g>
          </svg>
        </Link>
      </DialogTrigger>
    </div>
  );
};

export default SearchMenu;
