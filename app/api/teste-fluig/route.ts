export async function GET() {
  try {
    const response = await fetch(
      "https://fluigdev.apaebrasil.org.br/volume/stream/private/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0xNDEyJnZlcj0xMDAwJmZpbGU9V0lOXzIwMjYwMzExXzExXzQzXzAwX1Byby5qcGcmY3JjPTAmc2l6ZT0wLjE1MjU4NSZ1SWQ9NSZmU0lkPTEmdVNJZD0xJmQ9ZmFsc2UmdGtuPSZwdWJsaWNVcmw9ZmFsc2UmYXR0YWNoPWZhbHNl.jpg"
    )
    return Response.json({ status: response.status, ok: response.ok })
  } catch (error) {
    return Response.json({
      erro: error instanceof Error ? error.message : String(error),
    })
  }
}
