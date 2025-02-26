import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">ELEVATE</h3>
            <p className="text-gray-300 mb-6">
              Elevating your lifestyle with premium fashion, home goods, and electronics.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/womens" className="text-gray-300 hover:text-accent transition-colors">
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link href="/category/mens" className="text-gray-300 hover:text-accent transition-colors">
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link href="/category/furniture" className="text-gray-300 hover:text-accent transition-colors">
                  Home Furniture
                </Link>
              </li>
              <li>
                <Link href="/category/decor" className="text-gray-300 hover:text-accent transition-colors">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link href="/category/electronics" className="text-gray-300 hover:text-accent transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-accent hover:underline transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-accent transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-accent transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-300 hover:text-accent transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Your email address"
                  className="pl-10 bg-gray-800 border-gray-700 text-white focus-visible:ring-accent"
                />
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Elevate. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-6" />
              <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Mastercard" className="h-6" />
              <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="American Express" className="h-6" />
              <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

