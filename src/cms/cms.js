import CMS from 'netlify-cms'

import stylesURL from '!file-loader?name=[hash].css!sass-loader!../layouts/all.sass'
import CareerPostPreview from './preview-templates/CareerPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle(stylesURL)
CMS.registerPreviewTemplate('main', ProductPagePreview)
CMS.registerPreviewTemplate('product', ProductPagePreview)
CMS.registerPreviewTemplate('career', CareerPostPreview)
