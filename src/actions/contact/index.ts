'use server'

import { api } from '@/services/fetch-api'

type FormProps = {
  name: string
  email: string
  type: string
  message: string
}

export async function postContactForm({
  name,
  email,
  type,
  message,
}: FormProps) {
  const response = await api('/contact', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      type,
      message,
    }),
  })

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`)
  }
}
