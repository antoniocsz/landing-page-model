import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculadora de juros simples',
}

export default function SimpleInterestCalc() {
  return (
    <section className="h-screen">
      <h1 className="text-white">Cálculo de Juros Simples</h1>
    </section>
  )
}
