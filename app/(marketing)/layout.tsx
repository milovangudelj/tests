import { Navbar, Outline } from '~/components'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Outline type="layout" title="app/(marketing)/layout.tsx">
      <Navbar />
      {children}
    </Outline>
  )
}
