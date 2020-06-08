import React from 'react'
import Head from './head'
import Header from './header'
import Footer from './footer'

export default (props) => {
  return (
    <div>
      <Head {...props} />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}
