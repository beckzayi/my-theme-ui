import React, { useContext } from 'react'
import GraphiQLEditor from '../../utils/graphiql/editor'
import queryString, { id } from './get-film-query'
import { GlobalStateContext } from '../../context/GlobalContextProvider'
import { MODE_REST } from '../../constants/modes'

const GetFilm = () => {
  const renderContent = () => {
    const state = useContext(GlobalStateContext)
    if (state.mode == MODE_REST) {
      return <div>Swagger UI REST</div>
    }
    return (
      <GraphiQLEditor query={queryString} variables={`{ "id": "${id}" }`} />
    )
  }

  return (
    <div>
      <div>{renderContent()}</div>
    </div>
  )
}

export default GetFilm
