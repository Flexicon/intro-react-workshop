import Link from 'next/link'
import { useRouter } from 'next/router'
import SeePageSource from './SeePageSource'

const LAST_PAGE = 3

export default function Navigator() {
  const { route } = useRouter()
  const path = route.slice(1)

  const currentPage = parseInt(path) || 0
  const isEnd = path === 'end'
  const hasPrev = currentPage !== 0 || isEnd
  const hasNext = currentPage !== LAST_PAGE

  const prevUrl = !isEnd ? `/${currentPage - 1 || ''}` : `/${LAST_PAGE}`
  const nextUrl = hasNext ? `/${currentPage + 1}` : `/end`

  return (
    <>
      <SeePageSource page={currentPage ? currentPage.toString() : 'index'} />
      <div className="navigator">
        {hasPrev ? <Link href={prevUrl}>⬅️ Previous</Link> : <span />}
        {!isEnd ? <Link href={nextUrl}>Next ➡️</Link> : null}
      </div>
    </>
  )
}
