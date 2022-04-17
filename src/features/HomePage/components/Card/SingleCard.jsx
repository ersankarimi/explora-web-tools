import React from 'react'
import { Link } from 'react-router-dom'
import './SingleCard.style.css'

/**
 * * Returns a single card for every section menu.
 * @param header Is a title of the card.
 * @param description Is a description of the card.
 * @param path Is the URL path when we click on the card.
 * @param extraClass Is an additional class for the card.
 * @returns {any} of the SIngleCard component.
 */
const SingleCard = ({ header, description, path, extraClass }) => {
    return (
        <div className="card-item">
            <div className="card-item__text">
                <h1 className="card-item__header">{header}</h1>
                <p className="card-item__description mb-4">{description}</p>
                <button type="button" className={`btn-card ${extraClass}`}>
                    <Link to={path} className="card-item__link">
                        More
                    </Link>
                </button>
            </div>
            <div className={`card-item__accent ${extraClass}`}></div>
        </div>
    )
}

export default SingleCard
