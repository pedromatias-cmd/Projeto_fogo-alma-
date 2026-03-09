"use client"

import { useState } from "react"
import { Clock, MapPin, Phone, Mail } from "lucide-react"

export default function ReservasPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="border-b border-border/50 bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Contato
          </p>
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Reservas
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Reserve sua mesa e garanta uma noite especial. Tambem estamos disponiveis
            para eventos privados e jantares corporativos.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-3/5">
              <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
                Faca sua reserva
              </h2>

              {submitted ? (
                <div className="rounded-lg border border-primary/30 bg-primary/10 p-8 text-center">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Reserva enviada com sucesso!
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Entraremos em contato em breve para confirmar sua reserva.
                    Obrigado por escolher o Fogo & Alma.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-sm bg-primary px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Nova Reserva
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nome completo
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Seu nome"
                        className="rounded-md border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        E-mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="rounded-md border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Telefone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        className="rounded-md border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="guests" className="text-sm font-medium text-foreground">
                        Numero de convidados
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        required
                        className="rounded-md border border-border bg-input px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Selecione</option>
                        <option value="1">1 pessoa</option>
                        <option value="2">2 pessoas</option>
                        <option value="3">3 pessoas</option>
                        <option value="4">4 pessoas</option>
                        <option value="5">5 pessoas</option>
                        <option value="6">6 pessoas</option>
                        <option value="7+">7 ou mais</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="date" className="text-sm font-medium text-foreground">
                        Data
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        className="rounded-md border border-border bg-input px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="time" className="text-sm font-medium text-foreground">
                        Horario preferido
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        className="rounded-md border border-border bg-input px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Selecione</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Observacoes (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Alguma restricao alimentar, ocasiao especial ou pedido..."
                      className="rounded-md border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
                  >
                    Enviar Reserva
                  </button>
                </form>
              )}
            </div>

            <div className="lg:w-2/5">
              <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
                Informacoes
              </h2>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-medium text-foreground">Endereco</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Rua das Oliveiras, 247<br />
                      Centro - Sao Paulo, SP<br />
                      CEP 01234-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-medium text-foreground">Horario de Funcionamento</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Terca a Sabado: 18h as 00h<br />
                      Domingo: 12h as 16h<br />
                      Segunda: Fechado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-medium text-foreground">Telefone</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      (11) 3456-7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-medium text-foreground">E-mail</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      contato@fogoealmma.com.br
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-border/50 bg-card p-6">
                  <h3 className="font-serif text-lg font-semibold text-card-foreground">
                    Eventos Privados
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Dispomos de uma sala privativa para ate 20 convidados, ideal
                    para jantares corporativos, aniversarios e ocasioes especiais.
                    Entre em contato para saber mais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
