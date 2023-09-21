import { Outline } from '~/components'

/**
 * This won't be used unless there's a sub-route under `/profile` that calls the `notFound` function.
 */

export default function ProductNotFound() {
  return (
    <Outline type="404" title="app/(dashboard)/profile/not-found.tsx">
      <h2 className="text-2xl my-auto self-center font-semibold">
        This page does not exist
      </h2>
    </Outline>
  )
}
