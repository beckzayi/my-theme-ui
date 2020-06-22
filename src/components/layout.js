/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex, Box } from '@theme-ui/components'
import { AccordionNav } from '@theme-ui/sidenav'
import { Link } from 'gatsby'
import Head from './head'
import SidebarLinks from '../links.mdx'
import NavLink from './nav-links'

export default (props) => {
  return (
    <Styled.root>
      <Head {...props} />
      <Box>
        <header
          sx={{
            display: 'flex',
            alignItems: 'center',
            variant: 'styles.header',
            py: 2,
            px: 1,
          }}>
          <Link to='/'
            sx={{
              variant: 'styles.navlink',
              p: 3,
            }}>
            Home
          </Link>
          <div sx={{ mx: 'auto' }} />
          <Link to='/'
            sx={{
              variant: 'styles.navlink',
              p: 3,
            }}>
            Docs
          </Link>
          <Link to='/'
            sx={{
              variant: 'styles.navlink',
              p: 3,
            }}>
            Development
          </Link>
        </header>
        <Flex
          sx={{
            flexWrap: 'wrap',
            minHeight: '100vh',
          }}>
          <aside
            sx={{
              flexGrow: 1,
              flexBasis: 'sidebar',
              px: 3,
            }}>
            <SidebarLinks
              {...props}
              components={{
                wrapper: AccordionNav,
                a: NavLink,
              }}
            />
          </aside>
          <Flex
            sx={{
              flexGrow: 99999,
              flexBasis: 0,
            }}>
            <main
              sx={{
                minWidth: 320,
                width: '100%',
                maxWidth: 768,
                mx: 'auto',
                px: 3,
              }}>
              {props.children}
            </main>
          </Flex>
        </Flex>
        <footer
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            variant: 'styles.footer',
          }}>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>
            Home
          </Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>
            Docs
          </Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>
            Development
          </Link>
          <div sx={{ p: 2 }}>© 2020 enableHR</div>
        </footer>
      </Box>
    </Styled.root>
  )
}
