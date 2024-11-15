'use client'

import { useLottie } from 'lottie-react'
import animation from './animation-hero.json'

export function AnimationHeroLottieFile() {
  const options = {
    animationData: animation,
    loop: true,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}
