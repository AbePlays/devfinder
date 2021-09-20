import { FunctionComponent } from 'react'

import InfoList from '../InfoList'

interface Props {
  userResource: {
    read: () => User
  }
}

const UserInfo: FunctionComponent<Props> = ({ userResource }) => {
  const user = userResource.read()
  const date = new Date(user.created_at)
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="mt-6 rounded-xl px-6 py-8 bg-gray-50 text-gray-700 dark:bg-grey-light dark:text-gray-300">
      <div className="flex items-center">
        <img
          className="w-20 rounded-full"
          src={user.avatar_url}
          alt="user avatar"
        />
        <div className="ml-6">
          <h2 className="text-black dark:text-white text-xl">{user.name}</h2>
          <a
            className="text-btn-primary"
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            @{user.login}
          </a>
          <span className="block">Joined {formattedDate}</span>
        </div>
      </div>
      <p className={`mt-8 break-words ${!user.bio ? 'text-gray-500' : ''}`}>
        {user.bio || 'This profile has no bio'}
      </p>
      <div className="bg-gray-100 dark:bg-grey-dark rounded-xl flex justify-between my-6 px-4 sm:px-8 py-4 text-center">
        <div>
          <h2>Repos</h2>
          <span className="font-bold text-xl text-black dark:text-white">
            {user.public_repos}
          </span>
        </div>
        <div>
          <h2>Followers</h2>
          <span className="font-bold text-xl text-black dark:text-white">
            {user.followers}
          </span>
        </div>
        <div>
          <h2>Following</h2>
          <span className="font-bold text-xl text-black dark:text-white">
            {user.following}
          </span>
        </div>
      </div>
      <InfoList
        location={user.location}
        blogUrl={user.blog}
        twitter={user.twitter_username}
        work={user.company}
      />
    </div>
  )
}

export default UserInfo
