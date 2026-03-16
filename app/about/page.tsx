import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is the about page',
}

export default function AboutPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-5xl">About Page</p>
    </div>
  )
}
