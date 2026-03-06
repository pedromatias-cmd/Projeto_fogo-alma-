"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/hero.jpg",
    alt: "Salao principal do restaurante com iluminacao acolhedora",
    category: "Ambiente",
  },
  {
    src: "/images/dish-1.jpg",
    alt: "Filet Mignon ao molho de vinho com legumes",
    category: "Pratos",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Bar do restaurante com decoracao sofisticada",
    category: "Ambiente",
  },
  {
    src: "/images/dish-2.jpg",
    alt: "Salmao grelhado com aspargos e molho de limao",
    category: "Pratos",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Chef preparando pratos na cozinha aberta",
    category: "Cozinha",
  },
  {
    src: "/images/dish-3.jpg",
    alt: "Massa trufada com parmesao",
    category: "Pratos",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Sala privativa para eventos e jantares especiais",
    category: "Ambiente",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Tabua de frios artesanal com queijos e embutidos",
    category: "Pratos",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Terraço ao ar livre com vista e iluminacao noturna",
    category: "Ambiente",
  },
  {
    src: "/images/dish-4.jpg",
    alt: "Petit Gateau com sorvete de baunilha",
    category: "Pratos",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Adega de vinhos do restaurante",
    category: "Ambiente",
  },
  {
    src: "/images/dish-6.jpg",
    alt: "Carré de cordeiro com legumes grelhados",
    category: "Pratos",
  },
]

const categories = ["Todos", "Ambiente", "Pratos", "Cozinha"]

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filtered =
    activeCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <>
      <section className="border-b border-border/50 bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Nossos Espacos
          </p>
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Galeria
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Cada canto do Fogo & Alma foi pensado para proporcionar uma experiencia
            unica. Confira alguns registros do nosso espaco e pratos.
          </p>
        </div>
      </section>

      <section className="border-b border-border/50 bg-background py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-sm px-5 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((image) => (
              <button
                key={image.src}
                onClick={() => setSelectedImage(image.src)}
                className="group mb-4 block w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/20" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-background/80 px-4 py-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {image.category}
                    </p>
                    <p className="text-sm text-foreground">{image.alt}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-background/90 backdrop-blur-sm p-6"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-label="Visualizar imagem em tamanho grande"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground transition-colors hover:text-primary"
            aria-label="Fechar visualizacao"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
