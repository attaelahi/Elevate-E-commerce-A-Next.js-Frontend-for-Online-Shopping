"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingBag, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "@/components/product-card"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("m")
  const [selectedImage, setSelectedImage] = useState(0)

  // Sample product data
  const product = {
    id: Number.parseInt(params.id),
    name: "Premium Cashmere Blend Sweater",
    price: 249.99,
    originalPrice: 299.99,
    sale: true,
    description:
      "Elevate your wardrobe with our Premium Cashmere Blend Sweater. Crafted from the finest materials for unparalleled comfort and style. This luxurious sweater features a perfect blend of 70% cashmere and 30% wool, offering exceptional warmth without the bulk.",
    colors: [
      { name: "Black", value: "black" },
      { name: "Cream", value: "cream" },
      { name: "Navy", value: "navy" },
      { name: "Burgundy", value: "burgundy" },
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1372&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?q=80&w=1372&auto=format&fit=crop",
    ],
    rating: 4.8,
    reviews: 124,
    features: ["70% Cashmere, 30% Wool", "Ribbed cuffs and hem", "Relaxed fit", "Dry clean only", "Imported"],
    category: "Women's Fashion",
  }

  // Sample related products
  const relatedProducts = [
    {
      id: 5,
      name: "Silk Pajama Set",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?q=80&w=1288&auto=format&fit=crop",
      category: "Women's Fashion",
      rating: 4.8,
      reviews: 68,
    },
    {
      id: 7,
      name: "Wool Blend Coat",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=687&auto=format&fit=crop",
      category: "Women's Fashion",
      rating: 4.7,
      reviews: 93,
      sale: true,
      originalPrice: 499.99,
    },
    {
      id: 8,
      name: "Ceramic Vase Set",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1612196808214-b7e239e5f6dc?q=80&w=1287&auto=format&fit=crop",
      category: "Home Decor",
      rating: 4.4,
      reviews: 37,
    },
  ]

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-24 mt-10">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-8">
        <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/products" className="text-muted-foreground hover:text-accent transition-colors">
          Products
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link
          href={`/category/${product.category.toLowerCase().replace("'s", "s").replace(" ", "-")}`}
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.sale && (
              <div className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-2 py-1 rounded">
                SALE
              </div>
            )}
          </div>
          <div className="flex space-x-4 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative w-24 h-24 rounded-md overflow-hidden border-2 ${
                  selectedImage === index ? "border-accent" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center mb-6">
              {product.sale && product.originalPrice ? (
                <>
                  <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                  <span className="ml-3 text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="ml-3 text-sm font-medium text-green-600">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            <p className="text-muted-foreground mb-6">{product.description}</p>
          </div>

          <div className="space-y-6">
            {/* Color Selection */}
            <div>
              <h3 className="font-medium mb-3">
                Color: <span className="capitalize">{selectedColor}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color.value ? "border-accent" : "border-transparent hover:border-gray-300"
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.value)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between mb-3">
                <h3 className="font-medium">
                  Size: <span className="uppercase">{selectedSize}</span>
                </h3>
                <button className="text-sm text-accent hover:underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 rounded-md border flex items-center justify-center uppercase font-medium ${
                      selectedSize === size
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center w-32">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-r-none"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="h-10 w-10 flex items-center justify-center border-y">{quantity}</div>
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-l-none" onClick={incrementQuantity}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart and Wishlist */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90 gap-2 py-6">
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground border-t border-b py-4 mt-6">
              <Truck className="h-5 w-5" />
              <span>Free shipping on orders over $100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="details"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
            >
              Shipping & Returns
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                <p className="text-muted-foreground mb-4">
                  Elevate your wardrobe with our Premium Cashmere Blend Sweater. Crafted from the finest materials for
                  unparalleled comfort and style. This luxurious sweater features a perfect blend of 70% cashmere and
                  30% wool, offering exceptional warmth without the bulk.
                </p>
                <p className="text-muted-foreground mb-4">
                  The relaxed fit and ribbed cuffs and hem provide a flattering silhouette that's perfect for any
                  occasion. Layer it over a collared shirt for a sophisticated look or pair it with jeans for casual
                  elegance.
                </p>
                <p className="text-muted-foreground">
                  Available in a range of timeless colors, this versatile piece is a must-have addition to your
                  collection of premium essentials.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Product Details</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Material: 70% Cashmere, 30% Wool</li>
                  <li>• Fit: Relaxed</li>
                  <li>• Care: Dry clean only</li>
                  <li>• Imported</li>
                  <li>• Model is 5'10" and wearing size S</li>
                  <li>• Style ID: EL-CS-001</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="features" className="pt-6">
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-accent/20 text-accent rounded-full p-1 mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="shipping" className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                <p className="text-muted-foreground mb-4">
                  We offer free standard shipping on all orders over $100. For orders under $100, standard shipping is
                  $9.95.
                </p>
                <p className="text-muted-foreground mb-4">Estimated delivery times:</p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Standard Shipping: 3-5 business days</li>
                  <li>• Express Shipping: 2-3 business days ($15)</li>
                  <li>• Next Day Delivery: Next business day ($25)</li>
                </ul>
                <p className="text-muted-foreground">
                  Please note that these are estimates and not guarantees. Delivery times may vary during peak seasons
                  and holidays.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Returns & Exchanges</h3>
                <p className="text-muted-foreground mb-4">
                  We want you to be completely satisfied with your purchase. If for any reason you're not happy with
                  your order, we accept returns within 30 days of delivery.
                </p>
                <p className="text-muted-foreground mb-4">
                  To be eligible for a return, items must be unused, unworn, and in their original packaging with all
                  tags attached.
                </p>
                <p className="text-muted-foreground">
                  For more information, please visit our{" "}
                  <Link href="/returns" className="text-accent hover:underline">
                    Returns & Exchanges
                  </Link>{" "}
                  page or contact our customer service team.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating} out of 5</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>
              <Button>Write a Review</Button>
            </div>

            <div className="space-y-6">
              <div className="border-b pb-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Sarah M.</h4>
                  <span className="text-sm text-muted-foreground">2 weeks ago</span>
                </div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-2">
                  This sweater is absolutely luxurious! The cashmere blend is so soft against the skin, and the quality
                  is evident in every detail. It's warm without being bulky, and the fit is perfect. I've received so
                  many compliments!
                </p>
                <div className="flex items-center text-sm text-accent">
                  <button className="hover:underline">Helpful (12)</button>
                  <span className="mx-2">•</span>
                  <button className="hover:underline">Report</button>
                </div>
              </div>

              <div className="border-b pb-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Michael T.</h4>
                  <span className="text-sm text-muted-foreground">1 month ago</span>
                </div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <Star className="h-4 w-4 fill-muted text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-2">
                  Great sweater overall. The material is very high quality and feels luxurious. I took off one star
                  because the sizing runs a bit large - I usually wear a medium but should have ordered a small.
                  Otherwise, very pleased with my purchase.
                </p>
                <div className="flex items-center text-sm text-accent">
                  <button className="hover:underline">Helpful (8)</button>
                  <span className="mx-2">•</span>
                  <button className="hover:underline">Report</button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Emma L.</h4>
                  <span className="text-sm text-muted-foreground">2 months ago</span>
                </div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-2">
                  Worth every penny! This sweater is a staple in my wardrobe now. The burgundy color is rich and
                  beautiful, and the quality is exceptional. It drapes perfectly and looks much more expensive than it
                  is. I'm considering buying it in other colors too!
                </p>
                <div className="flex items-center text-sm text-accent">
                  <button className="hover:underline">Helpful (15)</button>
                  <span className="mx-2">•</span>
                  <button className="hover:underline">Report</button>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Load More Reviews
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

