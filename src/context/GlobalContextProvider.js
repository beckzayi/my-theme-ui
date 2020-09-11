import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  mode: 'rest',
}

function reducer(state, action) {
  console.log(action.type)
  switch (action.type) {
    case 'TOGGLE_MODE': {
      const newState = {
        ...state,
        mode: state.mode == 'rest' ? 'graphql' : 'rest',
      }
      console.log(newState)
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
