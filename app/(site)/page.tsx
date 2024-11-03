
import { formatDate } from "@/lib/utils";
import { getLatestProjects } from "@/sanity/sanity-utils";

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


export default async function Home() {
  const projects = await getLatestProjects();

  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-8 mt-28">
      <header className="flex flex-col mb-12 sm:mb-16 font-mono">
        <p className="text-base prose text-red-500 dark:text-red-400">Hello, I&apos;m</p>
        <h1 className="mb-1 text-5xl font-bold tracking-normal sm:text-7xl sm:mb-4 text-teal-800 dark:text-teal-600">
            Renz Aljon Cruz
        </h1>
        <h2 className="text-2xl prose sm:text-4xl text-slate-500 dark:text-slate-200">I&apos;m a Frontend Software Engineer.</h2>
        <ul className="flex text-gray-600 dark:text-gray-400 text-2xl gap-x-5 pt-2">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100066723944685" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rarc_0524" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/renz-aljon-cruz-ba13bb286" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/RenzAljon24" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
        
      </header>
      
      <h2 className="mt-24 font-bold text-gray-700 text-2xl py-2 dark:text-slate-200">Latest Projects</h2>

      <div className=" flex flex-col space-y-4 mb-10">{projects.map((project) => (
       
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:border-blue-500 transition ">
          <div className="m-2 ">
            <h2 className="font-extrabold">{project.name}</h2> 
          </div>
          {project.image && (
            <Image
              src={project.image}
              alt='placeholder'
              width={500}  
              height={400} 
              className="object-cover rounded-lg border border-gray-500  w-full sm:h-[300px]"
            />
          )}
        </Link>
      ))}
      </div>
    </div>
  )

}
