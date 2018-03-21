import React from 'react'

const Hero = ({ children, style, bgStyle, bgImage = '/img/bg.svg' }) => (
  <div
    className="full-width-image-container margin-top-0"
    style={style}
  >
    {children}
    <div
      style={{
        position: 'absolute',
        top: 0, right: 0, bottom: 0, left: 0,
        background: '#FFFFFF',
        zIndex: -1,
        background: `url(${bgImage}) #0e3043`,
        ...bgStyle,
      }}
    />
  </div>
)

export default Hero
