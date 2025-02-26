import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    category: string
    rating: number
    reviews: number
    sale?: boolean
    originalPrice?: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative product-card-hover">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.sale && (
          <div className="absolute top-2 left-2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded">SALE</div>
        )}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" className="rounded-full shadow-md">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
        <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity p-4">
          <Button className="w-full bg-primary hover:bg-primary/90 gap-2">
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div>
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-medium mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
        </div>
        <div className="flex items-center">
          {product.sale && product.originalPrice ? (
            <>
              <span className="font-semibold">${product.price.toFixed(2)}</span>
              <span className="ml-2 text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="font-semibold">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}

