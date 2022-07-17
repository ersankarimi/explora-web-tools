import React from 'react'
import { useParams } from 'react-router-dom'
import { UnderConstructions } from '@features/ui'
import { RelativeLengthUnits, CssBoxShadow } from '@features/Content'

/**
 * * Returns a component that renders the content of the section.
 * @returns {JSX.Element} CssContent - JSX Element of the CSS Content Routes .
 */
const CssContent = () => {
  /**
   * @constant
   * @type {String} section - the current section pathname from the url params object
   */
  const { section } = useParams()
  switch (section) {
    case 'relativelengthunits':
      return <RelativeLengthUnits />
    case 'cssboxshadow':
      return <CssBoxShadow />
    default:
      return <UnderConstructions />
  }
}

export default CssContent
