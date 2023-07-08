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
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { fakeData } from "@/lib/data";
import Link from "next/link";
import LogOutIcon from "../icons/logout-icon";
import UserPlusIcon from "../icons/userplus-icon";
const UserMenu = () => {
  const users = fakeData.users;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Avatar className="h-5 w-5 text-xs ">
          {/* <AvatarImage src="/avatars/01.png" alt="@shadcn" /> */}
          <AvatarFallback>KS</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="max-w-xs bg-zinc-800 border-zinc-600"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal flex gap-2">
          <Avatar className="h-6 w-6 text-xs ">
            {/* <AvatarImage src="/avatars/01.png" alt="@shadcn" /> */}
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-gray-300 ">
              ktisakib{" "}
            </p>
            <p className="text-xs leading-none text-gray-500">m@example.com</p>
            <Link href="/" className="text-blue-600">
              Manage your account
            </Link>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {users.map((user) => {
            const shortName = user.username
              .split(" ")
              .map((n) => n[0])
              .join("");
            // console.log(shortName);
            return (
              <DropdownMenuItem
                key={user.user_id}
                className="flex flex-row gap-2"
              >
                <Avatar className="h-6 w-6 text-xs ">
                  <AvatarFallback className="text-black">
                    {shortName}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-1">
                  <h1 className="text-sm font-medium leading-none text-gray-300 ">
                    {user.username}
                  </h1>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
                <DropdownMenuShortcut></DropdownMenuShortcut>
              </DropdownMenuItem>
            );
          })}

          <DropdownMenuItem className="flex flex-row gap-2">
            <UserPlusIcon className="text-gray-300" />
            <p className="text-gray-300">Add another account</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="border-zinc-800" />
        <DropdownMenuItem>
          <div className="flex flex-row gap-2 text-gray-300">
            <LogOutIcon />
            <p className="text-gray-300">Log out</p>
          </div>

          <DropdownMenuShortcut className={"text-gray-300"}>
            ⇧⌘Q
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
