import { notFound } from 'next/navigation'
import products from '~/data/products.json'

const getProduct = async (slug: string) => {
  return products.find((product) => product.slug === slug)
}

export default async function DashboardSubRoute({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const product = await getProduct(slug)

  if (!product) {
    console.log('product not found')
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">{product.title}</h1>
    </main>
  )
}
