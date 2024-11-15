'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Home, LogIn, Menu, Newspaper, PencilRuler, User } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MenuNavigation } from '@/components/custom/navbar'

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 z-50 items-center justify-between gap-4 bg-current pl-4 md:pl-6">
      {/* Logomarca */}
      <div>
        <div className="hidden lg:flex">
          <Link href="/">
            <Image
              src="/logo_vemplanejar.svg"
              alt="Vem Planejar Logo"
              width={180}
              height={180}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Link href="/">
            <Image
              src="/logo_vp_small.svg"
              alt="Vem Planejar Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>

      <div>
        <div className="flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-4 text-white">
                <Menu />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="min-w-[250px] flex flex-col justify-between mt-1 border-none"
              align="end"
              forceMount
            >
              <DropdownMenuGroup className="flex flex-col gap-0">
                <DropdownMenuItem asChild>
                  <Link href="/#hero-section">
                    <Button
                      variant="ghost"
                      className="w-full flex flex-row font-mono justify-start px-4 py-2 gap-2 text-md"
                    >
                      <Home />
                      HOME
                    </Button>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem disabled asChild>
                  <Link href="/tools">
                    <Button
                      disabled
                      variant="ghost"
                      className="w-full flex flex-row font-mono  justify-start px-4 py-2 gap-2 text-md"
                    >
                      <PencilRuler />
                      FERRAMENTAS
                    </Button>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/blog">
                    <Button
                      variant="ghost"
                      className="w-full flex flex-row font-mono  justify-start px-4 py-2 gap-2 text-md"
                    >
                      <Newspaper />
                      BLOG
                    </Button>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}`}>
                    <Button className="w-full flex flex-row font-mono justify-start px-4 py-2 gap-2 text-md bg-gradient-to-r from-[#171b3d] via-[#404eca] to-[#313fc2] ">
                      <User />
                      ENTRAR
                    </Button>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden lg:block">
          <nav className="flex flex-col sm:flex-row items-center">
            <div className="flex flex-col lg:flex-row items-center">
              <MenuNavigation />

              <Link href="/blog">
                <Button
                  className="h-16 px-8 text-white rounded-none"
                  variant="ghost"
                >
                  Blog
                </Button>
              </Link>
            </div>

            <Link href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}`}>
              <Button className="h-16 gap-4 py-4 px-10 rounded-none bg-gradient-to-r from-[#171b3d] via-[#404eca] to-[#313fc2] hover:opacity-80 transition-opacity duration-200">
                Acesse a sua conta
                <LogIn className="w-4 h-4" />
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
