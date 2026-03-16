import { Navbar } from '@/components/Navbar'

type InfoLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function InfoLayout({ children }: InfoLayoutProps) {
  return (
    <div className="flex h-dvh flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl p-4">{children}</main>
    </div>
  )
}
