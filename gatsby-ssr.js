import React from 'react'

const GlobalContextProvider = require('./src/context/GlobalContextProvider')
  .default

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
