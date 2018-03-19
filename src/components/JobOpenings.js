import React from 'react'
import Link from 'gatsby-link'

const JobOpenings = ({ careers }) => (
  <div>
    {careers
      .map(post => (
        <div
          className="content"
          style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
          key={post.id}
        >
          <h3>
            <Link className="has-text-primary" to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
          </h3>
          <p>
            {post.excerpt}
            <br />
            <br />
            <Link className="button is-small" to={post.fields.slug}>
              더 보기 →
            </Link>
          </p>
        </div>
      ))}
  </div>
);

export default JobOpenings
