import React from 'react';
import { Skeleton } from './skeleton';  // Assuming Skeleton is your reusable skeleton component

const BlogSkeleton = () => {
  return (
    <div className="w-full">
      {/* Skeleton for the project image */}
      {/* Skeleton for the title */}
      <div className="w-full">
        <Skeleton className="w-28 h-11 rounded-md" />
        <Skeleton className="w-full h-4 rounded-md my-2" />
        <Skeleton className="w-full h-4 rounded-md mb-10" />
      </div>

      <div>
        <Skeleton className="w-full h-8 rounded-md mb-10" />
      </div>

      {/* Skeleton for additional details like metadata */}
      <Skeleton className="w-28 h-6 rounded-md" />
      <Skeleton className="w-full h-56 sm:h-72 rounded-xl my-5" />
    </div>
  );
}

export default BlogSkeleton;
