
import ProjectCard from "@/components/ui/project-card"
import SearchInput from "@/components/ui/searchInput";
export default async function Projects({searchParams}: {searchParams: {search: string}}) {
  const search = searchParams.search || "";
const projectCardDate = await ProjectCard({query: search});
  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-8 mt-32">
        <header className="pb-10 font-serif">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">Projects</h1>
          <h1 className="w-full mb-4 text-gray-600 dark:text-gray-200">
            I&apos;m excited to share my completed side projects, which reflect my passion for innovation and my dedication to turning ideas into reality. Below, you&apos;ll find a list of my side projects as well as client-based projects I&apos;ve worked on.
          </h1>
        </header>

        <SearchInput placeholder="Search Projects" />
        <div className=" flex flex-col space-y-4 mb-10">
          {projectCardDate}
      </div>
    </div>
   
  )
}

