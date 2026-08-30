"use client"

import { usePathname, useSearchParams } from "next/navigation"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import clsx from "clsx"

interface PaginationControlsProps {
  totalPages: number
}

const SIBLING_COUNT = 1

type PageEntry = number | "ellipsis"

function getPageNumbers(currentPage: number, totalPages: number): PageEntry[] {
  const totalVisible = SIBLING_COUNT * 2 + 5

  if (totalPages <= totalVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSibling = Math.max(currentPage - SIBLING_COUNT, 1)
  const rightSibling = Math.min(currentPage + SIBLING_COUNT, totalPages)

  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < totalPages - 2

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + SIBLING_COUNT * 2
    return [
      ...Array.from({ length: leftItemCount }, (_, i) => i + 1),
      "ellipsis",
      totalPages,
    ]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + SIBLING_COUNT * 2
    return [
      1,
      "ellipsis",
      ...Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      ),
    ]
  }

  return [
    1,
    "ellipsis",
    ...Array.from(
      { length: rightSibling - leftSibling + 1 },
      (_, i) => leftSibling + i
    ),
    "ellipsis",
    totalPages,
  ]
}

export function PaginationControls({ totalPages }: PaginationControlsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get("page")) || 1

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  if (totalPages <= 1) {
    return null
  }

  const pages = getPageNumbers(currentPage, totalPages)

  return (
    <div className="mt-4 border-t border-blue-900/10 pt-8">
      <div className="overflow-x-auto">
        <Pagination className="w-max min-w-full">
          <PaginationContent className="gap-1 sm:gap-2">
            <PaginationItem>
              <PaginationPrevious
                text="Anterior"
                size="lg"
                href={createPageURL(currentPage - 1)}
                aria-disabled={currentPage <= 1}
                className={clsx(
                  "rounded-full border border-blue-200 text-blue-900 hover:border-blue-300 hover:bg-blue-50",
                  currentPage <= 1 && "pointer-events-none opacity-40"
                )}
              />
            </PaginationItem>

            {pages.map((page, index) =>
              page === "ellipsis" ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis className="text-blue-900/40" />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    size="icon-lg"
                    href={createPageURL(page)}
                    isActive={currentPage === page}
                    className={clsx(
                      "shrink-0 rounded-full font-semibold transition-colors",
                      currentPage === page
                        ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30 hover:bg-blue-700 hover:text-white"
                        : "border-transparent text-blue-900/70 hover:bg-blue-50 hover:text-blue-900"
                    )}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                text="Próximo"
                size="lg"
                href={createPageURL(currentPage + 1)}
                aria-disabled={currentPage >= totalPages}
                className={clsx(
                  "rounded-full border border-blue-200 text-blue-900 hover:border-blue-300 hover:bg-blue-50",
                  currentPage >= totalPages && "pointer-events-none opacity-40"
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
