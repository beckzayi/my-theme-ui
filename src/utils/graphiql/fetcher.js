const endpoint_graphql = process.env.ENDPOINT_GRAPHQL

const graphQLFetcher = (graphQLParams) => {
  return fetch(endpoint_graphql, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then((res) => res.json())
}

export default graphQLFetcher
