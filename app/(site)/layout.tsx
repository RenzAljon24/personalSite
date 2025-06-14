import { SidebarTrigger } from "@/components/ui/sidebar"
import type React from "react"
import "../globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar"
import Footer from "@/components/Footer"
import { generateMetadata as createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Renz Cruz - Software Developer",
  description: "Discover a unique section of Renz's portfolio showcasing software engineering projects.",
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-100 min-h-screen w-full dark:bg-slate-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />

          <div className="flex min-h-[calc(100vh-4rem)] relative pt-16">
            <SidebarProvider>
              <AppSidebar />
              <main className="flex-1 w-full">{children}</main>
              <div className="fixed bottom-5 right-5 z-20 md:hidden">
                <SidebarTrigger className="text-4xl rounded-full p-5 border hover:bg-slate-700 hover:text-zinc-100 border-gray-800 bg-slate-900 dark:bg-slate-700 text-zinc-50 cursor-pointer" />
              </div>
            </SidebarProvider>
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
