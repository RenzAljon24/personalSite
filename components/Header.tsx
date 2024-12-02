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
          <div>
              <h1 className='text-2xl text-center p-2 sm:pt-2'>RARC</h1>
          </div>
          <div className='flex items-center text-center space-x-5 '>
            {/* navigation links */}
            
            {link.map((links, index)=>
              <li className='hidden md:block' key={index}>
                <Link className={`${links.href === currentPath ? 'text-teal-300 underline underline-offset-2 dark:text-teal-300' : 'text-zinc-800 dark:text-zinc-400'} `} href={links.href}>{links.label}</Link>
              </li>)}

              
              {/* Contact Me button with mailto */}
              <a href="mailto:rc4317809@gmail.com">
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