
import { getBlogs } from "@/sanity/sanity-utils";
import SearchInput from "@/components/ui/searchInput";

import BlogCard from "@/components/ui/blog-card";
export const experimental_ppr = true
export default async function Blogs({searchParams}: {searchParams: {search: string}}) {

  const search = searchParams.search || "";
  
  const singleBlogCardData = await BlogCard({query: search});

  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-8 mt-32">
      <header className="pb-10 font-serif">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">Blogs</h1>
        <h1 className="w-full mb-4 text-gray-600 dark:text-gray-200">
          Hey there! Welcome to my blog. Here, I share my thoughts on various topics, from tech tips to personal. It’s a space for ideas and conversations, and I hope you find something interesting to read. Enjoy!
        </h1>
      </header>
        <SearchInput placeholder="Search Blogs" />
        <div className=" flex flex-col space-y-4 mb-10">
          {singleBlogCardData}    
      </div>
    </div>
   
  )
}

