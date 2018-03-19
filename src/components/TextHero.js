import React from 'react'
import Hero from './Hero'

const TextHero = ({ children, ...other }) => (
  <Hero {...other}>
    <h1
      className="has-text-weight-bold is-size-1 has-bg-primary"
      style={{
        color: 'white',
        padding: '1rem 2rem',
      }}
    >
      {children}
    </h1>
  </Hero>
)

export default TextHero
