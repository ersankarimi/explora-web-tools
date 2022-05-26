import React from 'react'
import { AlertIcon } from './components/'

/**
 * * Returns the UnderConstruction component and rendered when the content is not available.
 * @returns {JSX.Element} AlertIcon - JSX Element of the AlertIcon component.
 */
const UnderConstructions = () => {
    return (
        <div className="under-construction flex h-full flex-col items-center justify-center">
            <div className="under-construction_icon">
                <AlertIcon />
            </div>
            <div className="under-construction_message  max-w-xs">
                <h2 className="text-center font-poppins text-xl font-extrabold text-white-100 lg:text-3xl">
                    This site is still under construction
                </h2>
            </div>
        </div>
    )
}

export default UnderConstructions
