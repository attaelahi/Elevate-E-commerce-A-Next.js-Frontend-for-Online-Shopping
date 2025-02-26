import Link from "next/link"
import Image from "next/image"

interface CategoryCardProps {
  category: {
    id: number
    name: string
    image: string
    count: number
    slug: string
  }
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`} className="block category-card">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
          <p className="text-sm text-white/80">{category.count} Products</p>
        </div>
      </div>
    </Link>
  )
}

