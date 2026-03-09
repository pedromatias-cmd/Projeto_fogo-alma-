import Image from "next/image"
import type { Metadata } from "next"
import { Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre Nos | Fogo & Alma",
  description: "Conheca a historia e a missao do restaurante Fogo & Alma.",
}

const values = [
  {
    title: "Ingredientes de Origem",
    description:
      "Selecionamos cuidadosamente cada ingrediente, priorizando produtores locais e sazonalidade para garantir frescor e qualidade incomparaveis.",
  },
  {
    title: "Tradicao com Inovacao",
    description:
      "Respeitamos as raizes da culinaria brasileira enquanto exploramos tecnicas contemporaneas que surpreendem e encantam.",
  },
  {
    title: "Experiencia Completa",
    description:
      "Mais do que uma refeicao, oferecemos uma jornada sensorial. Do ambiente acolhedor ao atendimento impecavel, cada detalhe importa.",
  },
]

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-border/50 bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Nossa Historia
          </p>
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Sobre Nos
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg lg:w-1/2">
              <Image
                src="/images/about.jpg"
                alt="Interior acolhedor do restaurante Fogo e Alma"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:w-1/2">
              <Flame className="mb-4 h-8 w-8 text-primary" />
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Uma paixao que nasceu do fogo
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  O Fogo & Alma nasceu em 2018, fruto da paixao do chef Ricardo
                  Monteiro por transformar ingredientes simples em experiencias
                  memoraveis. Filho de uma familia onde a mesa sempre foi o ponto de
                  encontro, Ricardo cresceu entre panelas e temperos, aprendendo que
                  cozinhar e um ato de amor.
                </p>
                <p>
                  Apos anos de formacao em cozinhas renomadas pelo Brasil e Europa,
                  ele decidiu criar um espaco que unisse o aconchego de uma casa com
                  a sofisticacao da alta gastronomia. Assim nasceu o Fogo & Alma -
                  um lugar onde o calor da brasa encontra a delicadeza da tecnica.
                </p>
                <p>
                  Hoje, somos referencia em gastronomia contemporanea com raizes
                  brasileiras. Cada prato que sai da nossa cozinha carrega a
                  dedicacao de uma equipe apaixonada e o respeito por quem nos visita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Missao
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Alimentar a alma atraves do sabor
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Nossa missao e proporcionar momentos unicos onde a comida e o veiculo
            para conexoes verdadeiras. Acreditamos que uma boa refeicao tem o poder
            de transformar um dia comum em uma lembranca especial.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Nossos Valores
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              O que nos move
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border/50 bg-card p-8 text-center"
              >
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
