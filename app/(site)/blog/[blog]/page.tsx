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
    <h2 className='mt-16'>
      <PortableText
      value={blog.content}
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
    </h2>
    </div>

    
  </div>
} 