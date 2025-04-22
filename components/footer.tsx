import Link from "next/link"
import { Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">Brener Silva Lima</h2>
          <p className="mt-2 text-gray-400">Design UX & Desenvolvedor Front-End</p>
        </div>

        <div className="mb-8 flex justify-center space-x-6">
          <Link href="#" className="text-gray-400 transition-colors hover:text-white">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="text-gray-400 transition-colors hover:text-white">
            <Instagram size={20} />
          </Link>
          <Link href="#" className="text-gray-400 transition-colors hover:text-white">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="text-gray-400 transition-colors hover:text-white">
            <Github size={20} />
          </Link>
          <Link href="#" className="text-gray-400 transition-colors hover:text-white">
            <Linkedin size={20} />
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Brener Silva Lima. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
