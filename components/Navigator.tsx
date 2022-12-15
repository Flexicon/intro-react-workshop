import Link from 'next/link'
import { useRouter } from 'next/router'

const LAST_PAGE = 2

export default function Navigator() {
  const { route } = useRouter()

  const currentPage = parseInt(route.slice(1)) || 0
  const hasPrev = currentPage !== 0
  const hasNext = currentPage !== LAST_PAGE

  const prevUrl = `/${currentPage - 1 || ''}`
  const nextUrl = `/${currentPage + 1}`

  return (
    <div className='navigator'>
      {hasPrev ? <Link href={prevUrl}>⬅️ Previous</Link> : <span />}
      {hasNext ? <Link href={nextUrl}>Next ➡️</Link> : null}
    </div>
  )
}
