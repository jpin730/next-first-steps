import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'This is the pricing page',
}

export default function PricingPage() {
  return <p className="text-5xl">Pricing Page</p>
}
