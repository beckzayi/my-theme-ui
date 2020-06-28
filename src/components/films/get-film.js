import React from 'react'
import GraphiQLEditor from '../../utils/graphiql/editor'
import queryString, { id } from './get-film-query'

class GetFilm extends React.Component {
  renderContent() {
    return (
      <GraphiQLEditor query={queryString} variables={`{ "id": "${id}" }`} />
    )
  }

  render() {
    return (
      <div>
        <div>{this.renderContent()}</div>
      </div>
    )
  }
}

export default GetFilm
