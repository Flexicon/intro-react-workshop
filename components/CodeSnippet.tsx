import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = {
  children: string | string[]
}

export default function CodeSnippet({ children }: Props) {
  return (
    <SyntaxHighlighter language="tsx" style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  )
}
