import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'

import { getPost, getPosts } from '@/services/notion'
import { dateFormatter } from '@/utils/formatter'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MousePointerClick } from 'lucide-react'

type BlogPostProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const post = await getPost(params.slug)

  return {
    title: post.title,
    description: post.content.substring(0, 100),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 100),
      type: 'article',
      locale: 'pt-BR',
      url: `https://vemplanejar.com.br/blog/${post.slug}`,
      siteName: 'VemPlanejar',
      images: [],
      authors: [post.author],
    },
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.slug)

  return (
    <section className="container w-full h-full flex flex-col aspect-square text-white p-4 pb-8 lg:py-18 lg:px-40 gap-4">
      <div className="flex flex-col py-8 gap-4">
        <h1 className="text-white font-bold text-6xl">{post.title}</h1>

        <div className="flex flex-row gap-3 items-center">
          <Avatar>
            <AvatarImage src={post.authorAvatarUrl} alt="avatar" />
            <AvatarFallback>{post.author}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="text-2xl font-light">{post.author}</span>
          </div>
        </div>

        <span className="text-xs">
          Publicado em {dateFormatter.format(new Date(post.createdAt))}
        </span>

        <div className="flex flex-row gap-1 flex-wrap">
          {post.tags.map((tag: string) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <Separator />
      </div>

      <ReactMarkdown>{post.content}</ReactMarkdown>

      <Card className="my-8">
        <CardHeader>
          <CardTitle>
            Quer dar um salto em direção ao seu futuro financeiro?
          </CardTitle>
          <CardDescription>Não perca mais tempo!</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Cadastre-se agora e descubra como nosso sistema de geração
            financeira pode transformar sua jornada para a independência
            financeira. Com acesso exclusivo a ferramentas poderosas e insights
            especializados, você estará um passo mais perto de alcançar seus
            objetivos financeiros. Não deixe essa oportunidade passar.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-1">
          <div className="flex flex-col items-center">
            <Button
              asChild
              className="lg:px-16 text-wrap py-6 bg-gradient-to-r from-[#090d23] via-[#1f2b6c] to-[#090d23]"
            >
              <Link
                className="w-full flex flex-row gap-2"
                href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}`}
              >
                CADASTRE-SE HOJE
                <MousePointerClick className="animate-bounce" />
              </Link>
            </Button>

            <h1 className="text-xs font-semibold ">
              E comece a construir o futuro que você merece!
            </h1>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
