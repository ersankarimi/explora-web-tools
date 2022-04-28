import React from 'react'
import { Link } from 'react-router-dom'
import napBoyIlustration from './NapBoyIlustration.svg'
import backIcon from './backIcon.svg'
import { useNavigate } from 'react-router-dom'

/**
 * * Returns a component that renders the page not found page.
 * @returns {JSX.Element} PageNotFound - PageNotFound component
 */
const PageNotFound = () => {
    /**
     * @type {function} navigate - React Router's navigate function to navigate to a page
     */
    const navigate = useNavigate()

    /**
     * @type {function} handleClick - Handles the click event on the back button
     */
    const handleButtonClick = () => {
        navigate('/')
    }
    return (
        <div className="flex h-full flex-col items-center justify-center p-4 md:p-8">
            <img
                src={napBoyIlustration}
                alt="Nap Boy Ilustration"
                className="max-w-[200px] lg:min-w-[280px] lg:max-w-sm"
            />
            <div className="mt-8 text-center">
                <h2 className="font-poppins text-3xl font-bold text-white-100 lg:text-5xl">
                    Take A Nap Bro
                </h2>
                <p className="mt-2 max-w-md font-thin text-white-80 md:px-8 lg:max-w-md lg:text-xl">
                    Sorry. the content you’re looking for doesn’t exist. Either it was removed, or
                    you mistyped the link.
                </p>
                <button
                    type="button"
                    onClick={handleButtonClick}
                    className="group mt-4 w-[150px] py-2 font-poppins text-lg font-medium text-white-100">
                    <div className="flex items-center justify-evenly p-2">
                        <img src={backIcon} className="mb-1 h-[18px] w-[28px]" alt="Back Icon" />
                        <Link to="/">Go Home</Link>
                    </div>
                    <div className="m-auto h-[2px] w-[25%] rounded-lg bg-white-100 duration-200 ease-out group-hover:w-[100%]"></div>
                </button>
            </div>
        </div>
    )
}

export default PageNotFound
