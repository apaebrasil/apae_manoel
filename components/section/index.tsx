"use client"

import { ComponentPropsWithRef } from "react"

type SectionWrapperProps = ComponentPropsWithRef<"section">

export function SectionWrapper({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledby,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={className}
      {...props}
    >
      {children}
    </section>
  )
}
