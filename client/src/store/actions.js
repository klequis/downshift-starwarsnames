import { createRequestThunk, logError } from './action-helpers'
import api from '../api'

/* Dev */
// eslint-disable-next-line
import { orange } from '../logger'

// Clear starwarsNames
export const starwarsNamesClearKey = 'starwarsNamesClearKey'
export const starwarsNamesClear = (starwarsNames) => {
  // orange('** starwarsNamesRead')
  return ({
    type: starwarsNamesClearKey,
  })
}

// Read starwarsNames
export const starwarsNamesReadKey = 'starwarsNamesReadKey'

const starwarsNamesRead = (starwarsNames) => {
  // orange('** starwarsNamesRead')
  return ({
    type: starwarsNamesReadKey,
    payload: { starwarsNames },
  })
}

export const starwarsNamesReadRequestKey = 'starwarsNamesReadRequestKey'

export const starwarsNamesReadRequest = createRequestThunk({
  request: api.starwarsNames.read,
  key: starwarsNamesReadRequestKey,
  success: [ starwarsNamesRead ],
  failure: [ error => logError(error, starwarsNamesReadRequestKey) ]
})