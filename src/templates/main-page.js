import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import Features from '../components/Features'
import JobOpenings from '../components/JobOpenings'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import logo from '../img/logo.svg'

export const MainPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  sections: [section1],
  testimonials,
  fullImage,
  pricing,
  products,
  careers,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <Hero>
              <img src={logo} />
            </Hero>
            <div className="columns">
              <div className="column is-7">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p className="desc">{description}</p>
              </div>
            </div>
            <h1 className="has-text-weight-bold is-size-2">
              {section1.heading}
            </h1>
            <div className="columns is-multiline">
              {products.map(product => (
                <div key={product.id} className="column is-6">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4y3">
                        <Link to={product.fields.slug}>
                          <img src={product.frontmatter.image} alt="Placeholder image" />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">
                            <Link to={product.fields.slug} className="has-text-primary">
                              {product.frontmatter.title}
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="content">
                        {product.frontmatter.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h1 className="has-text-weight-bold is-size-2">
              진행 중인 채용 공고
            </h1>
            <JobOpenings careers={careers} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ({ data }) => {
  const products = data.products.edges.map(edge => edge.node)
  const careers = data.careers.edges.map(edge => edge.node)
  const { frontmatter } = data.markdownRemark

  return (
    <MainPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      sections={frontmatter.sections}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
      products={products}
      careers={careers}
    />
  )
}

export const mainPageQuery = graphql`
  query MainPage($id: String!) {
    products: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "product" } } },
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            image
            templateKey
          }
        }
      }
    }
    careers: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "career-post" } } },
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
        }
        sections {
          heading
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
