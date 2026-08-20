"use client"

import { motion } from "motion/react"
import { AnimatedCounter } from "../animate"

interface ImpactStatCardProps {
  value: number
  label: string
  description: string
  suffix?: string
}

export function ImpactStatCard({
  stat,
  index,
}: {
  stat: ImpactStatCardProps
  index: number
}) {
  return (
    <motion.section
      key={index}
      className="rounded-xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm transition-colors hover:bg-primary-foreground/15 md:p-8"
      role="listitem"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onReset={() => {
        return { opacity: 0, y: 24 }
      }}
    >
      <div className="mb-2 text-4xl font-bold text-accent md:text-4xl">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </div>
      <h3 className="mb-1 text-lg font-semibold text-zinc-300">{stat.label}</h3>
      <p className="text-sm text-primary-foreground/70">{stat.description}</p>
    </motion.section>
  )
}
