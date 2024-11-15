import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { AnimationServiceLottieFile } from '@/animations/services'

const serviceList = [
  {
    value: 'tab1',
    title: 'Lançamentos de movimentações.',
    description:
      'Cadastre todas as suas receitas e despesas para ter o controle sobre sua vida financeira.',
  },
  {
    value: 'tab2',
    title: 'Separe seus lançamentos em carteiras.',
    description:
      'Criação de carteiras para para separar e agrupar suas movimentações.',
  },
  {
    value: 'tab3',
    title: 'Acompanhe o vencimento das contas.',
    description:
      'Evite surpresas! Acompanhe o vencimento das suas contas e receba notificações de pagamento.',
  },
  {
    value: 'tab4',
    title: 'Gere seus relatórios da forma que você quiser.',
    description:
      'Baixe uma planilha ou pdf com suas movimentações por categoria e período.',
  },
  {
    value: 'tab5',
    title: 'Categorize suas receitas e despesas em categorias.',
    description:
      'Separe suas contas em categorias e identifique como anda sua vida financeira.',
  },
  {
    value: 'tab6',
    title: 'Crie limites de gastos mensais.',
    description:
      'Criação de carteiras para para separar e agrupar suas movimentações.',
  },
]

export function Services() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#090d23] via-[#1f2b6c] to-[#090d23]">
      <section className="container h-full justify-between items-center flex flex-col text-zinc-300 body-font gap-12 py-16 px-4">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="font-bold text-4xl">Funcionalidades</h1>
          <p className="font-medium text-xs">
            Conheça um pouco das funcionalidades que estão presentes no nosso
            sistema.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 flex flex-col items-center gap-2">
            <AnimationServiceLottieFile />

            <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}`}>
              <Button className="flex py-6 gap-4 justify-between bg-gradient-to-r from-[#0f20b4]  to-[#4655dd] hover:opacity-80 transition-opacity duration-200">
                Acesse a plataforma e confira!
              </Button>
            </Link>
          </div>

          <div className="lg:col-span-2 grid gap-4 aspect-auto">
            <ul defaultValue="tab1" className="grid lg:grid-cols-3 gap-2 ">
              {serviceList.map((item, index) => (
                <li
                  key={item.value}
                  value={item.value}
                  className="flex flex-col gap-2"
                >
                  <Card className="h-full w-full hover:opacity-90 ">
                    <CardHeader className="flex flex-row justify-between">
                      <CardTitle className="flex gap-4 text-xl font-semibold items-center">
                        <span className="font-bold text-2xl">{index + 1}.</span>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-md">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
