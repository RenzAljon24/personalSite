
import Link from "next/link"
import Image from "next/image"
import { getProjects } from "@/sanity/sanity-utils"
import { Skeleton } from "./skeleton"
export default async function ProjectCard({query}: {query: string}) {
    const projects = await getProjects({query})

    const filteredProjects = projects.filter((project) => project.name.toLowerCase().includes((query || "").toLowerCase()))
    return (
        <>
    {filteredProjects.length > 0 ? (
    filteredProjects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className=" rounded-lg p-1 transition">
          <div className="m-2 ">
            <h2 className="font-extrabold">{project.name || <Skeleton/>}</h2> 
          </div>
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={1500}
              height={100}
              className="object-fill  rounded-lg border-[3px]  hover:border-blue-500 dark:hover:border-blue-400 w-full h-36 sm:h-56 duration-300"
            />
          )}
        </Link>
      ))) : (
        <p className="text-gray-500 dark:text-gray-400">No blogs found for {query}.</p>
      )}
        </>
    )
}
