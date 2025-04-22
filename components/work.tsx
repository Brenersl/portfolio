import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Work() {
  const projects = [
    {
      id: 1,
      title: "E-commerce UI Design",
      category: "UX/UI Design",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Mobile App Interface",
      category: "App Design",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Dashboard Design",
      category: "UX/UI Design",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Landing Page",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Brand Identity",
      category: "Branding",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="work" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Meus Trabalhos</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-full items-center justify-center">
                    <Link
                      href="#"
                      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-primary hover:text-white"
                    >
                      Ver projeto <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
