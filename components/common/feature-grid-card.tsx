"use client"

import { ServicesItems } from "@/constants/service"
import { DynamicIcon } from "lucide-react/dynamic"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

interface FeatureGridCardProps {
  className?: string
  datas: ServicesItems[]
}

export function FeatureGridCard({ className, datas }: FeatureGridCardProps) {
  return (
    <div className={cn(className)}>
      {datas.map((data, index) => (
        <motion.div
          key={data.href}
          className="group flex h-full flex-col gap-6 overflow-hidden rounded-xl border-2 border-transparent bg-card/80 py-6 text-sm text-card-foreground shadow-xs ring-1 ring-foreground/10 backdrop-blur-sm hover:border-blue-200/20 hover:bg-card"
          role="cards"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px -12px rgba(0,0,0,0.18)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex flex-col gap-1 px-6 pb-4">
            <motion.div
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-200/10 to-blue-500/10 text-primary shadow-lg shadow-primary/5 group-hover:bg-blue-900 group-hover:text-primary-foreground"
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <DynamicIcon name={data.icon} />
            </motion.div>
            <div className="font-heading text-xl leading-normal font-medium transition-colors duration-300 group-hover:text-primary">
              {data.title}
            </div>
            <div className="text-base leading-relaxed text-pretty text-zinc-800">
              {data.description}
            </div>
          </div>

          <div className="px-6">
            <ul
              className="flex flex-wrap gap-2"
              aria-label={`Destaques de ${data.title}`}
            >
              {data.highlights.map((highlight, highlightIndex) => (
                <motion.li
                  key={highlightIndex}
                  className="rounded-full bg-blue-100/50 px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08 + 0.2 + highlightIndex * 0.05,
                    ease: "easeOut",
                  }}
                >
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
