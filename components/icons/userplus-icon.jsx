import { cn } from "@/lib/utils";
import React from "react";

const UserPlusIcon = ({ props, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5 text-white ", className)}
      {...props}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="6" r="4"></circle>
        <path
          strokeLinecap="round"
          d="M21 10h-2m0 0h-2m2 0V8m0 2v2m-1.003 6c.003-.164.003-.331.003-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S2 22 10 22c2.231 0 3.84-.157 5-.437"
        ></path>
      </g>
    </svg>
  );
};

export default UserPlusIcon;
