import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trophy, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Trophy className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Atya Patya</h3>
                <p className="text-orange-300">Tiruvalur District</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Preserving and promoting the ancient sport of Atya Patya across Tiruvalur district, fostering community
              spirit and cultural heritage through traditional games.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Atya Patya", href: "/about" },
                { label: "Tournament Rules", href: "/about#rules" },
                { label: "Registration", href: "/contact" },
                { label: "Training Programs", href: "/updates" },
                { label: "Youth Development", href: "/officials" },
                { label: "Cultural Heritage", href: "/about#culture" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-300 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-300">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    District Sports Complex
                    <br />
                    Tiruvalur - 610001
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-300">+91 4366 234567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-300">info@tiruvaluratya.org</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-300">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest tournament updates and community news.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
              />
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400">
            <p>&copy; 2024 Atya Patya Tiruvalur. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-orange-300 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-orange-300 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-orange-300 transition-colors duration-300">
              Sitemap
            </Link>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for Tamil Heritage</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
