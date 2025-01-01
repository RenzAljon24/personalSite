import { formatDate } from '@/lib/utils';
import { getBlog } from '@/sanity/sanity-utils';
import { PortableText, toPlainText } from '@portabletext/react';
import Image from "next/image"


export async function generateMetadata(
  { params }: { params: { blog: string } }
) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be located.",
    };
  }

  const plainTextContent =
    Array.isArray(blog.content) ? toPlainText(blog.content) : blog.content;

  return {
    title: `Renz | ${blog.name || "Untitled Project"}`,
    description: plainTextContent?.slice(0, 160) || "Explore this amazing project.",
    openGraph: {
      title: `Renz | ${blog.name}`,
      description: plainTextContent?.slice(0, 160),
      images: [
        {
          url: blog.image || "/default-thumbnail.png",
          width: 1200,
          height: 630,
          alt: blog.name,
        },
      ],
    },
    twitter: {
      title: `Renz | ${blog.name}`,
      description: plainTextContent?.slice(0, 160),
    },
  };
}


type Props = {
  params: { blog: string }
}

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return <div className="max-w-2xl mx-auto px-5 sm:px-8 mb-10">
    <header className="flex items-center justify-between mt-32">
        <Image src={blog.image} alt={blog.name} width={700} height={250} className="flex m-5 mx-auto border-2 border-gray-700 object-cover rounded-xl m" />
    </header>
    <div className="text-lg text-gray-700 dark:text-slate-100">
    <h1 className="font-mono mt-1 text-gray-700 dark:text-gray-300 ">published: {formatDate(blog._createdAt)}</h1>
    <h1 className="text-slate-700 dark:text-slate-200 text-2xl md:text-5xl font-extrabold mt-16">{blog.name}</h1>
    <h2 className='mt-16'><PortableText value={blog.content} /></h2>
    </div>

    
  </div>
} 