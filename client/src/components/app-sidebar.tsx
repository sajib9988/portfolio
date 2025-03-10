'use client'
// import { Calendar, Home, Inbox, Search } from "lucide-react"

import {  SquareChartGantt, FileText, MessageCircle, LayoutDashboard } from "lucide-react";
import { FaHome } from "react-icons/fa";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation";
import Link from "next/link";

// Menu items.
const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard ,
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: SquareChartGantt, // Changed to Folder icon
    },
    {
      title: "Blogs",
      url: "/dashboard/blogs",
      icon: FileText, // Changed to FileText icon
    },
    {
      title: "Messages",
      url: "/dashboard/messages",
      icon: MessageCircle, // Changed to MessageCircle icon
    },
  ];

export function AppSidebar() {
   const pathname = usePathname(); 
  //  console.log(pathname,"path Name");
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <Link href={'/'} className="flex gap-2 my-2 items-center">
          <FaHome  className="w-6 h-6"/> <p className="text-2xl font-bold">Home</p>
          </Link>
          {/* <SidebarGroupLabel className="text-center text-2xl mx-auto my-3 h-auto "> </SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                key={item.title}
                className={`${item.url === pathname ? 'border text-cyan-600 bg-slate-50 dark:bg-slate-800 dark:text-cyan-400 dark:border-cyan-600' : ''}`}
              >
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
