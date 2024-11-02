import { getProjects } from "@/sanity/sanity-utils"
import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/sanity/sanity-utils";

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-8 mt-32">
      <header className="pb-10 font-serif">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">Blogs</h1>
        <h1 className="w-full mb-4 text-gray-600 dark:text-gray-200">
          Hey there! Welcome to my blog. Here, I share my thoughts on various topics, from tech tips to personal. It’s a space for ideas and conversations, and I hope you find something interesting to read. Enjoy!
        </h1>
      </header>


        <div className=" flex flex-col space-y-4 mb-10">{blogs.map((blog) => (
        <Link href={`/blog/${blog.slug}`} key={blog._id} className="border-2 border-gray-500 rounded-lg p-1 hover:border-blue-500 transition">
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.name}
              width={750}
              height={100}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold">
            {blog.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
   
  )
}

