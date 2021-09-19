import { FunctionComponent } from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: FunctionComponent = () => {
  return (
    <div className="mt-6 rounded-xl px-4 py-8 bg-gray-50 dark:bg-grey-light">
      <ContentLoader
        speed={2}
        viewBox="0 0 400 380"
        backgroundColor="#e3e3e3"
        foregroundColor="#cccbcb"
      >
        <circle cx="40" cy="40" r="40" />
        <rect x="100" y="5" rx="3" ry="3" width="300" height="15" />
        <rect x="100" y="30" rx="3" ry="3" width="145" height="13" />
        <rect x="100" y="55" rx="3" ry="3" width="145" height="13" />
        <rect x="0" y="110" rx="3" ry="3" width="400" height="10" />
        <rect x="0" y="130" rx="3" ry="3" width="400" height="10" />
        <rect x="0" y="150" rx="3" ry="3" width="400" height="10" />

        <rect x="30" y="200" rx="3" ry="3" width="80" height="10" />
        <rect x="50" y="220" rx="3" ry="3" width="40" height="10" />
        <rect x="160" y="200" rx="3" ry="3" width="80" height="10" />
        <rect x="180" y="220" rx="3" ry="3" width="40" height="10" />
        <rect x="280" y="200" rx="3" ry="3" width="80" height="10" />
        <rect x="300" y="220" rx="3" ry="3" width="40" height="10" />

        <circle cx="10" cy="280" r="8" />
        <rect x="25" y="275" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="310" r="8" />
        <rect x="25" y="305" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="340" r="8" />
        <rect x="25" y="335" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="370" r="8" />
        <rect x="25" y="365" rx="5" ry="5" width="220" height="10" />
      </ContentLoader>
    </div>
  )
}

export default Skeleton
