"use client"

import { Radio } from "lucide-react"
import { motion, Variants } from "motion/react"
import { Noticies } from "../news/type"

interface BillboardProps {
  data: Noticies[]
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Billboard({ data }: BillboardProps) {
  const marquee = [...data, ...data]
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex items-center gap-4 overflow-hidden rounded-full border border-border bg-card py-2 pl-2"
    >
      <span className="flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold tracking-wide text-primary-foreground uppercase">
        <Radio className="size-3.5 animate-pulse" aria-hidden />
        Agora
      </span>

      <div className="group relative flex-1 overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 will-change-transform group-hover:paused">
          {marquee.map((item, i) => (
            <span
              key={`${item.id}-${i}`}
              className="flex items-center gap-3 text-sm whitespace-nowrap text-muted-foreground"
            >
              <span
                className="size-1.5 animate-pulse rounded-full bg-blue-400"
                aria-hidden
              />
              <span className="font-medium text-zinc-800">{item.titulo}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
