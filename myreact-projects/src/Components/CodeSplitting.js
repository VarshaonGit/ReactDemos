import React, { Suspense } from 'react'
import ErrorBoundary from '../Components/ErrorBoundary'

export default function CodeSplitting() {
  const MyComponent =React.lazy(()=>import ('./MyComponent'))
  return (
    <div>
      <ErrorBoundary>  
      <Suspense fallback={<p>Data Loading..</p>} >
      <MyComponent />
      </Suspense>
      </ErrorBoundary >  
    </div>
  )
}
