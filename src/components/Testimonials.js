import React from 'react'

export default ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article key={testimonial.author} className="media">
        <figure className="media-left">
          <p class="image is-64x64">
            <img src={testimonial.image} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            {testimonial.quote}
            <cite> – {testimonial.author}</cite>
          </div>
        </div>
      </article>
    ))}
  </div>
)
