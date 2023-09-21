import Link from 'next/link'
import { ErrorTrigger, Outline } from '~/components'

import products from '~/data/products.json'

export default async function ProductsPage() {
  return (
    <Outline type="page" title="app/(marketing)/products/page.tsx">
      <ul className="flex gap-8">
        {products.map((product) => (
          <li key={product.slug}>
            <div className="bg-white/10 rounded-lg w-[300px] h-[400px] mb-4"></div>
            <Link
              href={`/products/${product.slug}`}
              className="text-2xl flex gap-2 items-center font-medium group"
            >
              <span className="text-white/70 transition group-hover:text-white">
                {product.title}
              </span>
              <span className="select-none opacity-0 transition group-hover:opacity-100 text-white">
                ↗
              </span>
            </Link>
          </li>
        ))}
        <li>
          <div className="bg-white/10 rounded-lg w-[300px] h-[400px] mb-4"></div>
          <Link
            href={`/products/${'fake-product'}`}
            className="text-2xl flex gap-2 items-center font-medium group"
          >
            <span className="text-white/70 transition group-hover:text-white">
              {'Fake product'}
            </span>
            <span className="select-none opacity-0 transition group-hover:opacity-100 text-white">
              ↗
            </span>
          </Link>
        </li>
      </ul>
    </Outline>
  )
}
