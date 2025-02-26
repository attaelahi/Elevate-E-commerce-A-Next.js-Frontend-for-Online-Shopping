"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <nav className="flex flex-col gap-6 mt-10">
                <Link href="/" className="text-lg font-medium hover:text-accent transition-colors">
                  Home
                </Link>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-medium">Fashion</span>
                  <Link
                    href="/category/womens"
                    className="pl-4 text-muted-foreground hover:text-accent transition-colors"
                  >
                    Women
                  </Link>
                  <Link
                    href="/category/mens"
                    className="pl-4 text-muted-foreground hover:text-accent transition-colors"
                  >
                    Men
                  </Link>
                  <Link
                    href="/category/accessories"
                    className="pl-4 text-muted-foreground hover:text-accent transition-colors"
                  >
                    Accessories
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-medium">Home</span>
                  <Link
                    href="/category/furniture"
                    className="pl-4 text-muted-foreground hover:text-accent transition-colors"
                  >
                    Furniture
                  </Link>
                  <Link
                    href="/category/decor"
                    className="pl-4 text-muted-foreground hover:text-accent transition-colors"
                  >
                    Decor
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-medium">Electronics</span>
                  <Link
                    href="/category/audio"
                    className="pl-4 text-muted-foreground hover:text-accent transition-colors"
                  >
                    Audio
                  </Link>
                  <Link
                    href="/category/gadgets"
                    className="pl-4 text-muted-foreground hover:text-accent transition-colors"
                  >
                    Gadgets
                  </Link>
                </div>
                <Link href="/sale" className="text-lg font-medium text-accent hover:opacity-80 transition-colors">
                  Sale
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            ELEVATE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:text-accent transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium hover:text-accent transition-colors">
                Fashion <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/category/womens">Women</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/mens">Men</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/accessories">Accessories</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium hover:text-accent transition-colors">
                Home <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/category/furniture">Furniture</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/decor">Decor</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium hover:text-accent transition-colors">
                Electronics <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/category/audio">Audio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/gadgets">Gadgets</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/sale" className="font-medium text-accent hover:opacity-80 transition-colors">
              Sale
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              className="hover:text-accent transition-colors"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="hover:text-accent transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="pt-4 pb-2 animate-in fade-in duration-300">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for products..."
                className="pl-10 pr-10 py-6 w-full focus-visible:ring-accent"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowSearch(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

