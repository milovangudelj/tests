import { ErrorTrigger, Outline } from '~/components'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Outline type="layout" title="app/(marketing)/products/layout.tsx">
      <h1 className="text-4xl font-bold">Our products</h1>
      {children}
    </Outline>
  )
}
