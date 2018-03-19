import React from 'react'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-6">
        <section className="section">
          <figure class="image is-4by">
            <div style={{
              background: 'no-repeat center',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'auto 100%',
              height: 300,
            }}></div>
          </figure>
          <p>
            <h4>{item.title}</h4>
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

export default FeatureGrid
