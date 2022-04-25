import React from 'react'
import { useParams } from 'react-router-dom'
import { RelativeLengthUnits } from '@features/Content'
import { UnderConstructions } from '@features/ui'

/**
 * * Returns a component that renders the content of the section.
 * @returns {JSX.Element} CssContent - JSX Element of the CSS Content Routes .
 */
const CssContent = () => {
    /**
     * @constant
     * @type {string} section - the current section pathname from the url params object
     */
    const { section } = useParams()

    switch (section) {
        default:
            return <UnderConstructions />
    }
}

export default CssContent
