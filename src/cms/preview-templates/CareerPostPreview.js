import React from 'react'
import { CareerPostTemplate } from '../../templates/career-post'

const CareerPostPreview = ({ entry, widgetFor }) => (
  <CareerPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default CareerPostPreview
