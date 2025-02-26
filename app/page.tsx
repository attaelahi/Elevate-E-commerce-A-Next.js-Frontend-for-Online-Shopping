import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import CategoryCard from "@/components/category-card"
import NewsletterSection from "@/components/newsletter-section"

export default function Home() {
  // Sample featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Cashmere Blend Sweater",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1064&auto=format&fit=crop",
      category: "Women's Fashion",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop",
      category: "Accessories",
      rating: 4.9,
      reviews: 86,
    },
    {
      id: 3,
      name: "Premium Wireless Headphones",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop",
      category: "Electronics",
      rating: 4.7,
      reviews: 215,
      sale: true,
      originalPrice: 399.99,
    },
    {
      id: 4,
      name: "Marble Coffee Table",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1206&auto=format&fit=crop",
      category: "Furniture",
      rating: 4.6,
      reviews: 42,
    },
  ]

  // Sample categories data
  const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1170&auto=format&fit=crop",
      count: 248,
      slug: "womens",
    },
    {
      id: 2,
      name: "Men's Fashion",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1287&auto=format&fit=crop",
      count: 156,
      slug: "mens",
    },
    {
      id: 3,
      name: "Home Decor",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1287&auto=format&fit=crop",
      count: 184,
      slug: "decor",
    },
    {
      id: 4,
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1528&auto=format&fit=crop",
      count: 92,
      slug: "electronics",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury lifestyle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Elevate Your Lifestyle</h1>
            <p className="text-xl text-white/90 mb-8">
              Discover our curated collection of premium fashion, home goods, and electronics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                Shop New Arrivals
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Collections
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
              <p className="text-muted-foreground">Explore our wide range of premium products</p>
            </div>
            <Link
              href="/categories"
              className="flex items-center text-secondary hover:text-accent transition-colors font-medium"
            >
              View All Categories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked premium items for your consideration</p>
            </div>
            <Link
              href="/products"
              className="flex items-center text-secondary hover:text-accent transition-colors font-medium"
            >
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Summer Collection 2025</h2>
              <p className="text-white/80 mb-6">
                Discover our exclusive summer collection featuring lightweight fabrics, vibrant colors, and
                sophisticated designs perfect for the season.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">Shop the Collection</Button>
            </div>
            <div className="relative w-full md:w-1/2 h-80">
              <Image
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop"
                alt="Summer Collection"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The quality of the cashmere sweater exceeded my expectations. The attention to detail and craftsmanship
                is evident in every stitch. Definitely worth the investment."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop"
                    alt="Customer"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sophia Anderson</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "I purchased the marble coffee table and it's become the centerpiece of my living room. The quality is
                exceptional and the customer service was outstanding from start to finish."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
                    alt="Customer"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">James Wilson</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The wireless headphones have incredible sound quality and battery life. The premium materials make them
                comfortable to wear for hours. Elevate consistently delivers luxury products."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop"
                    alt="Customer"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Emma Thompson</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  )
}

