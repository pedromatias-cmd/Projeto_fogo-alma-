"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Flame } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/sobre", label: "Sobre" },
  { href: "/reservas", label: "Reservas" },
  { href: "/galeria", label: "Galeria" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Flame className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
          <span className="font-serif text-xl font-bold tracking-wide text-foreground">
            Fogo <span className="text-primary">&</span> Alma
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/reservas"
          className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 md:block"
        >
          Reservar Mesa
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border/50 bg-background px-6 pb-6 pt-4 md:hidden"
          aria-label="Menu mobile"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/reservas"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-sm bg-primary px-5 py-2.5 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reservar Mesa
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
