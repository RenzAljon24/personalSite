import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Head from "next/head";
import Image from "next/image"
import { toPlainText } from "@portabletext/react";



export async function generateMetadata(
  { params }: { params: { project: string } }
) {
  const slug = params.project;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be located.",
    };
  }

  const plainTextContent =
    Array.isArray(project.content) ? toPlainText(project.content) : project.content;

  return {
    title: `Renz | ${project.name || "Untitled Project"}`,
    description: plainTextContent?.slice(0, 160) || "Explore this amazing project.",
    openGraph: {
      title: `Renz | ${project.name}`,
      description: plainTextContent?.slice(0, 160),
      images: [
        {
          url: project.image || "/default-thumbnail.png",
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      title: `Renz | ${project.name}`,
      description: plainTextContent?.slice(0, 160),
    },
  };
}


type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return <div className="max-w-2xl mx-auto px-5 sm:px-8 mb-10">
    <Head>
      <title>{"Renz - " + (project.name || "Project")}</title>
      <meta name="description" />
      <meta property="og:title" content={project.name} />
      <meta property="og:image" content={project.image} />
    </Head>
    <header className="flex items-center justify-between mt-32">
      <h1 className="text-slate-700 dark:text-slate-200 text-2xl md:text-5xl font-extrabold">{project.name}</h1>
      <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="rounded-lg text-slate-200 font-bold py-3 px-4 whitespace-nowrap bg-slate-500 hover:text-pink-100 transition">
        View Project
      </a>
    </header>

    <Image src={project.image} alt={project.name} width={700} height={250} className="flex m-5 mx-auto border-2 border-gray-700 object-cover rounded-xl m" />
   
    <div className="text-lg text-gray-700 mt-5 dark:text-slate-100">
      <PortableText
        value={project.content}
        components={{
          block: {
            normal: ({ children }) => <p className="mb-6">{children}</p>,
          },
        }}
      />
    </div>

    
  </div>
} 