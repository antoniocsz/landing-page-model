import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ferramentas',
}

export default function Tools() {
  return (
    <section className="flex items-start">
      <h1 className="text-white">Lista de Ferramentas</h1>
    </section>
  )
}
