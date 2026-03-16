import Link from 'next/link'
import { Fragment } from 'react'

import { Path } from '@/enums/Path'

interface NavItem {
  name: string
  path: Path
}

const navItems: NavItem[] = [
  { name: 'Home', path: Path.Home },
  { name: 'About', path: Path.About },
  { name: 'Contact', path: Path.Contact },
  { name: 'Pricing', path: Path.Pricing },
]

export const Navbar = () => {
  return (
    <nav className="border-b border-gray-300 dark:border-gray-700">
      <ul className="mx-auto flex w-full max-w-5xl space-x-4 p-4">
        {navItems.map((item, index) => (
          <Fragment key={item.path}>
            <li>
              <Link
                href={item.path}
                className="text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {item.name}
              </Link>
            </li>

            {index === 0 && <span className="grow"></span>}
          </Fragment>
        ))}
      </ul>
    </nav>
  )
}
