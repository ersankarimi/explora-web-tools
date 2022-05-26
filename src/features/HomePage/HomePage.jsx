import React from 'react'
import { Header } from './components'
import { Card } from './components'

/**
 * * Returns the Homepage component.
 * @returns {Any} of the HomePage component.
 */
const Homepage = () => {
    return (
        <div className="home 3xl:flex 3xl:flex-col 3xl:items-center 3xl:justify-center">
            <Header />
            <Card />
        </div>
    )
}

export default Homepage
