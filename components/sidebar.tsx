'use client'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import navLinks from "./ui/Nav"
import socialLinks from "./ui/Social"
import { usePathname } from "next/navigation"
import Link from "next/link"
//


export function AppSidebar() {
  const links = navLinks()
  const social = socialLinks();
  const currentLink = usePathname();
  
  return (
    <>
      <Sidebar className="block md:hidden">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="mt-5">EXPLORE:</SidebarGroupLabel>
            <SidebarGroupContent className="border-b  border-b-slate-500 pb-5">
              <SidebarMenu className="font-mono">
                {links.map((link) => (
                  <SidebarMenuItem className="" key={link.label}>
                    <SidebarMenuButton asChild>
                      <Link className={`p-5  ${link.href === currentLink ? 'text-teal-700 underline dark:text-teal-500' : 'text-gray-600 dark:text-gray-400'}`} href={link.href}>
                        <span>{link.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarGroupLabel className="mt-5">Social Links:</SidebarGroupLabel>
            <SidebarGroupContent className="">
              <SidebarMenu className="font-mono">
                {social.map((socials) => (
                  <SidebarMenuItem key={socials.label}>
                    <SidebarMenuButton asChild>
                      <Link className="p-5 text-gray-600 dark:text-slate-400" href={socials.href}>
                        <span>{socials.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  )
}
