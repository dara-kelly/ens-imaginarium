import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export default function Template({data}) {
  const {markdownRemark: post } = data
  return (
    <div className="blog-post-container">
      <Helmet title={`Dara Kelly's blog - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div 
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
          </div>
  )
        }
export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eqe: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
`
