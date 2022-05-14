import React from 'react'
import { headerData } from './Header.data'

/**
 * * Returns a header component for the main content section
 * @returns {any} component of header
 */
const Header = () => {
    /**
     * @constant
     * @type {string} title - The title of the main content header section
     * @type {string} description - The title for the main content header section
     */
    const { title, description } = headerData

    return (
        <div className="home__header m-auto mt-4 flex flex-col text-center lg:text-left 3xl:max-w-[58%] 3xl:justify-center 3xl:text-center">
            <h1 className="home__header-title mb-3 font-poppins text-3xl font-extrabold text-white-100 xl:text-4xl">
                {title}
            </h1>
            <p className="home__header-paragraph font-inter text-sm text-white-65 lg:text-lg">
                {description}
            </p>
        </div>
    )
}

export default Header
