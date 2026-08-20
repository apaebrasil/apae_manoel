import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "../ui/button"

export function ContactMe() {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      <header className="space-y-5">
        <h3 className="text-4xl font-bold text-white">
          Conte para nós o que você precisa.
        </h3>
        <p className="font-medium text-zinc-300">
          A Federação está aqui para orientar, conectar e abrir caminhos.
          Escolha o assunto e nossa equipe encaminhará sua mensagem.
        </p>

        <div className="mt-9 flex flex-col gap-7">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-600/20 p-3.5">
              <Mail className="text-base text-white" size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                E-mail institucional
              </p>
              <p className="text-sm font-medium text-zinc-300">
                contato@fenapaes.org.br
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-600/20 p-3.5">
              <Phone className="text-base text-white" size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Central FENAPAES</p>
              <p className="text-sm font-medium text-zinc-300">
                (61) 3222-1234
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-600/20 p-3.5">
              <MapPin className="text-base text-white" size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Onde estamos</p>
              <p className="text-sm font-medium text-zinc-300">
                DS Ed. Venâncio V, Bloco A, Sala 409 Brasília - DF, 70393-900
              </p>
            </div>
          </div>
        </div>
      </header>

      <aside className="rounded-md bg-blue-950 p-9 shadow-2xl ring-4 shadow-blue-300 ring-blue-200">
        <header className="space-y-2">
          <h3 className="text-xs font-bold text-zinc-200">
            Sua voz move a rede
          </h3>

          <h2 className="text-4xl font-bold text-white">
            Vamos encontrar o caminho juntos.
          </h2>

          <p className="text-sm font-medium text-zinc-300">
            Conte o que trouxe você até a FENAPAES. A sua mensagem será acolhida
            e direcionada para quem pode ajudar.
          </p>
        </header>

        <form action="" className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="" className="text-sm font-semibold text-white">
                Nome completo
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                className="rounded-md border border-blue-300 bg-blue-900/25 px-4 py-2.5 text-base font-medium text-white outline-none"
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="" className="text-sm font-semibold text-white">
                E-mail
              </label>
              <input
                type="email"
                placeholder="voce@exemple.com"
                className="rounded-md border border-blue-300 bg-blue-900/25 px-4 py-2.5 text-base font-medium text-white outline-none"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="" className="text-sm font-semibold text-white">
              Menssagem
            </label>
            <textarea
              placeholder="Escreva sua mensagem aqui...."
              className="h-52 resize-none rounded-md border border-blue-300 bg-blue-900/25 px-4 py-2.5 text-base font-medium text-white outline-none"
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            className="cursor-pointer bg-blue-400 hover:bg-blue-500"
          >
            <Send size={16} className="text-white" />
            <span className="text-base font-semibold text-white">
              Enviar mensagem
            </span>
          </Button>
        </form>
      </aside>
    </div>
  )
}
