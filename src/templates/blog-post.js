import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"

const BackgroundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, #f1f1f1 11px, transparent 1%) 50%,
    linear-gradient(#f1f1f1 11px, transparent 1%) 50%, #e9e9e9;
  background-size: 15px 15px;
`

const LayoutBox = styled.div`
  box-sizing: border-box;
  height: 90vh;
  width: 600px;
  background: #fff;
  overflow: scroll;
  box-shadow: 0 0 100px 25px rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
  }
`

const MainBox = styled.div`
  padding: 1.5rem;
`

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <BackgroundBox>
      <LayoutBox>
        <MainBox>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </article>
        </MainBox>
      </LayoutBox>
    </BackgroundBox>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
