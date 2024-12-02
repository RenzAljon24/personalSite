import SingleSkeleton from "@/components/ui/single-project-card"

const loading = () => {
  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-8 mt-32">
        <SingleSkeleton/>
    </div>
  )
}

export default loading