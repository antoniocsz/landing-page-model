'use client'

import { useLottie } from 'lottie-react'
import womanScrollOnTopDashboard from './animation-services.json'

export function AnimationServiceLottieFile() {
  const options = {
    animationData: womanScrollOnTopDashboard,
    loop: true,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}
