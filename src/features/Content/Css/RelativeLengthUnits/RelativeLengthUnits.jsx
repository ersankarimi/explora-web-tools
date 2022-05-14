import React from 'react'
import { InputOutputForm, Dropdown } from './components'

/**
 * * Returns a component that renders the content of the Relative Length Units content.
 * @returns {JSX.Element} RelativeLengthUnits - JSX Element of the Relative Length Units Content Routes .
 */
const RelativeLengthUnits = () => {
    return (
        <>
            <h1 className="mt-4 mb-8 text-center font-poppins text-2xl font-extrabold tracking-wide text-white-100 lg:text-4xl">
                Relative Length Units
            </h1>
            <InputOutputForm />
            {/* <Dropdown /> */}
        </>
    )
}

export default RelativeLengthUnits
