"use client"

import type React from "react"

import { Calendar, Home, Inbox, Search, Settings, ExternalLink, Github, Twitter, Linkedin } from "lucide-react"
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

// Map of icons for navigation links
const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-4 h-4" />,
  Projects: <Inbox className="w-4 h-4" />,
  Blog: <Calendar className="w-4 h-4" />,
  About: <Search className="w-4 h-4" />,
  Contact: <Settings className="w-4 h-4" />,
}

// Map of icons for social links
const socialIconMap: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-4 h-4" />,
  Twitter: <Twitter className="w-4 h-4" />,
  LinkedIn: <Linkedin className="w-4 h-4" />,
  Portfolio: <ExternalLink className="w-4 h-4" />,
}

export function AppSidebar() {
  const links = navLinks()
  const social = socialLinks()
  const currentLink = usePathname()

  return (
    <>
      <Sidebar className="block md:hidden">
        <SidebarContent className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
          <div className="py-4 px-2">
            <SidebarGroup>
              <SidebarGroupLabel className="px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
                EXPLORE
              </SidebarGroupLabel>
              <SidebarGroupContent className="border-b border-slate-200 dark:border-slate-700 pb-4 mt-2">
                <SidebarMenu>
                  {links.map((link) => {
                    const isActive = link.href === currentLink
                    return (
                      <SidebarMenuItem key={link.label}>
                        <SidebarMenuButton asChild>
                          <Link
                            href={link.href}
                            className={`
                              flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                              ${
                                isActive
                                  ? "bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400"
                                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                              }
                            `}
                          >
                            <span className="flex items-center justify-center">
                              {iconMap[link.label] || <ExternalLink className="w-4 h-4" />}
                            </span>
                            <span className="font-mono">{link.label}</span>
                            {isActive && (
                              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400"></span>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>

              <SidebarGroupLabel className="px-4 mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
                CONNECT
              </SidebarGroupLabel>
              <SidebarGroupContent className="mt-2">
                <SidebarMenu>
                  {social.map((socials) => (
                    <SidebarMenuItem key={socials.label}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={socials.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="flex items-center justify-center">
                            {socialIconMap[socials.label] || <ExternalLink className="w-4 h-4" />}
                          </span>
                          <span className="font-mono">{socials.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-base">RC</span>
              </div>
              <div>
                <span className="font-bold text-xl text-slate-900 dark:text-white">RARC</span>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  © {new Date().getFullYear()} 
                </div>
              </div>
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
    </>
  )
}
