import { FunctionComponent } from 'react'

const InfoList: FunctionComponent<{
  location: string
  blogUrl: string
  twitter: string
  work: string
}> = ({ location, blogUrl, twitter, work }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      <div
        className={`flex items-center space-x-2 ${
          !location ? 'text-gray-500' : ''
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            !location ? 'text-gray-500' : 'text-black dark:text-white'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <span>{location || 'Not Available'}</span>
      </div>
      <div
        className={`flex items-center space-x-2 ${
          !blogUrl ? 'text-gray-500' : ''
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            !blogUrl ? 'text-gray-500' : 'text-black dark:text-white'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
            clipRule="evenodd"
          />
        </svg>
        <span>{blogUrl || 'Not Available'}</span>
      </div>
      <div
        className={`flex items-center space-x-2 ${
          !twitter ? 'text-gray-500' : ''
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            !twitter ? 'text-gray-500' : 'text-black dark:text-white'
          }`}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
        </svg>
        <span>{twitter || 'Not Available'}</span>
      </div>
      <div
        className={`flex items-center space-x-2 ${
          !work ? 'text-gray-500' : ''
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            !work ? 'text-gray-500' : 'text-black dark:text-white'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
            clipRule="evenodd"
          />
        </svg>
        <span>{work || 'Not Available'}</span>
      </div>
    </div>
  )
}

export default InfoList
