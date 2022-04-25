import React from 'react'
import { Header } from './components'
import { Card } from './components'

/**
 * * Returns the Homepage component.
 * @returns {any} of the HomePage component.
 */
const Homepage = () => {
    return (
        <div className="home">
            <Header />
            <Card />
        </div>
    )
}

export default Homepage
