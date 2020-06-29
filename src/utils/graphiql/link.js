/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const endpoint_graphql = process.env.GATSBY_ENDPOINT_GRAPHQL

export default ({
  query,
  text = 'Start Now',
  target = true,
  button = true,
}) => (
  <Link
    to={`${endpoint_graphql}?query=${encodeURI(query)}`}
    target={target ? '_blank' : '_self'}
    rel="noreferrer"
    sx={{
      variant: button ? 'links.button' : null,
    }}>
    {text}
  </Link>
)
