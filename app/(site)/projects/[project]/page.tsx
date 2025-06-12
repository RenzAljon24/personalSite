import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { toPlainText } from "@portabletext/react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"

export async function generateMetadata({ params }: { params: { project: string } }) {
  const slug = params.project
  const project = await getProject(slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be located.",
    }
  }

  const plainTextContent = Array.isArray(project.content) ? toPlainText(project.content) : project.content

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
  }
}

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project
  const project = await getProject(slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">The project you&#39;re looking for doesn&#39;t exist.</p>
          <Link href="/projects">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-200">{project.name}</h1>

        {project.url && (
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </a>
        )}
      </header>

      {/* Project Image */}
      <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          width={1200}
          height={675}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Project Content */}
      <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
        <PortableText
          value={project.content}
          components={{
            block: {
              normal: ({ children }) => (
                <p className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">{children}</p>
              ),
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-10">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 mt-8">{children}</h3>
              ),
            },
            list: {
              bullet: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
              number: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>,
            },
            listItem: {
              bullet: ({ children }) => <li className="text-slate-700 dark:text-slate-300">{children}</li>,
              number: ({ children }) => <li className="text-slate-700 dark:text-slate-300">{children}</li>,
            },
          }}
        />
      </div>

      {/* Back to Projects */}
      <div className="mt-16 text-center">
        <Link href="/projects">
          <Button variant="outline" size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Projects
          </Button>
        </Link>
      </div>
    </div>
  )
}
