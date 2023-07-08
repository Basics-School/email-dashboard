import NavLinks from "../ui/nav-links";
import Link from "next/link";
import Logo from "../ui/logo";
import MenuIcon from "../icons/menu-icon";
import { cn } from "@/lib/utils";

const SideMenu = () => {
  return (
    <>
      <aside
        className={cn(
          "max-w-[260px] flex flex-col group/main h-full items-start relative z-30  lg:w-full"
        )}
      >
        <header className="h-[60px] shrink-0  w-full border-r  border-zinc-800   px-5 bg-neutral-900 flex items-center justify-between ">
          <Link href="/" className="flex items-center  gap-3">
            <Logo className={"h-6 w-6 lg:h-8 lg:w-8"} />
            <p className="text-white font-semibold text-3xl hidden lg:block">
              Kmail
            </p>
          </Link>
          <MenuIcon className="hidden lg:block hover:bg-green-900 p-px cursor-pointer rounded text-green-400 hover:text-green-300 " />
        </header>
        <div className="h-full  w-full overflow-y-scroll scrollbar-w-1 scrollbar group-hover/main:scrollbar-thumb-zinc-800 scrollbar-thumb-rounded-full  lg:py-10 border-r border-zinc-800   flex flex-col p-4 ">
          <NavLinks />
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
