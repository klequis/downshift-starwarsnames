// import { parse } from './cookie-parser'
/* Dev */
// eslint-disable-next-line
import { pink } from '../logger'

const rejectErrors = (res) => {
  const { status } = res
  if (status >= 200 && status < 300) {
    return res
  }
  return Promise.reject({
    statusText: res.statusText,
    status: res.status,
  })
}

export const fetchJson = (url, options = {}) => {
  let headers = {
    ...options.headers,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  return (
    fetch(url, {
      ...options,
      credentials: 'include',
      headers,
    }).then(rejectErrors)
      .then((res) => res.json())
  )
}

export default { fetchJson }
