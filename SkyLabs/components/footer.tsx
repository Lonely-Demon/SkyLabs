import Link from "next/link"
import { Satellite } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-purple-500/20">
      {/* Glowing orb effects */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container px-4 py-12 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 pb-12 border-b border-purple-500/20">
          {/* Brand and description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Satellite className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-2xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                SkyLabs
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering Indian farmers with satellite technology for smarter, more sustainable agriculture.
            </p>
            <Button className="bg-white/10 hover:bg-white/20">Schedule Demo</Button>
          </div>

          {/* Product links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#guides" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#help" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#cookies" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 SkyLabs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#twitter" className="text-gray-400 hover:text-purple-400 transition-colors">
              Twitter
            </Link>
            <Link href="#linkedin" className="text-gray-400 hover:text-purple-400 transition-colors">
              LinkedIn
            </Link>
            <Link href="#facebook" className="text-gray-400 hover:text-purple-400 transition-colors">
              Facebook
            </Link>
            <Link href="#instagram" className="text-gray-400 hover:text-purple-400 transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

