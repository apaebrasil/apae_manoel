"use client"

import { useEffect, useRef } from "react"
import { animate, useInView } from "motion/react"

type AnimatedCounterProps = {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const node = ref.current

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        node.textContent = Math.round(latest).toLocaleString("pt-BR")
      },
    })

    return () => controls.stop()
  }, [isInView, value, duration])

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  )
}
