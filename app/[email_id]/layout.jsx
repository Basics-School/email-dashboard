"use client";
import ArchivedIcon from "@/components/icons/archived-icon";
import ArrowIcon from "@/components/icons/arrow-icon";
import BackIcon from "@/components/icons/back-icon";
import DeletedIcon from "@/components/icons/deleted-icon";
import ForwardIcon from "@/components/icons/forward-icon";
import MoreIcon from "@/components/icons/more-icon";
import NextIcon from "@/components/icons/next-icon";
import PreviouseIcon from "@/components/icons/previouse-icon";
import PrinterIcon from "@/components/icons/printer-icon";
import ReplyIcon from "@/components/icons/reply-icon";
import StartsIcon from "@/components/icons/starts-icon";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const EmailLayout = ({ children }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="max-w-6xl w-full relative flex flex-col h-full  ">
      <div>
        <div className="border-b border-zinc-800 px-3 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="text-zinc-500 hover:text-zinc-200 transition"
            >
              <BackIcon />
            </button>
            <button className="text-zinc-500 hover:text-zinc-200 transition">
              <ArchivedIcon className={"h-4 w-4"} />
            </button>
            <button className="text-zinc-500 hover:text-zinc-200 transition">
              <DeletedIcon className={"h-4 w-4"} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-zinc-500 cursor-pointer inline-flex items-center hover:text-zinc-200 transition">
              <Link href={`${parseInt(params.email_id) - 1}`}>
                <PreviouseIcon className={"text-zinc-300"} />
              </Link>
            </button>
            <div className="text-xs text-zinc-400">
              {params.email_id} of 100
            </div>
            <button className="text-zinc-200 inline-flex hover:text-zinc-200 transition">
              <Link href={`${parseInt(params.email_id) + 1}`}>
                <NextIcon className={"text-zinc-300"} />
              </Link>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-zinc-500 hover:text-zinc-200 transition">
              <PrinterIcon className={"text-zinc-300 h-4 w-4 "} />
            </button>
            <button className="text-zinc-500 hover:text-zinc-200 transition">
              <ArrowIcon className={"text-zinc-300 h-4 w-4"} />
            </button>
            <button className="text-zinc-500 hover:text-zinc-200 transition">
              <MoreIcon className={"h-4 w-4"} />
            </button>
          </div>
        </div>
      </div>
      {children}
      <div className=" w-full relative justify-self-end bg-zinc-900/50  h-32 flex items-start pt-4 px-4 text-zinc-300 justify-between">
        <div className="flex items-center gap-5">
          <button className="text-sm flex items-center gap-2">
            <ReplyIcon className={"h-4 w-4"} /> <span>Reply</span>
          </button>
          <button className="text-sm flex items-center gap-2">
            <ForwardIcon className={"h-4 w-4"} /> <span>Forward</span>
          </button>
        </div>
        <button className="text-sm  flex items-center gap-2">
          <StartsIcon className={"h-5 w-6 text-amber-400"} />
          <span className="sr-only">Favorite</span>
        </button>
      </div>
    </div>
  );
};

export default EmailLayout;
