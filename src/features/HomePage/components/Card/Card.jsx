import React from 'react'
import './Card.style.css'
import { cardData } from './Card.data'
import SingleCard from './SingleCard'

/**
 *  * Returns an element thet contains all the cards we have using the <SingleCard/> component.
 * @returns {any} of the Card component.
 */
const Card = () => {
    return (
        <div className="card">
            {cardData.map((item, i) => {
                return <SingleCard {...item} key={i} />
            })}
        </div>
    )
}

export default Card
