/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default () => (
  <div>
    <footer
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        variant: 'styles.footer',
      }}>
      <a
        href="https://www.facebook.com/enableHRAU/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ variant: 'styles.navlink', p: 2 }}>
        <img src="/images/facebook.svg" alt="Facebook" />
      </a>
      <a
        href="https://www.linkedin.com/company/enablehr"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ variant: 'styles.navlink', p: 2 }}>
        <img src="/images/linkedin.svg" alt="Linkedin" />
      </a>
      <a
        href="https://twitter.com/enableHR"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ variant: 'styles.navlink', p: 2 }}>
        <img src="/images/twitter.svg" alt="Twitter" />
      </a>
      <div sx={{ p: 2 }}>© 2020 enableHR &middot; All rights reserved</div>
    </footer>
  </div>
)
