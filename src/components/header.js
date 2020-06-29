/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default () => (
  <header
    sx={{
      display: 'flex',
      alignItems: 'center',
      px: 1,
      py: 1,
      bg: 'primary',
    }}>
    <Link
      to="/"
      sx={{
        variant: 'styles.headerlink',
        p: 3,
      }}>
      <img src="/images/logo.svg" title="enableHR" alt="enableHR" />
    </Link>
    <div sx={{ mx: 'auto' }} />
    <Link
      to="/"
      sx={{
        variant: 'styles.headerlink',
        p: 3,
      }}>
      Docs
    </Link>
    <Link
      to="/"
      sx={{
        variant: 'styles.headerlink',
        p: 3,
      }}>
      Development
    </Link>
  </header>
)
