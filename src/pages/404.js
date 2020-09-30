import React from "react"
import { graphql } from "gatsby"

import Background from "../components/Background"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Background>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Background>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
