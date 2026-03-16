import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'This is the contact page',
}

export default function ContactPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-5xl">Contact Page</p>
    </div>
  )
}
