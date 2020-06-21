/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex, Box } from '@theme-ui/components'
import { AccordionNav } from '@theme-ui/sidenav'
import Head from './head'
import SidebarLinks from '../links.mdx'
import NavLink from './nav-links'

export default (props) => {
  return (
    <Styled.root>
      <Head {...props} />
      <div>
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
      </div>
    </Styled.root>
  )
}
