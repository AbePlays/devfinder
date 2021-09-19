import { FunctionComponent } from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: FunctionComponent = () => {
  return (
    <div className="mt-6 rounded-xl px-6 py-8 bg-gray-50 dark:bg-grey-light">
      <ContentLoader
        speed={2}
        viewBox="0 0 400 300"
        backgroundColor="#e3e3e3"
        foregroundColor="#cccbcb"
      >
        <circle cx="30" cy="30" r="30" />
        <rect x="80" y="10" rx="3" ry="3" width="320" height="7" />
        <rect x="80" y="25" rx="3" ry="3" width="160" height="7" />
        <rect x="80" y="40" rx="3" ry="3" width="160" height="7" />
        <rect x="0" y="80" rx="3" ry="3" width="400" height="7" />
        <rect x="0" y="95" rx="3" ry="3" width="400" height="7" />
        <rect x="0" y="110" rx="3" ry="3" width="400" height="7" />

        <rect x="30" y="150" rx="3" ry="3" width="80" height="7" />
        <rect x="50" y="165" rx="3" ry="3" width="40" height="7" />
        <rect x="160" y="150" rx="3" ry="3" width="80" height="7" />
        <rect x="180" y="165" rx="3" ry="3" width="40" height="7" />
        <rect x="280" y="150" rx="3" ry="3" width="80" height="7" />
        <rect x="300" y="165" rx="3" ry="3" width="40" height="7" />

        <circle cx="10" cy="210" r="8" />
        <rect x="35" y="206" rx="5" ry="5" width="220" height="7" />
        <circle cx="10" cy="235" r="8" />
        <rect x="35" y="231" rx="5" ry="5" width="220" height="7" />
        <circle cx="10" cy="260" r="8" />
        <rect x="35" y="256" rx="5" ry="5" width="220" height="7" />
        <circle cx="10" cy="285" r="8" />
        <rect x="35" y="281" rx="5" ry="5" width="220" height="7" />
      </ContentLoader>
    </div>
  )
}

export default Skeleton
