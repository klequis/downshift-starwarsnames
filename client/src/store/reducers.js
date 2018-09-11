import { combineReducers } from 'redux'
import { merge } from 'ramda'
import { reducer as formReducer } from 'redux-form'

import {
  starwarsNamesReadKey,
  starwarsNamesClearKey
} from './actions'

/* Dev */
// eslint-disable-next-line
import { blue } from '../logger'

export const starwarsNames = (state = [], { type, payload }) => {
  switch (type) {
    case starwarsNamesReadKey:
      // blue('postalCodes: payload', payload)
      return payload.starwarsNames
    case starwarsNamesClearKey:
      return []
    default:
      return state
  }
}

const requests = (state = {}, { type, payload, meta }) => {
  switch (type) {
    case 'app/markRequestPending':
      return merge(state, { [meta.key]: { status: 'pending', error: null } })
    case 'app/markRequestSuccess':
      return merge(state, { [meta.key]: { status: 'success', error: null } })
    case 'app/markRequestFailed':
      return merge(state, { [meta.key]: { status: 'failure', error: payload } })
    default:
      return state
  }
}

export default combineReducers({
  starwarsNames,
  requests,
  form: formReducer,
})