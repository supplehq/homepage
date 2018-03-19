import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children, data }) => {
  const products = data.allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <div>
      <Helmet>
        <title>Supple</title>
        <link rel="icon" href="/img/favicon.png" />
      </Helmet>
      <Navbar products={products} />
      {children()}
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const layoutQuery = graphql`
  query Layout {
    allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "product" } } },
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            is_new
          }
        }
      }
    }
  }
`
