import { Skeleton } from "./skeleton"

const SingleSkeleton = () => {
  return (
    <div className="w-full">
    {/* Skeleton for the project image */}
    <Skeleton className="w-28 h-11 rounded-md" />
    <Skeleton className="w-full h-60 sm:h-72 rounded-xl my-5" />

    <div className="w-full">
      <Skeleton className="w-40 h-11 rounded-md my-5" />
    </div>

    <div>
      <Skeleton className="w-40 h-14 rounded-md mb-10" />
    </div>

    {/* Skeleton for additional details like metadata */}
    <div>
        <Skeleton className="w-full h-4 rounded-md my-2" />
        <Skeleton className="w-full h-4 rounded-md mb-10" />
    </div>
  </div>
  )
}

export default SingleSkeleton