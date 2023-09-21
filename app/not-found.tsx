import { Navbar, Outline } from '~/components'

export default function NotFound() {
  return (
    <Outline type="404" title="app/not-found.tsx">
      <Navbar />
      <h2 className="text-2xl my-auto self-center font-semibold">
        This page does not exist
      </h2>
    </Outline>
  )
}
