/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex, Box } from '@theme-ui/components'
import Head from './head'
import Header from './header'
import Footer from './footer'

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
            height: 64,
            px: 3,
          }}>
          <Header />
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
            <Footer />
          </div>
        </Box>
      </Flex>
    </Styled.root>
  )
}
