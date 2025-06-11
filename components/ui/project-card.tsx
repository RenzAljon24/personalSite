import Link from "next/link"
import Image from "next/image"
import { getProjects } from "@/sanity/sanity-utils"
import { ExternalLink } from "lucide-react"


export default async function ProjectCard({ query }: { query: string }) {
  const projects = await getProjects({ query })
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes((query || "").toLowerCase()),
  )

  return (
    <>
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="group block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              {project.image && (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={1500}
                  height={100}
                  className="object-cover w-full h-48 sm:h-56 transition-transform duration-500 group-hover:scale-105"
                />
              )}

                            <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ExternalLink className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                {project.name}
              </h2>

                <div className="flex justify-end text-teal-600 dark:text-teal-400 font-medium group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                  View Project →
                </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500 dark:text-gray-400 p-4 text-center w-full">No projects found for {query}.</p>
      )}
    </>
  )
}
