import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <section className="min-h-full text-zinc-300">
      <section
        id="rodape"
        className="flex flex-col lg:flex-row bg-slate-800 p-4 justify-between items-center"
      >
        <p className="flex flex-col lg:flex-row items-center text-xs gap-2">
          <Image
            src="/logo_vemplanejar.svg"
            width={100}
            height={100}
            alt="logomarca VemPlanejar"
          />
          |
          <p className="flex flex-row items-center text-xs gap-2">
            @2024 Bahiano Fintech Ltda CPNJ: 49.753.435/0001-04
          </p>
        </p>

        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center ">
          <div className="flex flex-row gap-2">
            <Link href="/privacy-of-politics">
              <Button
                variant="link"
                className="p-0 m-0 text-white flex flex-row items-center text-xs gap-2"
              >
                Políticas de Privacidade
              </Button>
            </Link>

            <Link href="/terms-of-service">
              <Button
                variant="link"
                className="p-0 m-0 text-white flex flex-row items-center text-xs gap-2"
              >
                Termos de Serviço
              </Button>
            </Link>
          </div>

          <span className="inline-flex sm:mt-0 pb-4 sm:pb-0 justify-center sm:justify-start gap-1 items-center">
            <a
              href="https://www.facebook.com/baiainofintech"
              className="text-zinc-300"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/BaianoFintech"
              className="ml-3 text-zinc-300"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/baianofintech/"
              className="ml-3 text-zinc-300"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/baiano-fintech"
              className="ml-3 text-zinc-300"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </section>
    </section>
  )
}
