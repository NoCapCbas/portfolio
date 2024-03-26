import SkeletonCard from '@/components/skeletonCard';

export default function loading() {
  return (
    <main>
      <nav>
        <h1>{'{Damon Diaz}'}</h1>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {"abcdefghi".split('').map(i => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  )
}
