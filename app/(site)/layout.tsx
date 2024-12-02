import '../globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar';


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
        url: 'https://og-image-luigircruz.vercel.app/renzcruz.dev.png?theme=dark&packageManager=&packageName=&pattern=overlappingCircles&style=style_1&description=Software+Developer&md=1&showWatermark=0&fontSize=200px&images=thumb-up',
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
      'https://og-image-luigircruz.vercel.app/renzcruz.dev.png?theme=dark&packageManager=&packageName=&pattern=overlappingCircles&style=style_1&description=Software+Developer&md=1&showWatermark=0&fontSize=200px&images=thumb-up',
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

              <SidebarTrigger className='fixed bottom-5 right-5 text-4xl rounded-full p-5 border hover:bg-slate-700 hover:text-zinc-100 border-gray-800 bg-slate-900 dark:bg-slate-800 text-zinc-50 md:hidden z-20 cursor-pointer '/>
    
          </SidebarProvider>
          <main>
           
              {children}
           
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
