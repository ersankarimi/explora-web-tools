import React from 'react'
import githubIcon from './githubIcon.svg'

/**
 * * Returns a Footer component.
 * @returns {any} of the Footer component.
 */
const Footer = () => {
    /**
     * * This function handles the click event of the Github icon.
     * @type {Function} handleClickGithubIcon - Handles the click event of the Github icon.
     */

    const handleClickGithubIcon = () => {
        const { open } = window
        open('https://github.com/ersankarimi/explora-web-tools/')
    }

    return (
        <footer
            className={
                'footer flex min-w-full items-center justify-between p-4 font-poppins text-white shadow-item-shadow backdrop-blur-sm lg:py-4 lg:px-10'
            }>
            <h2 className="md:text-md text-sm">Explora web tools © 2022</h2>
            <img
                src={githubIcon}
                alt="Github Icon"
                className="cursor-pointer opacity-60 hover:opacity-100"
                onClick={handleClickGithubIcon}
            />
        </footer>
    )
}

export default Footer
