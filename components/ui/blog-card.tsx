
import { getBlogs } from "@/sanity/sanity-utils"
import Link from "next/link";
import Image from "next/image";


export default async function BlogCard({query}: {query: string}) {
    const blogs = await getBlogs({ query });

    const filteredBlogs = blogs.filter((blog) => blog.name.toLowerCase().includes((query || "").toLowerCase()));
    return (
        <>
            {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog._id} className=" rounded-lg p-1  transition">
              <div className="mb-2 ml-2 ">
               
                <h1 className="font-extrabold">{blog.name}</h1>
              </div>
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.name}
                  width={750}
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