import { cn } from "@/lib/utils";

const DropIcon = (className, props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn("h-6 w-6 text-green-600", className)}
      viewBox="0 0 24 24"
    >
      <g fill="currentColor">
        <path
          d="M22 16v-1c0-2.829 0-4.242-.879-5.121C20.242 9 18.828 9 16 9H8c-2.83 0-4.243 0-5.122.88C2 10.757 2 12.17 2 14.998V16c0 2.828 0 4.242.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.242 22 18.828 22 16Z"
          opacity=".5"
        ></path>
        <path
          fillRule="evenodd"
          d="M12 15.75a.75.75 0 0 0 .75-.75V4.027l1.68 1.961a.75.75 0 1 0 1.14-.976l-3-3.5a.75.75 0 0 0-1.14 0l-3 3.5a.75.75 0 1 0 1.14.976l1.68-1.96V15c0 .414.336.75.75.75Z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export default DropIcon;
