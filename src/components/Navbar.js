import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = ({ products }) => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            제품
          </a>
          <div className="navbar-dropdown is-boxed">
            {products.map(product => (
              <Link key={product.id} className="navbar-item" to={product.fields.slug}>
                {product.frontmatter.title}{
                  product.frontmatter.is_new && (
                  <div className="has-bg-primary has-text-centered" style={{
                    marginLeft: 6,
                    color: 'white',
                    display: 'inline-block',
                    padding: '.25em .4em',
                    fontSize: '75%',
                    fontWeight: 700,
                    lineHeight: '1',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'baseline',
                    borderRadius: '.25rem',
                  }}>
                    New
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
        <Link className="navbar-item" to="/careers">
          채용
        </Link>
        <a className="navbar-item" href="https://medium.com/supple" target="_blank">
          블로그
        </a>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default Navbar
