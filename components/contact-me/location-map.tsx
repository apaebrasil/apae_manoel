import { Globe, Compass, ShieldCheck } from "lucide-react"

export function LocationMap() {
  // Coordenadas geográficas reais e exatas do Edifício Venâncio IV (SDS Bloco Q)
  const lat = -15.795991
  const lng = -47.884884
  const label = "FENAPAES - Edifício Venâncio IV"

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

  const mapIframeSrc = `https://maps.google.com/maps?q=${lat},${lng}+(${encodeURIComponent(
    label
  )})&z=18&t=h&output=embed`

  return (
    <div className="group relative col-span-full perspective-distant">
      <div className="bg-linera-to-r absolute -inset-2 rounded-3xl from-blue-600/0 via-blue-500/0 to-cyan-500/0 opacity-0 blur-xl transition-all duration-700 group-hover:from-blue-600/20 group-hover:via-blue-500/10 group-hover:to-cyan-500/20 group-hover:opacity-100" />

      <div className="relative h-120 w-full overflow-hidden rounded-2xl border border-blue-900/40 bg-slate-950 p-2 shadow-2xl transition-all duration-500 ease-out transform-3d group-hover:border-blue-400/60 group-hover:shadow-[0_45px_70px_-15px_rgba(37,99,235,0.35)]">
        <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-tr from-blue-950/20 via-transparent to-white/5 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[4rem_4rem] opacity-20" />

        <div className="pointer-events-none absolute top-4 left-4 z-20 h-4 w-4 border-t-2 border-l-2 border-blue-500/40 transition-colors duration-500 group-hover:border-blue-400" />
        <div className="pointer-events-none absolute top-4 right-4 z-20 h-4 w-4 border-t-2 border-r-2 border-blue-500/40 transition-colors duration-500 group-hover:border-blue-400" />
        <div className="pointer-events-none absolute bottom-4 left-4 z-20 h-4 w-4 border-b-2 border-l-2 border-blue-500/40 transition-colors duration-500 group-hover:border-blue-400" />
        <div className="pointer-events-none absolute right-4 bottom-4 z-20 h-4 w-4 border-r-2 border-b-2 border-blue-500/40 transition-colors duration-500 group-hover:border-blue-400" />

        {/* 6. Barra HUD Inferior com Telemetria e Coordenadas Digitais */}
        <div className="pointer-events-none absolute right-4 bottom-4 left-4 z-20 flex items-center justify-between font-mono text-[9px] font-bold tracking-widest text-zinc-400">
          {/* Dados de Latitude e Longitude Estilo Computador de Bordo */}
          <div className="hidden items-center gap-4 rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1.5 backdrop-blur-sm sm:flex">
            <div className="flex items-center gap-1 text-blue-400">
              <Compass size={10} />
              <span>LAT:</span>
              <span className="text-white">{lat.toFixed(6)}</span>
            </div>
            <div className="flex items-center gap-1 text-cyan-400">
              <span>LNG:</span>
              <span className="text-white">{lng.toFixed(6)}</span>
            </div>
          </div>

          {/* Status de Conexão Ativa */}
          <div className="mx-auto flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/80 px-4 py-1 text-blue-400 uppercase backdrop-blur-md transition-all duration-500 group-hover:border-blue-400 group-hover:text-white sm:mx-0">
            <ShieldCheck size={10} className="text-emerald-400" />
            <span>SYSTEM ONLINE</span>
          </div>
        </div>

        <div className="h-full w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
          <iframe
            title="Visor Tático FENAPAES"
            src={mapIframeSrc}
            className="h-full w-full border-0 opacity-80 brightness-[0.75] contrast-[1.2] grayscale-15 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:brightness-[0.95] group-hover:contrast-[1.05] group-hover:grayscale-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>

      <div className="pointer-events-none absolute top-4 right-4 left-4 z-20 flex flex-col justify-end gap-4 sm:flex-row sm:items-start">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center gap-2.5 rounded-xl border border-blue-400/30 bg-blue-600/90 px-5 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/40 active:translate-y-0"
        >
          <Globe size={14} className="animate-spin-[15s]" />
          Navegar via GPS
        </a>
      </div>
    </div>
  )
}
