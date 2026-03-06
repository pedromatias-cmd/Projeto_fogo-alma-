import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Menu | Fogo & Alma",
  description: "Explore nosso menu com pratos da gastronomia contemporanea brasileira.",
}

type Dish = {
  name: string
  description: string
  price: string
  image: string
}

type MenuSection = {
  title: string
  items: Dish[]
}

const menuData: MenuSection[] = [
  {
    title: "Entradas",
    items: [
      {
        name: "Bruschetta da Casa",
        description: "Trio de bruschettas com tomate fresco, mussarela de bufala e manjericao sobre pao artesanal tostado.",
        price: "R$ 38",
        image: "/images/dish-5.jpg",
      },
      {
        name: "Tabua de Frios Artesanal",
        description: "Selecao de queijos e embutidos curados, acompanhados de figos, mel e crackers.",
        price: "R$ 62",
        image: "/images/gallery-4.jpg",
      },
    ],
  },
  {
    title: "Pratos Principais",
    items: [
      {
        name: "Filet Mignon ao Molho de Vinho",
        description: "Corte nobre grelhado no ponto, servido com reducao de vinho tinto, legumes assados e microverdes.",
        price: "R$ 98",
        image: "/images/dish-1.jpg",
      },
      {
        name: "Salmao Grelhado",
        description: "Frescor do Atlantico com aspargos grelhados e molho delicado de manteiga com limao siciliano.",
        price: "R$ 89",
        image: "/images/dish-2.jpg",
      },
      {
        name: "Massa Trufada",
        description: "Tagliatelle artesanal com creme de trufas negras e lascas generosas de parmesao.",
        price: "R$ 78",
        image: "/images/dish-3.jpg",
      },
      {
        name: "Carré de Cordeiro",
        description: "Cordeiro ao alecrim e alho, servido com pure de batatas e legumes grelhados na brasa.",
        price: "R$ 112",
        image: "/images/dish-6.jpg",
      },
    ],
  },
  {
    title: "Sobremesas",
    items: [
      {
        name: "Petit Gateau",
        description: "Bolo quente de chocolate com coracao derretido, acompanhado de sorvete de baunilha e coulis de framboesa.",
        price: "R$ 42",
        image: "/images/dish-4.jpg",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <>
      <section className="border-b border-border/50 bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Cardapio
          </p>
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Nosso Menu
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Cada prato e preparado com ingredientes selecionados e o cuidado de quem
            ama cozinhar. Sabores que traduzem a nossa essencia.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          {menuData.map((section) => (
            <div key={section.title} className="mb-20 last:mb-0">
              <div className="mb-10 flex items-center gap-4">
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {section.title}
                </h2>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="flex flex-col gap-8">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex flex-col gap-5 rounded-lg bg-card p-4 transition-colors hover:bg-secondary sm:flex-row sm:items-center"
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-md sm:w-40">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-serif text-lg font-semibold text-card-foreground">
                          {item.name}
                        </h3>
                        <span className="shrink-0 font-serif text-lg font-bold text-primary">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/50 bg-secondary py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Nosso menu pode sofrer alteracoes de acordo com a sazonalidade dos ingredientes.
            Informe o garcom sobre alergias ou restricoes alimentares.
          </p>
        </div>
      </section>
    </>
  )
}
