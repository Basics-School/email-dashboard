import { cn } from "@/utils/cn";
const ArrowIcon = ({ className, props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn("h-6 w-6 text-white", className)}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 18L18 6m0 0H9m9 0v9"
      ></path>
    </svg>
  );
};

export default ArrowIcon;
