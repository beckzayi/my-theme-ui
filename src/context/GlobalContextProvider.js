import React from 'react'
import { TOGGLE_MODE } from '../actions/types'
import { MODE_REST, MODE_GRAPHQL } from '../constants/modes'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  mode: MODE_REST,
}

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_MODE: {
      const newState = {
        ...state,
        mode: state.mode == MODE_REST ? MODE_GRAPHQL : MODE_REST,
      }
      return newState
    }
    default:
      return state
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
