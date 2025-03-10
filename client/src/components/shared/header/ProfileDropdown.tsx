import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signOut } from "next-auth/react";

export function ProfileDropdown({ image }: { image: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer border border-gray-300 dark:border-gray-600">
          <AvatarImage
            src={image || "https://github.com/shadcn.png"}
            alt="profile image"
          />
          <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
            Profile
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mt-4 w-56 bg-white dark:bg-black shadow-lg rounded-lg p-2">
        <DropdownMenuItem>
          <Link href="/dashboard" className="w-full">
            <Button
              variant="outline"
              className="w-full text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Dashboard
            </Button>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            onClick={() => signOut()}
            variant="destructive"
            className="w-full bg-red-500 text-white hover:bg-red-600"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
