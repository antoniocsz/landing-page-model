import Link from 'next/link'
import { Headset } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ContactUs() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#090d23] via-[#1f2b6c] to-[#090d23]">
      <section className="container h-full justify-center flex flex-col md:flex-row body-font p-2 shadow-md">
        <div className="flex flex-col p-14 gap-8 px-10 rounded-md items-center">
          <div className="flex flex-col col-span-2 gap-4 justify-center items-center">
            <h1 className="inline text-4xl font-semibold bg-gradient-to-r from-[#5f6ce4] to-[#7f86c7] text-transparent bg-clip-text">
              Dúvidas?
            </h1>

            <p className="text-lg text-center lg:text-start font-medium text-zinc-200">
              Caso tenha ficado com alguma dúvida sobre o uso do app, nossa
              Central de ajuda possui várias dicas incríveis para você
              aproveitar o VemPlanejar ao máximo!
            </p>
          </div>

          <Button
            asChild
            className="w-fit px-8 bg-gradient-to-r from-[#081166] to-[#162be5] hover:opacity-80 transition-opacity duration-200"
          >
            <Link className="flex py-8 gap-2 font-bold" href="/faq">
              Central de Ajuda
              <Headset className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
