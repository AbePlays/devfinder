export const createUserResource = (username: string) => {
  return createResource(fetchUser(username))
}

const fetchUser = (username: string) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((res) => {
      if ('id' in res) {
        return res
      }
      return Promise.reject(new Error('User not found'))
    })
}

export const createResource = (promise: Promise<any>) => {
  let status = 'pending'
  let result = promise.then(
    (resolved) => {
      status = 'success'
      result = resolved
    },
    (rejected) => {
      status = 'error'
      result = rejected
    }
  )
  return {
    read() {
      if (status === 'pending') throw result
      if (status === 'error') throw result
      if (status === 'success') return result
      throw new Error('This should be impossible')
    },
  }
}
