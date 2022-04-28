import React from 'react'
import { motion } from 'framer-motion'
import { useSidebar } from '@hooks'
import doubleArrow from './doubleArrow.svg'

/**
 * * Returns a Navbar component.
 * @returns {any} of the Navbar components.
 */

const Navbar = () => {
    /**
     * @constant
     * @type {boolean} represents the state of the sidebar
     * @default true when the viewport is greater than 639px
     *
     * @constant
     * @type {function} represents the function to toggle the sidebar
     */
    const [sidebarIsOpen, toggleSidebar] = useSidebar()

    /**
     * @constant
     * @type {object} represents the motion object
     * @default motion object
     */
    // variants motion for double arrow
    const variants = {
        notOpen: {
            x: [10, -50, 0],
            rotate: 180
        },
        open: {
            x: [-10, 50, 0],
            rotate: 360
        }
    }

    return (
        <header className="sticky top-0 z-30 flex min-w-full items-center bg-gradient-to-b from-main-bg-dark-1 to-main-bg-dark-1/50 p-4 py-4 text-white shadow-header-shadow backdrop-blur-sm lg:px-8">
            <motion.img
                variants={variants}
                animate={sidebarIsOpen ? 'open' : 'notOpen'}
                transition={{
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 50
                }}
                src={doubleArrow}
                className="h-6 w-6 cursor-pointer md:h-8 md:w-8 xl:h-8 xl:w-16"
                alt="logo"
                onClick={toggleSidebar}
            />
        </header>
    )
}

export default Navbar
