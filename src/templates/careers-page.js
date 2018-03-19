import React from 'react'
import Link from 'gatsby-link'
import TextHero from '../components/TextHero'
import Features from '../components/Features'
import JobOpenings from '../components/JobOpenings'
import Pricing from '../components/Pricing'

export const CareersPageTemplate = ({
  image,
  title,
  heading,
  description,
  sections: [section1, section2],
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
  posts,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <TextHero>
              {title}
            </TextHero>

            <h3 className="has-text-weight-semibold is-size-2">
              {section1.heading}
            </h3>
            <p>{section1.description}</p>

            <h3 className="has-text-weight-semibold is-size-2">
              {section2.heading}
            </h3>

            <div className="columns">
              <div className="column">
                <img src={section2.images[0]} />
              </div>
              <div className="column">
                <img src={section2.images[1]} />
              </div>
            </div>

            <p>{section2.description}</p>

            <h1 className="has-text-weight-bold is-size-2">
              진행 중인 채용 공고
            </h1>
            <JobOpenings careers={posts} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  const { frontmatter } = data.markdownRemark

  return (
    <CareersPageTemplate
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
      posts={posts}
    />
  )
}

export const careersPageQuery = graphql`
  query CareersPage($id: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "career" } } },
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
          heading
          description
        }
        sections {
          heading
          description
          images
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
