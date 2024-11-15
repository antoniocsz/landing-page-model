import { env } from '@/env'

export async function api(path: string, init: RequestInit) {
  const baseUrl = env.API_BASE_URL
  const url = new URL(path, baseUrl)

  const response = await fetch(url, init)

  return response
}
