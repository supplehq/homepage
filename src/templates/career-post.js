import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const CareerPostTemplate = ({
  careersURL,
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Link className="button is-smll is-primary" to={careersURL}>
              채용 홈페이지로
            </Link>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { common, markdownRemark: post } = data

  return (
    <CareerPostTemplate
      careersURL={common.fields.slug}
      content={[post.html, common.html].join('\n')}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet 
          title={`Careers | ${post.frontmatter.title}`} 
          meta={[
            { property: 'og:title', content: post.frontmatter.title },
            { property: 'og:type', content: "website" },
            { property: 'og:description', content: post.frontmatter.description },
          ]}
        />
      }
      title={post.frontmatter.title}
    />
  )
}

export const pageQuery = graphql`
  query CareerPostByID($id: String!) {
    common: markdownRemark(frontmatter: { templateKey: { eq: "careers-page" } }) {
      id
      html
      fields {
        slug
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
