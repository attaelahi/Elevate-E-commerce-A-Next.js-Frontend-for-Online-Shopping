import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and style
            inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Your email address"
                className="pl-10 bg-white/10 border-white/20 text-white focus-visible:ring-accent"
              />
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">Subscribe</Button>
          </div>
          <p className="text-xs text-white/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}

