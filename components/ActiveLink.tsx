'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { NavItem } from '@/interfaces/NavItem'

type ActiveLinkProps = Readonly<NavItem>

export const ActiveLink = ({ name, path }: ActiveLinkProps) => {
  const pathName = usePathname()
  const isActive = pathName === path
  const activeClass = isActive ? 'text-blue-500' : ''
  return (
    <Link href={path} className={`font-medium hover:opacity-80 ${activeClass}`}>
      {name}
    </Link>
  )
}
