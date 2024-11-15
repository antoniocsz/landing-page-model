'use client'

import { useLottie } from 'lottie-react'
import animation from './animation-404.json'

export function Animation404LottieFile() {
  const options = {
    animationData: animation,
    loop: true,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}
