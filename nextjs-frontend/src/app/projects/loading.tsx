import SkeletonCard from '@/components/skeletonCard';

export default function loading() {
  return (
    <main className="flex flex-col w-full h-full justify-center align-items items-center px-[20px] xs:px-[20px] sm:px-[20px] md:px-[20px] lg:px-[20px] xl:px-[0px]">
      <div className="flex flex-col justify-start w-full py-[20px]">
        <h1 className="text-white"></h1>
      </div>
      <div className="grid grid-cols-1 gap-8 py-[50px] xl:py-[50px] overflow-y-auto w-full" >
        {"abcdefghi".split('').map(i => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>

  )
}
