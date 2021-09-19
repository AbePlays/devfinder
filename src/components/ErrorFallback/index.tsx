import { FunctionComponent } from 'react'
import { FallbackProps } from 'react-error-boundary'

const ErrorFallback: FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div
      className="mt-6 rounded-xl px-6 py-8 bg-gray-50 text-gray-700 dark:bg-grey-light dark:text-gray-300 space-y-2"
      role="alert"
    >
      <p>Something went wrong:</p>
      <pre className="text-red-500">{error.message}</pre>
      <button
        className="bg-btn-primary h-10 px-4 rounded-lg text-white"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  )
}

export default ErrorFallback
