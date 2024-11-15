import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Animation404LottieFile } from '@/animations/not-found'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col text-white gap-8">
      <Animation404LottieFile />
      <h1 className="font-bold text-5xl">Pagina não encontrada!</h1>
      <Link href="/">
        <Button variant="secondary" className="flex gap-2 px-4 py-6">
          <ArrowLeft className="w-4 h-4" />
          Ir para página Inicial
        </Button>
      </Link>
    </div>
  )
}
