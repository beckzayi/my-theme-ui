import React from 'react'
import GraphiQL from 'graphiql'
import graphQLFetcher from './fetcher'
import 'graphiql/graphiql.css'

export default (props) => (
  <div style={{ height: '70vh' }}>
    <GraphiQL fetcher={graphQLFetcher} {...props} />
  </div>
)
