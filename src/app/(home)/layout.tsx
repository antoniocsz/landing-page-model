import { Header } from '@/components/custom/header'
import { Footer } from '@/components/custom/footer'

type LayoutProps = {
  children: React.ReactNode
}

export default function LandingLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="mt-18">{children}</main>
      <Footer />
    </div>
  )
}
