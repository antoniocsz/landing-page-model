import { AnimationLoadingLottieFile } from '@/animations/loading'

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col text-white gap-8">
      <AnimationLoadingLottieFile />
      <h1 className="font-bold text-5xl">Carregando!</h1>
    </div>
  )
}
