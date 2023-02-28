import dynamic from 'next/dynamic'

const CodeSnippet = dynamic(() => import('../components/CodeSnippet'), {
  loading: () => <div>🤖 Setting up code snippets...</div>,
})

export default CodeSnippet
