"use client";
import React from "react";
import StartsIcon from "../icons/starts-icon";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Link from "next/link";
import { fakeData } from "@/lib/data";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { CommandEmpty, CommandGroup, CommandItem } from "../ui/command";

const EmailList = () => {
  const params = useParams();
  const emails = fakeData.emails;
  const users = fakeData.users;
  return (
    <CommandGroup
            className={cn(
        " relative  w-full overflow-y-scroll scrollbar-w-1 scrollbar scrollbar-thumb-zinc-600 scrollbar-thumb-rounded-full  border-r border-zinc-800   flex flex-col  "
      )}
    >
       <CommandEmpty className="text-zinc-200 text-lg text-center py-4">No email found.</CommandEmpty>
      {emails.map((email) => (
        <CommandItem key={email.email_id} className="w-full relative  ">
          <Link
            href={`${email.email_id}`}
            className={cn(
              "flex items-center hover:bg-zinc-600 text-zinc-200 justify-between w-full px-4 py-2 border-b border-zinc-800",
              params.email_id == email.email_id && "bg-zinc-600"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8">
                <Avatar>
                  <AvatarFallback className="bg-green-600">
                    {users
                      .find((user) => user.user_id == email.sender_id)
                      ?.username.split(" ")
                      .map((n) => n[0])
                      .join("")}{" "}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col">
                {
                  users.find((user) => user.user_id == email.sender_id)
                    ?.username
                }
                <p className="text-xs">{email.subject}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs">{email.time}</p>
              <StartsIcon className="w-5 h-5 hover:h-6 hover:w-6 hover:text-yellow-400" />
            </div>
          </Link>
        </CommandItem>
      ))}
    </CommandGroup>
  );
};

export default EmailList;
