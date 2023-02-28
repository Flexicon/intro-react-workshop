import dynamic from 'next/dynamic'

const CodeSnippet = dynamic(() => import('../components/CodeSnippet'), {
  loading: () => <pre>🤖 Setting up code snippets...</pre>,
})

export default CodeSnippet
