import { cn } from "@/utils/cn";
import React from "react";

const Plus = ({ className, props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
    >
      <g fill="currentColor">
        <path
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"
          opacity=".5"
        ></path>
        <path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"></path>
      </g>
    </svg>
  );
};

export default Plus;
