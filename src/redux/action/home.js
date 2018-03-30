import {FETCH_REQUEST_FAIL} from './commen'
import {fetchProxy} from '../commen'

export const FETCH_HOME_DATA = 'HOME_FETCH_HOME_DATA'

export function fetchHomeData (prams = {}) {
  return {
    types: [FETCH_HOME_DATA, FETCH_REQUEST_FAIL],
    callAPI: () => fetchProxy('', prams),
    payload: prams
  }
}

