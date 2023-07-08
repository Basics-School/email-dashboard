import { cn } from "@/utils/cn";
const PreviouseIcon = ({ className, props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn("h-6 w-6 text-white", className)}
      viewBox="0 0 24 24"
    >
      <g fill="currentColor">
        <path d="M11.596 8.303L8.165 11.63a.499.499 0 0 0 0 .74l6.63 6.43c.414.401 1.205.158 1.205-.37v-5.723l-4.404-4.404Z"></path>
        <path
          d="M16 11.293V5.57c0-.528-.791-.771-1.205-.37l-2.482 2.406L16 11.293Z"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
};

export default PreviouseIcon;
