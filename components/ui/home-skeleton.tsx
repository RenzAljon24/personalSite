import { Skeleton } from "./skeleton"
const HomeSkeleton = () => {
  return (
    <div className="w-full">
      {/* Skeleton for the project image */}
      {/* Skeleton for the title */}
      <div className="w-full">
      <Skeleton className="w-20 h-4 rounded-md my-2" />
        <Skeleton className="w-full h-11 rounded-md" />
        <Skeleton className="w-full h-8 rounded-md mb-2 mt-6" />
        <div className="flex gap-x-4">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
        </div>
      </div>

      <div>
        <Skeleton className="w-32 h-8 rounded-md mb-10 mt-14" />
      </div>

      {/* Skeleton for additional details like metadata */}
      <Skeleton className="w-full h-56 sm:h-72 rounded-xl my-5" />
      <Skeleton className="w-full h-56 sm:h-72 rounded-xl my-5" />
      <Skeleton className="w-full h-56 sm:h-72 rounded-xl my-5" />
    </div>
  )
}

export default HomeSkeleton