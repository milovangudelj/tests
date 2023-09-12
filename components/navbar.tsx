import Link from 'next/link'

const links = [
  { _id: 'li_01', name: 'Products', href: '/products' },
  { _id: 'li_02', name: 'Login', href: '/login?test=thisisatest' },
]

export const Navbar = () => {
  return (
    <div className="py-4 px-8">
      <div className="flex justify-between max-w-7xl mx-auto">
        <Link href="/">Logo</Link>
        <nav>
          <ul className="flex items-center gap-4">
            {links.map((link) => (
              <li key={link._id}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
