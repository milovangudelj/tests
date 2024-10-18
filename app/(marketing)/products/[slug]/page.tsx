import { notFound } from 'next/navigation'
import { ErrorTrigger, Outline } from '~/components'

import products from '~/data/products.json'

const getProduct = async (slug: string) =>
  products.find((product) => product.slug === slug)

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <Outline type="page" title="app/(marketing)/products/[slug]/page.tsx">
      <div className="bg-white/10 h-[300px] rounded-lg flex items-center justify-center mb-4">
        Product image
      </div>
      <p className="max-w-[600px] text-white/70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        suscipit repellendus alias recusandae aut consequuntur incidunt! Officia
        molestias earum quasi tenetur ad reiciendis illum, distinctio ab nam,
        perferendis fugit provident!
      </p>
    </Outline>
  )
}
