import { notFound } from 'next/navigation'
import { ErrorTrigger, Outline } from '~/components'

import products from '~/data/products.json'

const getProduct = async (slug: string) =>
  products.find((product) => product.slug === slug)

export async function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }))
}

export default async function ProductLayout({
  children,
  params: { slug },
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <Outline type="layout" title="app/(marketing)/products/[slug]/layout.tsx">
      <h1 className="text-4xl font-bold">{product.title}</h1>
      {children}
    </Outline>
  )
}
