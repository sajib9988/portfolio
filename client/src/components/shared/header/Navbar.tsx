"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ProfileDropdown } from "./ProfileDropdown";
import { ModeToggle } from "@/components/ModeToggle";
import LoginButton from "@/components/auth/Login";
import { TUserSession } from "@/types/session.user.type";

const menuList = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "PROJECTS", link: "/projects" },
  { id: 3, name: "BLOGS", link: "/blog" },
  { id: 4, name: "CONTACT", link: "/contact" },
];

const Navbar = ({ session }: { session: TUserSession }) => {
  const isUser = session?.user;
  const pathname = usePathname(); // Get current route

  return (
    <header className="py-4 sticky top-0 z-50 bg-white dark:bg-black shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        {/* Left Side - Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-cyan-400  "
        >
         Sajib 
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6 font-bold">
            {menuList.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>
                  <span
                    className={`cursor-pointer transition-all duration-300 ${
                      pathname === item.link
                        ? "text-cyan-500 dark:text-cyan-400"
                        : "text-gray-800 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side - Profile & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-5">
          {isUser ? (
            <>
              <ProfileDropdown image={session?.user?.image as string} />
              <ModeToggle />
            </>
          ) : (
            <>
              <LoginButton />
              <ModeToggle />
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex gap-3">
          <Sheet>
             {/* Mobile Profile & Theme Toggle */}
             <div className=" flex gap-4">
                {isUser ? (
                  <ProfileDropdown image={session?.user?.image as string} />
                ) : (
                  <LoginButton />
                )}
                <ModeToggle />
              </div>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-5 text-black dark:text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-white dark:bg-black text-black dark:text-white">
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold">
                  ROYAL KNIGHT
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Menu List */}
              <ul className="mt-6 flex flex-col font-semibold gap-4">
                {menuList.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>
                      <span
                        className={`block py-2 px-4 rounded-lg transition-all ${
                          pathname === item.link
                            ? "bg-red-500 text-white"
                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Profile & Theme Toggle */}
              <div className="mt-6 flex flex-col gap-4">
                {isUser ? (
                  <ProfileDropdown image={session?.user?.image as string} />
                ) : (
                  <LoginButton />
                )}
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
