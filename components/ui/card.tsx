
import Link from "next/link";
import Image from "next/image";
import { getLatestProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";

export default async function Card() {
  const projects: Project[] = await getLatestProjects();

  if (projects.length === 0) {
    return <p>No projects available at the moment.</p>;
  }

  return (
    <div className="flex flex-col space-y-4 mb-10">
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project._id}
          className=" rounded-lg p-1  transition"
        >
          <div className="m-2">
            <h2 className="font-extrabold">{project.name}</h2>
          </div>
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={400}
              className="object-fill  rounded-lg border-[3px]  hover:border-blue-500 dark:hover:border-blue-400 w-full h-36 sm:h-56 duration-300"
            />
          )}
        </Link>
      ))}
    </div>
  );
}
