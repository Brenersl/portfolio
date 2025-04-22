import Image from "next/image"
import { Code, FileCode2, Paintbrush, Braces, FigmaIcon } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skills = [
    { name: "HTML5", icon: <FileCode2 className="text-orange-500" />, percentage: 95 },
    { name: "CSS3", icon: <Code className="text-blue-500" />, percentage: 85 },
    { name: "JavaScript", icon: <Braces className="text-yellow-500" />, percentage: 65 },
    { name: "React", icon: <Code className="text-cyan-500" />, percentage: 70 },
    { name: "UX/UI", icon: <Paintbrush className="text-purple-500" />, percentage: 85 },
    { name: "Figma", icon: <FigmaIcon className="text-pink-500" />, percentage: 80 },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Habilidades</h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold">Habilidades Profissionais</h3>
            <p className="mb-8 text-gray-600">
              Combinando conhecimentos técnicos de desenvolvimento front-end com princípios de design UX/UI para criar
              experiências digitais completas e de alta qualidade.
            </p>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5"></div>
              <Image
                src="/placeholder.svg?height=350&width=350"
                alt="Skills illustration"
                width={350}
                height={350}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
