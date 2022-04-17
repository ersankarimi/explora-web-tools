import React from 'react'
import './Header.style.css'
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
        <div className="home__header">
            <h1 className="home__header-title">{title}</h1>
            <p className="home__header-paragraph">{description}</p>
        </div>
    )
}

export default Header
