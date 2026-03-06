import { Flame } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-bold tracking-wide text-foreground">
              Fogo <span className="text-primary">&</span> Alma
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
            <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/menu" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Menu
            </Link>
            <Link href="/sobre" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Sobre
            </Link>
            <Link href="/reservas" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Reservas
            </Link>
            <Link href="/galeria" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Galeria
            </Link>
          </nav>

          <div className="text-center text-sm text-muted-foreground md:text-right">
            <p>Rua das Oliveiras, 247 - Centro</p>
            <p>contato@fogoealmma.com.br</p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Fogo & Alma Restaurante. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
