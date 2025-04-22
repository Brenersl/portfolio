import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Sobre Mim</h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Brener Silva Lima"
              width={400}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-2xl font-bold">Olá, sou Brener Silva Lima</h3>
            <p className="mb-4 text-gray-600">
              Designer UX e Desenvolvedor Front-End com mais de 5 anos de experiência criando interfaces intuitivas e
              atraentes. Minha paixão está em transformar ideias complexas em experiências digitais simples e
              agradáveis.
            </p>
            <p className="mb-4 text-gray-600">
              Especializado em HTML5, CSS3, JavaScript e frameworks modernos como React e Next.js. Também tenho
              experiência em design UX/UI utilizando Figma e Adobe XD para criar protótipos e fluxos de usuário.
            </p>
            <p className="text-gray-600">
              Atualmente buscando novos desafios onde possa aplicar minhas habilidades para criar produtos digitais
              inovadores e centrados no usuário.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
