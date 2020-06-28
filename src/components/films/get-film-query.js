const query = `query ($id: ID!){
  Film(id: $id) {
    id
    title
    createdAt
    director
  }
}`

export default query
