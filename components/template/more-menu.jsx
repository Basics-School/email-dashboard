import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import MoreIcon from "../icons/more-icon";

const MoreMenu = () => {
  return (
    <DropdownMenu>
      <TooltipProvider>
        {" "}
        <Tooltip>
          <TooltipTrigger>
            <DropdownMenuTrigger asChild>
              <MoreIcon className="hidden lg:block p-px cursor-pointer rounded text-green-600 hover:text-green-300" />
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent className="text-xs bg-gray-700/50 border-none text-white">
            <p>more</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent
        className="w-56 bg-zinc-800 border-zinc-700 text-gray-300"
        align="end"
        forceMount
      >
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreMenu;
