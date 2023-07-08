import { cn } from "@/utils/cn";

const HelpIcon = ({ props, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6 text-white", className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor">
        <path
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"
          opacity=".5"
        ></path>
        <path d="M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829c-.092.095-.18.183-.264.267a6.666 6.666 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814c.07-.07.136-.135.193-.194A1.125 1.125 0 0 0 12 7.75ZM12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></path>
      </g>
    </svg>
  );
};

export default HelpIcon;
