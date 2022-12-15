type Props = {
  page: string
}

export default function SeePageSource({ page }: Props) {
  return (
    <p className="text-right">
      See <code>pages/{page}.tsx</code> for the source.
    </p>
  )
}
