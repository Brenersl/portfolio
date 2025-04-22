import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Figma } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Home() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Brener Silva Lima
              <span className="mt-2 block text-primary">Design UX & Desenvolvedor Front-End</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Criando experiências digitais impactantes e interfaces intuitivas que conectam pessoas e tecnologia.
            </p>
            <Button asChild className="rounded-full px-8 py-6 text-base">
              <Link href="#contact">Entre em contato</Link>
            </Button>

            <div className="mt-8 flex space-x-4">
              <Link href="https://linkedin.com/" className="text-gray-600 transition-colors hover:text-primary">
                <Linkedin size={24} />
              </Link>
              <Link href="https://github.com/" className="text-gray-600 transition-colors hover:text-primary">
                <Github size={24} />
              </Link>
              <Link href="https://figma.com/" className="text-gray-600 transition-colors hover:text-primary">
                <Figma size={24} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5"></div>
            <div className="absolute inset-4 overflow-hidden rounded-full bg-white">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Brener Silva Lima"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
