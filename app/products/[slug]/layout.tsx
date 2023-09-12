import products from '~/data/products.json'

export const generateStaticParams = async () => {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <span>Product layout</span>
      {children}
    </div>
  )
}
