import React from 'react'
import './Card.style.css'
import { useDataContent } from '@hooks'
import SingleCard from './SingleCard'

/**
 *  * Returns an element thet contains all the cards we have using the <SingleCard/> component.
 * @returns {any} of the Card component.
 */
const Card = () => {
    const dataContent = useDataContent()
    return (
        <div className="card">
            {dataContent.map((item, i) => {
                return <SingleCard {...item} key={i} />
            })}
        </div>
    )
}

export default Card
