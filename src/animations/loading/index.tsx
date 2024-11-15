'use client'

import { useLottie } from 'lottie-react'
import animation from './animation-loading.json'

export function AnimationLoadingLottieFile() {
  const options = {
    animationData: animation,
    loop: true,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}
