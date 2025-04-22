import { Home } from "@/components/home"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Work } from "@/components/work"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
