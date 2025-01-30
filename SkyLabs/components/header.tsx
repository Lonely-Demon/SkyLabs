import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-[#FF0066]" />
            <span className="font-bold text-2xl bg-gradient-to-r from-[#FF0066] to-[#66FFFF] bg-clip-text text-transparent">
              SkyLabs
            </span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#home" className="text-gray-200 hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="#technology" className="text-gray-200 hover:text-purple-400 transition-colors">
              Technology
            </Link>
            <Link href="#impact" className="text-gray-200 hover:text-purple-400 transition-colors">
              Impact
            </Link>
            <Link href="#team" className="text-gray-200 hover:text-purple-400 transition-colors">
              Team
            </Link>
          </nav>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">Contact Us</Button>
        </div>
      </div>
    </header>
  )
}

