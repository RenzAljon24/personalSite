import { getBlog } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from "next/image"

type Props = {
  params: { blog: string }
}

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return <div className="max-w-2xl mx-auto px-5 sm:px-8">
    <header className="flex items-center justify-between mt-32">
        <Image src={blog.image} alt={blog.name} width={700} height={250} className="flex m-5 mx-auto border-2 border-gray-700 object-cover rounded-xl m" />
    </header>
    <div className="text-lg text-gray-700 m-5 dark:text-slate-100">
    <h1 className="text-slate-700 dark:text-slate-200 text-2xl md:text-5xl font-extrabold mt-16">{blog.name}</h1>
    <h2 className='mt-16'><PortableText value={blog.content} /></h2>
    </div>

    
  </div>
} 