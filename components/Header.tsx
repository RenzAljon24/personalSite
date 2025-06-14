'use client'
import React from 'react'
import Link from 'next/link'
import navLinks from './ui/Nav'
import {usePathname} from 'next/navigation'
import { ModeToggle } from './ui/Toggle'

const Header = () => {

  //current-page-indicator
  const currentPath = usePathname();
  //page-links(hyperlinks)
  const link = navLinks();


  return (
    <header className='fixed top-0 w-full bg-white/30 backdrop-blur-md  p-5  dark:bg-slate-900 dark:shadow-none z-10'>
      <div className='flex justify-between mx-5 md:mx-20 p-2'>
          <div className='pt-1'>
              <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">RC</span>
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white">RARC</span>
            </Link>
          </div>
          <div className='flex items-center text-center space-x-5 '>
            {/* navigation links */}
            
            {link.map((links, index)=>
              <li className='hidden md:block' key={index}>
                <Link className={`${links.href === currentPath ? 'text-teal-300 underline underline-offset-2 dark:text-teal-300' : 'text-zinc-800 dark:text-zinc-400'} `} href={links.href}>{links.label}</Link>
              </li>)}

              
              {/* Contact Me button with mailto */}
              <a href="mailto:renzcruz.dev@gmail.com">
                <button className='border border-slate-800 rounded-md p-2 dark:border-zinc-500 font-mono'>
                  Contact Me
                </button>
              </a>

              {/* darkmode_toggle  */}
              <div><ModeToggle/></div>
            
          </div>
      </div>

    </header>
  )
}

export default Header