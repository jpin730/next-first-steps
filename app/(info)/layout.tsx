type InfoLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function InfoLayout({ children }: InfoLayoutProps) {
  return <div className="flex h-screen items-center justify-center">{children}</div>
}
