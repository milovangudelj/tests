import { ErrorTrigger } from '~/components'

interface OutlineProps {
  children: React.ReactNode
  title?: string
  type: 'page' | 'layout' | 'error' | '404'
}

const styles: {
  [key in OutlineProps['type']]: { outline: string; label: string }
} = {
  page: {
    outline: 'flex-1 border-purple-950/50 border-solid',
    label: 'bg-purple-950 text-purple-500',
  },
  layout: {
    outline: 'flex-1 border-purple-950/50 border-solid',
    label: 'bg-purple-950 text-purple-500',
  },
  error: {
    outline: 'border-red-950/50 border-solid',
    label: 'bg-red-950 text-red-500',
  },
  404: {
    outline: 'flex-1 border-zinc-900 border-dashed',
    label: 'bg-zinc-900 text-white/40',
  },
}

export const Outline = ({
  children,
  title = 'layout.tsx',
  type = 'layout',
}: OutlineProps) => {
  return (
    <div
      className={`flex flex-col rounded-lg mt-8 relative p-4 pt-8 border ${styles[type].outline}`}
    >
      <div className="absolute flex items-center gap-2 top-0 left-4 -translate-y-1/2">
        <span
          className={`rounded text-sm leading-none p-1 ${styles[type].label}`}
        >
          {title}
        </span>
        {type !== 'error' && type !== '404' && (
          <ErrorTrigger message={`Something went wrong inside ${title}`} />
        )}
      </div>
      {children}
    </div>
  )
}
