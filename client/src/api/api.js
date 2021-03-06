import fetchPostalCodes from './fetchPostalCodes'


/* Dev */
// eslint-disable-next-line
import { pink } from '../logger'
import { fetchJson } from './api-helpers';

export default {
  starwarsNames: {
    read: async (startsWith) => {
      // pink('starwarsNames')
      const data = await fetchJson(
        `/starwars/${startsWith}`,
        {
          method: 'GET',
        }
      )
      // pink('starwarsNames: data', data.data)
      return data.data
    }
  },
  postalCodes: {
    read: async (searchString) => {
      const a = await fetchPostalCodes(searchString)
      // pink('a', a)
      if (a === undefined) {
        return []
      }
      return a
    }
  },
}
