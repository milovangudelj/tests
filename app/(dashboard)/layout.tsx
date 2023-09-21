import { DashboardNavbar, Outline } from '~/components'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Outline type="layout" title="app/(dashboard)/layout.tsx">
      <DashboardNavbar />
      {children}
    </Outline>
  )
}
