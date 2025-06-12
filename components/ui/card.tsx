import * as React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { getLatestProjects } from "@/sanity/sanity-utils"
import type { Project } from "@/types/Project"
import { ExternalLink } from "lucide-react"

// Add this helper function at the top of the file, after the imports
function getPlainTextFromPortableText(content: string | any[]): string {
  if (typeof content === "string") {
    return content
  }

  if (Array.isArray(content)) {
    return content
      .map((block) => {
        if (block._type === "block" && block.children) {
          return block.children.map((child: any) => child.text || "").join("")
        }
        return ""
      })
      .join(" ")
  }

  return ""
}

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
CardFooter.displayName = "CardFooter"

async function CardGrid() {
  const projects: Project[] = await getLatestProjects()

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 dark:text-slate-400 text-lg">No projects available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 mb-10">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="group block">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-600">
            {/* Image Container */}
            <div className="relative overflow-hidden">
              {project.image && (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={800}
                  height={400}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* External link icon */}
              <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ExternalLink className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                  {project.name}
                </h3>
              </div>

              {/* Description if available */}
              {project.content && (
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {(() => {
                    const plainText = getPlainTextFromPortableText(project.content)
                    return plainText.length > 120 ? `${plainText.substring(0, 120)}...` : plainText
                  })()}
                </p>
              )}

              {/* Metadata */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                <div className="flex items-center space-x-4">
                  {/* Add date if available in your Project type */}
                  {/* <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>2024</span>
                  </div> */}

                  {/* Tags if available */}
                  {/* <div className="flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    <span>Web App</span>
                  </div> */}
                </div>

                <div className="text-teal-600 dark:text-teal-400 font-medium group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                  View Project →
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-1 bg-gradient-to-r from-teal-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Card;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardGrid };
