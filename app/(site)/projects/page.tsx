import { getProjects } from "@/sanity/sanity-utils"
import Link from "next/link";
import Image from "next/image";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-8 mt-32">
        <header className="pb-10 font-serif">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">Projects</h1>
          <h1 className="w-full mb-4 text-gray-600 dark:text-gray-200">
            I&apos;m excited to share my completed side projects, which reflect my passion for innovation and my dedication to turning ideas into reality. Below, you&apos;ll find a list of my side projects as well as client-based projects I&apos;ve worked on.
          </h1>
        </header>

        <div className=" flex flex-col space-y-4 mb-10">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={100}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
   
  )
}

