import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Interior elegante do restaurante Fogo e Alma"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Gastronomia Contemporanea
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl text-balance">
            Onde cada prato conta uma historia
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Sabores que despertam memorias. Uma experiencia gastronomica que une
            tradicao e inovacao em cada detalhe.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explorar Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/reservas"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Reservar Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Destaques
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Nossos pratos mais amados
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                img: "/images/dish-1.jpg",
                title: "Filet Mignon ao Molho de Vinho",
                desc: "Corte nobre grelhado com reducao de vinho tinto e legumes assados",
              },
              {
                img: "/images/dish-2.jpg",
                title: "Salmao Grelhado",
                desc: "Frescor do atlantico com aspargos e molho de manteiga e limao",
              },
              {
                img: "/images/dish-3.jpg",
                title: "Massa Trufada",
                desc: "Tagliatelle artesanal com creme de trufas negras e parmesao",
              },
            ].map((dish) => (
              <div
                key={dish.title}
                className="group overflow-hidden rounded-lg bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dish.img}
                    alt={dish.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    {dish.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {dish.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary transition-opacity hover:opacity-80"
            >
              Ver menu completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="border-y border-border/50 bg-background py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-3">
          <div className="flex flex-col items-center gap-3 text-center">
            <Clock className="h-6 w-6 text-primary" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Horario</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ter - Dom: 18h as 00h<br />
              Segunda: Fechado
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <MapPin className="h-6 w-6 text-primary" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Localizacao</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Rua das Oliveiras, 247<br />
              Centro - Sao Paulo, SP
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <Phone className="h-6 w-6 text-primary" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Contato</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              (11) 3456-7890<br />
              contato@fogoealmma.com.br
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative flex items-center justify-center overflow-hidden py-28">
        <Image
          src="/images/gallery-3.jpg"
          alt="Sala privativa do restaurante"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Uma experiencia que vai alem do paladar
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Reserve sua mesa e permita-se viver momentos inesqueciveis.
            Cada jantar no Fogo & Alma e uma celebracao dos sentidos.
          </p>
          <Link
            href="/reservas"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Fazer Reserva
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
