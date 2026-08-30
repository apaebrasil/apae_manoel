import { File, FileSpreadsheet, FileText, Image } from "lucide-react"

const FORMAT_ICON: Record<string, typeof FileText> = {
  pdf: FileText,
  doc: FileText,
  docx: FileText,
  xls: FileSpreadsheet,
  xlsx: FileSpreadsheet,
  jpg: Image,
  jpeg: Image,
  png: Image,
}

const FORMAT_COLOR: Record<string, string> = {
  pdf: "bg-red-50 text-red-600",
  doc: "bg-blue-50 text-blue-600",
  docx: "bg-blue-50 text-blue-600",
  xls: "bg-emerald-50 text-emerald-600",
  xlsx: "bg-emerald-50 text-emerald-600",
  jpg: "bg-amber-50 text-amber-600",
  jpeg: "bg-amber-50 text-amber-600",
  png: "bg-amber-50 text-amber-600",
}

interface DocumentIconProps {
  tipo: string
  className?: string
  iconClassName?: string
}

export function DocumentIcon({
  tipo,
  className,
  iconClassName,
}: DocumentIconProps) {
  const tipoNormalizado = tipo?.toLowerCase().trim()
  const Icon = FORMAT_ICON[tipoNormalizado] ?? File
  const colorClass =
    FORMAT_COLOR[tipoNormalizado] ?? "bg-zinc-100 text-zinc-600"

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-lg ${colorClass} ${className ?? "h-10 w-10"}`}
    >
      <Icon className={iconClassName ?? "h-5 w-5"} />
    </div>
  )
}
