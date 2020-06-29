import React from 'react'
import { Helmet } from 'react-helmet'

import useSiteMetadata from '../hooks/use-site-metadata'

export default (props) => {
  const { description, title: siteTitle } = useSiteMetadata()
  const title = [
    props.title,
    props.pageContext.frontmatter ? props.pageContext.frontmatter.title : false,
    props._frontmatter ? props._frontmatter.title : false,
    siteTitle,
  ]
    .filter(Boolean)
    .join(' – ')

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Helmet>
  )
}
