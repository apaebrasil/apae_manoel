"use client"

import { cleanHTML } from "@/lib/clean-html"
import { NewsContent as NewsContentJson } from "@/services/get-news"
import Image from "next/image"

interface NewsContentProps {
  newsContent: NewsContentJson[]
}

export function NewsContent({ newsContent }: NewsContentProps) {
  return (
    <div className="mt-8 space-y-4 text-base leading-relaxed text-blue-950/80">
      {newsContent.map((content) => (
        <div key={content.id}>
          {content.type === "paragraph" && (
            <p className="text-base leading-relaxed font-normal text-zinc-800">
              {cleanHTML(content.data.text).trim()}
            </p>
          )}

          {content.type === "header" && (
            <header>
              <h2 className="text-2xl font-semibold text-black">
                {content.data.text}
              </h2>
            </header>
          )}

          {content.type === "image" && (
            <Image
              width={500}
              height={500}
              alt={content.data.caption}
              src={content.data.file.url}
              quality={2500}
              className="h-fit w-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  )
}
