"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { TUserSession } from "@/types/session.user.type";


export default function NavbarWrapper({session}:{session:TUserSession}) {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith("/dashboard"); 

  return !hideNavbar ? <Navbar session={session}/> : null;
}
