import { cn } from "@/utils/cn";
import React from "react";

const SearchIcon = ({ className, props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6 text-white", className)}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11.5" cy="11.5" r="9.5"></circle>
        <path strokeLinecap="round" d="M18.5 18.5L22 22"></path>
      </g>
    </svg>
  );
};

export default SearchIcon;
