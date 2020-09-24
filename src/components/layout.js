/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex, Box } from '@theme-ui/components'
import { AccordionNav } from '@theme-ui/sidenav'
import { Link } from 'gatsby'
import Head from './head'
import Header from './header'
import Footer from './footer'
import SidebarLinks from '../links.mdx'
import NavLink from './nav-links'
import ModeSwitch from './mode-switch'

export default (props) => {
  return (
    <Styled.root>
      <Head {...props} />
      <Box>
        <Header />
        <Flex
          sx={{
            flexWrap: 'wrap',
            minHeight: '100vh',
            my: 3,
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
                maxWidth: 960,
                mx: 'auto',
                px: 3,
              }}>
              <div>
                <ModeSwitch />
              </div>
              {props.children}
            </main>
          </Flex>
        </Flex>
        <Footer />
      </Box>
    </Styled.root>
  )
}
