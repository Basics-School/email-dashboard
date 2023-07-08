import { cn } from "@/utils/cn";
const NextIcon = ({ className, props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn("h-6 w-6 text-white", className)}
      viewBox="0 0 24 24"
    >
      <g fill="currentColor">
        <path d="m12.404 8.303l3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723l4.404-4.404Z"></path>
        <path
          d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406L8 11.293Z"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
};

export default NextIcon;
