import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeria | Fogo & Alma",
  description: "Veja fotos do ambiente e dos pratos do restaurante Fogo & Alma.",
}

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
