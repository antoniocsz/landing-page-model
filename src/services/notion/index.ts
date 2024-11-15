'use server'

import { env } from '@/env'
import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

const notion = new Client({ auth: env.NOTION_API_KEY })

export async function getPosts(): Promise<
  Array<{
    id: string
    createdAt: string
    title: string
    slug: string
    tags: string[]
  }>
> {
  const databaseId = '5467efaad47f4da8866921566bf1ccc4'
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
  })

  const typeResponse = response as unknown as any

  return typeResponse.results.map((post: any) => {
    return {
      id: post.id,
      createdAt: post?.properties?.date.date.start, // post.created_time,
      title: post?.properties?.title?.title[0]?.plain_text,
      slug: post?.properties?.slug?.rich_text[0]?.plain_text,
      tags: post?.properties?.tags?.multi_select?.map((tag: any) => tag.name),
    }
  })
}

export async function getPost(slug: string) {
  const n2m = new NotionToMarkdown({ notionClient: notion })
  const databaseId = '5467efaad47f4da8866921566bf1ccc4'
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    },
  })

  const pageId = response.results[0].id

  const mdblocks = await n2m.pageToMarkdown(pageId)
  const mdString = await n2m.toMarkdownString(mdblocks)

  const typeResponse = response.results[0] as unknown as any

  return {
    content: mdString.parent,
    createdAt: typeResponse?.properties?.date.date.start, // typeResponse.created_time,
    title: typeResponse?.properties?.title?.title[0]?.plain_text,
    slug: typeResponse?.properties?.slug?.rich_text[0]?.plain_text,
    author: typeResponse.properties?.authors.people[0].name,
    authorAvatarUrl: typeResponse.properties?.authors.people[0].avatar_url,
    tags: typeResponse?.properties?.tags?.multi_select?.map(
      (tag: any) => tag.name,
    ),
  }
}
