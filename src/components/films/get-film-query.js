const query = `query ($id: ID!){
  Film(id: $id) {
    id
    title
    createdAt
    director
  }
}`

export default query

export const id = 'cj0nxmy3fga5s01148gf8iy3c'
