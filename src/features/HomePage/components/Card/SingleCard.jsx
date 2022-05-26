import React from 'react'
import { Link } from 'react-router-dom'

/**
 * * Returns a single card for every section menu.
 * @param header Is a title of the card.
 * @param description Is a description of the card.
 * @param path Is the URL path when we click on the card.
 * @param extraClass Is an additional class for the card.
 * @returns {Any} of the SIngleCard component.
 */
const SingleCard = ({ title, description, path, extraClass }) => {
    return (
        <div className="mr-8 mt-8 flex h-72 max-h-max max-w-sm flex-col justify-between rounded-lg border-[1px] border-item-stroke bg-gradient-to-b from-main-card-dark-1 to-main-card-dark-2 shadow-item-shadow lg:max-h-64 lg:flex-row 3xl:mr-16">
            <div className="mx-4 px-4 py-7">
                <h1 className="mb-2 font-poppins text-xl font-bold tracking-wide text-white-80 lg:text-2xl">
                    {title}
                </h1>
                <p className="mb-6 font-inter text-sm tracking-wider text-white-65">
                    {description}
                </p>
                <button
                    type="button"
                    className={`${extraClass} rounded-lg border-item-stroke px-4 py-2 shadow-item-shadow transition-all duration-200 ease-in hover:-translate-y-1`}>
                    <Link to={path} className="card-item__link font-bold text-white-100">
                        More
                    </Link>
                </button>
            </div>
            <div
                className={`${extraClass} h-12 w-full rounded-b-lg lg:h-full lg:w-1/2 lg:rounded-b-none lg:rounded-r-lg`}></div>
        </div>
    )
}

export default SingleCard
