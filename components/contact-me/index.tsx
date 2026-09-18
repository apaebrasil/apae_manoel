"use client"

import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "../ui/button"
import { FormState, sendMail } from "@/app/actions"
import { useActionState, useEffect } from "react"
import { toast } from "../ui/toast"

interface ContactMeProps {
  email: string
  telefone: string
  endereco: string
}

export function ContactMe({ email, endereco, telefone }: ContactMeProps) {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    sendMail,
    null
  )

  useEffect(() => {
    if (!isPending && state?.success) {
      toast.add({
        type: "success",
        title: "Mensagem enviada com sucesso!",
        description: "Recebemos sua dúvida e responderemos em breve.",
      })
    }
  }, [isPending, state])

  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      <header className="space-y-5">
        <h3
          id="contact-me-heading"
          className="text-2xl font-bold text-white lg:text-4xl"
        >
          Conte para nós o que você precisa.
        </h3>
        <p className="font-medium text-white/90">
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
              <p className="text-sm font-medium text-white/90">{email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-600/20 p-3.5">
              <Phone className="text-base text-white" size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Central FENAPAES</p>
              <p className="text-sm font-medium text-white/90">{telefone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-600/20 p-3.5">
              <MapPin className="text-base text-white" size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Onde estamos</p>
              <p className="text-sm font-medium text-white/90">{endereco}</p>
            </div>
          </div>
        </div>
      </header>

      <aside className="rounded-md bg-blue-950 p-9 shadow-2xl ring-4 shadow-blue-300 ring-blue-200">
        <header className="space-y-2">
          <h3 className="text-xs font-bold text-white lg:text-left">
            Sua voz move a rede
          </h3>

          <h2 className="text-2xl font-bold text-white lg:text-left lg:text-4xl">
            Vamos encontrar o caminho juntos.
          </h2>

          <p className="max-w-xl text-justify text-xs font-medium text-white/90 lg:text-sm">
            Conte o que trouxe você até a FENAPAES. A sua mensagem será acolhida
            e direcionada para quem pode ajudar.
          </p>
        </header>

        <form action={formAction} className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="user_name"
                className="text-sm font-semibold text-white"
              >
                Nome completo
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Seu nome"
                className="rounded-md border border-blue-300 bg-blue-900/25 px-4 py-2.5 text-base font-medium text-white outline-none"
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="user_mail"
                className="text-sm font-semibold text-white"
              >
                E-mail
              </label>
              <input
                type="email"
                name="user_mail"
                id="user_mail"
                placeholder="voce@exemple.com"
                className="rounded-md border border-blue-300 bg-blue-900/25 px-4 py-2.5 text-base font-medium text-white outline-none"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label
              htmlFor="user_question"
              className="text-sm font-semibold text-white"
            >
              Menssagem
            </label>
            <textarea
              name="user_question"
              id="user_question"
              placeholder="Escreva sua mensagem aqui...."
              className="h-52 resize-none rounded-md border border-blue-300 bg-blue-900/25 px-4 py-2.5 text-base font-medium text-white outline-none"
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            className="cursor-pointer bg-blue-700 p-6 hover:bg-blue-800"
          >
            <span className="text-base font-semibold text-white">
              Enviar mensagem
            </span>
            <Send size={26} className="text-white" />
          </Button>
        </form>
      </aside>
    </div>
  )
}
