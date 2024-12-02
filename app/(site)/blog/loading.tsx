import React from 'react'
import BlogSkeleton from '@/components/ui/blog-skeleton'
const loading = () => {
  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-8 mt-32">
        <BlogSkeleton/>
    </div>
  )
}

export default loading