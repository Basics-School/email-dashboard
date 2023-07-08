import { cn } from "@/utils/cn";
import React from "react";

const MenuIcon = ({ props, className }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8 text-white cursor-pointer", className)}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path d="M20 7H4"></path>
        <path d="M20 12H4" opacity=".5"></path>
        <path d="M20 17H4"></path>
      </g>
    </svg>
  );
};

export default MenuIcon;
