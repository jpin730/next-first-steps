import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'This is the pricing page',
}

export default function PricingPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-5xl">Pricing Page</p>
    </div>
  )
}
