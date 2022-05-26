import React from 'react'
import { motion } from 'framer-motion'
import arrow from './arrow.svg'

/**
 * * Returns a DoubleArrow component
 * @param {isOpen} isOpen - represents the state of the sidebar
 * @returns {Any} of the DoubleArrow component
 */
const DropdownArrow = ({ isOpen }) => {
    return (
        <motion.img
            className="arrow-dropdown h-6 w-6 cursor-pointer"
            src={arrow}
            alt="Dropdown Arrow Icon"
            animate={{ rotate: isOpen ? 90 : 0 }}
        />
    )
}

export default DropdownArrow
