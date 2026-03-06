import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reservas | Fogo & Alma",
  description: "Reserve sua mesa no restaurante Fogo & Alma. Gastronomia contemporanea com alma brasileira.",
}

export default function ReservasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
