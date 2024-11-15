import { z } from 'zod'

const envSchema = z.object({
  NOTION_API_KEY: z.string(),
  NOTION_TOKEN: z.string(),
  BLOG_INDEX_ID: z.string(),
  API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_APP_BASE_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variables.')
}

export const env = parsedEnv.data
