import { GET_USER, GET_REPOS, SEARCH_USERS, SET_LOADING, CLEAR_USERS } from "../actionTypes"

const handlers = {
  [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}), 
  [GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}), 
  [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}), 
  [SET_LOADING]: state => ({...state, loading: true}), 
  [CLEAR_USERS]: state => ({...state, users: []}),
  DEFAULT: state => state
}

export const githubReducer = (state, action) => {
  
  const handler = handlers[action.type] || handlers.DEFAULT

  return handler(state, action)
}