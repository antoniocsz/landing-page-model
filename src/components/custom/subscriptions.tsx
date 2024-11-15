// import Image from 'next/image'
// import Link from 'next/link'

import { Check, X } from 'lucide-react'

import { priceFormatter } from '@/utils/formatter'
import { benefits } from '../../../constants/subscription-plans'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Subscriptions() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#090d23] to-[#1f2b6c]">
      <section className="container h-full justify-between items-center flex flex-col  text-zinc-300 body-font gap-16 py-16 px-4">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="font-bold text-4xl">Planos</h1>
          <p className="font-medium text-xs">
            Conheça nossos planos, e veja o que melhor encaixa com suas
            necessidades.
          </p>
        </div>

        <section className="grid lg:grid-cols-2 gap-4">
          <Card className="flex flex-col bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 data-[recommended=true]:border-l-1 data-[recommended=true]:border-b-1 data-[recommended=true]:border-t-4 data-[recommended=true]:border-r-4 data-[recommended=true]:border-blue-300">
            <CardHeader className="gap-2">
              <div className="flex flex-row justify-between items-center">
                <CardTitle>Gratuito</CardTitle>
              </div>

              <div className="flex flex-row flex-wrap items-center gap-2">
                <CardDescription>
                  <span className="text-4xl">{priceFormatter.format(0)}</span>/
                  mês
                </CardDescription>
              </div>

              <Separator />
            </CardHeader>

            <CardContent className="flex-1">
              <CardTitle>Vantagens:</CardTitle>

              <div className="flex flex-col gap-2 mt-4">
                {benefits.FREE.map((benefit: any, index: number) => (
                  <div
                    key={index}
                    className="w-full flex flex-row gap-2 items-center"
                  >
                    {benefit.active ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <X className="w-4 h-4 text-red-600" />
                    )}
                    <CardDescription>{benefit.benefit}</CardDescription>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Link
                className="w-full"
                href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}`}
              >
                <Button
                  className="w-full py-8 bg-gradient-to-r from-[#081166] to-[#162be5] hover:opacity-80 transition-opacity duration-200"
                  type="button"
                >
                  <div className="flex flex-row  items-center gap-2">
                    <div>
                      <span className="flex flex-col text-md font-semibold uppercase">
                        Acesse GRÁTIS!
                      </span>
                    </div>
                  </div>
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card
            data-recommended={true}
            className="flex flex-col bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 data-[recommended=true]:border-l-1 data-[recommended=true]:border-b-1 data-[recommended=true]:border-t-4 data-[recommended=true]:border-r-4 data-[recommended=true]:border-blue-300"
          >
            <CardHeader className="gap-2">
              <div className="flex flex-row justify-between items-center">
                <CardTitle>PRO</CardTitle>
                <Badge className="py-1 px-4 bg-blue-600">Recomendado</Badge>
              </div>

              <div className="flex flex-row flex-wrap items-center gap-2">
                <CardDescription>
                  <span className="text-4xl">{priceFormatter.format(15)}</span>/
                  mês
                </CardDescription>
              </div>

              <Separator />
            </CardHeader>

            <CardContent className="flex-1">
              <CardTitle>Vantagens:</CardTitle>

              <div className="flex flex-col gap-2 mt-4">
                {benefits.PRO.map((benefit: any, index: number) => (
                  <div
                    key={index}
                    className="w-full flex flex-row gap-2 items-center"
                  >
                    {benefit.active ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <X className="w-4 h-4 text-red-600" />
                    )}
                    <CardDescription>{benefit.benefit}</CardDescription>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Link
                className="w-full"
                href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}`}
              >
                <Button
                  className="w-full py-8 bg-gradient-to-r from-[#081166] to-[#162be5] hover:opacity-80 transition-opacity duration-200"
                  type="button"
                >
                  <div className="flex flex-row  items-center gap-2">
                    <span className="flex flex-col text-md font-bold uppercase">
                      Acesse agora!
                    </span>
                  </div>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </section>
      </section>
    </div>
  )
}
