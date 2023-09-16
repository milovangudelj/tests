import Link from 'next/link'
import products from '~/data/products.json'

export default async function ProductsPage() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Products page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
