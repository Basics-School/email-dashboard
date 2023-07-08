"use client";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import React from "react";
import InboxIcon from "../icons/inbox-icon";
import StarredIcon from "../icons/starred-icon";
import SentIcon from "../icons/sent-icon";
import DraftIcon from "../icons/draft-icon";
import AttachmentIcon from "../icons/attachment-icon";
import SpamIcon from "../icons/spam-icon";
import DeletedIcon from "../icons/deleted-icon";
import ArchivedIcon from "../icons/archived-icon";
import ComposeIcon from "../icons/compose-icon";
import { cn } from "@/utils/cn";

const NavLinks = () => {
  const navLinks = [
    { title: "compose", icon: ComposeIcon, link: "/compose"},
    { title: "inbox", icon: InboxIcon, link: "/", count: 518 },
    { title: "starred", icon: StarredIcon, link: "/?key=starred", count: 10 },
    { title: "sent", icon: SentIcon, link: "/?key=sent", count: 213 },
    { title: "draft", icon: DraftIcon, link: "/?key=draft", count: 16 },
    {
      title: "attachment",
      icon: AttachmentIcon,
      link: "/?key=attachment",
      count: 105,
    },
    { title: "spam", icon: SpamIcon, link: "/?key=spam" },
    {
      title: "deleted",
      icon: DeletedIcon,
      link: "/?key=deleted",
      count: 55,
    },
    {
      title: "archived",
      icon: ArchivedIcon,
      link: "/?key=archived",
      count: 518,
    },
  ];
  const pathname = usePathname();
  const params = useSearchParams();

  const key = params.get("key");
  return (
    <div className="flex flex-col w-full gap-y-2">
      {navLinks.map((i) => (
        <Link
          className={cn(
            "flex p-2 flex-row text-sm justify-between w-full items-center rounded-md overflow-clip group hover:text-gray-800 hover:bg-green-400 hover:scale-105 transition-all duration-300 ease-out text-gray-400",
            key == i.title && "bg-green-400 text-gray-800 scale-105",
            i.title == "inbox" &&
              !key &&
              pathname == "/" &&
              "bg-green-400 text-gray-800 scale-105",
            i.title == "compose" &&
              pathname == "/compose" &&
              "bg-green-400 text-gray-800 scale-105"
          )}
          href={i.link}
          key={i.title}
        >
          <div className="flex gap-6">
            <i.icon
              className={cn(
                "text-gray-400 group-hover:text-blue-700 h-5 w-5",
                key == i.title && " text-blue-600"
              )}
            />
            <p className="hidden lg:block capitalize ">{i.title}</p>
          </div>

          <p className="hidden lg:block">{i.count}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
