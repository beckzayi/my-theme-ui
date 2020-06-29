/** @jsx jsx */
import { jsx, ThemeProvider, Container } from 'theme-ui'

export default (props) => (
  <ThemeProvider
    theme={{
      styles: {
        p: {
          maxWidth: '40em',
          my: 4,
        },
        h1: {
          fontSize: [3, 3, 4],
          letterSpacing: '0',
          my: 3,
        },
        a: {
          variant: 'links.button',
          mr: 3,
          mb: 3,
        },
      },
    }}>
    <div
      sx={{
        pt: 3,
        pb: 3,
      }}>
      <Container>{props.children}</Container>
    </div>
  </ThemeProvider>
)
