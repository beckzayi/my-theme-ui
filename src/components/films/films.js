import React from 'react'
import GraphiQLEditor from '../../utils/graphiql/editor'
import queryString from './films-query'

class Films extends React.Component {
  renderContent() {
    return <GraphiQLEditor query={queryString} variables={null} />
  }

  render() {
    return (
      <div>
        <div>{this.renderContent()}</div>
      </div>
    )
  }
}

export default Films
