import React from 'react'

const Hero = ({ children, opacity, bgImage = '/img/bg.svg' }) => (
  <div
    className="full-width-image-container margin-top-0"
    style={{ background: `url(${bgImage}) #0e3043` }}
  >
    {children}
    {typeof opacity === 'number' && (
      <div
        style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0, left: 0,
          background: '#FFFFFF',
          opacity,
          zIndex: -1,
        }}
      />
    )}
  </div>
)

export default Hero
