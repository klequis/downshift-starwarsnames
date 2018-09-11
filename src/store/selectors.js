// eslint-disable-next-line
import { yellow } from '../logger'

export const getStarwarsNames = (state) => {
  const r = state.starwarsNames || []
  return r
}
