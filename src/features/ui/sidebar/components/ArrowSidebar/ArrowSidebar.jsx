import React from 'react'
import { motion } from 'framer-motion'

/**
 * * Returns a DoubleArrow component
 * @param {isOpen} isOpen - represents the state of the sidebar
 * @returns {any} of the DoubleArrow component
 */
const ArrowSidebar = ({ isOpen }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-dropdown h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <motion.path
                animate={{ rotate: isOpen ? 90 : 0 }}
                className={'arrow-dropdown'}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
            />
        </svg>
    )
}

export default ArrowSidebar
