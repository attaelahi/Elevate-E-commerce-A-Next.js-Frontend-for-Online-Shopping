"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Filter, Grid3X3, List, Search, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 1000])

  // Sample products data
  const products = [
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
      id: 6,
      name: "Smart Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop",
      category: "Electronics",
      rating: 4.5,
      reviews: 156,
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

  return (
    <div className="container mx-auto px-4 py-24 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Desktop Filters */}
        <div className="hidden md:block w-64 sticky top-24">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="women" />
                  <Label htmlFor="women">Women's Fashion (3)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="men" />
                  <Label htmlFor="men">Men's Fashion (2)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="accessories" />
                  <Label htmlFor="accessories">Accessories (1)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="electronics" />
                  <Label htmlFor="electronics">Electronics (2)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="furniture" />
                  <Label htmlFor="furniture">Furniture (1)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="decor" />
                  <Label htmlFor="decor">Home Decor (1)</Label>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Colors</h3>
              <div className="flex flex-wrap gap-2">
                <button className="w-6 h-6 rounded-full bg-black border border-gray-300" title="Black"></button>
                <button className="w-6 h-6 rounded-full bg-white border border-gray-300" title="White"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 border border-gray-300" title="Red"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300" title="Blue"></button>
                <button className="w-6 h-6 rounded-full bg-green-500 border border-gray-300" title="Green"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 border border-gray-300" title="Yellow"></button>
                <button className="w-6 h-6 rounded-full bg-purple-500 border border-gray-300" title="Purple"></button>
                <button className="w-6 h-6 rounded-full bg-pink-500 border border-gray-300" title="Pink"></button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Size</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="xs" />
                  <Label htmlFor="xs">XS</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="s" />
                  <Label htmlFor="s">S</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="m" />
                  <Label htmlFor="m">M</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="l" />
                  <Label htmlFor="l">L</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="xl" />
                  <Label htmlFor="xl">XL</Label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Customer Rating</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="4star" />
                  <Label htmlFor="4star">4★ & Above</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="3star" />
                  <Label htmlFor="3star">3★ & Above</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="2star" />
                  <Label htmlFor="2star">2★ & Above</Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search products..." className="pl-10" />
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="md:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="py-4">
                      <div className="mb-6">
                        <h3 className="font-medium mb-3">Categories</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="women-mobile" />
                            <Label htmlFor="women-mobile">Women's Fashion (3)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="men-mobile" />
                            <Label htmlFor="men-mobile">Men's Fashion (2)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="accessories-mobile" />
                            <Label htmlFor="accessories-mobile">Accessories (1)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="electronics-mobile" />
                            <Label htmlFor="electronics-mobile">Electronics (2)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="furniture-mobile" />
                            <Label htmlFor="furniture-mobile">Furniture (1)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="decor-mobile" />
                            <Label htmlFor="decor-mobile">Home Decor (1)</Label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-medium mb-3">Price Range</h3>
                        <Slider defaultValue={[0, 1000]} max={1000} step={10} className="mb-4" />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">$0</span>
                          <span className="text-sm">$1000</span>
                        </div>
                      </div>

                      {/* More mobile filters */}
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown */}
                <div className="flex items-center">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Customer Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* View Toggle */}
                <div className="hidden sm:flex items-center border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="sm"
                    className="rounded-r-none"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="sm"
                    className="rounded-l-none"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium">Active Filters:</span>
              <div className="flex items-center bg-muted px-3 py-1 rounded-full text-sm">
                Women's Fashion
                <Button variant="ghost" size="sm" className="h-5 w-5 p-0 ml-1">
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex items-center bg-muted px-3 py-1 rounded-full text-sm">
                $100 - $500
                <Button variant="ghost" size="sm" className="h-5 w-5 p-0 ml-1">
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <Button variant="link" size="sm" className="text-sm h-auto p-0">
                Clear All
              </Button>
            </div>

            {/* Products Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {products.map((product) => (
                  <div key={product.id} className="flex flex-col sm:flex-row gap-6 border rounded-lg p-4">
                    <div className="relative w-full sm:w-48 aspect-square rounded-md overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {product.sale && (
                        <div className="absolute top-2 left-2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded">
                          SALE
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <span className="mr-1">{product.rating}</span>
                          <span className="text-accent">★</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                      </div>
                      <div className="mt-auto">
                        <div className="flex items-center mb-4">
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
                        <div className="flex gap-2">
                          <Button className="flex-1 sm:flex-none">Add to Cart</Button>
                          <Button variant="outline" size="icon">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <ChevronDown className="h-4 w-4 rotate-90" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 font-medium">
                  1
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  3
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  4
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  5
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

