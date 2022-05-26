import React from 'react'
import { useDataContent } from '@hooks'
import SingleCard from './SingleCard'

/**
 *  * Returns an element thet contains all the cards we have using the <SingleCard/> component.
 * @returns {Any} of the Card component.
 */
const Card = () => {
    const dataContent = useDataContent()
    return (
        <div className="mt-16 flex flex-col flex-wrap items-center justify-center lg:flex-row lg:justify-start">
            {dataContent.map((item, i) => {
                return <SingleCard {...item} key={i} />
            })}
        </div>
    )
}

export default Card
