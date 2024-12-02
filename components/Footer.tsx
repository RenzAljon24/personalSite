import navLinks from "./ui/Nav";
import Link from "next/link";

import socialLinks from "./ui/Social";
export default function Footer() {
    const navLink = navLinks();
    const social = socialLinks()
  return (
    <footer className=" text-zinc-500 dark:text-zinc-50 font-serif px-5 md:px-32">
        <ul className="flex flex-col gap-y-5 py-10 text-center border-t dark:border-t-gray-600">
            {navLink.map((link, index)=>
            <Link className="hover:bg-slate-200 rounded-md dark:hover:bg-slate-700" key={index} href={link.href}>{link.label}</Link>)}
        </ul>
        <ul className="flex flex-col gap-y-5 py-10 text-center border-t dark:border-t-gray-600">
            {social.map((socials, index)=>
            <Link className="hover:bg-slate-200 rounded-md dark:hover:bg-slate-700" key={index} href={socials.href}>{socials.label}</Link>)}
        </ul>
        <div className="text-center border-t dark:border-t-gray-600 text-zinc-500 dark:text-zinc-50 font-serif p-3  ">
        <h1>Copyright © {new Date().getFullYear()} - Renz Aljon Cruz</h1>

        </div>
    </footer>
  )
}