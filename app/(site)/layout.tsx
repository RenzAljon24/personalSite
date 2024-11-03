import '../globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar';
import { Suspense } from 'react';
import Loading from './Loading';
import Footer from '@/components/Footer';




export const metadata = {
  title: 'Renz - Software Developer',
  description: 'Discover a unique section of Renz’s portfolio showcasing software engineering projects.',
  openGraph: {
    title: 'Renz - Software Developer',
    description: 'A unique section of Renz.dev portfolio showcasing software engineering projects.',
    url: 'https://renz-site.vercel.app',
    images: [
      {
        url: 'https://og-image-luigircruz.vercel.app/Renz.Dev.png?theme=light&packageManager=&packageName=&pattern=architect&style=style_1&description=Frontend+Software+Engineer&md=1&showWatermark=0&fontSize=100px&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI%2BCiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8%2BCiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8%2BCiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8%2BCiAgPC9nPgo8L3N2Zz4K%27',
        width: 1200,
        height: 630,
        alt: ' - Preview Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renz - Software Developer',
    description: 'Discover a unique section of Renz’s portfolio showcasing software engineering projects.',
    images: [
      'https://og-image-luigircruz.vercel.app/Renz.Dev.png?theme=light&packageManager=&packageName=&pattern=architect&style=style_1&description=Frontend+Software+Engineer&md=1&showWatermark=0&fontSize=100px&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI%2BCiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8%2BCiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8%2BCiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8%2BCiAgPC9nPgo8L3N2Zz4K%27',
    ],
  },
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 

  return (
    <html lang="en">
      <body className="bg-zinc-100 h-full w-full dark:bg-slate-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SidebarProvider>
            <AppSidebar />
            {/* Ensure the button is rendered consistently */}

              <SidebarTrigger className='fixed bottom-5 right-5 text-4xl rounded-full p-5 border border-gray-800 bg-slate-900 dark:bg-slate-800 text-zinc-50 md:hidden z-20 cursor-pointer '/>
    
          </SidebarProvider>
          <main>
            <Suspense fallback ={<Loading/>}>
              {children}
            </Suspense>
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
