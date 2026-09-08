"use server"

export type FormState = {
  success: boolean
  message: string
} | null

export async function sendMail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const userName = formData.get("user_name")
  const userMail = formData.get("user_mail")
  const user_question = formData.get("user_question")

  if (!userName || !userMail || !user_question) {
    throw new Error("Falha ao enviar o formulário")
  }

  return {
    success: true,
    message: "Recebemos sua dúvida e responderemos em breve.",
  }
}
