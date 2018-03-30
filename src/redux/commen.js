import axios from 'axios'
import { FETCH_REQUEST_FAIL } from './action/commen'

// axios.defaults.baseURL = 'http://stage-jyhd.yimifudao.com/'

// 创建reducer
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state
  }
}

// 请求接口
export function fetchProxy (url, prams) {
  return axios.post(url, prams)
  .then( () => {
    return 
  })
}


// 中间
export  function callAPIMiddleware({ dispatch, getState }) {
  return next => async action => {
    const { types, shouldCallAPI = () => true, callAPI, payload = {} } = action
    if (!types) {
      return next(action)
    }
    if (!Array.isArray(types) || types.length !== 2 || !types.every(type => typeof type === 'string')) {
      throw new Error('Eepected an array of three string types')
    }
    if (typeof callAPI !== 'function') {
      throw new Error('Eepected callAPI to be a function.')
    }
    if (!shouldCallAPI(getState())) {
      return
    }

    let result = await callAPI()

    dispatch({
      data: result.data,
      msg: result.msg,
      type: successType,
      payload: payload
    })

  }
}
