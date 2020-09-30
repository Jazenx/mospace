import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostItem from "../components/PostItem"
import FadeBox from '../styles/FadeBox'

function Posts(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              tag
            }
          }
        }
      }
    `
  )
  const posts = data.allMarkdownRemark.nodes
  return (
    <FadeBox>
      {posts.map(post => (
        <PostItem
          key={post.fields.slug}
          slug={post.fields.slug}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          tag={post.frontmatter.tag}
        />
      ))}
    </FadeBox>
  )
}

export default Posts
