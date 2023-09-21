import type { Route } from 'next'
import Link from 'next/link'

const links: { _id: string; name: string; href: Route | URL }[] = [
  { _id: 'li_01', name: 'Products', href: '/products' },
  // @ts-ignore
  { _id: 'li_02', name: 'Profile', href: '/profile' },
]

export const DashboardNavbar = () => {
  return (
    <div className="py-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="group flex items-center gap-2">
            <span className="inline-block rounded bg-white/10 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Acme Store logo"
                viewBox="0 0 32 28"
                className="h-4 w-4 fill-black dark:fill-white"
              >
                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
              </svg>
            </span>
          </Link>
          <span className="bg-white/10 rotate-[30deg] leading-none inline-block h-5 w-px"></span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-700 via-purple-500 to-orange-400"></div>
            <span className="text-base">John Doe</span>
          </div>
        </div>
        <nav>
          <ul className="flex items-center">
            {links.map((link) => (
              <li key={link._id}>
                <Link
                  href={link.href}
                  className="text-base font-semibold text-white/70 hover:text-white px-4 py-2 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                // @ts-ignore
                href="/fake-page"
                className="text-base font-semibold text-white/70 hover:text-white px-4 py-2 transition"
              >
                {'Fake page'}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
