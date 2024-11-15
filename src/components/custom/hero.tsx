import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { AnimationHeroLottieFile } from '@/animations/hero'

export function Hero() {
  return (
    <div
      id="hero-section"
      className="w-full h-full bg-gradient-to-r from-[#090d23] to-[#1f2b6c]"
    >
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-24 gap-10 text-zinc-50">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-start gap-6 ">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#4655dd]  to-[#7d87e4] text-transparent bg-clip-text">
                Planeje sua vida
              </span>
              , e tenha o controle{' '}
            </h1>
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#2c8934] via-[#72e97c] to-[#18b124] text-transparent bg-clip-text">
                do seu dinheiro
              </span>
              .
            </h2>
          </main>

          <p className="text-wrap text-xs lg:text-lg text-zinc-300">
            Conquiste seus objetivos financeiros: Desbravando o futuro com nosso
            sistema de planejamento financeiro.
          </p>

          <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}`}>
            <Button className="flex py-6 gap-4 justify-between bg-gradient-to-r from-[#0f20b4]  to-[#4655dd] hover:opacity-80 transition-opacity duration-200">
              Acesse a plataforma!
              <div className="p-1 border bg-gradient-to-r from-[#4655dd] to-[#0f20b4]  rounded-md">
                <ArrowRight />
              </div>
            </Button>
          </Link>
        </div>

        <div className="hidden md:block">
          <AnimationHeroLottieFile />
        </div>
      </section>
    </div>
  )
}
