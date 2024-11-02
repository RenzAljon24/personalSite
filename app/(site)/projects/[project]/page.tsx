import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return <div className="max-w-2xl mx-auto px-5 sm:px-8">
    <header className="flex items-center justify-between mt-32">
      <h1 className="text-slate-700 dark:text-slate-200 text-2xl md:text-5xl font-extrabold">{project.name}</h1>
      <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="rounded-lg text-slate-200 font-bold py-3 px-4 whitespace-nowrap bg-slate-500 hover:text-pink-100 transition">
        View Project
      </a>
    </header>

    <Image src={project.image} alt={project.name} width={700} height={250} className="flex m-5 mx-auto border-2 border-gray-700 object-cover rounded-xl m" />
   
    <div className="text-lg text-gray-700 mt-5 dark:text-slate-100">
      <PortableText value={project.content} />
    </div>

    
  </div>
} 