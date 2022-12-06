import React from 'react'
import ErrorBoundary from './component/ErrorBoundary'
import Iteration from './component/Iteration'

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Iteration />
      </ErrorBoundary>
    </div>
  )
}

export default App