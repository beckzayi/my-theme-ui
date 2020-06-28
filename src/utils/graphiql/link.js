/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const endpoint_graphql = process.env.ENDPOINT_GRAPHQL

export default ({ query, text = 'Open', target = true }) => (
  <Link
    to={`${endpoint_graphql}?query=${encodeURI(query)}`}
    target={target ? '_blank' : '_self'}
    rel="noreferrer"
    sx={{
      variant: 'links.button',
    }}>
    {text}
  </Link>
)
