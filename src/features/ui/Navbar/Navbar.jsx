import React from 'react'
import { DoubleArrow } from './components'
import './Navbar.style.css'

/**
 * * Returns a Navbar component.
 * @returns {any} of the Navbar components.
 */

const Navbar = () => {
    return (
        <header className={'navbar'}>
            <DoubleArrow />
        </header>
    )
}

export default Navbar
