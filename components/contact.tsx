"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Entre em Contato</h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold">Vamos conversar</h3>
            <p className="mb-8 text-gray-600">
              Estou disponível para projetos freelance, oportunidades de trabalho ou apenas para trocar ideias sobre
              design e desenvolvimento.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">contato@brenersilva.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <p className="text-gray-600">(11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <p className="text-gray-600">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-6 shadow-md">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Sua mensagem"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar mensagem <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
