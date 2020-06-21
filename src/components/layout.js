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
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
        <Flex
          as="header"
          sx={{
            px: 3,
          }}>
          <SidebarLinks
            {...props}
            components={{
              wrapper: AccordionNav,
              a: NavLink,
            }}
          />
        </Flex>
        <Box
          sx={{
            flex: '1 1 auto',
          }}>
          <div
            sx={{
              display: ['block', 'flex'],
            }}>
            <main
              id="content"
              sx={{
                width: '100%',
                minWidth: 0,
                maxWidth: 768,
                mx: 'auto',
                px: 3,
              }}>
              {props.children}
            </main>
          </div>
        </Box>
      </Flex>
    </Styled.root>
  )
}
