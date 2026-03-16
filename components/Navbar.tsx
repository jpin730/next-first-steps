import { Fragment } from 'react'

import { ActiveLink } from './ActiveLink'
import { Path } from '@/enums/Path'
import type { NavItem } from '@/interfaces/NavItem'

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
              <ActiveLink {...item} />
            </li>

            {index === 0 && <span className="grow"></span>}
          </Fragment>
        ))}
      </ul>
    </nav>
  )
}
