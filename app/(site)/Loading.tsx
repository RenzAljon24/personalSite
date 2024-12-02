import HomeSkeleton from "@/components/ui/home-skeleton"

const loading = () => {
  return (
    <div className="max-w-2xl mx-auto px-7 sm:px-8 mt-28">
        <HomeSkeleton/>
    </div>
  )
}

export default loading