import Link from 'next/link'
import { getPosts } from '@/services/notion'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { dateFormatter } from '@/utils/formatter'
import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Matérias',
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    siteName: 'VemPlanejar',
    url: `https://vemplanejar.com.br/blog/`,
  },
}

export default async function BlogList() {
  const posts = await getPosts()

  return (
    <>
      <div className="flex flex-col gap-8 min-h-max w-full py-20 px-8">
        <h1 className="text-white font-bold text-5xl">Matérias</h1>

        <div className="w-full grid lg:grid-cols-3 gap-2">
          {posts.map((post) => {
            return (
              <Link
                key={post.id}
                className="w-full h-full"
                href={`/blog/${post.slug}`}
              >
                <Button variant="ghost" className="w-full h-full group" asChild>
                  <Card className="bg-zinc-900 text-white flex flex-col items-start">
                    <CardHeader>
                      <CardTitle className="text-wrap">
                        {post.title.trim()}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid  gap-4">
                        <span className="text-white group-hover:text-zinc-900">
                          {dateFormatter
                            .format(new Date(post.createdAt))
                            .trim()}
                        </span>

                        <div className="flex flex-row gap-1 flex-wrap">
                          {post.tags.map((tag) => (
                            <Badge key={tag} className="text-xs/3 bg-slate-400">
                              #{tag.trim()}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Button>
              </Link>
            )

            // return (
            //   <Link
            //     key={post.id}
            //     href={`/blog/${post.slug}`}
            //     className="flex flex-col items-start gap-12 w-full h-full border p-8 rounded-md hover:opacity-80"
            //   >
            //     <Button
            //       className="text-zinc-200 text-3xl flex flex-wrap text-wrap p-0 m-0"
            //       variant="link"
            //     >
            //       {post.title.trim()}
            //     </Button>

            //     <div className="grid lg:grid-cols-2 gap-4">
            //       <span className="text-white">
            //         {dateFormatter.format(new Date(post.createdAt)).trim()}
            //       </span>

            //       <div className="flex flex-row gap-1 flex-wrap">
            //         {post.tags.map((tag) => (
            //           <Badge key={tag} className="text-xs/3 bg-slate-400">
            //             #{tag.trim()}
            //           </Badge>
            //         ))}
            //       </div>
            //     </div>
            //   </Link>
            // )
          })}
        </div>
      </div>
    </>
  )
}
