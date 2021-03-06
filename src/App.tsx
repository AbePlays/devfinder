import {
  FunctionComponent,
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  useTransition,
} from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from './components/ErrorFallback'
import Skeleton from './components/Skeleton'
const UserInfo = lazy(() => import('./components/UserInfo'))
import { createUserResource } from './components/UserInfo/helper'
import './index.css'

const App: FunctionComponent = () => {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [userResource, setUserResource] = useState<any>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isPending, startTransition] = useTransition()

  const clickHandler = () => {
    const htmlEl = document.querySelector('html')
    if (htmlEl) {
      const { className } = htmlEl
      htmlEl.className = className === 'dark' ? '' : 'dark'
    }
    setIsDark((prev) => !prev)
  }

  const submitHandler = (event: any) => {
    event.preventDefault()
    const { Username } = event.target.elements
    const name = Username.value
    startTransition(() => {
      setUserResource(createUserResource(name))
    })
  }

  useEffect(() => {
    let darkMode = false
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      darkMode = true
    } else {
      document.documentElement.classList.remove('dark')
      darkMode = false
    }
    setIsDark(darkMode)
  }, [])

  return (
    <div className="dark:bg-grey-dark dark:text-white px-4 py-10 min-h-screen">
      <div className="max-w-screen-sm mx-auto">
        <header>
          <nav className="flex items-center justify-between">
            <h1 className="font-bold text-4xl">devfinder</h1>
            <button
              className="flex items-center font-mono tracking-widest"
              onClick={clickHandler}
            >
              {isDark ? 'LIGHT' : 'DARK'}
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 ml-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 ml-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </nav>
        </header>
        <main>
          <form className="relative mt-8" onSubmit={submitHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 absolute top-3 left-2"
              fill="transparent"
              viewBox="0 0 24 24"
              stroke="#0e79fe"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <label htmlFor="Username"></label>
            <input
              id="Username"
              className="w-full pl-10 pr-24 py-3 rounded-xl bg-gray-100 dark:bg-grey-light dark:placeholder-white outline-none focus:ring-2 focus:ring-gray-500"
              ref={inputRef}
              type="text"
              placeholder="Search GitHub username..."
            />
            <button
              className="absolute top-1 right-1 bg-btn-primary hover:opacity-80 transition-opacity duration-300 h-10 w-20 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed "
              disabled={isPending}
              type="submit"
            >
              Search
            </button>
          </form>
          {userResource ? (
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {
                setUserResource(null)
                inputRef.current?.focus()
              }}
            >
              <Suspense fallback={<Skeleton />}>
                <UserInfo userResource={userResource} />
              </Suspense>
            </ErrorBoundary>
          ) : null}
        </main>
      </div>
    </div>
  )
}

export default App
