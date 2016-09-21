import { combineReducers } from 'redux'

const navigate = (state = {location: '/'}, action) => {
  console.log(action)
  switch (action.type) {
    case 'NAVIGATE_TO':
      return {
        location: action.location
      }
    default:
      return state
  }
}

const navigation = (state = [], action) => {
  console.log(action.type)
  console.log(state)
  switch (action.type) {
    case 'NAVIGATE_TO':
    console.log(`dadiajdiaj`)
      return [
        navigate(undefined, action),
        ...state
      ]
    default:
      return state
  }
}


const RouterApp = combineReducers({
  navigation
})

export default RouterApp
