import { cn } from "@/lib/utils";

const ReplyIcon = ({ className, props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn("h-6 w-6 text-white", className)}
      viewBox="0 0 24 24"
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10.03 6.47a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 0 1.06l5 5a.75.75 0 1 0 1.06-1.06L5.56 12l4.47-4.47a.75.75 0 0 0 0-1.06Z"
          clipRule="evenodd"
        ></path>
        <path
          d="M6.31 11.25h8.19c.953 0 2.367.28 3.563 1.141c1.235.89 2.187 2.365 2.187 4.609a.75.75 0 0 1-1.5 0c0-1.756-.715-2.78-1.563-3.391c-.887-.639-1.974-.859-2.687-.859H6.31L5.56 12l.75-.75Zm-2.503.463Z"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
};

export default ReplyIcon;
